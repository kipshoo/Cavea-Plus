import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../../services/auth.service';
import { NgForm } from '@angular/forms';
import { LoginForm } from '../../../../../../../shared/interfaces/form';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private authService:AuthService) {}

  showPassword:boolean = false;
  loginStatus:number | null = null;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  public onLoginFormSubbmit(form: NgForm) {
    let loginData: LoginForm = form.value;
    this.authService.sendLoginRequest(loginData)
    .subscribe(
      (response) => {
        console.log(response);
        this.loginStatus = response.status;
      },
      (error) => {
        this.loginStatus = error.status;
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
    localStorage.removeItem('id')
  }
}
