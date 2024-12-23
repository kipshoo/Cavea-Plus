import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-privacy-and-policy-modal',
  standalone: false,
  
  templateUrl: './privacy-and-policy-modal.component.html',
  styleUrl: './privacy-and-policy-modal.component.css'
})
export class PrivacyAndPolicyModalComponent implements OnInit, OnDestroy {
  constructor(private authService:AuthService) { }
  data$!:Observable<any>
  empty!:string
  blob!:Blob

  ngOnDestroy(): void {
    
  }
  ngOnInit(): void {
    this.getThermOfUseData();
  }


  private getThermOfUseData():void { 
    this.authService.getThermOfUse()
    .subscribe((response) => {
      
    }, (err) => {
      if(err.status == 200){
        this.empty = err.error.text;
      }
   });
  }
}
