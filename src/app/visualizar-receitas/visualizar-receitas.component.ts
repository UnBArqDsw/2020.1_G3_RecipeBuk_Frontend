import { Component, OnInit, Input } from '@angular/core';
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

  ngOnInit(): void {} 
  

}