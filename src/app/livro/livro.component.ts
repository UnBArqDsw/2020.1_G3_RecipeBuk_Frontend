import { Component, Input, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AccountService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
	selector: 'delete-dialog',
	template: `
		<h2 mat-dialog-title>Excluir livro</h2>
		<div mat-dialog-content>
			<p>Você tem certeza que quer excluir este livro?</p>
		</div>
		<div mat-dialog-actions align="end">
			<button mat-button (click)="this.dialog.closeAll()">Cancelar</button>
			<button mat-button (click)="onConfirmation()">Excluir</button>
		</div>
	`,
	styles: [`
		button {
			border: none;
			outline: none;
			background-color: #E2725B;
			transition: 0.25s;
			color: white;
			cursor: pointer;
			font-size: 16px;
		}
		
		button:last-child {
			margin-left: 0.25em;
		}
		
		button:last-child:hover {
			background-color: #e25b5b;
		}
	`]
})
export class DeleteDialog implements OnInit {
	constructor(@Inject(MAT_DIALOG_DATA) public data, public dialog : MatDialog, private http: HttpClient, private accountService : AccountService, private router: Router) {}
    
	ngOnInit(): void {}
	
	onConfirmation() {
		this.http.post(`${environment.apiUrl}/deleteBook`, {auth: this.accountService.userSession, bookId: this.data.bookId}).subscribe((res: any) => {
			this.dialog.closeAll();
			if(res.error)
				alert(res.details)
				
			else
				this.router.navigateByUrl('/');
		});
	}
}

@Component({
	selector: 'app-livro',
	templateUrl: './livro.component.html',
	styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {
	bookId : string = '';
	book : any = {
		title: 'Fetching book...',
		description: '...',
		recipes: []
	};
	
	constructor(private http: HttpClient, private accountService : AccountService, private route : ActivatedRoute, public dialog : MatDialog) {
		
	}
    
	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.bookId = params['bookId'];
			this.http.post(`${environment.apiUrl}/getBook`, {auth: this.accountService.userSession, bookId: this.bookId}).subscribe((res: any[]) => {
				this.book = res;
				console.log(res)
			});;
		});
	}
		
	openDeleteDialog() {
		const deleteDialog = this.dialog.open(DeleteDialog, {data: {bookId: this.bookId}});
	}
}
