using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Trevvos.Infrastructure.Persistence;

namespace Trevvos.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddTrevvosInfrastructure(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("TrevvosDb");

        if (!string.IsNullOrWhiteSpace(connectionString))
        {
            services.AddDbContext<TrevvosDbContext>(options =>
                options.UseNpgsql(connectionString));
        }

        return services;
    }
}
