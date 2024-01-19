import { Movie } from '../interfaces/movie';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../services/wishlist.service';
@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {

  isHeartFilled!: boolean;

  @Input() movie!: Movie;

  constructor(private wishListService: WishlistService) {
   }
  ngOnInit() {
    this.isHeartFilled = this.wishListService.isMovieInWishList(this.movie);
  }
  toggleHeart() {
    if (this.isHeartFilled) {
      this.wishListService.removeMovieFromWishList(this.movie);
    } else {
      this.wishListService.addMovieToWishList(this.movie);
    }
    this.isHeartFilled = !this.isHeartFilled;
  }
}
