namespace Clubz.Models;

public class Member
{
  // public ICollection<OrderDetail> OrderDetails { get; private set; }
    
  // public Club Club { get; set; }
    
  // public Member()
  // {
  //   OrderDetails = new HashSet<OrderDetail>();
  // }

  public int Id { get; set; }
  public int ClubId { get; set; }
  public string Forename { get; set; }
  public string Surname { get; set; }
  public string EmailAddress { get; set; }

}
