namespace Clubz.Controllers;

using Microsoft.AspNetCore.Mvc;

using Models;
using Services;

public class ClubsController : Controller
{
  private readonly IClubService _clubService;

  public ClubsController(IClubService clubService) => _clubService = clubService;
  public IEnumerable<Club> Get() => _clubService.All();
  
  public IActionResult Index() => View(_clubService.All());
}

[ApiController]
[Route("/api/clubs")]
public class ApiClubsController : ControllerBase
{
  private readonly IClubService _clubService;

  public ApiClubsController(IClubService clubService) => _clubService = clubService;

  [HttpPost]
  public JsonResult Post(Club club) => new(_clubService.Create(club));

  [HttpPut]
  public void Put(Club club) => _clubService.Update(club);

  [HttpDelete]
  public void Delete(int id) => _clubService.Delete(id);

}