import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-minhas-receitas',
  templateUrl: './minhas-receitas.component.html',
  styleUrls: ['./minhas-receitas.component.css']
})
export class MinhasReceitasComponent implements OnInit {
  recipesList;
  selectedColor = '#e2725b';
  notSelectedColor = '#fff9f4';
  todasColor = this.selectedColor;
  minhasColor = this.notSelectedColor;
  favoritasColor = this.notSelectedColor;
  constructor(private recipeService: RecipeService) {
    
  }
  //https://sun9-61.userapi.com/c854424/v854424474/10dcea/k1N5pPHLrlM.jpg
  ngOnInit(): void {
    this.recipeService.getRecipesArray().then((recipesArray) => {
      this.recipesList = recipesArray;
      console.log(this.recipesList)
    });
  }

  changeTab(tab) {
    switch (tab) {
      case 'todas':
        this.todasColor = this.selectedColor;
        this.minhasColor = this.notSelectedColor;
        this.favoritasColor = this.notSelectedColor;
        break;

      case 'minhas':
        this.todasColor = this.notSelectedColor;
        this.minhasColor = this.selectedColor;
        this.favoritasColor = this.notSelectedColor;
        break;

      case 'favoritas':
        this.todasColor = this.notSelectedColor;
        this.minhasColor = this.notSelectedColor;
        this.favoritasColor = this.selectedColor;
        break;
    }
  }

}