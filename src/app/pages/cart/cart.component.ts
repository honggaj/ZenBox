import { Component, OnInit } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: CartItem[] = []; // Đảm bảo biến này tồn tại

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cartProducts = JSON.parse(cartData);
    } else {
      this.cartProducts = [];
    }
  }

  increase(product: CartItem) {
    const index = this.cartProducts.findIndex(item => item.id === product.id);
    if (index > -1) {
      this.cartProducts[index].quantity += 1;
      this.saveCart();
    }
  }

  decrease(product: CartItem) {
    const index = this.cartProducts.findIndex(item => item.id === product.id);
    if (index > -1) {
      if (this.cartProducts[index].quantity > 1) {
        this.cartProducts[index].quantity -= 1;
      } else {
        this.remove(product.id);
        return;
      }
      this.saveCart();
    }
  }

  remove(productId: number) {
    this.cartProducts = this.cartProducts.filter(item => item.id !== productId);
    this.saveCart();
  }

  getTotal(): number {
    return this.cartProducts.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
}