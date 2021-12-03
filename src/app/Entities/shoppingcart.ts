import { IPlatillo } from "./platillo";


export class ShoppingCart{


  constructor(
  public cantidad: number,
  public platillo: IPlatillo,
  public total: number
  ){}

}
