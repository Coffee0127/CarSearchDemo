import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ListboxComponent } from './listbox/listbox.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarRecordComponent } from './car-record/car-record.component';
import { MyCurrencyPipe } from './shared/my-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListboxComponent,
    CarDetailComponent,
    CarRecordComponent,
    MyCurrencyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
