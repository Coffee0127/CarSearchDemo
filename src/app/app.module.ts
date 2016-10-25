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
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Subpage1Component } from './page1/subpage1/subpage1.component';
import { Subpage2Component } from './page1/subpage2/subpage2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListboxComponent,
    CarDetailComponent,
    CarRecordComponent,
    MyCurrencyPipe,
    HomeComponent,
    Page1Component,
    Page2Component,
    PageNotFoundComponent,
    Subpage1Component,
    Subpage2Component
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
