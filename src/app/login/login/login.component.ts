import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router) { }
  LoginForm!:FormGroup
  ngOnInit(): void {
    this.LoginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
    })
  }
login()
{
  if(this.LoginForm.valid)
  {
    if(this.LoginForm.value.username=="Admin" && this.LoginForm.value.password=="admin123" )
    {
           this.router.navigate(['/SubscriberPage/subscriber']);
    }
    else{
      alert(" خطأ،ادخل اسم المستخدم وكلمة السر بشكل صحيح")
    }
  }
}
}
