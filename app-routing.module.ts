import { CreateRecordComponent } from './create-record/create-record.component';
import { EditRecordComponent } from './edit-record/edit-record.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordComponent } from './record/record.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: 'login',pathMatch:'full', component: SignInComponent },
  { path: 'records',pathMatch:'full', component: RecordComponent },
  { path: 'create',pathMatch:'full', component: CreateRecordComponent },
  { path: 'Edit',pathMatch:'full', component: EditRecordComponent }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
