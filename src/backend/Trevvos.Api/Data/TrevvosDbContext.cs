using Microsoft.EntityFrameworkCore;

namespace Trevvos.Api.Data;

public sealed class TrevvosDbContext(DbContextOptions<TrevvosDbContext> options) : DbContext(options)
{
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasDefaultSchema("trevvos");
        base.OnModelCreating(modelBuilder);
    }
}
