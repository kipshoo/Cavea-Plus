import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MoviesAndSeriesService } from '../../../../services/movies-and-series.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-tv-shows',
  standalone: false,
  
  templateUrl: './tv-shows.component.html',
  styleUrl: './tv-shows.component.css'
})
export class TvShowsComponent {
constructor(private seriesService:MoviesAndSeriesService, private authService:AuthService, private router:Router){}
  
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
    this.seriesService.getcards(limit, offset)
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
