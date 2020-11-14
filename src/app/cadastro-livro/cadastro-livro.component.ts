import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-cadastro-livro',
	templateUrl: './cadastro-livro.component.html',
	styleUrls: ['./cadastro-livro.component.css']
})
export class CadastroLivroComponent implements OnInit {
	form: FormGroup;
	
	
	constructor(private router: Router, private http: HttpClient, private cdr : ChangeDetectorRef, private formBuilder : FormBuilder) { 
		this.form = this.formBuilder.group({
			title: this.formBuilder.control('', Validators.required),
			description: this.formBuilder.control(''),
			visibility: this.formBuilder.control('', Validators.required),
		});
	}
    
	ngOnInit(): void {} 
}
