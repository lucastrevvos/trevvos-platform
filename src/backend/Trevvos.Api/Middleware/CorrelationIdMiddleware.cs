using Trevvos.SharedKernel.Diagnostics;

namespace Trevvos.Api.Middleware;

public sealed class CorrelationIdMiddleware(RequestDelegate next)
{
    public async Task InvokeAsync(HttpContext context, ILogger<CorrelationIdMiddleware> logger)
    {
        var correlationId = ResolveCorrelationId(context);
        context.Response.Headers[CorrelationHeaders.CorrelationId] = correlationId;

        using (logger.BeginScope(new Dictionary<string, object>
        {
            [CorrelationHeaders.CorrelationId] = correlationId
        }))
        {
            await next(context);
        }
    }

    private static string ResolveCorrelationId(HttpContext context)
    {
        if (context.Request.Headers.TryGetValue(CorrelationHeaders.CorrelationId, out var value)
            && !string.IsNullOrWhiteSpace(value))
        {
            return value.ToString();
        }

        return context.TraceIdentifier;
    }
}
