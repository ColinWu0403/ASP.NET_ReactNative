using System.Diagnostics;
using SimpleWebAppReact.Services;

var builder = WebApplication.CreateBuilder(args);

// Run npm install for the React Native app
RunNpmInstall();

// Add logging configuration
builder.Logging.AddConsole(); // Enable console logging

// Add services to the container.
builder.Services.AddControllers();
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

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<MongoDbService>();

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

// This doesn't work, can't build React Native like this lol
// void RunNpmBuild() 
// {
//     var npmCommand = GetNpmCommand();
//     var processInfo = new ProcessStartInfo
//     {
//         FileName = npmCommand,
//         Arguments = "run build",
//         WorkingDirectory = Path.Combine(Directory.GetCurrentDirectory(), "ClientApp"),
//         RedirectStandardOutput = true,
//         RedirectStandardError = true,
//         UseShellExecute = false,
//         CreateNoWindow = true
//     };

//     RunProcess(processInfo);
// }

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