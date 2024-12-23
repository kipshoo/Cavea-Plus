import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { PrivacyAndPolicyModalComponent } from '../../../../../../modals/privacy-and-policy-modal/privacy-and-policy-modal.component';
import { AuthService } from '../../../../../../services/auth.service';
import { RegisterForm } from '../../../../../../../shared/interfaces/form';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router:Router) {}

  @ViewChild('modalContainer', { read: ViewContainerRef }) modalContainer!: ViewContainerRef;

  selectedBirthDay: number = 1;
  selectedBirthMonth: number = 12;
  selectedBirthYear: number = 2024;
  selectedGender: string = 'male';
  birthDays: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  birthYears: number[] = Array.from({ length: 2024 - 1925 + 1 }, (_, i) => 2024 - i);
  showPassword: boolean = false;
  showPasswordd: boolean = false;
  registerStatus: number | null = null;
  password: string = '';
  confirmPassword: string = '';
  isTermsAccepted: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  togglePasswordVisibilityConf(): void {
    this.showPasswordd = !this.showPasswordd;
  }

  public onPrvcAndPlcClick() {
    this.modalContainer.createComponent(PrivacyAndPolicyModalComponent);
  }

  public onRegisterFormSubmit(form: NgForm) {
    if (this.password !== this.confirmPassword) {
      return;
    };
    

    if (form.valid) {
      let registerData:RegisterForm = form.value;
      this.authService.sendRegisterRequest(registerData).subscribe(
        (response) => {
          console.log(response);
          localStorage.setItem('id', JSON.stringify(response.id))
          this.ifRegisteredGoToVerify();
        },
        (error) => {
          this.registerStatus = error.status;
          console.error(error);
        }
      );
    }
  }
  // canSubmit(): boolean {
  //   return this.form.valid && this.isTermsAccepted;
  // }

  public ifRegisteredGoToVerify() {
    this.router.navigate(['/auth/verify']);
  }
}
