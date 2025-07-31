import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import component của từng trang (nhớ tạo trước các component này)
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ZenMusicComponent } from './pages/zen-music/zen-music.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CheckoutComponent} from './pages/checkout/checkout.component'; // <-- Import CheckoutComponent
import { OrderHistoryComponent } from './pages/order-history/order-history.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'zen-music', component: ZenMusicComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'checkout', component: CheckoutComponent }, // <-- THÊM DÒNG NÀY VÀO MẢNG ROUTES
{ path: 'order-history', component: OrderHistoryComponent },
  { path: '**', redirectTo: '' } // fallback nếu route không tồn tại
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}