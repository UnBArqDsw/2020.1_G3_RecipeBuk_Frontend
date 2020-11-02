import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SearchService } from 'src/app/services/search.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit { 
  searchTerm : string;
  searchTargets = [];
  resultsArray : any = [];
  selectedTab = 0;
  targetTab = {results: []};

  constructor(private searchService: SearchService, private router: Router, private http: HttpClient, private cdr : ChangeDetectorRef) {  }
    
  ngOnInit(): void {
  	this.searchService.sharedTerm.subscribe(searchTerm => {
  		if(searchTerm) {
	  		this.searchTerm = decodeURIComponent(searchTerm);
	  		this.updateResults();
  		}
  	});

    this.searchService.sharedTargets.subscribe(sharedTargets => this.searchTargets = sharedTargets);

  	let q;
  	if((q = this.router.url.match(/\?q=(.*)/)[1])) {
  		this.searchService.nextTerm(q);
  	}
  } 

  changeTab(tab) {
  	this.selectedTab = tab;
  	this.targetTab = this.resultsArray[this.selectedTab];
  }

  updateResults() {
    let apiUrl = `${environment.apiUrl}/search?q=${encodeURIComponent(this.searchTerm)}`;

    if(this.searchTargets[0])
      apiUrl += '&thirdparty';

    if(this.searchTargets[1])
      apiUrl += '&internal';

  	this.http.get(apiUrl).subscribe((res : any[]) => {
  		this.resultsArray = res.filter((result) => {
  			return !result.error;
  		}).sort((a, b) => {
  			if(a.name > b.name)
  				return 1;
  			return -1;
  		});

  		this.changeTab(0);

      this.getFavorites().then((favorites: any) => {
        let categorizedFavorites = {
          tastemade: [],
          tudogostoso: [],
          tudoreceitas: [],
          recipebuk: []
        };

        favorites.forEach((favorite) => {
          if(favorite[0] == '/')
            categorizedFavorites.recipebuk.push(favorite);

          else if(favorite[13] == 'a')
            categorizedFavorites.tastemade.push(favorite);

          else if(favorite[16] == 'g')
            categorizedFavorites.tudogostoso.push(favorite);

          else
            categorizedFavorites.tudoreceitas.push(favorite);
        });

        this.resultsArray.forEach((result) => {
          switch(result.name) {
            case 'Tastemade':
              result.results.forEach((recipe, index) => {
                if(categorizedFavorites.tastemade.includes(recipe.link))
                  recipe.favorited = true;
              });
              break;

            case 'TudoGostoso':
              result.results.forEach((recipe, index) => {
                if(categorizedFavorites.tudogostoso.includes(recipe.link))
                  recipe.favorited = true;
              });
              break;

            case 'TudoReceitas':
              result.results.forEach((recipe, index) => {
                if(categorizedFavorites.tudoreceitas.includes(recipe.link))
                  recipe.favorited = true;
              });
              break;

            case 'recipebuk':
              result.results.forEach((recipe, index) => {
                if(categorizedFavorites.recipebuk.includes(recipe.link))
                  recipe.favorited = true;
              });
              break;
          }
        });
      });
  	});
  }

  getUserSession(){
	  return "340f7a541a3711ebadc10242ac120002";
  }

  async getFavorites() {
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.apiUrl}/getFavorites`, {auth: this.getUserSession()}).subscribe((res: any[]) => {
        resolve(res);
      });
    });
  }

  favorite(recipe) {
  	this.http.post(`${environment.apiUrl}/favorite`, {auth: this.getUserSession(), recipelink: recipe.link}).subscribe((res: any[]) => { 
      recipe.favorited = true;
    });
  }
}
