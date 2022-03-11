import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SmallInvoiceComponent } from './components/small-invoice/small-invoice.component';
import { FilterDropdownComponent } from './components/filter-dropdown/filter-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SmallInvoiceComponent,
    FilterDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
