using Microsoft.AspNetCore.Mvc;

namespace SimpleWebAppReact.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MyController : ControllerBase
    {
        [HttpGet("message")] // Define the route for this action
        public IActionResult GetMessage()
        {
            return Ok(new { message = "Hello from ASP.NET Core!" });
        }
    }
}