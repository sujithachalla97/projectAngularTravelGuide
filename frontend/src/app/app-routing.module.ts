import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HotelsComponent } from './hotels/hotels.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BookingComponent } from './booking/booking.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { DestinationsComponent } from './destinations/destinations.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'feedback', component: FeedbackComponent},
  { path: 'booking', component: BookingComponent},
  { path: 'trip-details', component: TripDetailsComponent},
  { path: 'destinations', component: DestinationsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{ 

}
