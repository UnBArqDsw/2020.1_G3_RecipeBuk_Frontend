import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {SearchService} from 'src/app/services/search.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit { 
  searchTerm : string;
  resultsArray = [];
  selectedTab = 0;
  targetTab = {results: []};
  
  constructor(private searchService: SearchService, private router: Router, private http: HttpClient) {  }
    
  ngOnInit(): void {
  	this.searchService.sharedTerm.subscribe(searchTerm => {
  		if(searchTerm) {
	  		this.searchTerm = searchTerm;
	  		this.updateResults();
  		}
  	});

  	let q;
  	if((q = this.router.url.match(/\?q=(.*)/)[1])) {
  		this.searchService.nextTerm(q);
  		this.updateResults();
  	}
  } 

  changeTab(tab) {
  	this.selectedTab = tab;
  	this.targetTab = this.resultsArray[this.selectedTab];
  }

  updateResults() {
  	this.http.get(`http://localhost:3000/search?q=${this.searchTerm}`).subscribe(res => {
  		this.resultsArray = res;
  		this.changeTab(0);
  	});
  }
}
