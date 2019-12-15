import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  url = 'http://localhost:3000/api/users';

  getUsers(userEmail, userPassword){
    let url = this.url + '?user_name=' + userEmail + '&password=' + userPassword;
    // console.log(url);
    return this.http.get(url);
  }
}
