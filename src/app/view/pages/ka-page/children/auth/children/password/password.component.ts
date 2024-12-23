import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../../../../services/auth.service';

@Component({
  selector: 'app-password',
  standalone: false,
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  constructor(private authService: AuthService) {}
  
  resetRequested:boolean = false;

  public onSubmitBtnClick(form: NgForm) {
    if (form.valid) {
      this.authService.sendPasswordResetRequest(form.value).subscribe({
        next: (response) => {
          this.resetRequested = true;
        }
      });
    }
  }
}
