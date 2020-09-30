import { Component, OnInit, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ingredients } from '../models/ingredients'
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-cadastro-receitas',
    templateUrl: './cadastro-receitas.component.html',
    styleUrls: ['./cadastro-receitas.component.css']
  })

  export class CadastroReceitasComponent implements OnInit{
    ingredients = new ingredients();
    dataArray = [];
    constructor() { }

    ngOnInit(): void {
      this.dataArray.push(this.ingredients);
    }

    addForm(){
      this.ingredients=new ingredients();
      this.dataArray.push(this.ingredients);

      console.log(this.dataArray);
    }
  }