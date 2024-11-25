import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  async onLogin() {
    const credentials = { email: this.email, password: this.password };
    try {
      const response = await this.authService.login(credentials);
      console.log('Login successful:', response);
      localStorage.setItem('user', JSON.stringify(response));
      alert('Login Successful');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid email or password');
    }
  }
}
