namespace Clubz.Models;

using System.ComponentModel.DataAnnotations;

public class Member
{
  public int Id { get; set; }
  public int ClubId { get; set; }
  [Required]
  public string Forename { get; set; }
  [Required]
  public string Surname { get; set; }
  [Required]
  public string EmailAddress { get; set; }

}
