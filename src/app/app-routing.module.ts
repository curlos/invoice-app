import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { InvoiceItemComponent } from './pages/invoice-item/invoice-item.component';

const routes: Routes = [
  { path: '', component: InvoicesComponent },
  { path: 'invoice/:id', component: InvoiceItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
