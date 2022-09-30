import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public url = "assets/img/image_slider_home/";
  public images = [];

  constructor() {}

  ngOnInit(): void {
    this.images = [
      { "name": "popayan_1", "desc": "Popayán" },
      { "name": "santander_1", "desc": "Santander de Quilichao" },
      { "name": "guapi_1", "desc": "Guapi" },
      { "name": "popayan_3", "desc": "Popayán" },
      { "name": "santander_2", "desc": "Santander de Quilichao" },
    ]
  }

}
