import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  elementos = Array; //Array type captured in a variable
  num: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
