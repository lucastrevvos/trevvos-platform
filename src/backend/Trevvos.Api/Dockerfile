# .NET 10 LTS for both build and runtime; keep images patched and scan before release.
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src
COPY global.json ./
COPY src/backend/ ./src/backend/
RUN dotnet restore src/backend/Trevvos.Api/Trevvos.Api.csproj
RUN dotnet publish src/backend/Trevvos.Api/Trevvos.Api.csproj \
    --configuration Release --output /app/publish --no-restore -p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime
WORKDIR /app
ENV ASPNETCORE_HTTP_PORTS=8080
EXPOSE 8080
USER $APP_UID
COPY --from=build /app/publish ./
ENTRYPOINT ["dotnet", "Trevvos.Api.dll"]
