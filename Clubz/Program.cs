using Clubz.Domain;
using Clubz.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddDbContext<ClubzContext>(options => options.UseSqlServer(connectionString));
builder.Services.AddScoped<IClubzContext>(provider => provider.GetRequiredService<ClubzContext>());
builder.Services.AddScoped<IClubService, ClubService>();
builder.Services.AddScoped<IMemberService, MemberService>();
builder.Services.AddControllersWithViews();

var app = builder.Build();

//app.MapControllers();
//app.UseDefaultFiles();
app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(
  name: "default",
  pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();