import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Product } from '../_models/product';
import { CategoryService } from '../_services/category.service';
import { Category } from '../_models/category';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../_services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories: Category[];
  products: Product[];
  product: Product;
  showActions: true;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private route: ActivatedRoute,
              private cartService: ShoppingCartService) {
    const id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(products => {
      // console.log(products);
      this.products = products;
   });
  }

  addToCard(product: Product): void {
    // const cardId = localStorage.getItem('cardId');
    // if (!cardId) {
    //   this.cartService.create().then(result => {
    //     localStorage.setItem('cartId', result.key);
    //   });
    // }else {

   // }

  }

}
