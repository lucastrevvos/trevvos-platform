using Microsoft.Extensions.DependencyInjection;
using Trevvos.Application;

namespace Trevvos.UnitTests;

public class ApplicationDependencyInjectionTests
{
    [Fact]
    public void AddTrevvosApplication_ReturnsSameServiceCollection()
    {
        var services = new ServiceCollection();

        var result = services.AddTrevvosApplication();

        Assert.Same(services, result);
    }
}
