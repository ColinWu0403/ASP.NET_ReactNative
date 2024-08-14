namespace SimpleWebAppReact;

/// <summary>
/// runs startup commands, builds front end, CORS
/// </summary>
public class Startup
{
    /// <summary>
    /// start up
    /// </summary>
    /// <param name="configuration"></param>
    public Startup(IConfiguration configuration)
    {
    }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddControllers();

        // Configure CORS to allow requests from your React frontend
        services.AddCors(options =>
        {
            options.AddPolicy("AllowAll", builder =>
            {
                 builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            });
        });
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }
        else
        {
            app.UseExceptionHandler("/Error");
            app.UseHsts();
        }

        app.UseHttpsRedirection();
        app.UseRouting();

        app.UseStaticFiles();

        // Enable CORS
        app.UseCors("AllowAll");

        app.UseAuthorization();
        
        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
            endpoints.MapFallbackToFile("/index.html");
        });
    }
}