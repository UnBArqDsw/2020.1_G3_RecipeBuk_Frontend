import { Component, OnInit, Input } from '@angular/core';
//import { ICadastroReceitas } from '../interfaces/cadastro-receitas';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-visualizar-receitas',
    templateUrl: './visualizar-receitas.component.html',
    styleUrls: ['./visualizar-receitas.component.css']
})

export class VisualizarReceitasComponent implements OnInit {
  

  constructor() {
    form: FormGroup;
  }

  //public setFormValue(value: object): void {
    //this.formValue = value;

  ngOnInit(): void {
    console.log("Exemplo");  
  }

}