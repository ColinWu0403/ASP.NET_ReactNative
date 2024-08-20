using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;
using System.Net.Http;
using System.Threading.Tasks;

namespace Tests
{
    public class ServerTests : IClassFixture<WebApplicationFactory<SimpleWebAppReact.Startup>>
    {
        private readonly WebApplicationFactory<SimpleWebAppReact.Startup> _factory;

        public ServerTests(WebApplicationFactory<SimpleWebAppReact.Startup> factory)
        {
            _factory = factory;
        }

        /// <summary>
        /// Test if the server can start
        /// </summary>
        [Fact]
        public async Task ServerStartsSuccessfully()
        {
            // Arrange
            var client = _factory.CreateClient();

            // Act
            var response = await client.GetAsync("/");

            // Assert
            response.EnsureSuccessStatusCode(); // Status Code 200-299
        }
    }
}