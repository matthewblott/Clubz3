namespace Clubz.Services;

using Models;

public interface IClubService
{
  public IEnumerable<Club> All();
  int Create(Club club);
  void Update(Club club);
  void Delete(int id);
}