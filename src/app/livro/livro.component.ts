import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AccountService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-livro',
	templateUrl: './livro.component.html',
	styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {
	bookId : string = '';
	
	constructor(private http: HttpClient, private accountService : AccountService, private route : ActivatedRoute) {
		
	}
    
	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.bookId = params['bookId'];
		});
	}
}
