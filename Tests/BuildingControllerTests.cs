using System.Net;
using System.Net.Http.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;
using SimpleWebAppReact.Entities; // Replace with your actual namespace

/// <summary>
/// Tests for the Building Controller
/// </summary>
public class BuildingControllerTests : IClassFixture<WebApplicationFactory<SimpleWebAppReact.Startup>>
{
    private readonly WebApplicationFactory<SimpleWebAppReact.Startup> _factory;

    public BuildingControllerTests(WebApplicationFactory<SimpleWebAppReact.Startup> factory)
    {
        _factory = factory;
    }
    
    /// <summary>
    /// Tests get all buildings
    /// </summary>
    [Fact]
    public async Task Get_ReturnsBuildings()
    {
        var client = _factory.CreateClient();

        var response = await client.GetAsync("/api/building");

        response.EnsureSuccessStatusCode();
        var buildings = await response.Content.ReadFromJsonAsync<Building[]>();

        Assert.NotEmpty(buildings);
    }

    /// <summary>
    /// Test get ID that exists
    /// </summary>
    [Fact]
    public async Task GetById_ReturnsBuilding_WhenIdIsValid()
    {
        var client = _factory.CreateClient();

        var response = await client.GetAsync("/api/building/66ba8693354b31489f8e95b6");

        response.EnsureSuccessStatusCode();
        var building = await response.Content.ReadFromJsonAsync<Building>();

        Assert.NotNull(building);
        Assert.Equal("66ba8693354b31489f8e95b6", building.Id);
    }

    /// <summary>
    /// Test get ID that doesn't exist
    /// </summary>
    [Fact]
    public async Task GetById_ReturnsNotFound_WhenIdIsInvalid()
    {
        var client = _factory.CreateClient();

        var response = await client.GetAsync("/api/building/invalid-id");

        Assert.Equal(HttpStatusCode.NotFound, response.StatusCode);
    }
}
