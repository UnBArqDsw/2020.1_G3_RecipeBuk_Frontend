import { Component, OnInit, Input } from '@angular/core';
import { Ingredients } from '../models/ingredients'
import { CategoryRecipeEnum } from '../models/category-recipe.enum';
import { Recipe } from '../models/recipe';
import { ICadastroReceitas } from '../interfaces/cadastro-receitas';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  ) {
      this.form = this.formBuilder.group({
        name: this.formBuilder.control(''),
        qty: this.formBuilder.control(null),
        type: this.formBuilder.control(''),
        ingredient: this.formBuilder.control(''),
        steps: this.formBuilder.control(''),
        time: this.formBuilder.control(''),
        portions: this.formBuilder.control(null),
        category: this.formBuilder.control(''),
      })
    }

  public setFormValue(value: object): void {
    this.formValue = value;
  }

  ngOnInit(): void {
    this.ingredientsArray.push(this.ingredients);
    this.categoryRecipeEnumOptions = Object.keys(this.categoryRecipeEnum);

    this.form = new FormGroup({
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

  addIngredient(){
    this.ingredients = new Ingredients();
    this.ingredientsArray.push(this.ingredients);

    console.log(this.ingredientsArray);
  }

  save(): void {
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
  }

    delete(): void {
      if(this.recipesList!=null){
      this.recipesList.splice(0, 8);
      }
    }
}
