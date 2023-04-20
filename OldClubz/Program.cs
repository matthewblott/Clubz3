using Clubz.Domain;
using Clubz.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddDbContext<ClubzContext>(options => options.UseSqlite(connectionString));
builder.Services.AddDbContext<ClubzContext>(options => options.UseSqlServer(connectionString));
builder.Services.AddScoped<IClubzContext>(provider => provider.GetRequiredService<ClubzContext>());
builder.Services.AddScoped<IClubService, ClubService>();
builder.Services.AddScoped<IMemberService, MemberService>();

var app = builder.Build();

app.MapControllers();
app.UseDefaultFiles();
app.UseStaticFiles();

app.Run();