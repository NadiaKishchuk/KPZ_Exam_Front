import { RecordService } from './../Services/record.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.css']
})
export class CreateRecordComponent implements OnInit {
  CreateNewForm :FormGroup;
  constructor(private recordService:RecordService,
    private router: Router,
    private snackbar: MatSnackBar) { 
    this.CreateNewForm = new FormGroup({
      dateTime: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      doctorId: new FormControl("", [Validators.required]),
      repeatness: new FormControl("", [Validators.required]),
      description: new FormControl("")
      
  })
}
  
  ngOnInit(): void {
  }

  public createNew(){
    if (!this.CreateNewForm.valid) {
      return;
    }
    this.recordService.Add(this.CreateNewForm.value).subscribe(
      {complete: ()=>{
        this.snackbar.open('Adding Successfull', 'Close', {
          duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
        });
        this.router.navigate(['/records'])},
      error: ()=> {this.snackbar.open('Adding Unuccessfull', 'Close', {
        duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
      });
    }
  });

}
}
