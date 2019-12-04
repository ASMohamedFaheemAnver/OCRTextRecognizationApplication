import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName = 'jstrfaheem065@gmail.com';
  password = '*74362@?';

  onLoginSubmit(userData : FormData){
    console.log(userData);
  }

}
