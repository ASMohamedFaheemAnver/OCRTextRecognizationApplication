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
    username: 'jstrfaheem065@gmail.com',
    password: '*74362@?'
  }
  constructor(private http: HttpClient) { }

  onLoginSubmit(userData) {
    this.user.username = userData['email'];
    this.user.password = userData['password'];
    this.http.post(this.url, this.user).subscribe();
  }

}
