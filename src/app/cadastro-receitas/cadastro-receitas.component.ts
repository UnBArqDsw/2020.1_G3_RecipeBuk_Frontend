import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient'
import { CategoryRecipeEnum } from '../models/category-recipe.enum';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';
import { AccountService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-receitas',
  templateUrl: './cadastro-receitas.component.html',
  styleUrls: ['./cadastro-receitas.component.css']
})

export class CadastroReceitasComponent implements OnInit {
  ingredientAmount = 0;
  ingredientsArray = [];
  recipe: Recipe;
  recipesList: Recipe[] = [];
  categoryRecipeEnum = CategoryRecipeEnum;
  categoryRecipeEnumOptions = [];
  editReceitas: Recipe = null;


  constructor(
    private recipeService: RecipeService,
    private accountService: AccountService,
    private router: Router,
  ) {

    if (!this.accountService.userSession) {
      this.router.navigate(['/login']);
    }
  }

  updateIngredient(ingredientId, quantity, type, name) {
    this.ingredientsArray[ingredientId]['ingredient']['quantity'] = parseInt(quantity);
    this.ingredientsArray[ingredientId]['ingredient']['unit'] = type;
    this.ingredientsArray[ingredientId]['ingredient']['name'] = name;
  }
  
  ngOnInit(): void {
    this.ingredientsArray.push({id: this.ingredientAmount++, ingredient: new Ingredient()});
    this.categoryRecipeEnumOptions = Object.keys(this.categoryRecipeEnum);
  }
  
  addIngredient() {
    this.ingredientsArray.push({id: this.ingredientAmount++, ingredient: new Ingredient()});
    
  }
  
  save(recipeName, tempo, rendimento, preparo, visibility) {
    const ingredients = [];
    this.ingredientsArray.forEach(element => {
      ingredients.push(element.ingredient);
    });

    const recipe = {
      ingredients: ingredients,
      auth: this.accountService.userSession,
      name: recipeName,
      time: tempo,
      portions: rendimento,
      visibility: visibility,
      steps: preparo
    }
    
    this.recipeService.createRecipe(recipe).then((res) => {
      this.router.navigate(['/receitas']);
    }).catch((error) => {
      console.log(error);
    });
  }

  delete(): void {
    if (this.recipesList != null) {
      this.recipesList.splice(0, 8);
    }
  }
}