using Microsoft.AspNetCore.Mvc;
using SimpleWebAppReact.Entities;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using SimpleWebAppReact.Services;

namespace SimpleWebAppReact.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BuildingController : ControllerBase
    {
        private readonly ILogger<BuildingController> _logger;
        private readonly IMongoCollection<Building>? _buildings;

        public BuildingController(ILogger<BuildingController> logger, MongoDbService mongoDbService)
        {
            _logger = logger;
            _buildings = mongoDbService.Database?.GetCollection<Building>("building");
        }

        [HttpGet] // Define the route for this action
        public async Task<IEnumerable<Building>> Get()
        {
            return await _buildings.Find(FilterDefinition<Building>.Empty).ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Building?>> GetById(string id)
        {
            var filter = Builders<Building>.Filter.Eq(x => x.Id, id);
            var building = _buildings.Find(filter).FirstOrDefault();
            return building is not null ? Ok(building) : NotFound();
        }

        [HttpPost]
        public async Task<ActionResult> Post(Building building)
        {
            await _buildings.InsertOneAsync(building);
            return CreatedAtAction(nameof(GetById), new { id = building.Id }, building);
            
        }

        [HttpPut]
        public async Task<ActionResult> Update(Building building)
        {
            var filter = Builders<Building>.Filter.Eq(x => x.Id, building.Id);
            await _buildings.ReplaceOneAsync(filter, building);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            var filter = Builders<Building>.Filter.Eq(x => x.Id, id);
            await _buildings.DeleteOneAsync(filter);
            return Ok();
        }
    }
}

