import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: false,
  
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  constructor(private router:Router) {}

  isLogin():boolean {
    return this.router.url.includes('auth/login');
  }

  isRegister():boolean {
    return this.router.url.includes('auth/register');
  }

  isPassword():boolean {
    return this.router.url.includes('auth/password');
  }

  isVerify():boolean {
    return this.router.url.includes('auth/verify');
  }
}
