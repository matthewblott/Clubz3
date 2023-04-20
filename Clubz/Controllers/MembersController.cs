namespace Clubz.Controllers;

using Microsoft.AspNetCore.Mvc;
using Services;

public class MembersController : Controller
{
  private readonly IMemberService _memberService;

  public MembersController(IMemberService memberService) => _memberService = memberService;

  public IActionResult Index(int clubId) => View(_memberService.ByClub(clubId));
}