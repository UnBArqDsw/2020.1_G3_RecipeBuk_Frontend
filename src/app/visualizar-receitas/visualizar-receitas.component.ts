import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AccountService } from 'src/app/services';
import { Recipe } from 'src/app/models/recipe'
import { Ingredient } from 'src/app/models/ingredient';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-visualizar-receitas',
  templateUrl: './visualizar-receitas.component.html',
  styleUrls: ['./visualizar-receitas.component.css']
})

export class VisualizarReceitasComponent implements OnInit {
  searchRecipe: string;
  searchIngredient: string;
  searchPreparationMode: string;
  searchTime: string;
  searchYield: string;
  searchCategory: string;
  recipe: Recipe;
  loggedIn: boolean;
  ingredients = [];
  recipeId;

  constructor(private http: HttpClient, private accountService: AccountService, private route : ActivatedRoute) {
    form: FormGroup;
    this.loggedIn = accountService.isLoggedIn;
    this.recipe = new Recipe();
  }

  //public setFormValue(value: object): void {
  //this.formValue = value;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.recipeId = params['recipeId'];
    });
    this.http.post(`${environment.apiUrl}/getRecipe`, { auth: this.accountService.userSession, recipeId: this.recipeId }).subscribe((res: any) => {
      this.recipe = res.response.recipe;
      this.ingredients = res.ingredients;
    });
  }

}