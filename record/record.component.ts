import { RecordService } from './../Services/record.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RecordInfo } from '../interfaces/RecordInfo';
@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  IdDoctor:number=-1;
  IdRoom: number=-1;
  records:RecordInfo[]=[]
  constructor(private recordService:RecordService,
    private router: Router,
    private snackbar: MatSnackBar) { }

    public CreateClick(){
      this.router.navigate(['/create']);
    }
  ngOnInit(): void {
  

    this.IdRoom = Number(localStorage.getItem("RoomId"));
    this.IdDoctor = Number(localStorage.getItem("IdDoctor"));

    console.log(localStorage)
    this.recordService.getRoomRecords(this.IdRoom).subscribe({complete: ()=>{
     
      this.snackbar.open('users get successfully', 'Close', {
        duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
      });
      },
      next:(r)=>{this.records= r; console.log(r) },
     error: ()=> this.snackbar.open('users get unsuccessfully', 'Close', {
      duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
    })});



  }

  public  DeleteRecord(id:number):void{
      this.recordService.deleteRecord(id).subscribe({complete: ()=>{
     
        this.snackbar.open('user deleted succsesfully', 'Close', {
          duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
        });
        this.router.navigate(['/records']);
        },
        
      error: ()=> this.snackbar.open('users deleted unsuccessfully', 'Close', {
        duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
      })});
  }
  public  EditRecord(id:number):void{
    localStorage.setItem("idRecord",id.toString());
    this.router.navigate(['/Edit']);
  }

  public addNavigate(){
    this.router.navigate(['/create']);
  }



}
