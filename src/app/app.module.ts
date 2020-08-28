import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './_services/auth.service';
import { AuthGuard } from './_services/auth.guard';
import { ProductService } from './_services/product.service';
import { CategoryService } from './_services/category.service';
import { ShoppingCartService } from './_services/shopping-cart.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CustomFormsModule } from 'ng2-validation';

import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ProductsComponent } from './products/products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { environment } from 'src/environments/environment';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AdminOrdersComponent,
    ProductsComponent,
    CheckOutComponent,
    LoginComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    ShoppingCartComponent,
    AdminProductsComponent,
    ProductFormComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [
    AuthService,
    AuthGuard,
    ProductService,
    CategoryService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
