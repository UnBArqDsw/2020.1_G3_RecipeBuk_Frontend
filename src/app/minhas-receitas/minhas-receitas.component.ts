import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-minhas-receitas',
  templateUrl: './minhas-receitas.component.html',
  styleUrls: ['./minhas-receitas.component.css']
})
export class MinhasReceitasComponent implements OnInit {
  myRecipesList;
  favoriteRecipesList;
  recipeList = {};
  mineRecipeList;
  favoritesRecipeList;
  selectedColor = '#e2725b';
  notSelectedColor = '#fff9f4';
  todasColor = this.selectedColor;
  minhasColor = this.notSelectedColor;
  favoritasColor = this.notSelectedColor;
  constructor(private recipeService: RecipeService) {
    this.recipeList['mine'] = [];
    this.recipeList['favorites'] = [];
  }
  //https://sun9-61.userapi.com/c854424/v854424474/10dcea/k1N5pPHLrlM.jpg
  ngOnInit(): void {
    this.recipeService.getRecipesArray().then((recipesArray) => {
      this.myRecipesList = recipesArray['mine'];
      this.favoriteRecipesList = recipesArray['favorites'];
      console.log('fonk')
      this.mineRecipeList = recipesArray['mine'];
      this.favoritesRecipeList = recipesArray['favorites'];
      this.recipeList = recipesArray;
    }).catch((err) => {
      
    });
  }
  
  changeTab(tab) {
    console.log(this.recipeList)
    switch (tab) {
      case 'todas':
        this.todasColor = this.selectedColor;
        this.minhasColor = this.notSelectedColor;
        this.favoritasColor = this.notSelectedColor;
        this.mineRecipeList = this.myRecipesList;
        this.favoritesRecipeList = this.favoriteRecipesList;
        break;

      case 'minhas':
        this.todasColor = this.notSelectedColor;
        this.minhasColor = this.selectedColor;
        this.favoritasColor = this.notSelectedColor;
        this.mineRecipeList = this.myRecipesList;
        this.favoritesRecipeList = [];
        break;

      case 'favoritas':
        this.todasColor = this.notSelectedColor;
        this.minhasColor = this.notSelectedColor;
        this.favoritasColor = this.selectedColor;
        this.mineRecipeList = [];
        this.favoritesRecipeList = this.favoriteRecipesList;
        break;
    }
  }

}