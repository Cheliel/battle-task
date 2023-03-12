FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 5000

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["BattleTaskApi.csproj", "."]
RUN dotnet restore "./BattleTaskApi.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "BattleTaskApi.csproj" -o /app/build

FROM build AS publish
RUN dotnet publish "BattleTaskApi.csproj" -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BattleTaskApi.dll"]
