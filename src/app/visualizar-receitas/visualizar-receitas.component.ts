import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AccountService } from 'src/app/services';
import { Recipe } from 'src/app/models/recipe'
import { Ingredients } from 'src/app/models/ingredients';
//import { ICadastroReceitas } from '../interfaces/cadastro-receitas';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  recipe: Recipe;
  loggedIn : boolean;

  constructor(private http : HttpClient, private accountService : AccountService) {
    form: FormGroup;
    this.loggedIn = accountService.isLoggedIn;
    this.recipe = new Recipe();
  }

  //public setFormValue(value: object): void {
    //this.formValue = value;

  ngOnInit(): void {
    this.http.post(`${environment.apiUrl}/getRecipe`, {auth: this.accountService.userSession, recipeId: 14}).subscribe((res: any) => {
        /*this.recipe.name = res.response.recipe.name;
        this.recipe.visibility = res.response.recipe.visibility;
        this.recipe.steps = res.response.recipe.steps;
        this.recipe.portions = res.response.recipe.portions;
        this.recipe.time = res.response.recipe.time;*/
        this. recipe = res.response.recipe;
        console.log(res)
		});
  }

}