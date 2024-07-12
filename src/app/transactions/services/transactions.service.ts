import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITransaction } from '../../interfaces/transaction.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  apiUrl: string = 'http://localhost:3000/transactions';

  constructor(private _httpClient: HttpClient) {
  }

  getAllTransactions(){
    return this._httpClient.get<any>(this.apiUrl, {
      params: {
        startDate: '2021-01-01',
        endDate: '2024-01-01'
      }
    });
  }

  updateTransactionById(transactionId: string, Comments: string){
    return this._httpClient.patch(`${this.apiUrl}/${transactionId}`, {Comments: Comments})
  }
}
