import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  url = 'http://localhost:3000/api/users';
  user = {
    user_name: '',
    password: ''
  }
  isUserExist = false;
  isSuccessed = false;
  constructor(private http: HttpClient, private locationStrategy: LocationStrategy) { 
    history.pushState(null, null, location.href);
        this.locationStrategy.onPopState(() => {
          history.pushState(null, null, location.href);
        })
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