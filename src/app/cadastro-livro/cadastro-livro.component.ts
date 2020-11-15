import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services';

@Component({
	selector: 'app-cadastro-livro',
	templateUrl: './cadastro-livro.component.html',
	styleUrls: ['./cadastro-livro.component.css']
})
export class CadastroLivroComponent implements OnInit {
	form: FormGroup;
	
	constructor(private router: Router, private http: HttpClient, private cdr : ChangeDetectorRef, private formBuilder : FormBuilder, private accountService : AccountService) {
		if(!(this.accountService.userSession && this.accountService.userSession.length))
			this.router.navigateByUrl('/');
			
		this.form = this.formBuilder.group({
			title: this.formBuilder.control('', Validators.required),
			description: this.formBuilder.control(''),
			visibility: this.formBuilder.control(true, Validators.required),
		});
	}
    
	ngOnInit(): void {}
	
	onSubmit(value) {
		return new Promise((resolve, reject) => {
			this.http.post(`${environment.apiUrl}/createBook`, {...value, auth: this.accountService.userSession}).subscribe((res: any) => {
				if(res.error)
					alert(res.error.details);
				else
					this.router.navigateByUrl('/');
			});
		});
	}
}
