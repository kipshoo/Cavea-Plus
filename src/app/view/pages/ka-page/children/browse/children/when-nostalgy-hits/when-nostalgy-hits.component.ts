import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../../../../../../services/movies.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-when-nostalgy-hits',
  standalone: false,
  
  templateUrl: './when-nostalgy-hits.component.html',
  styleUrl: './when-nostalgy-hits.component.css'
})
export class WhenNostalgyHitsComponent implements OnInit, OnDestroy {
  constructor(private moviesService:MoviesService) { }
  unsubSubject:Subject<boolean> = new Subject();
  moviesArray:Array<any> = []
  
    ngOnInit(): void {
      this.getWhenNostalgyHitsData();
    }
  
    private getWhenNostalgyHitsData(): void {
      this.moviesService.getWhenNostalgyHits()
        .pipe(
          takeUntil(this.unsubSubject)
        )
        .subscribe((response) => {
          this.moviesArray.push(response.items);
          console.log(response.items);
        });
    }
    
    ngOnDestroy(): void {
      this.unsubSubject.next(true);
      this.unsubSubject.unsubscribe();
    }

  hoveredIndex: number | null = null;

  onHover(index: number | null) {
    this.hoveredIndex = index;
  }
}
