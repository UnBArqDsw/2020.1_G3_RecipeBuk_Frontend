import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { AccountService } from '../services';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public userName;
  searchTerm : string;
  searchTargets = [true, false];
  logged : boolean = false;
  
  constructor(
    private searchService: SearchService,
    private router: Router,
    private accountService: AccountService,
    private location: Location) {
      if(this.accountService.userValue) {
        this.userName = this.accountService.userValue.name;
      }
      if(this.accountService.userSession){
        this.logged = true;
      }
    }


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

  goto(target : string) {
    this.router.navigateByUrl(target);
  }

  logout() {
    this.accountService.logout();
    location.reload();
  }

  forwardTarget(checkbox, change) {
    this.searchTargets[checkbox] = change.target.checked;
    this.searchService.nextTargets(this.searchTargets);
  }
}
