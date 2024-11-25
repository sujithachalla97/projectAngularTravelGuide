import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  
  private getCookie(name: string): string | null {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
      const [key, value] = cookie.split('=');
      if (key === name) return value;
    }
    return null;
  }
  
  constructor(private http: HttpClient) {}

  isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    const token = this.getCookie('jwtToken');
    return !!user && !!token;
  }

  async login(credentials: { email: string; password: string }): Promise<any> {
      try {
        const response = await fetch(`${this.baseUrl}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
          credentials: 'include'
        });
  
        if (!response.ok) {
          throw new Error(`Login failed: ${response.statusText}`);
        }
  
        return await response.json();
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
  }

  signup(data: { firstName: string; lastName: string; email: string; password: string, confirmPassword: string, gender: string, phone: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, data);
  }

}
