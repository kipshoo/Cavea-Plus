import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-privacy-and-policy-modal',
  standalone: false,
  
  templateUrl: './privacy-and-policy-modal.component.html',
  styleUrl: './privacy-and-policy-modal.component.css'
})
export class PrivacyAndPolicyModalComponent implements OnInit, OnDestroy {
  @Output() closeEmitter:EventEmitter<boolean> = new EventEmitter();
  constructor(private authService:AuthService) { }
  data$!:Observable<any>
  empty!:string
  blob!:Blob

  ngOnDestroy(): void {
    
  }
  ngOnInit(): void {
    this.getThermOfUseData();
  }


  private getThermOfUseData(): void {
    this.authService.getThermOfUse()
    .subscribe(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.error(err);
        if (err.status === 200) {
          this.empty = err.error.text;
        }
      }
    );
  }
  
  onClsBtnClick() {
    this.closeEmitter.emit(true);
  }
}
