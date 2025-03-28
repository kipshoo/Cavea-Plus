import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainService } from '../../../../../../services/main.service';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page-slider',
  standalone: false,
  
  templateUrl: './main-page-slider.component.html',
  styleUrl: './main-page-slider.component.css'
})
export class MainPageSliderComponent implements OnInit, OnDestroy {
  constructor(private mainService:MainService, private authService:AuthService, private router:Router) { }

  sliderArray:Array<any> = [];
  unsubSubject:Subject<boolean> = new Subject();
  currentIndex = 0;

  ngOnInit(): void {
    this.getSliderData();
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  private getSliderData():void {
    this.mainService.getMainPageSlider()
    .pipe(
      takeUntil(this.unsubSubject)
    )
    .subscribe((response) => {
      this.sliderArray = response.slides;
    })
  }

  ngOnDestroy(): void {
    this.unsubSubject.next(true);
    this.unsubSubject.unsubscribe();
  }

  changeSlide(index: number): void {
    this.currentIndex = index;
  }

  previousSlide(): void {
    if (this.currentIndex === 0) {
      this.currentIndex = this.sliderArray.length - 1;
    } else {
      this.currentIndex--;
    }
  }
  
  nextSlide(): void {
    if (this.currentIndex === this.sliderArray.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

  onBtnClickGuard() {
    const isLoggedIn = this.authService.isLoggedIn();
    console.log('AuthGuard check:', isLoggedIn);
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['auth/login']);
      return false;
    }
  }
}
