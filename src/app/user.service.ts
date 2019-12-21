import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  url = 'http://localhost:3000/api/users';
  url2 = 'http://localhost:3000/api/user_id';
  url3 = 'http://localhost:3000/api/results/';

  getUsers(userEmail, userPassword){
    let url = this.url + '?user_name=' + userEmail + '&password=' + userPassword;
    // console.log(url);
    return this.http.get(url);
  }

  getUserById(userId){
    let url2 = this.url2 + "?user_id=" + userId;
    // console.log(url);
    return this.http.get(url2);
  }

  deleteResult(resultId, imageUrl){
    let url3 = this.url3 + resultId + '/' + imageUrl;
    return this.http.delete(url3);
  }
}
