import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Category } from '../_models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryCollection: AngularFirestoreCollection;
  category: Observable<Category[]>;

constructor(private db: AngularFireDatabase) {
  this.category = this.db.list('categories').valueChanges();
}

getCategory(id): Observable<Category>{
  return this.category = this.db.list('categories').snapshotChanges.prototype(id);
}
  // tslint:disable-next-line: typedef
  getCategories() {
    return this.category;
  }
}
