import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minhas-receitas',
  templateUrl: './minhas-receitas.component.html',
  styleUrls: ['./minhas-receitas.component.css']
})
export class MinhasReceitasComponent implements OnInit {
  recipesList : Object = [
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-hamburguer-1551.html",
      "title": "Receita de Torta de hambúrguer",
      "img_url": "https://t1.rg.ltmcdn.com/pt/images/1/5/5/img_torta_de_hamburguer_1551_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-pasqualina-5096.html",
      "title": "Receita de Torta Pasqualina",
      "img_url": "https://t2.rg.ltmcdn.com/pt/images/6/9/0/img_torta_pasqualina_5096_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-ovomaltine-4959.html",
      "title": "Receita de Torta de Ovomaltine",
      "img_url": "https://t1.rg.ltmcdn.com/pt/images/9/5/9/img_torta_de_ovomaltine_4959_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-graviola-4147.html",
      "title": "Receita de Torta de graviola",
      "img_url": "https://t2.rg.ltmcdn.com/pt/images/7/4/1/img_torta_de_graviola_4147_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-rabanada-2629.html",
      "title": "Receita de Torta de rabanada",
      "img_url": "https://t1.rg.ltmcdn.com/pt/images/9/2/6/img_torta_de_rabanada_2629_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-halloween-731.html",
      "title": "Receita de Torta de Halloween",
      "img_url": "https://t1.rg.ltmcdn.com/pt/images/1/3/7/torta_de_halloween_731_300_square.jpg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}