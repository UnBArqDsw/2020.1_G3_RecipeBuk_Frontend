import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AccountService } from './account.service';

@Injectable({
    providedIn: 'root'
})

export class RecipeService {
    constructor(
        private http: HttpClient,
        private accountService: AccountService
    ) { }

    getUserSession() {
        return this.accountService.userSession;
    }

    createRecipe(recipe) {
        return new Promise((resolve, reject) => {
            console.log(recipe)
            this.http.post(`${environment.apiUrl}/addRecipe`, recipe).subscribe({
                next(res: any) {
                    resolve(res);
                },
                error(e) {
                    reject(e);
                }
            });
        });
    }

    updateRecipe(recipe) {
        return new Promise((resolve, reject) => {
            console.log(recipe);
            this.http.post(`${environment.apiUrl}/updateRecipe`, recipe).subscribe({
                next(res: any) {
                    resolve(res);
                },
                error(e) {
                    reject(e);
                }
            });
        });
    }

    getAllRecipes(userSession) {
        return new Promise((resolve, reject) => {
            this.http.post(`${environment.apiUrl}/getAllRecipes`, { auth: userSession }).subscribe({
                next(res: any) {
                    if (res.recipe) {
                        resolve(res.recipe);
                    } else {
                        resolve([]);
                    }
                },
                error(e) {
                    reject(e);
                }
            });
        });
    }

    getFavorites(userSession) {
        return new Promise((resolve, reject) => {
            this.http.post(`${environment.apiUrl}/getFavorites`, { auth: userSession }).subscribe({
                next(res: any) {
                    if (res[0]) {
                        resolve(res);
                    } else {
                        resolve([]);
                    }
                },
                error(e) {
                    reject(e);
                }
            });
        });
    }

    getRecipesArray() {
        return new Promise((resolve, reject) => {
            const userSession = this.getUserSession();
            let requestsDone = 0;
            let mine, favorites;
            this.getFavorites(userSession).then((favoritesArray) => {
                favorites = favoritesArray;
                requestsDone++;
                if (requestsDone == 2) {
                    resolve({ mine, favorites })
                }
            }).catch((error) => {
                reject(error);
            });
            this.getAllRecipes(userSession).then((recipesArray) => {
                mine = recipesArray;
                requestsDone++;
                if (requestsDone == 2) {
                    resolve({ mine, favorites });
                }

            }).catch((error) => {
                reject(error);
            });

        })
    }


}