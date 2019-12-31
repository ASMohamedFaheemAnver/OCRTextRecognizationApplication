import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationStrategy } from '@angular/common';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  url = 'http://localhost:3000/api/users';
  user = {
    user_name: '',
    password: ''
  }
  isUserExist = false;
  isSuccessed = false;

  constructor(private http: HttpClient) { 
    
  }

  

  onLoginSubmit(userData) {
    this.user.user_name = userData['email'];
    this.user.password = userData['password'];
    if(this.user.user_name&&this.user.password){
      this.http.post(this.url, this.user).subscribe(
        ()=>{this.isUserExist = false;
          this.isSuccessed = true;
        },
        error=>{
          this.isUserExist = true;
          this.isSuccessed = false;
        }
      );
    }
  }

}