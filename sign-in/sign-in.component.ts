import { DoctorInfo } from './../interfaces/DoctorInfo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from '../Services/auth.service'
import { MatSnackBar,MatSnackBarModule } from '@angular/material/snack-bar';
import { SignInDoctorInfo } from '../interfaces/SignIn';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit
 {
  public loginForm: FormGroup = new FormGroup({
    login: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

constructor(
  private authService: AuthService,
  private router: Router,
  private snackbar: MatSnackBar,
 
 
) {this.info={id:1, surname:"", roomId:1,name:"" }; }
ngOnInit(): void {
  localStorage.setItem("IdDoctor",String(1));
  localStorage.setItem("RoomId",String(1));
}
info:DoctorInfo;

login() {
  if (!this.loginForm.valid) {
    return;
  }

  console.log(this.loginForm.value)
  this.authService.login(this.loginForm.value).subscribe(
    {complete: ()=>{
      console.log("complete");
      console.log(this.info);
  
      this.snackbar.open('Login Successfull', 'Close', {
        duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
      });

      console.log(this.info.id);
      console.log(this.info.roomId);
      this.router.navigate(['/records']);
      
    },
     next:(r=>{this.info =r; }) 
    
     
   
   , 
    error: ()=> this.snackbar.open('Login Unsuccessfull', 'Close', {
      duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
    })}
    )
  ;

 
 
}
  

}