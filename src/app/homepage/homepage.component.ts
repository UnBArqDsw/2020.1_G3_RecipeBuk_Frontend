import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-homepage',
	templateUrl: './homepage.component.html',
	styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
	loggedIn : boolean;
	favorites : any;
	books : any;

	constructor(private accountService : AccountService, private http : HttpClient) {
		this.loggedIn = accountService.isLoggedIn;
	}

	ngOnInit(): void {
		this.http.post(`${environment.apiUrl}/getFavorites`, {auth: this.accountService.userSession}).subscribe((res: any[]) => {
			this.favorites = res;
		});
		
		this.http.post(`${environment.apiUrl}/getBooks`, {auth: this.accountService.userSession}).subscribe((res: any[]) => {
			this.books = res;
		});
	}
}
