import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-card-results',
  templateUrl: './card-results.component.html',
  styleUrls: ['./card-results.component.css']
})
export class CardResultsComponent implements OnInit {
  results: any = []
  constructor(private http: HttpClient,
    private router: ActivatedRoute,
    private routerTwo: Router,
    private service: UserService) { }

  userId = '';

  ngOnInit() {
    this.router.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('userId')) {
        this.userId = paramMap.get('userId');
        // console.log(this.userId);
        this.http.get('http://localhost:3000/api/user_id?user_id=' + this.userId).subscribe(res => {
        }, err => {
          this.routerTwo.navigateByUrl('login-page');
        });
      }
    });
    this.http.get('http://localhost:3000/api/results?user_id=' + this.userId).subscribe(res => {
      this.results = res;
    });
  }

  onDelete(id: String, imageUrl: String) {
    // console.log(id);
    this.service.deleteResult(id, imageUrl.replace('http://localhost:3000/images/', '')).subscribe(res => {
      if (res['message'] == 'SUCCESS!') {
        this.results = this.results.filter((result) => {
          // console.log(result);
          return !result._id.includes(id);
        });
        console.log(this.results);
      }
    });
  }

}
