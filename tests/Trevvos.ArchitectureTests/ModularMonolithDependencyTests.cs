using System.Reflection;
using Trevvos.SharedKernel.Diagnostics;

namespace Trevvos.ArchitectureTests;

public sealed class ModularMonolithDependencyTests
{
    [Fact]
    public void SharedKernel_must_not_depend_on_api()
    {
        var sharedKernelAssembly = typeof(CorrelationHeaders).Assembly;

        var references = sharedKernelAssembly
            .GetReferencedAssemblies()
            .Select(reference => reference.Name)
            .ToArray();

        Assert.DoesNotContain("Trevvos.Api", references);
    }

    [Fact]
    public void Api_may_depend_on_shared_kernel()
    {
        var apiAssembly = Assembly.Load("Trevvos.Api");

        var references = apiAssembly
            .GetReferencedAssemblies()
            .Select(reference => reference.Name)
            .ToArray();

        Assert.Contains("Trevvos.SharedKernel", references);
    }
}
