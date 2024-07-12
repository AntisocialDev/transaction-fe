import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransactionsService } from '../services/transactions.service';
import { ITransaction } from '../../interfaces/transaction.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  transactions: ITransaction[] = [];
  constructor(private _transactionService: TransactionsService) {

  }

  getAllTransactions() {
    this._transactionService.getAllTransactions().subscribe((res) => {
      if (!res) {

      }
      this.transactions = res.data;
    });
  }

  ngOnInit(): void {
    this.getAllTransactions();
  }

}
