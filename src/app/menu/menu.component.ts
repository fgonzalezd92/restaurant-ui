import { Component, OnInit } from '@angular/core';
import { IPlatillo } from '../Entities/platillo';
import { ShoppingCart } from '../Entities/shoppingcart';
import { PlatilloService } from '../platillo.service';
import { TipoPlatillo } from '../tipo-platillo';

@Component({
	selector: 'res-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	public platillos:any = {};
  public shoppingCart: ShoppingCart[] = [];


	constructor(private _platilloService: PlatilloService) { }

	ngOnInit(): void {
    this._platilloService.getPlatillos()
      .subscribe(data =>  {
      this.platillos = this.groupBy(data, (x: IPlatillo) => x.tipo)
      });
	}

  SelectToShoppingCart(plato:IPlatillo){
    const platillo = this.shoppingCart.find(x => x.platillo.id === plato.id);
    if(platillo){
      platillo.cantidad++;
      platillo.total = platillo.cantidad*platillo.platillo.precio;
    }
    else{
      const nuevoPlatillo = new ShoppingCart(1,plato, plato.precio);
      this.shoppingCart.push(nuevoPlatillo);
    }
  }

  groupBy = (array:IPlatillo[], fn: Function) => array.reduce((result:any, item:any) => {
    const key = fn(item);
    console.log(TipoPlatillo[1]);
    if(!result)
      result = {};
    if(!result[TipoPlatillo[key]])
      result[TipoPlatillo[key]] = []
    // if (!result[key]) result[key] = [];
    result[TipoPlatillo[key]].push(item);
    return result;
  }, {});

}
