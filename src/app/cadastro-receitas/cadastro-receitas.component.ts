import { Component, OnInit, Input } from '@angular/core';
import { Ingredients } from '../models/ingredients'
import { CategoryRecipeEnum } from '../models/category-recipe.enum';
import { Recipe } from '../models/recipe';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-cadastro-receitas',
    templateUrl: './cadastro-receitas.component.html',
    styleUrls: ['./cadastro-receitas.component.css']
})

export class CadastroReceitasComponent implements OnInit {
  form: FormGroup;
  formValue = null;
  ingredients = new Ingredients();
  ingredientsArray = [];
  recipe: Recipe;
  recipesList: Recipe[] = [];
  categoryRecipeEnum = CategoryRecipeEnum;
  categoryRecipeEnumOptions = [];
  editReceitas: Recipe = null;

  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService,
  ) {
      this.form = this.formBuilder.group({
        name: this.formBuilder.control('', Validators.required),
        qty: this.formBuilder.control(null, Validators.required),
        type: this.formBuilder.control('', Validators.required),
        ingredient: this.formBuilder.control('', Validators.required),
        steps: this.formBuilder.control('', Validators.required),
        time: this.formBuilder.control(null, Validators.required),
        portions: this.formBuilder.control(null, Validators.required),
        category: this.formBuilder.control(''),
      })
    }

  public setFormValue(value: object): void {
    this.formValue = value;
  }

  ngOnInit(): void {
    this.ingredientsArray.push(this.ingredients);
    this.categoryRecipeEnumOptions = Object.keys(this.categoryRecipeEnum);

    if (this.formValue) {
      this.form.setValue({
        name: new FormControl(),
        qty: new FormControl(),
        type: new FormControl(), 
        ingredient: new FormControl(),
        steps: new FormControl(),
        time: new FormControl(),
        portions: new FormControl(),
        category: new FormControl(),
      })
    }
  }

  addIngredient(){
    this.ingredients = new Ingredients();
    this.ingredientsArray.push(this.ingredients);

    console.log(this.ingredientsArray);
  }

  getUserSession(){
	  return "340f7a541a3711ebadc10242ac120002";
  }

  save() {
    if(this.formValue){
      this.form.setValue({          
        name: this.recipe.name,
        qty: this.recipe.ingredients.qty,
        type: this.recipe.ingredients.type, 
        ingredient: this.recipe.ingredients.name,
        steps: this.recipe.steps,
        time: this.recipe.time,
        portions: this.recipe.portions,
        category: this.recipe.category,
      });
    }

    console.log(this.form.value);
    
    const newRecipe: Recipe = Object.assign({}, this.recipe)
    this.recipeService.create(newRecipe).subscribe(
      (data: Recipe) => {
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  delete(): void {
    if(this.recipesList!=null){
    this.recipesList.splice(0, 8);
    }
  }
}
