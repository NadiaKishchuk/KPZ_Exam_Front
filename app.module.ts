import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { RecordComponent } from './record/record.component';
import { HttpClientModule } from '@angular/common/http';
import { EditRecordComponent } from './edit-record/edit-record.component';
import { CreateRecordComponent } from './create-record/create-record.component';

@NgModule({
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,ReactiveFormsModule ,
    MatInputModule,MatCardModule,
    HttpClientModule,MatSnackBarModule
  ],
  exports:[
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    SignInComponent,
    RecordComponent,
    MatButtonModule,
  ],declarations: [
    AppComponent,
  
    SignInComponent,
       RecordComponent,
       EditRecordComponent,
       CreateRecordComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
