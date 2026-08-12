using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using Trevvos.Api.Data;
using Trevvos.Api.Health;
using Trevvos.Api.Middleware;
using Trevvos.Api.Options;

var builder = WebApplication.CreateBuilder(args);

builder.Logging.ClearProviders();
builder.Logging.AddJsonConsole();

builder.Services.AddProblemDetails();

builder.Services.Configure<DatabaseOptions>(
    builder.Configuration.GetSection(DatabaseOptions.SectionName));

builder.Services.AddDbContext<TrevvosDbContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("TrevvosDb")
        ?? builder.Configuration["Database:ConnectionString"];

    if (!string.IsNullOrWhiteSpace(connectionString))
    {
        options.UseNpgsql(connectionString);
    }
});

builder.Services
    .AddHealthChecks()
    .AddCheck("self", () => HealthCheckResult.Healthy(), tags: ["live"])
    .AddCheck<PostgresHealthCheck>("postgresql", tags: ["ready"]);

builder.Services.AddCors(options =>
{
    options.AddPolicy("DevelopmentWebClient", policy =>
    {
        policy
            .WithOrigins(
                "http://localhost:4200",
                "https://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseForwardedHeaders(new ForwardedHeadersOptions
{
    ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
});

app.UseMiddleware<CorrelationIdMiddleware>();

app.UseExceptionHandler(exceptionApp =>
{
    exceptionApp.Run(async context =>
    {
        var exception = context.Features.Get<IExceptionHandlerFeature>()?.Error;
        var logger = context.RequestServices.GetRequiredService<ILogger<Program>>();
        logger.LogError(exception, "Unhandled exception");

        context.Response.StatusCode = StatusCodes.Status500InternalServerError;
        await Results.Problem(
            title: "Unexpected server error",
            detail: "An unexpected error occurred while processing the request.",
            statusCode: StatusCodes.Status500InternalServerError)
            .ExecuteAsync(context);
    });
});

if (app.Environment.IsDevelopment())
{
    app.MapGet("/openapi/v1.json", () => Results.Json(new
    {
        openapi = "3.0.3",
        info = new
        {
            title = "Trevvos API",
            version = "0.0.1-foundation"
        },
        paths = new Dictionary<string, object>
        {
            ["/health/live"] = new
            {
                get = new
                {
                    summary = "Application liveness health check",
                    responses = new Dictionary<string, object>
                    {
                        ["200"] = new { description = "Application is running" }
                    }
                }
            },
            ["/health/ready"] = new
            {
                get = new
                {
                    summary = "Application readiness health check",
                    responses = new Dictionary<string, object>
                    {
                        ["200"] = new { description = "PostgreSQL is available" },
                        ["503"] = new { description = "PostgreSQL is unavailable" }
                    }
                }
            }
        }
    }));

    app.UseCors("DevelopmentWebClient");
}

app.MapGet("/", () => Results.Redirect("/health/live"));

app.MapHealthChecks("/health/live", new HealthCheckOptions
{
    Predicate = registration => registration.Tags.Contains("live")
});

app.MapHealthChecks("/health/ready", new HealthCheckOptions
{
    Predicate = registration => registration.Tags.Contains("ready")
});

app.Run();

public partial class Program;
