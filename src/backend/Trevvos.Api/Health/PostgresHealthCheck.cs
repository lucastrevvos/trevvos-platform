using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using Trevvos.Api.Data;

namespace Trevvos.Api.Health;

public sealed class PostgresHealthCheck(
    TrevvosDbContext dbContext,
    IConfiguration configuration) : IHealthCheck
{
    public async Task<HealthCheckResult> CheckHealthAsync(
        HealthCheckContext context,
        CancellationToken cancellationToken = default)
    {
        var connectionString = configuration.GetConnectionString("TrevvosDb")
            ?? configuration["Database:ConnectionString"];

        if (string.IsNullOrWhiteSpace(connectionString))
        {
            return HealthCheckResult.Degraded("PostgreSQL connection string is not configured.");
        }

        try
        {
            await dbContext.Database.OpenConnectionAsync(cancellationToken);
            await dbContext.Database.CloseConnectionAsync();

            return HealthCheckResult.Healthy("PostgreSQL connection is available.");
        }
        catch (Exception exception)
        {
            return HealthCheckResult.Unhealthy("PostgreSQL connection failed.", exception);
        }
    }
}
