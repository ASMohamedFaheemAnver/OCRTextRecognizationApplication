import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/user.service';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router : Router, private httpService : UserService, private locationStrategy: LocationStrategy){
    history.pushState(null, null, location.href);
        this.locationStrategy.onPopState(() => {
          history.pushState(null, null, location.href);
        })
  }
  // url = 'http://localhost:8080/users/';
  userData : any = []

  isUserExist = true;

  onLoginSubmit(userFormData : FormData){
    // this.http.get(this.url).subscribe(res=>{
    //   console.log(res);
    // });
    // console.log(userData['email']);
    //if(this.userName==userData['email']&&this.password==userData['password']){
      //this.router.navigateByUrl('home-page');
    //}


    this.httpService.getUsers(userFormData['email'], userFormData['password']).subscribe(res=>{
      if(res){
        this.router.navigateByUrl('home-page/'+res['id']);
      }
    },
    err=>{
      this.isUserExist = false;
      // alert('USER NAME OR PASSWORD IS INCORRECT!');
    });
  }

}
