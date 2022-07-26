import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [

  {path:'login',component:LoginComponent},

];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)

  ]
})
export class LoginModule { }
