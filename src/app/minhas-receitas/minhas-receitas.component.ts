import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minhas-receitas',
  templateUrl: './minhas-receitas.component.html',
  styleUrls: ['./minhas-receitas.component.css']
})
export class MinhasReceitasComponent implements OnInit {
  recipes = [
    {
      img_url: "https://t2.rg.ltmcdn.com/pt/images/8/5/8/img_como_temperar_costela_6858_300_square.jpg",
      link: "https://www.tudoreceitas.com/artigo-como-temperar-costela-6858.html",
      title: "Como temperar costela",
    },
    {
      img_url: "https://t1.rg.ltmcdn.com/pt/images/7/1/7/img_prime_rib_suino_6717_300_square.jpg",
      link: "https://www.tudoreceitas.com/receita-de-prime-rib-suino-6717.html",
      title: "Receita de Prime rib suíno",

    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}