import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  quantity?: number;
}

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'ZenBox Classic',
      image: 'https://storage.googleapis.com/a1aa/image/503a3ef5-baf6-4142-876d-82e789e57565.jpg',
      price: 290000,
      description: 'Hộp Zen cơ bản giúp bạn bắt đầu hành trình thiền định, bao gồm nến thơm và hướng dẫn cơ bản.',
      quantity: 1
    },
    {
      id: 2,
      name: 'ZenBox Relax Music',
      image: 'https://storage.googleapis.com/a1aa/image/d4ffdc87-cace-4813-a669-c067825bc6bf.jpg',
      price: 390000,
      description: 'Bao gồm loa mini và bộ nhạc thiền giúp thư giãn sau ngày dài mệt mỏi.',
      quantity: 1
    },
    // Add thêm nếu muốn
  ];

  getTotal() {
    return this.products.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  }

  increase(product: Product) {
    product.quantity! += 1;
  }

  decrease(product: Product) {
    if (product.quantity! > 1) {
      product.quantity!--;
    }
  }

  remove(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }
}
