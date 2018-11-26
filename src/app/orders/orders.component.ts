import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Order } from '../models/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[];
  displayedColumns: string[] = ['id', 'userName', 'total', 'date'];
  dataSource;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getAll("").subscribe(response => {
      this.orders = response as Order[];
      this.dataSource = new MatTableDataSource(this.orders);

    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
