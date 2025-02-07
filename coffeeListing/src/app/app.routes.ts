import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'coffees', component: CoffeeListComponent},
    //Las dos siguientes paths las añadiré cuando cree los módulos de about y contact
    // { path: 'about', loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule) },
    // { path: 'contact', loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule) },
    { path: '**', redirectTo: '' } // Default route to home component
];
