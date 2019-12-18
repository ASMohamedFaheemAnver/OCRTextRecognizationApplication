import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-card-results',
  templateUrl: './card-results.component.html',
  styleUrls: ['./card-results.component.css']
})
export class CardResultsComponent implements OnInit {
  results : any = []
  constructor(private http : HttpClient, private router: ActivatedRoute, private routerTwo: Router) { }

  userId = '';

  ngOnInit() {
    this.router.paramMap.subscribe((paramMap: ParamMap)=>{
      if(paramMap.has('userId')){
        this.userId = paramMap.get('userId');
        console.log(this.userId);
        this.http.get('http://localhost:3000/api/user_id?user_id=' + this.userId).subscribe(res=>{
        }, err=>{
          this.routerTwo.navigateByUrl('login-page');
        });
      }
    });
    this.http.get('http://localhost:3000/api/results?user_id=' + this.userId).subscribe(res=>{
      this.results = res;
    });
  }

}
