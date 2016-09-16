import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ListboxComponent } from './listbox/listbox.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarRecordComponent } from './car-record/car-record.component';
import { MyPipePipe } from './my-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListboxComponent,
    CarDetailComponent,
    CarRecordComponent,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
