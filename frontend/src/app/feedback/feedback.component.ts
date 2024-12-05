import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-feedback',
  standalone: true,
  
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  feedback = {
    name: '',
    email: '',
    destination: '',
    rating: '',
    comments: ''
  };

  onSubmit() {
    console.log(this.feedback);
  }
}
