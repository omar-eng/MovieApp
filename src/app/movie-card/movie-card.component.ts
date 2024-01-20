import { Movie } from '../interfaces/movie';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'] // Corrected property name to styleUrls
})
export class MovieCardComponent {

  isHeartFilled = true;

  @Input() movie!: Movie;

  constructor(private router: Router) {}

  toggleHeart() {
    this.isHeartFilled = !this.isHeartFilled;
  }

  details(id: number) {
    this.router.navigate([`movie-details/${id}`]);
  }
}
