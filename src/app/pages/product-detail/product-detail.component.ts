import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: number | null = null;

  // ✅ Khai báo product
  product: any;

  // ✅ Fake danh sách product (hoặc sau này import từ service)
 products = [
    {
      id: 1,
      name: 'ZenBox Classic',
      image: 'https://storage.googleapis.com/a1aa/image/503a3ef5-baf6-4142-876d-82e789e57565.jpg',
      price: 290000,
      description: 'Hộp Zen cơ bản giúp bạn bắt đầu hành trình thiền định, bao gồm nến thơm và hướng dẫn cơ bản.'
    },
    {
      id: 2,
      name: 'ZenBox Relax Music',
      image: 'https://storage.googleapis.com/a1aa/image/d4ffdc87-cace-4813-a669-c067825bc6bf.jpg',
      price: 390000,
      description: 'Bao gồm loa mini và bộ nhạc thiền giúp thư giãn sau ngày dài mệt mỏi.'
    },
    {
      id: 3,
      name: 'ZenBox Tea Set',
      image: 'https://storage.googleapis.com/a1aa/image/feb0c90a-2da7-43e0-a6ce-926d9f8712b2.jpg',
      price: 320000,
      description: 'Set trà xanh thư giãn, kèm ấm nhỏ xinh giúp bạn tận hưởng từng khoảnh khắc yên bình.'
    },
    {
      id: 4,
      name: 'ZenBox Accessories',
      image: 'https://storage.googleapis.com/a1aa/image/8dacd23a-9009-4749-55e7-324d516d14e7.jpg',
      price: 250000,
      description: 'Phụ kiện thiền: vòng tay gỗ đàn hương, đá năng lượng giúp tăng cường tập trung.'
    },
    {
      id: 5,
      name: 'ZenBox Premium',
      image: 'https://storage.googleapis.com/a1aa/image/9f828545-201c-4885-7788-d0b547cbd348.jpg',
      price: 490000,
      description: 'Phiên bản cao cấp với nến thơm, trà, nhạc và phụ kiện đầy đủ cho trải nghiệm trọn vẹn.'
    },
    {
      id: 6,
      name: 'ZenBox Calm Music',
      image: 'https://storage.googleapis.com/a1aa/image/09e583b1-82df-4923-987c-dc25f6d4e7a9.jpg',
      price: 370000,
      description: 'Album nhạc thiền giúp ngủ ngon, kèm hướng dẫn sử dụng app thiền online.'
    },
    {
      id: 7,
      name: 'ZenBox Green Tea',
      image: 'https://storage.googleapis.com/a1aa/image/b6364a2a-5b2b-406a-5e5e-7e2d43028578.jpg',
      price: 310000,
      description: 'Trà xanh hữu cơ tuyển chọn, giúp cơ thể thanh lọc và tinh thần minh mẫn.'
    },
    {
      id: 8,
      name: 'ZenBox Candle Set',
      image: 'https://storage.googleapis.com/a1aa/image/2aace678-518b-475d-83f6-44b20930e976.jpg',
      price: 280000,
      description: 'Bộ nến thơm với tinh dầu thiên nhiên như oải hương, cam ngọt và bạc hà.'
    },
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === this.productId);
  }

  // ✅ Hàm addToCart() (placeholder, chưa cần xử lý logic giỏ hàng)
  addToCart() {
    alert(`Đã thêm "${this.product.name}" vào giỏ hàng! 🛒`);
  }
}
