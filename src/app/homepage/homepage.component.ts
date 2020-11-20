import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BookCard } from 'src/app/cards/cards.component';

@Component({
	selector: 'app-homepage',
	templateUrl: './homepage.component.html',
	styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
	loggedIn : boolean;
	publicBooks : any = [];
	privateBooks : any = [];

	constructor(private accountService : AccountService, private http : HttpClient) {
		this.loggedIn = accountService.isLoggedIn;
	}

	ngOnInit(): void {
		this.http.post(`${environment.apiUrl}/getBooks`, {auth: this.accountService.userSession}).subscribe((res: any[]) => {
			for(let book of res) {
				if(book.visibility)
					this.publicBooks.push(book);
					
				else
					this.privateBooks.push(book);
			}
		});
	}
}
