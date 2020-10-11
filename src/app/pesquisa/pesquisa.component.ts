import { Component, Input, OnInit } from '@angular/core';
import results from '../mock/results.json';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit { 
  
  resultsArray = results

  gshowArray = results[0].results;
  tastemadeArray = results[1].results;
  tudoreceitasArray = results[2].results;
  tudogostosoArray = results[3].results;
  
  constructor() {  }
    
  ngOnInit(): void {} 
  
   
}
