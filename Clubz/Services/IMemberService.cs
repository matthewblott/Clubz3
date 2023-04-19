namespace Clubz.Services;

using Models;

public interface IMemberService
{
  IReadOnlyCollection<Member> ByClub(int clubId);
  
}