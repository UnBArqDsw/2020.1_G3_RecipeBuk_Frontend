import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AccountService } from 'src/app/services';
import { Recipe } from 'src/app/models/recipe'
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookCard } from 'src/app/cards/cards.component';

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
  isOpen : boolean = false;
  books : any = [];

  constructor(private http: HttpClient, private accountService: AccountService, private route : ActivatedRoute, private router : Router) {
    form: FormGroup;
    this.loggedIn = accountService.isLoggedIn;
    this.recipe = new Recipe();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.recipeId = params['recipeId'];
    });
    this.http.post(`${environment.apiUrl}/getRecipe`, { auth: this.accountService.userSession, recipeId: this.recipeId }).subscribe((res: any) => {
      this.recipe = res.response.recipe;
      this.ingredients = res.ingredients;
    });
  }

  btnClick(): void {
    this.router.navigateByUrl(`/criarReceita/${this.recipeId}`);
};

	toggleAddRecipeDialog() {
		this.http.post(`${environment.apiUrl}/getBooks`, {auth: this.accountService.userSession}).subscribe((res: any[]) => {
			this.books = res;
		});
		this.isOpen = !this.isOpen;
	}

	addRecipe(bookId) {
		this.http.post(`${environment.apiUrl}/addBookRecipe`, {auth: this.accountService.userSession, bookId: bookId, recipeId: this.recipeId}).subscribe((res: any) => {
			if(res.error)
				alert(res.description + ' Verify if this recipe is already in your book.');
				
			else
				alert('Receita adicionada ao livro selecionado.');
		});
		this.toggleAddRecipeDialog();
	}
}