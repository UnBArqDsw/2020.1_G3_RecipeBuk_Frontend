import { Component, OnInit, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Ingredients } from '../models/ingredients'
import { CategoryRecipeEnum } from '../models/category-recipe.enum';
import { Recipe } from '../models/recipe';
import { ICadastroReceitas } from '../interfaces/cadastro-receitas';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-cadastro-receitas',
    templateUrl: './cadastro-receitas.component.html',
    styleUrls: ['./cadastro-receitas.component.css']
  })

  export class CadastroReceitasComponent implements OnInit {
    ingredients = new Ingredients();
    dataArray = [];
    recipe: Recipe;
    categoryRecipeEnum = CategoryRecipeEnum;
    categoryRecipeEnumOptions = [];
    botaoSalvar= true;
    receitas: ICadastroReceitas[] = [];
    name: string;
    qty: number;
    type: string;
    ingredient: string;
    steps: string;
    time: string;
    portions: number;
    category: string; 
    editReceitas: ICadastroReceitas = null;

    constructor() { }

    ngOnInit(): void {
      this.dataArray.push(this.ingredients);

      this.categoryRecipeEnumOptions = Object.keys(this.categoryRecipeEnum);
    }

    addIngredient(){
    }

    save(){
      if(this.editReceitas==null){
        this.receitas.push( {name: this.name, qty: this.qty, type: this.type, 
          ingredient: this.ingredient, steps: this.steps, time: this.time, portions: this.portions, category: this.category} );
      }
    }


    addForm(){
      this.ingredients = new Ingredients();
      this.dataArray.push(this.ingredients);

      console.log(this.dataArray);
    }
  }