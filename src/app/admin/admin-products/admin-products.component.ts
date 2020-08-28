import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { Observable, Subscription } from 'rxjs';
import { map} from 'rxjs/Operators';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: Product[];
  filteredProducts: any[];
  subscription: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe(products => {
       // console.log(products);
       this.products = products;
    });
  }

  // tslint:disable-next-line: typedef
  filter(query: string ) {
    this.filteredProducts = (query) ?
    this.products.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase())) :
        this.products;
  }

}
