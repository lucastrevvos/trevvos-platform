using Serilog;
using Trevvos.Application;
using Trevvos.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

builder.Host.UseSerilog((context, services, configuration) =>
{
    configuration
        .ReadFrom.Configuration(context.Configuration)
        .ReadFrom.Services(services)
        .Enrich.FromLogContext()
        .WriteTo.Console();
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddTrevvosApplication();
builder.Services.AddTrevvosInfrastructure(builder.Configuration);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseSerilogRequestLogging();

app.MapGet("/health", () => Results.Ok(new
{
    status = "Healthy",
    service = "trevvos-api"
}))
.WithName("Health")
.WithTags("System");

app.Run();

public partial class Program;
