import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '/home' }
];

export const appRouterProviders = [
  provideRouter(routes)
];