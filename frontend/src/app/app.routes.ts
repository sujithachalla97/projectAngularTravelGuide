import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingComponent } from './booking/booking.component';


// Define the routes for your components
export const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent }, 
    { path: 'signup', component: SignupComponent }, 
    { path: 'booking', component: BookingComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', redirectTo: '/home' }
     // Default route
    
];
