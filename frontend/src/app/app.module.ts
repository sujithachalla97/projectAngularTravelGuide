import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Ensure this is imported

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    LoginComponent,SignupComponent,AppRoutingModule,RouterModule,HomeComponent
    
    // Import here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
