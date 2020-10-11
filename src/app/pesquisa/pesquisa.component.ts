import { Component, Input, OnInit } from '@angular/core';
import results from '../mock/results.json';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit { 
  
  resultsArray = results;
  selectedTab = 2;
  targetTab = results[this.selectedTab];
  
  constructor() {  }
    
  ngOnInit(): void {

  } 

  changeTab(tab) {
  	this.selectedTab = tab;
  	this.targetTab = results[this.selectedTab];
  }
  
   
}
