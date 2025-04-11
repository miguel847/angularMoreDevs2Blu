import { Routes } from '@angular/router';
import { ListOfContactsPageComponent } from './components/list-of-contacts-page/list-of-contacts-page.component';
import { HomeComponent } from './components/home/home.component';
import { ListOfServicesComponent } from './components/list-of-services/list-of-services.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'contatos', component: ListOfContactsPageComponent},
    {path: 'servicos', component: ListOfServicesComponent},
];
