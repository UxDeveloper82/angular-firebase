import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AuthGuard } from './_services/auth.guard';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ValueComponent } from './value/value.component';

export const appRoutes: Routes = [

  { path: 'home', component: ProductsComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'login', component: LoginComponent},
  { path: 'values', component: ValueComponent},

  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard]},
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard]},

  { path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [AuthGuard]},
  { path: 'admin/products/new',
    component: ProductFormComponent,
    canActivate: [AuthGuard]},
  { path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [AuthGuard]}
];

