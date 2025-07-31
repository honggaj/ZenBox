import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; // <-- ĐẢM BẢO DÒNG NÀY CÓ

// Định nghĩa interface cho sản phẩm trong giỏ hàng
interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  quantity: number;
}

// KHÔNG CẦN INTERFACE CustomerInfo NỮA VÌ DỮ LIỆU ĐƯỢC LẤY TRỰC TIẾP TỪ FORM
// CŨNG KHÔNG CẦN KHAI BÁO BIẾN customerInfo TRONG COMPONENT

@Component({
  selector: 'app-checkout',
  standalone: false, // Giữ nguyên false nếu bạn dùng Module
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartProducts: CartItem[] = [];

  // KHÔNG CẦN BIẾN customerInfo NỮA Ở ĐÂY

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadCart();
    // KHÔNG CẦN GỌI loadCustomerInfo() Ở ĐÂY NỮA
  }

  loadCart() {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cartProducts = JSON.parse(cartData);
    } else {
      this.cartProducts = [];
    }
    if (this.cartProducts.length === 0) {
      alert('Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán.');
      this.router.navigate(['/cart']);
    }
  }

  // KHÔNG CẦN HÀM loadCustomerInfo() Ở ĐÂY NỮA

  getTotal(): number {
    return this.cartProducts.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  // ĐẢM BẢO CHỮ KÝ HÀM LÀ placeOrder(form: NgForm)
  placeOrder(form: NgForm) {
    if (form.invalid) {
      alert('Vui lòng điền đầy đủ thông tin bắt buộc (Họ và tên, Số điện thoại, Địa chỉ giao hàng).');
      return;
    }

    // Lấy dữ liệu từ form thông qua form.value
    const customerData = form.value;

    // Lưu thông tin khách hàng vào localStorage (nếu muốn tự động điền lần sau)
    localStorage.setItem('customerInfo', JSON.stringify(customerData));

    // Bắt đầu phần lưu đơn hàng vào lịch sử (đã làm ở bước trước)
    const newOrder = {
      orderId: 'ORDER-' + Date.now(), // ID đơn hàng duy nhất dựa trên timestamp
      orderDate: new Date().toLocaleString('vi-VN'), // Ngày giờ đặt hàng (định dạng Việt Nam)
      customerInfo: customerData,
      items: this.cartProducts, // Các mặt hàng trong giỏ hàng
      totalAmount: this.getTotal()
    };

    // Lấy danh sách đơn hàng hiện có từ localStorage
    let orderHistory: any[] = JSON.parse(localStorage.getItem('orderHistory') || '[]');

    // Thêm đơn hàng mới vào đầu danh sách (đơn hàng mới nhất ở trên cùng)
    orderHistory.unshift(newOrder);

    // Lưu lại danh sách đơn hàng đã cập nhật vào localStorage
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    // Kết thúc phần lưu đơn hàng

    console.log('Thông tin đơn hàng:', newOrder);

    alert('Đặt hàng thành công! Cảm ơn bạn đã mua sắm tại ZenBox.');

    // Xóa giỏ hàng sau khi đặt hàng thành công
    localStorage.removeItem('cart');
    this.cartProducts = [];

    // Tùy chọn: Reset form sau khi đặt hàng thành công để xóa dữ liệu đã nhập
    form.resetForm();

    // DÒNG NÀY ĐÃ ĐƯỢC SỬA: Điều hướng ngay lập tức đến trang lịch sử đặt hàng
    this.router.navigate(['/order-history']);
  }
}