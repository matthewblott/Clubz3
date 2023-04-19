namespace Clubz.Services;

using Domain;
using Models;

public class ClubService : IClubService
{
  private readonly IClubzContext _clubzContext;

  public ClubService(IClubzContext clubzContext) => _clubzContext = clubzContext;

  public IReadOnlyCollection<Club> All() => _clubzContext.Clubs.ToList();


}