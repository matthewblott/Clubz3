namespace Clubz.Models;

using System.ComponentModel.DataAnnotations;

public class Club
{
  public int Id { get; set; }
  [Required]
  public string Name { get; set; }
  [Required]
  public string AddressLine1 { get; set; }
  [Required]
  public string PostalTown { get; set; }
  [Required]
  public string Postcode { get; set; }
}  