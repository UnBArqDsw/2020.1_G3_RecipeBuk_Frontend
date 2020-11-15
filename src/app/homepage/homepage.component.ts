import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services';

@Component({
	selector: 'app-homepage',
	templateUrl: './homepage.component.html',
	styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
	loggedIn : boolean;

	constructor(private accountService : AccountService) {
		this.loggedIn = accountService.isLoggedIn;
	}

	ngOnInit(): void {
	}

}
