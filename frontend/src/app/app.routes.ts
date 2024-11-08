import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';



// Define the routes for your components
export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent }, 
    { path: '', component: HomeComponent }, 
    { path: 'login', component: LoginComponent }, 
    { path: 'signup', component: SignupComponent }, 
    { path: 'dashboard', component: DashboardComponent }, 
     // Default route
    
];
