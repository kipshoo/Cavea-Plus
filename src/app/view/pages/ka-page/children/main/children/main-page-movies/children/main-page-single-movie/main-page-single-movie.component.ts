import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-page-single-movie',
  standalone: false,
  templateUrl: './main-page-single-movie.component.html',
  styleUrls: ['./main-page-single-movie.component.css']
})
export class MainPageSingleMovieComponent {
  @Input() movies: any;
  hoveredIndex: number | null = null; // Track which container is hovered

  onHover(index: number | null) {
    this.hoveredIndex = index;
  }
}
