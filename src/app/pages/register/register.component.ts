import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  url = 'http://localhost:8080/users';
  user = {
    username: '',
    password: ''
  }
  isUserExist = false;
  isSuccessed = false;
  constructor(private http: HttpClient) { }

  onLoginSubmit(userData) {
    this.user.username = userData['email'];
    this.user.password = userData['password'];
    if(this.user.username&&this.user.password){
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