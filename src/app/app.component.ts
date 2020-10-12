import { Component } from '@angular/core'
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  searchTerm : string;

  constructor(private searchService: SearchService) {  }

  ngOnInit() {
  	this.searchService.sharedTerm.subscribe(searchTerm => this.searchTerm = searchTerm);
  }

  onKey(e: any) {
  	if(e.key == "Enter")
  		this.searchService.nextTerm(e.target.value);
  }
}
