using MongoDB.Driver;

namespace SimpleWebAppReact.Services;

public class MongoDbService
{
    private readonly IConfiguration _configuration;
    private readonly IMongoDatabase? _database;
    public MongoDbService(IConfiguration configuration)
    {
        _configuration = configuration;

        var connectionString = _configuration.GetConnectionString("DbConnection");
        var databaseName = _configuration.GetConnectionString("DatabaseName");
        Console.WriteLine("connection information:");
        Console.WriteLine(connectionString);
        Console.WriteLine(databaseName);
        var mongoUrl = MongoUrl.Create(connectionString);
        var mongoClient = new MongoClient(mongoUrl);
        _database = mongoClient.GetDatabase(databaseName);
    }

    public IMongoDatabase? Database => _database;
}