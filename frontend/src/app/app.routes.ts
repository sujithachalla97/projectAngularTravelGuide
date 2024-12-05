import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { AuthGuard } from './gaurds/auth.gaurd';
import { HotelsComponent } from './hotels/hotels.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { DestinationsComponent } from './destinations/destinations.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent }, 
    { path: 'signup', component: SignupComponent }, 
    { path: 'booking', component: BookingComponent, },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'hotels', component: HotelsComponent },
    { path: 'trip-details', component: TripDetailsComponent},
    { path: 'destinations', component: DestinationsComponent},
   
];
