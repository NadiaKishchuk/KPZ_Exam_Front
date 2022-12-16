import { UpdateDate } from './../interfaces/UpdateDate';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RecordService } from '../Services/record.service';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {

  public updateForm: FormGroup = new FormGroup({
    newDate: new FormControl(null, [Validators.required])
  });
  constructor(private recordService:RecordService,
    private router: Router,
    private snackbar: MatSnackBar ) { }

  idRecord:number= -1;
  ngOnInit(): void {
    this.idRecord=Number(localStorage.getItem("idRecord"))


  }


  public update(){

    console.log("this.updateForm.controls[].value")
    console.log(this.updateForm.controls["newDate"].value);
    this.recordService.updateDate({id:this.idRecord, newDataTime:this.updateForm.controls["newDate"].value }).subscribe({complete: ()=>{
     
      this.snackbar.open('update successfully', 'Close', {
        duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
      });
      this.router.navigate(['/records']);
      },
     
     error: ()=> this.snackbar.open('update unsuccessfully', 'Close', {
      duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
    })});



  }

}
