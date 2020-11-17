import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';

@Injectable({
    providedIn: 'root'
})

export class RecipeService {
    constructor(
        private http: HttpClient,
        private accountService: AccountService
    ) {}

    getUserSession(){
        return this.accountService.userSession;
    }

    create(recipe: Recipe): Observable<Recipe>{
        return this.http.post<Recipe>(`${environment.apiUrl}/cadastro-receitas`, {
            auth: this.getUserSession(),
            recipe,
        })
    }

    getAllRecipes(userSession) {
        return new Promise((resolve, reject) => {
            this.http.post(`${environment.apiUrl}/getAllRecipes`, {auth: userSession}).subscribe({
                next(res : any) {
                    if(res.response.recipe) {
                        resolve(res.response.recipe);
                    } else {
                        reject('No recipes.');
                    }
                },
                error(e) {
                    reject(e);
                }
            });
        });
    }

    getFavorites(userSession) {

    }

    getRecipesArray() {
        return new Promise((resolve, reject) => {
            const userSession =  this.getUserSession();
            this.getAllRecipes(userSession).then((recipesArray) => {
                resolve(recipesArray);
                
            });

        })
    }


}