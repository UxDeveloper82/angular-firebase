import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from '../_models/product';
import { Observable } from 'rxjs';
import { database } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;

constructor(private db: AngularFireDatabase, private afs: AngularFirestore) {
  this.products = this.db.list('products').valueChanges();
}

   // tslint:disable-next-line: typedef
   create(product) {
     return this.db.list('/products').push(product);
   }

   // tslint:disable-next-line: typedef
   getAll() {
     return this.products;
   }

   // tslint:disable-next-line: typedef
   get(productId) {
     return this.db.object('/products/' + productId);
   }

}

