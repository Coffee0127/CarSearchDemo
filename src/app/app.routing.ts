import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact';
import { HomeComponent } from './home';
import { PageNotFoundComponent } from './page-not-found';

const appRoutes: Routes = [
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);