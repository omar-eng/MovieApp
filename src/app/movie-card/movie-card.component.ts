import { Movie } from '../interfaces/movie';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { Router } from '@angular/router';

=======
import { WishlistService } from '../services/wishlist.service';
>>>>>>> f9d9976a4ebdfb2ee4228f841548292ea3603e0f
@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'] // Corrected property name to styleUrls
})
export class MovieCardComponent {

<<<<<<< HEAD
  isHeartFilled = true;

  @Input() movie!: Movie;

  constructor(private router: Router) {}
=======
  isHeartFilled!: boolean;

  @Input() movie!: Movie;
>>>>>>> f9d9976a4ebdfb2ee4228f841548292ea3603e0f

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

  details(id: number) {
    this.router.navigate([`movie-details/${id}`]);
  }
}
