import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
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

  goto(target : string) {
    console.log(target)
    this.router.navigateByUrl(target);
  }

}
