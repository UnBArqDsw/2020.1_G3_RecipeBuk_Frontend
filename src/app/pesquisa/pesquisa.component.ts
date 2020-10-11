import { Component, Input, OnInit } from '@angular/core';
import results from '../mock/results.json';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit { 
  

  gshow: string;

  constructor() {}
    
  ngOnInit(): void {} 
  
   
}
