import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-salvar-receitas',
  templateUrl: './teste-salvar-receitas.component.html',
  styleUrls: ['./teste-salvar-receitas.component.css']
})
export class TesteSalvarReceitasComponent implements OnInit {


  @Input() nomeReceita: string;
  @Input() quantidade: number;
  @Input() unidade: string;
  @Input() ingrediente: string;
  @Input() preparo: string;
  @Input() tempo: string;
  @Input() rendimento: number;
  @Input() categoria: string; 

  constructor() { }

  ngOnInit(): void {
  }

}
