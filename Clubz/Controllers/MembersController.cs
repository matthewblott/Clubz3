using Microsoft.AspNetCore.Mvc;

namespace Clubz.Controllers;

using Models;
using Services;

[ApiController]
[Route("api/[controller]")]
public class MembersController : ControllerBase
{
  private readonly IMemberService _memberService;

  public MembersController(IMemberService memberService) => _memberService = memberService;

  public IEnumerable<Member> Get(int clubId) => _memberService.ByClub(clubId);
  
}