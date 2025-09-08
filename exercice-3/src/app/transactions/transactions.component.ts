import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Transaction, TransactionsService } from './transactions.service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit {

  transactions: Transaction[] = [];
  sortKey: keyof Transaction = "date";
  sortAsc = true;

  constructor(private service: TransactionsService) {}

  ngOnInit() {
    this.service.getTransactions().subscribe(data => this.transactions = data);
  }

  sortBy(key: keyof Transaction) {
    this.sortKey = key;
    this.sortAsc = !this.sortAsc;
    this.transactions.sort((a,b) =>
      this.sortAsc ? (a[key] > b[key] ? 1 : -1) : (a[key] < b[key] ? 1 : -1)
    );
  }
}
