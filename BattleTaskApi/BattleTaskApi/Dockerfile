FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
COPY ["BattleTaskApi.csproj", "BattleTaskApi/"]
RUN dotnet restore "BattleTaskApi/BattleTaskApi.csproj"
COPY . .
RUN dotnet build "BattleTaskApi/BattleTaskApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BattleTaskApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BattleTaskApi.dll"]
