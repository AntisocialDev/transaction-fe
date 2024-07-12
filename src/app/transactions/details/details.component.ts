import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TransactionsService } from '../services/transactions.service';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [DatePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  transactionFG: FormGroup = new FormGroup({});
  transaction?: any;
  constructor(private transactionService: TransactionsService, private _fb: FormBuilder, private router: Router, private route: ActivatedRoute, private datePipe: DatePipe) {
    this.route.params.subscribe((data) => {

      this.transaction = data;
    })
    this.transactionFG = this._fb.group({
      transactionId: [this.transaction.id, [Validators.required]],
      date: [this.formatDate(this.transaction.date), [Validators.required]],
      comments: [this.transaction.Comments, [Validators.required]]
    });
  }

  onSubmit() {
    this.transactionService.updateTransactionById(this.transactionFG.value.transactionId, this.transactionFG.value.comments).subscribe((res) => {
      if (res) {
        this.router.navigate(['/transactions/list'])  
      }
    })
  }

  private formatDate(date: string | null) {
    if (date === null) {
      return ''; // Handle null date
    }
    return this.datePipe.transform(date, 'dd/MM/yyyy');
  }
}
