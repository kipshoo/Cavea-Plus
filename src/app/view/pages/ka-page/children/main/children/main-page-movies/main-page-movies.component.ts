import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MoviesService } from '../../../../../../services/movies.service';

@Component({
  selector: 'app-main-page-movies',
  standalone: false,
  
  templateUrl: './main-page-movies.component.html',
  styleUrl: './main-page-movies.component.css'
})
export class MainPageMoviesComponent implements OnInit, OnDestroy {
  constructor(private moviesService:MoviesService) { }
  unsubSubject:Subject<boolean> = new Subject();
  moviesArray:Array<any> = []

  ngOnInit(): void {
    this.getAllMovies();
  }

  private getAllMovies():void {
    for(let i = 0; i <=18; i += 3){
      this.moviesService.getMovies(i)
      .pipe(
        takeUntil(this.unsubSubject)
      )
      .subscribe((response) => {
        this.moviesArray.push(response.items);
        console.log(response.items);
      })
    }
  }
  
  ngOnDestroy(): void {
    this.unsubSubject.next(true);
    this.unsubSubject.unsubscribe();
  }
}
