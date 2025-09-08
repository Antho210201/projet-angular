import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TransactionsService } from '../transactions.service';


@Component({
  selector: 'app-transaction-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './transaction-detail.component.html',
  styleUrl: './transaction-detail.component.css'
})
export class TransactionDetailComponent implements OnInit {

  @Input() transaction!: any;

  constructor(private route: ActivatedRoute, private service: TransactionsService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id){
      this.service.getTransactionDetail(id).subscribe(data => this.transaction = data);
    }
  }

}
