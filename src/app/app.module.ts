import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SmallInvoiceComponent } from './components/small-invoice/small-invoice.component';
import { FilterDropdownComponent } from './components/filter-dropdown/filter-dropdown.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { InvoiceItemComponent } from './pages/invoice-item/invoice-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SmallInvoiceComponent,
    FilterDropdownComponent,
    InvoicesComponent,
    InvoiceItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
