import { Movie } from '../interfaces/movie';
import { Component,Input,Output ,EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {

  isHeartFilled = true;

  @Input () movie!:Movie;
  @Output() sendToparent=new EventEmitter<number>();



  toggleHeart() {
    this.isHeartFilled = !this.isHeartFilled;
  }
}
