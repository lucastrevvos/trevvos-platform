using Microsoft.EntityFrameworkCore;

namespace Trevvos.Infrastructure.Persistence;

public sealed class TrevvosDbContext(DbContextOptions<TrevvosDbContext> options) : DbContext(options)
{
}
