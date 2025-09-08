import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Transaction {
    id: string;
    amount: number;
    balance: number;
    label: string;
    date: string;
}

@Injectable({ providedIn: "root"})
export class TransactionsService {
    constructor(private http: HttpClient) {}
    
    getTransactions(): Observable<Transaction[]> {
        return this.http.get<Transaction[]>("/data/transactions.json");
    }

    getTransactionDetail(id: string): Observable<any> {
       return this.http.get<any>(`/data/${id}.json`) 
    }
}