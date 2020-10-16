import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {SearchService} from 'src/app/services/search.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit { 
  searchTerm : string;
  resultsArray : Object = [];
  selectedTab = 0;
  targetTab = {results: []};
  
  constructor(private searchService: SearchService, private router: Router, private http: HttpClient, private cdr : ChangeDetectorRef) {  }
    
  ngOnInit(): void {
  	this.searchService.sharedTerm.subscribe(searchTerm => {
  		if(searchTerm) {
	  		this.searchTerm = decodeURIComponent(searchTerm);
	  		this.updateResults();
  		}
  	});

  	let q;
  	if((q = this.router.url.match(/\?q=(.*)/)[1])) {
  		this.searchService.nextTerm(q);
  	}
  } 

  changeTab(tab) {
  	this.selectedTab = tab;
  	this.targetTab = this.resultsArray[this.selectedTab];
  }

  updateResults() {
  	this.http.get(`${environment.apiUrl}/search?q=${encodeURIComponent(this.searchTerm)}`).subscribe((res : any[]) => {

  		this.resultsArray = res.filter((result) => {
  			return !result.error;
  		}).sort((a, b) => {
  			if(a.name > b.name)
  				return 1;
  			return -1;
  		});

  		this.changeTab(0);
  	});
  }
}
