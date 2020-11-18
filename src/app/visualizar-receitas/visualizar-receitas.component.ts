<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
=======
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AccountService } from 'src/app/services';
import { Recipe } from 'src/app/models/recipe'
import { Ingredients } from 'src/app/models/ingredients';
>>>>>>> 2838643b32bab28dbbc1b740bc7396f6c622317d
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
<<<<<<< HEAD
  resultsArray : Object = [];
  selectedTab = 0;
  targetTab = {results: []};

  constructor(private searchService: SearchService, private router: Router, private http: HttpClient, private cdr : ChangeDetectorRef) {
=======
  recipe: Recipe;
  loggedIn : boolean;

  constructor(private http : HttpClient, private accountService : AccountService) {
>>>>>>> 2838643b32bab28dbbc1b740bc7396f6c622317d
    form: FormGroup;
    this.loggedIn = accountService.isLoggedIn;
    this.recipe = new Recipe();
  }

  //public setFormValue(value: object): void {
    //this.formValue = value;

  ngOnInit(): void {
<<<<<<< HEAD
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
=======
    this.http.post(`${environment.apiUrl}/getRecipe`, {auth: this.accountService.userSession, recipeId: 14}).subscribe((res: any) => {
        /*this.recipe.name = res.response.recipe.name;
        this.recipe.visibility = res.response.recipe.visibility;
        this.recipe.steps = res.response.recipe.steps;
        this.recipe.portions = res.response.recipe.portions;
        this.recipe.time = res.response.recipe.time;*/
        this. recipe = res.response.recipe;
        console.log(res)
		});
>>>>>>> 2838643b32bab28dbbc1b740bc7396f6c622317d
  }

}