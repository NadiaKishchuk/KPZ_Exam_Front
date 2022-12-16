export interface DoctorInfo{
   /*  public int Id { get; set; }

    [MaxLength(40), Required]
    public string Name { get; set; }

    [MaxLength(40), Required]
    public string Surname { get; set; }

    public int RoomId { get; set; } */

    id:number;
    name:string;
    surname:string;
    roomId:number;
}