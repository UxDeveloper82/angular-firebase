import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { CategoryService } from 'src/app/_services/category.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/_models/category';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  model: any = {};
  categories: Category[];
  product: Product[];

  constructor(private router: Router, private categoryService: CategoryService,
              private productService: ProductService, private route: ActivatedRoute) {
                const id = this.route.snapshot.paramMap.get('id');

              }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });

  }

  // tslint:disable-next-line: typedef
  save(product) {
      this.productService.create(product);
      this.router.navigate(['/admin/products']);
  }

}
