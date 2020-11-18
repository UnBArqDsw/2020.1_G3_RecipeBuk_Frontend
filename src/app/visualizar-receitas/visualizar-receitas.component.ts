import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
//import { ICadastroReceitas } from '../interfaces/cadastro-receitas';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SearchService } from '../services/search.service';

@Component({
    selector: 'app-visualizar-receitas',
    templateUrl: './visualizar-receitas.component.html',
    styleUrls: ['./visualizar-receitas.component.css']
})

export class VisualizarReceitasComponent implements OnInit {
  searchRecipe : string;
  searchIngredient : string;
  searchPreparationMode : string;
  searchTime : string;
  searchYield : string;
  searchCategory : string;
  resultsArray : Object = [];
  selectedTab = 0;
  targetTab = {results: []};

  constructor(private searchService: SearchService, private router: Router, private http: HttpClient, private cdr : ChangeDetectorRef) {
    form: FormGroup;
  }

  //public setFormValue(value: object): void {
    //this.formValue = value;

  ngOnInit(): void {
    this.searchService.sharedTerm.subscribe(searchRecipe => {
  		if(searchRecipe) {
	  		this.searchRecipe = decodeURIComponent(searchRecipe);
	  		this.updateRecipes();
  		}
  	}); 
  }

  changeTab(tab) {
  	this.selectedTab = tab;
  	this.targetTab = this.resultsArray[this.selectedTab];
  }

  updateRecipes() {
  	this.http.get(`${environment.apiUrl}/search?q=${encodeURIComponent(this.searchRecipe)}`).subscribe((res : any[]) => {

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