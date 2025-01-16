import { Component } from '@angular/core';
import { AuthService } from '../../../../../../services/auth.service';
import { VerifyForm } from '../../../../../../../shared/interfaces/form';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  standalone: false,
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.css'
})

export class VerifyComponent {
  constructor(private authService: AuthService, private router: Router) {}

  verifyStatus: number | null = null;
  verifyStatus2: number | null = null;
  userId: string | null = null;

  ngOnInit() {
    const storedId = localStorage.getItem('id');
    if (storedId) {
      this.userId = JSON.parse(storedId);
    }
  }

  public onVerifyBtnSubmit(form: NgForm) {
    if (!this.userId) {
      console.error('No User ID available for verification');
      return;
    }

    const verifyData: VerifyForm = { ...form.value, id: this.userId };
    this.authService.sendVerifyRequest(verifyData).subscribe(
      (response) => {
        this.verifyStatus = response.status;
        if (response.status !== 'error') {
          this.router.navigate(['/auth/login']);
        }
      },
      (error) => {
        this.verifyStatus = error.status;
        console.error('Error during verification:', error);
      }
    );
  }

  public resendCode(): void {
    if (!this.userId) {
      console.error('No User ID available for resending code');
      return;
    }

    this.authService.resendVeiryfyRequest(this.userId).subscribe({
      next: (responsee) => {
        localStorage.setItem('id', JSON.stringify(responsee.id));
        this.verifyStatus2 = responsee.status;
      },
      error: (error) => {
        console.error('Error during code resend:', error);
      },
    });
  }
}
