namespace Clubz.Services;

using Models;

public interface IClubService
{
  public IReadOnlyCollection<Club> All();

}