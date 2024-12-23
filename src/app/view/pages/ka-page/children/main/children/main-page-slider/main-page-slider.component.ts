import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainService } from '../../../../../../services/main.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-main-page-slider',
  standalone: false,
  
  templateUrl: './main-page-slider.component.html',
  styleUrl: './main-page-slider.component.css'
})
export class MainPageSliderComponent implements OnInit, OnDestroy {
  constructor(private mainService:MainService) { }

  sliderArray:Array<any> = [];
  unsubSubject:Subject<boolean> = new Subject();

  ngOnInit(): void {
    this.getSliderData();
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

  currentIndex = 0;

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

}
