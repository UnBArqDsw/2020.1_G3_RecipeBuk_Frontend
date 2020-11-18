import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class RecipeService {
    constructor(
        private http: HttpClient
    ) {}

    getUserSession(){
        return "340f7a541a3711ebadc10242ac120002";
    }

    create(recipe: Recipe): Observable<Recipe>{
        return this.http.post<Recipe>(`${environment.apiUrl}/cadastro-receitas`, {
            auth: this.getUserSession(),
            recipe,
        })
    }
}