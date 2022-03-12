import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FilterDropdownComponent } from './components/filter-dropdown/filter-dropdown.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { SmallInvoiceItemComponent } from './components/small-invoice-item/small-invoice-item.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { InvoiceItemComponent } from './pages/invoice-item/invoice-item.component';
import { SidenavNewFormComponent } from './components/sidenav-new-form/sidenav-new-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FilterDropdownComponent,
    InvoicesComponent,
    SmallInvoiceItemComponent,
    CheckboxComponent,
    InvoiceItemComponent,
    SidenavNewFormComponent
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
