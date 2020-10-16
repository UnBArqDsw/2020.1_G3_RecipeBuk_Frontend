import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-salvar-receitas',
  templateUrl: './teste-salvar-receitas.component.html',
  styleUrls: ['./teste-salvar-receitas.component.css']
})
export class TesteSalvarReceitasComponent implements OnInit {


  @Input() name: string;
  @Input() qty: number;
  @Input() type: string;
  @Input() ingredient: string;
  @Input() steps: string;
  @Input() time: string;
  @Input() portions: number;
  @Input() category: string; 

  constructor() { }

  ngOnInit(): void {
  }

}
