import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient'
import { CategoryRecipeEnum } from '../models/category-recipe.enum';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';
import { AccountService } from '../services';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';

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
  recipeId;
  defaultValues = {
    name: "",
    portions: undefined,
    steps: "",
    time: undefined
  };

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    if (!this.accountService.userSession) {
      this.router.navigate(['/login']);
    }

    this.route.params.subscribe(params => {
      this.recipeId = params['recipeId'];
    });

    if (this.recipeId !== '0') {
      this.http.post(`${environment.apiUrl}/getRecipe`, { auth: this.accountService.userSession, recipeId: this.recipeId }).subscribe((res: any) => {
        this.recipe = res.response.recipe;

        this.defaultValues = {
          name: res.response.recipe.name,
          portions: this.recipe.portions,
          steps: this.recipe.steps,
          time: this.recipe.time
        }
        res.ingredients.forEach(element => {
          console.log(element)
          let newIngredient = new Ingredient();
          newIngredient.name = element['name'] == undefined ? "" : element['name'];
          newIngredient.quantity = (element['quantity'] == NaN || element['quantity'] == undefined) ? 1 : element['quantity'];
          newIngredient.unit = element['unit'] == undefined ? "" : element['unit'];
          this.ingredientsArray.push({ id: this.ingredientAmount++, ingredient: newIngredient });
        });;
        console.log(this.ingredientsArray);

      });
    } else {
      let newIngredient = new Ingredient();
      newIngredient.name = "";
      newIngredient.quantity = 1 ;
      newIngredient.unit = "";
      this.ingredientsArray.push({ id: this.ingredientAmount++, ingredient: newIngredient });
      this.categoryRecipeEnumOptions = Object.keys(this.categoryRecipeEnum);
    }
  }

  updateIngredient(ingredientId, quantity, type, name) {
    this.ingredientsArray[ingredientId]['ingredient']['quantity'] = parseInt(quantity);
    this.ingredientsArray[ingredientId]['ingredient']['unit'] = type;
    this.ingredientsArray[ingredientId]['ingredient']['name'] = name;
  }

  ngOnInit(): void {

  }

  addIngredient() {
    this.ingredientsArray.push({ id: this.ingredientAmount++, ingredient: new Ingredient() });

  }

  save(recipeName, tempo, rendimento, preparo, visibility) {
    const ingredients = [];
    this.ingredientsArray.forEach(element => {
      ingredients.push(element.ingredient);
    });

    
    if (this.recipeId !== '0') {
      const recipe = {
        recipeId: this.recipeId,
        ingredients: ingredients,
        auth: this.accountService.userSession,
        name: recipeName,
        time: tempo,
        portions: rendimento,
        visibility: visibility,
        steps: preparo
      }

      this.recipeService.updateRecipe(recipe).then((res) => {
        this.router.navigate(['/receitas']);
      }).catch((error) => {
        console.log(error);
      });
    } else {
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
  }

  delete(): void {
    if (this.recipesList != null) {
      this.recipesList.splice(0, 8);
    }
  }
}