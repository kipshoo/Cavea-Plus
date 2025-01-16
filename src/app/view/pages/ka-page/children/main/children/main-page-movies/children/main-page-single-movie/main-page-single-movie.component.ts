import { Component, Input } from '@angular/core';
import { AuthService } from '../../../../../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page-single-movie',
  standalone: false,
  templateUrl: './main-page-single-movie.component.html',
  styleUrls: ['./main-page-single-movie.component.css']
})
export class MainPageSingleMovieComponent {
  constructor(private authService:AuthService, private router:Router) { }
  @Input() movies: any;
  hoveredMovie: any = null;

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
