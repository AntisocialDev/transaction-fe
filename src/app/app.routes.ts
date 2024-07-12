import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'transactions',
        loadChildren:()=> import('./transactions/transactions.module').then((m)=> m.TransactionsModule),
    },

    {
        path: '',
        redirectTo: 'transactions',
        pathMatch: 'full'
    }
];
