import { Component } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';

import {NgModel} from '@angular/forms';
import { RequestapiService } from '../services/requestapi.service';
import { NgbPaginationConfig, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';@Component({
  selector: 'app-movie-list',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule,MovieCardComponent,FormsModule,NgbPaginationModule],
=======
  imports: [CommonModule,MovieCardComponent],
>>>>>>> f9d9976a4ebdfb2ee4228f841548292ea3603e0f
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
 movies?:Movie[];
 movie?:Movie;
<<<<<<< HEAD
 title?:string;
 page = 1;
 pageSize = 12;  
=======

>>>>>>> f9d9976a4ebdfb2ee4228f841548292ea3603e0f

 constructor(private movierequestService: RequestapiService , private config: NgbPaginationConfig){

 }


 ngOnInit() {
  this.loadMovies();
  this.loadSecondPage();
  this.loadthirdpage();
}

<<<<<<< HEAD
loadMovies() {
  this.movierequestService.getpopularmovies().subscribe((data) => {
    this.movies = data.results;
  });
}

loadSecondPage() {
  this.movierequestService.getpopularmoviess().subscribe((data) => {
    this.movies = this.movies?.concat(data.results);
  });
}

loadthirdpage() {
  this.movierequestService.getpopularmoviess().subscribe((data) => {
    this.movies = this.movies?.concat(data.results);
  });
}





=======
>>>>>>> f9d9976a4ebdfb2ee4228f841548292ea3603e0f
}
