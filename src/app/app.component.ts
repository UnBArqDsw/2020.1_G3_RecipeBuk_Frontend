import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  searchTerm : string;

  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit() {
  	this.searchService.sharedTerm.subscribe(searchTerm => this.searchTerm = searchTerm);
  }

  onKey(e: any) {
  	if(e.key == "Enter") {
  		if(this.router.url.includes('/pesquisa')) {
  			this.searchService.nextTerm(e.target.value);
  		}

  		else {
  			this.router.navigateByUrl(`/pesquisa?q=${e.target.value}`);
  		}
  	}
  }
}
