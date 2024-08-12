using System.Diagnostics;
using SimpleWebAppReact.Services;

var builder = WebApplication.CreateBuilder(args);

// Run npm install and npm run build to build the React app
RunNpmInstall();
RunNpmBuild();

// Add logging configuration
builder.Logging.AddConsole(); // Enable console logging

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<MongoDbService>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseHsts();
}

// Configure logging
var logger = app.Services.GetRequiredService<ILogger<Program>>();
logger.LogInformation("Application started.");

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors("AllowAll"); // Enable CORS

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
    endpoints.MapFallbackToFile("/index.html"); // This will serve index.html for any routes not handled by the controller
});
app.UseSwagger();
app.UseSwaggerUI();
app.Run();

void RunNpmInstall()
{
    var npmCommand = GetNpmCommand();
    var processInfo = new ProcessStartInfo
    {
        FileName = npmCommand,
        Arguments = "install",
        WorkingDirectory = Path.Combine(Directory.GetCurrentDirectory(), "ClientApp"),
        RedirectStandardOutput = true,
        RedirectStandardError = true,
        UseShellExecute = false,
        CreateNoWindow = true
    };

    RunProcess(processInfo);
}

void RunNpmBuild()
{
    var npmCommand = GetNpmCommand();
    var processInfo = new ProcessStartInfo
    {
        FileName = npmCommand,
        Arguments = "run build",
        WorkingDirectory = Path.Combine(Directory.GetCurrentDirectory(), "ClientApp"),
        RedirectStandardOutput = true,
        RedirectStandardError = true,
        UseShellExecute = false,
        CreateNoWindow = true
    };

    RunProcess(processInfo);
}

string GetNpmCommand()
{
    return OperatingSystem.IsWindows() ? "npm.cmd" : "npm";
}

void RunProcess(ProcessStartInfo processInfo)
{
    using var process = new Process { StartInfo = processInfo };
    process.OutputDataReceived += (sender, e) => Console.WriteLine(e.Data);
    process.ErrorDataReceived += (sender, e) => Console.WriteLine(e.Data);

    process.Start();
    process.BeginOutputReadLine();
    process.BeginErrorReadLine();
    process.WaitForExit();
}