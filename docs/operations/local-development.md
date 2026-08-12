# Desenvolvimento Local

Use Bash para os comandos documentados.

```bash
cp .env.example .env
docker compose up -d
dotnet restore
dotnet build
dotnet test
npm ci --prefix src/frontend/trevvos-web
npm run build --prefix src/frontend/trevvos-web
```

Backend:

```bash
dotnet run --project src/backend/Trevvos.Api/Trevvos.Api.csproj
```

Frontend:

```bash
npm start --prefix src/frontend/trevvos-web
```

Health:

```bash
curl http://localhost:5211/health/live
curl http://localhost:5211/health/ready
```
