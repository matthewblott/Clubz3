namespace Clubz.Controllers;

using Microsoft.AspNetCore.Mvc;
using Models;
using Services;

[ApiController]
[Route("api/[controller]")]
public class ClubsController : ControllerBase
{
  private readonly IClubService _clubService;

  public ClubsController(IClubService clubService) => _clubService = clubService;

  public IEnumerable<Club> Get() => _clubService.All();
  
  [HttpPost]
  public int Post(Club club) => _clubService.Create(club);

  [HttpPut]
  public void Put(Club club) => _clubService.Update(club);
  
  [HttpDelete]
  public void Delete(int id) => _clubService.Delete(id);

}