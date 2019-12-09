import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router : Router, private http : HttpClient){}
  url = 'http://localhost:8080/users/';
  userName = 'jstrfaheem065@gmail.com';
  password = '*74362@?';

  onLoginSubmit(userData : FormData){
    this.http.get(this.url).subscribe(res=>{
      console.log(res);
    });
    // console.log(userData['email']);
    //if(this.userName==userData['email']&&this.password==userData['password']){
      //this.router.navigateByUrl('home-page');
    //}
  }

}
