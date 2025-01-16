import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../../services/movies.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-movies',
  standalone: false,
  
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  constructor(private moviesService:MoviesService){}
  
  hoveredMovie: any = null;

  unSubSubject:Subject<boolean> = new Subject()
  ngOnDestroy(): void {
    this.unSubSubject.next(true)
    this.unSubSubject.unsubscribe()
  }
  ngOnInit(): void {
    this.fetchmovies()
  }
  filteredArray:Array<any> = []
  movieArray:Array<any> = []

  public fetchmovies(){
    let limit = 100
    let offset = 0
    this.fetchmoviespaginated(limit, offset)
  }
  private fetchmoviespaginated(limit:number, offset:number){
    this.moviesService.getcards(limit, offset)
    .pipe(
      takeUntil(this.unSubSubject)
    )
    .subscribe((response) => {
      this.movieArray.push(...response.items)
      if (this.movieArray.length < response.count) {
        this.fetchmoviespaginated(limit, offset + limit)
      }
    })
  }
  updateMovieArray(filteredMovies:Array<any>) {
    this.movieArray = [...filteredMovies];
  }

  onHover(movie: any | null) {
    this.hoveredMovie = movie;
  }
}
