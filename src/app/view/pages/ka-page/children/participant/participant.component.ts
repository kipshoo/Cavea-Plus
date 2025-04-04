import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipantService } from '../../../../services/participant.service';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-participant',
  standalone: false,
  
  templateUrl: './participant.component.html',
  styleUrl: './participant.component.css'
})
export class ParticipantComponent {
moviesArray:Array<any> = [];
  hoveredMovie: any = null;
  blockObject: any = [];

  constructor(private activatedRoute:ActivatedRoute, private participantService:ParticipantService, private authService:AuthService, private router:Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let slugName = params['slugName']
      
      if(!slugName){
        alert('erroe')
      }else{
        this.participantService.getParticipants(slugName)
        .subscribe((response) => {
          this.moviesArray = response.items;
          this.blockObject = response.participant;
          console.log(this.moviesArray, 'wrhgerh');
          console.log(this.blockObject, '111111111');
          
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
