import { Component, Input, OnInit } from '@angular/core';
import results from '../mock/results.json';
import {SearchService} from 'src/app/services/search.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit { 
  searchTerm : string;
  resultsArray = results;
  selectedTab = 2;
  targetTab = results[this.selectedTab];
  
  constructor(private searchService: SearchService) {  }
    
  ngOnInit(): void {
  	this.searchService.sharedTerm.subscribe(searchTerm => this.searchTerm = searchTerm);
  } 

  changeTab(tab) {
  	this.selectedTab = tab;
  	this.targetTab = results[this.selectedTab];
  }
}
