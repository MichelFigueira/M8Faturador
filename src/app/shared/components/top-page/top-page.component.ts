import { Component, Input, OnInit } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css']
})
export class TopPageComponent implements OnInit {

  @Input() title = 'Não Definido';

  constructor( private location: Location ) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
