import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'M8 Faturador';

  modulos= [
    {
      icone: 'fa fa-shopping-cart',
      titulo: 'Faturamento',
      page: '/faturamento'
    },
    {
      icone: 'fa fa-cubes',
      titulo: 'Estoque',
      page: '/estoque'
    },
    {
      icone: 'fa fa-calculator',
      titulo: 'Financeiro',
      page: '/financeiro'
    },
  ]

  constructor() {}

  ngOnInit() {
  }

}
