using Microsoft.AspNetCore.Mvc;

namespace Clubz.Controllers;

using Models;
using Services;

[ApiController]
[Route("api/[controller]")]
public class ClubsController : ControllerBase
{
  private readonly IClubService _clubService;

  public ClubsController(IClubService clubService) => _clubService = clubService;

  public IEnumerable<Club> Get() => _clubService.All();
  
}