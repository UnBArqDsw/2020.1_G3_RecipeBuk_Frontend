import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AccountService} from 'src/app/services';
import { first } from 'rxjs/operators';

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  searchTerm = 'Type your search query';
  
  constructor(
    // formBuilder: FormBuilder
    private accountService: AccountService
    ) { }
    
    ngOnInit(): void {
      this.searchTerm = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaameodels'
    }

}
