import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card-results',
  templateUrl: './card-results.component.html',
  styleUrls: ['./card-results.component.css']
})
export class CardResultsComponent implements OnInit {
  results : any = []
  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/results').subscribe(res=>{
      this.results = res;
    });
  }

}
