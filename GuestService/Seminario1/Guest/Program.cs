using Guest.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

var conectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<airbnbContext>(options => {
    options.UseMySql(conectionString, ServerVersion.AutoDetect(conectionString));
});


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
    app.UseSwagger();
    app.UseSwaggerUI();
//}
app.UseCors(builder =>
{
    builder.AllowAnyHeader()
        .AllowAnyOrigin()
        .WithMethods("GET", "POST", "PUT", "DELETE")
        .Build();
});
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
