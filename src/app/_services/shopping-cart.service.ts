import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

constructor(private db: AngularFireDatabase) { }

  // tslint:disable-next-line: typedef
  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  // tslint:disable-next-line: typedef
  private getCart(cartId: string) {
    return this.db.object('/shopping-carts/' + cartId);
  }

  // tslint:disable-next-line: typedef
  private async getOrCreateCart() {
    const cartId = localStorage.getItem('cartId');
    if(!cartId) {
      const result = await this.create();
      localStorage.setItem('cartId', result.key);
      return this.getCart(result.key);
    }
    return this.getCart(cartId);
  }



}
