import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParticipantService } from '../../../../services/participant.service';

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

  constructor(private activatedRoute:ActivatedRoute, private participantService:ParticipantService){}

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
}
