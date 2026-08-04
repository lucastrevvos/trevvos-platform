namespace Trevvos.IntegrationTests;

public class FoundationConfigurationTests
{
    [Fact]
    public void Repository_HasDockerComposeForPostgres()
    {
        var root = FindRepositoryRoot();
        var composePath = Path.Combine(root, "docker-compose.yml");

        var compose = File.ReadAllText(composePath);

        Assert.Contains("postgres:16-alpine", compose);
        Assert.Contains("trevvos", compose);
    }

    [Fact]
    public void Api_MapsHealthEndpoint()
    {
        var root = FindRepositoryRoot();
        var programPath = Path.Combine(root, "src", "Trevvos.Api", "Program.cs");

        var program = File.ReadAllText(programPath);

        Assert.Contains("MapGet(\"/health\"", program);
    }

    private static string FindRepositoryRoot()
    {
        var directory = new DirectoryInfo(AppContext.BaseDirectory);

        while (directory is not null)
        {
            if (File.Exists(Path.Combine(directory.FullName, "Trevvos.sln")))
            {
                return directory.FullName;
            }

            directory = directory.Parent;
        }

        throw new DirectoryNotFoundException("Could not locate repository root.");
    }
}
