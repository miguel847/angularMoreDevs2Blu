import { Routes } from '@angular/router';
import { ListOfContactsPageComponent } from './components/list-of-contacts-page/list-of-contacts-page.component';
import { HomeComponent } from './components/home/home.component';
import { ListOfServicesComponent } from './components/list-of-services/list-of-services.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterServiceComponent } from './components/register-service/register-service.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'contatos', component: ListOfContactsPageComponent},
    {path: 'servicos', component: ListOfServicesComponent},
    {path: 'register-service', component: RegisterServiceComponent}
];
