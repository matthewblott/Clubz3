namespace Clubz.Services;

using Models;

public interface IMemberService
{
  IEnumerable<Member> ByClub(int clubId);
  int Create(Member member);
  void Update(Member member);
  void Delete(int id);

}