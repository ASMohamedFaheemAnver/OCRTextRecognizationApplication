import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router : Router){}

  userName = 'jstrfaheem065@gmail.com';
  password = '*74362@?';

  onLoginSubmit(userData : FormData){
    // console.log(userData['email']);
    //if(this.userName==userData['email']&&this.password==userData['password']){
      this.router.navigateByUrl('home-page');
    //}
  }

}
