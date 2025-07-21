import { Component, OnInit } from '@angular/core';

// Định nghĩa interface cho cấu trúc đơn hàng
interface Order {
  orderId: string;
  orderDate: string;
  customerInfo: {
    name: string;
    phone: string;
    address: string;
    email?: string;
    notes?: string;
  };
  items: Array<{
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
    quantity: number;
  }>;
  totalAmount: number;
}

@Component({
  selector: 'app-order-history',
  standalone: false, // Giữ nguyên false nếu bạn dùng Module
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orders: Order[] = []; // Mảng để lưu trữ lịch sử đơn hàng

  constructor() { }

  ngOnInit(): void {
    this.loadOrderHistory(); // Tải lịch sử đơn hàng khi component khởi tạo
  }

  loadOrderHistory() {
    const orderHistoryData = localStorage.getItem('orderHistory');
    if (orderHistoryData) {
      this.orders = JSON.parse(orderHistoryData);
    } else {
      this.orders = []; 
    }
  }
}