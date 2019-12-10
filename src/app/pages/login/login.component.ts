import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router : Router, private httpService : UserService){}
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


    this.httpService.getUsers().subscribe(userData=>{
      this.userData = userData;
      this.userData.forEach(user => {
        if(userFormData['email']==user['username']&&
          userFormData['password']==user['password']){
            console.log("SUCCESSED");
            this.router.navigateByUrl('home-page');
            this.isUserExist = true; 
        }else{
          this.isUserExist = false;
        }
      });
    });
  }

}
