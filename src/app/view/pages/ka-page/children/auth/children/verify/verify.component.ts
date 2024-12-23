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
  constructor(private authService:AuthService, private router:Router) {}

  verifyStatus:number | null = null;

  public onVerifyBtnSubmit(form: NgForm) {
    let id:any = JSON.parse(localStorage.getItem('id') || '')
    if(id == null) {
      console.error('id not found');
      return;
    }
    form.controls['id'].setValue(id);
      let verifyData:VerifyForm = form.value;
      this.authService.sendVerifyRequest(verifyData)
      .subscribe(
        (response) => {
          console.log(response);
          this.verifyStatus = response.status;
          if (response.status != 'error') {
            this.router.navigate(['/auth/login']);
          }else {
            console.log('error');
          }
        },
        (error) => {
          this.verifyStatus = error.status;
          console.error(error);
        }
      );
    }
    resendCode(userId: string):void {
      this.authService.resendVeiryfyRequest(userId)
      .subscribe({
        next:(response) => {
          console.log(response);
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
}
