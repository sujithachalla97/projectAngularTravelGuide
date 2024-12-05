import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
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

  constructor(private authService: AuthService, private router: Router) {}

  async onLogin(event: Event) {
    event.preventDefault();
    const credentials = { email: this.email, password: this.password };
    console.log(credentials)
    try {
      const response = await this.authService.login(credentials);
      console.log('Login successful:', response);
      localStorage.setItem('user', JSON.stringify(response.json()));
      alert('Login Successful');
      this.router.navigate(['/home'])
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid email or password');
    }
  }
}
