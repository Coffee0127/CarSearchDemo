import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ListboxComponent } from './listbox/listbox.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarRecordComponent } from './car-record/car-record.component';
import { MyPipePipe } from './my-pipe.pipe';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListboxComponent,
    CarDetailComponent,
    CarRecordComponent,
    MyPipePipe,
    ContactComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
