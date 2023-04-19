using Clubz.Domain;
using Clubz.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

//connectionString = "Data Source=116.203.141.18,1433;Initial Catalog=Clubs;User ID=sa;Password=KAsKaV5ZKQRB;";
// builder.Services.AddDbContext<ClubzContext>(options =>
//   options.UseSqlServer(connectionString));

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

connectionString = "DataSource=/Users/Matt/Develop/lab/Clubz/db/Clubz.db";

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddDbContext<ClubzContext>(options => options.UseSqlite(connectionString));
builder.Services.AddScoped<IClubzContext>(provider => provider.GetRequiredService<ClubzContext>());
builder.Services.AddScoped<IClubService, ClubService>();
builder.Services.AddScoped<IMemberService, MemberService>();

var app = builder.Build();

app.MapControllers();
app.UseDefaultFiles();
app.UseStaticFiles();

app.Run();