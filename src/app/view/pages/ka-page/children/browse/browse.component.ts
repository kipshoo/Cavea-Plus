import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../../../services/movies.service';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-browse',
  standalone: false,
  
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent implements OnInit {
  moviesArray:Array<any> = [];
  hoveredMovie: any = null;
  blockObject: any = {};

  constructor(private activatedRoute:ActivatedRoute, private moviesService:MoviesService,private authService:AuthService, private router:Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let slugName = params['slugName']
      
      if(!slugName){
        alert('erroe')
      }else{
        this.moviesService.getMoviesBySlugNmae(slugName)
        .subscribe((response) => {
          this.moviesArray = response.items;
          this.blockObject = response.block;
          console.log(this.moviesArray);
        })
      }
    })
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
