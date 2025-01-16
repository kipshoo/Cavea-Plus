import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../../../services/movies.service';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-single-movie-series-page',
  standalone: false,
  
  templateUrl: './single-movie-series-page.component.html',
  styleUrl: './single-movie-series-page.component.css'
})
export class SingleMovieSeriesPageComponent {
  constructor(private activatedRoute:ActivatedRoute, private moviesService:MoviesService, private authService:AuthService, private router:Router){}

  moviesArray:Array<any> = [];
  recomendedMovies:Array<any> = [];
  hoveredMovie: any = null;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const slugName = params['slugName'];
  
      if (slugName) {
        this.moviesService.getMoviesBySlugNameForSingleMoviePage(slugName).subscribe({
          next: (response) => {
            this.moviesArray.push(response)
            if(this.moviesArray.length > 1) {
            this.moviesArray.shift()}
            console.log('Movie Details:', this.moviesArray);
  
            this.moviesService.getRecomendationMovies(slugName).subscribe({
              next: (recommendations) => {
                this.recomendedMovies = recommendations;
                console.log('Recommended Moviesსსსსს:', this.recomendedMovies);
              },
              error: () => {
                alert('Error fetching recommended movies.');
              }
            });
          },
          error: () => {
            alert('Error fetching movie details.');
          }
        });
      } else {
        alert('Invalid slug name.');
      }
    });
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
