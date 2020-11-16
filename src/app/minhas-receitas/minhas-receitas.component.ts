import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minhas-receitas',
  templateUrl: './minhas-receitas.component.html',
  styleUrls: ['./minhas-receitas.component.css']
})
export class MinhasReceitasComponent implements OnInit {
  recipesList0: Object = [
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
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-chocolate-627.html",
      "title": "Receita de Torta de chocolate",
      "img_url": "https://t1.rg.ltmcdn.com/pt/images/7/2/6/img_torta_de_chocolate_627_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-holandesa-267.html",
      "title": "Receita de Torta holandesa",
      "img_url": "https://t2.rg.ltmcdn.com/pt/images/7/6/2/img_torta_holandesa_267_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-sardinha-266.html",
      "title": "Receita de Torta de sardinha",
      "img_url": "https://t1.rg.ltmcdn.com/pt/images/6/6/2/img_torta_de_sardinha_266_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-bolacha-263.html",
      "title": "Receita de Torta de bolacha",
      "img_url": "https://t2.rg.ltmcdn.com/pt/images/3/6/2/img_torta_de_bolacha_263_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-morango-262.html",
      "title": "Receita de Torta de morango",
      "img_url": "https://t1.rg.ltmcdn.com/pt/images/2/6/2/img_torta_de_morango_262_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-frango-202.html",
      "title": "Receita de Torta de frango",
      "img_url": "https://t2.rg.ltmcdn.com/pt/images/2/0/2/img_torta_de_frango_202_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-liquidificador-com-agua-9717.html",
      "title": "Receita de Torta de liquidificador com água",
      "img_url": "https://t1.rg.ltmcdn.com/pt/images/7/1/7/torta_de_liquidificador_com_agua_9717_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-banana-com-farofa-9661.html",
      "title": "Receita de Torta de banana com farofa",
      "img_url": "https://t1.rg.ltmcdn.com/pt/images/1/6/6/torta_de_banana_com_farofa_9661_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-morango-com-bolacha-9683.html",
      "title": "Receita de Torta de morango com bolacha",
      "img_url": "https://t2.rg.ltmcdn.com/pt/images/3/8/6/torta_de_morango_com_bolacha_9683_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-morango-com-bolacha-9263.html",
      "title": "Receita de Torta de morango com bolacha",
      "img_url": "https://t2.rg.ltmcdn.com/pt/images/3/6/2/torta_de_morango_com_bolacha_9263_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-bolacha-com-chocolate-9647.html",
      "title": "Receita de Torta de bolacha com chocolate",
      "img_url": "https://t2.rg.ltmcdn.com/pt/images/7/4/6/torta_de_bolacha_com_chocolate_9647_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-morango-com-chantilly-9652.html",
      "title": "Receita de Torta de morango com chantilly",
      "img_url": "https://t2.rg.ltmcdn.com/pt/images/2/5/6/torta_de_morango_com_chantilly_9652_300_square.jpg"
    }
  ]
  recipesList2: Object = [
    {
      "link": "/visualizar-receitas",
      "title": "Receita de Torta de chocolate",
      "img_url": "https://t1.rg.ltmcdn.com/pt/images/7/2/6/img_torta_de_chocolate_627_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-holandesa-267.html",
      "title": "Receita de Torta holandesa",
      "img_url": "https://t2.rg.ltmcdn.com/pt/images/7/6/2/img_torta_holandesa_267_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-sardinha-266.html",
      "title": "Receita de Torta de sardinha",
      "img_url": "https://t1.rg.ltmcdn.com/pt/images/6/6/2/img_torta_de_sardinha_266_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-bolacha-263.html",
      "title": "Receita de Torta de bolacha",
      "img_url": "https://t2.rg.ltmcdn.com/pt/images/3/6/2/img_torta_de_bolacha_263_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-morango-262.html",
      "title": "Receita de Torta de morango",
      "img_url": "https://t1.rg.ltmcdn.com/pt/images/2/6/2/img_torta_de_morango_262_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-frango-202.html",
      "title": "Receita de Torta de frango",
      "img_url": "https://t2.rg.ltmcdn.com/pt/images/2/0/2/img_torta_de_frango_202_300_square.jpg"
    }
  ]
  recipesList3: Object = [
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-liquidificador-com-agua-9717.html",
      "title": "Receita de Torta de liquidificador com água",
      "img_url": "https://t1.rg.ltmcdn.com/pt/images/7/1/7/torta_de_liquidificador_com_agua_9717_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-banana-com-farofa-9661.html",
      "title": "Receita de Torta de banana com farofa",
      "img_url": "https://t1.rg.ltmcdn.com/pt/images/1/6/6/torta_de_banana_com_farofa_9661_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-morango-com-bolacha-9683.html",
      "title": "Receita de Torta de morango com bolacha",
      "img_url": "https://t2.rg.ltmcdn.com/pt/images/3/8/6/torta_de_morango_com_bolacha_9683_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-morango-com-bolacha-9263.html",
      "title": "Receita de Torta de morango com bolacha",
      "img_url": "https://t2.rg.ltmcdn.com/pt/images/3/6/2/torta_de_morango_com_bolacha_9263_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-bolacha-com-chocolate-9647.html",
      "title": "Receita de Torta de bolacha com chocolate",
      "img_url": "https://t2.rg.ltmcdn.com/pt/images/7/4/6/torta_de_bolacha_com_chocolate_9647_300_square.jpg"
    },
    {
      "link": "https://www.tudoreceitas.com/receita-de-torta-de-morango-com-chantilly-9652.html",
      "title": "Receita de Torta de morango com chantilly",
      "img_url": "https://t2.rg.ltmcdn.com/pt/images/2/5/6/torta_de_morango_com_chantilly_9652_300_square.jpg"
    }
  ]
  recipesList;
  selectedColor = '#e2725b';
  notSelectedColor = '#fff9f4';
  todasColor = this.selectedColor;
  minhasColor = this.notSelectedColor;
  favoritasColor = this.notSelectedColor;
  constructor() {
    this.recipesList = this.recipesList0;
    
  }

  ngOnInit(): void {
  }

  changeTab(tab) {
    switch (tab) {
      case 'todas':
        this.recipesList = this.recipesList0;
        this.todasColor = this.selectedColor;
        this.minhasColor = this.notSelectedColor;
        this.favoritasColor = this.notSelectedColor;
        break;

      case 'minhas':
        this.recipesList = this.recipesList2;
        this.todasColor = this.notSelectedColor;
        this.minhasColor = this.selectedColor;
        this.favoritasColor = this.notSelectedColor;
        break;

      case 'favoritas':
        this.recipesList = this.recipesList3;
        this.todasColor = this.notSelectedColor;
        this.minhasColor = this.notSelectedColor;
        this.favoritasColor = this.selectedColor;
        break;
    }
  }

}