import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from '../Entities/shoppingcart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  displayedColumns: string[] = ['total'];
  @Input()
  public shoppingCart:ShoppingCart[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  GetTotal(){
    let sum = 0;
    this.shoppingCart.forEach(element => {
      sum+=element.total;
    });
    return sum;
  }
}
