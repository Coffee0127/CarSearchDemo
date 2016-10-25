import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Subpage2Component } from './page1/subpage2/subpage2.component';
import { Subpage1Component } from './page1/subpage1/subpage1.component';
import { PageDetailComponent } from './page1/page-detail/page-detail.component';
import { Page2Component } from './page2/page2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'page1', component: Page1Component,
      children: [
        { path: '', redirectTo: 'subpage1' },
        { path: 'subpage1', component: Subpage1Component },
        { path: 'subpage2', component: Subpage2Component },
        { path: ':id', component: PageDetailComponent }
      ]
    },
    { path: 'page2', component: Page2Component },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
