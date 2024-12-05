import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HotelsComponent } from './hotels/hotels.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';
import { BookingComponent } from './booking/booking.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { DestinationsComponent } from './destinations/destinations.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    DestinationsComponent,
    HotelsComponent,
    FeedbackComponent,
    BookingComponent,
    TripDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    RouterModule
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
