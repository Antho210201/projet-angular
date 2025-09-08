import { Routes } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionDetailComponent } from './transactions/transaction-detail/transaction-detail.component';

export const routes: Routes = [
    { path: "", component: TransactionsComponent },
    { path: "transaction/:id", component: TransactionDetailComponent}
];
