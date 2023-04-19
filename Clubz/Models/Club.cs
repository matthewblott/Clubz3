namespace Clubz.Models;

using System.Collections.Generic;

public class Club
{
  // public ICollection<Member> Members { get; private set; }
  // // public Club() => Members = new HashSet<Member>();

  // public ICollection<OrderDetail> OrderDetails { get; private set; }
  //
  // public Club Club { get; set; }
  //
  // public Member()
  // {
  //   OrderDetails = new HashSet<OrderDetail>();
  // }

  public int Id { get; set; }
  public string Name { get; set; }
  public string AddressLine1 { get; set; }
  public string PostalTown { get; set; }
  public string Postcode { get; set; }
    
}  