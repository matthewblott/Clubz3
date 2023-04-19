namespace Clubz.Services;

using Domain;
using Models;

public class MemberService : IMemberService
{
  private readonly IClubzContext _clubzContext;

  public MemberService(IClubzContext clubzContext) => _clubzContext = clubzContext;

  public IReadOnlyCollection<Club> All() => _clubzContext.Clubs.ToList();

  public IReadOnlyCollection<Member> ByClub(int clubId)
    => _clubzContext.Members.Where(m => m.Id == clubId).ToList();

}