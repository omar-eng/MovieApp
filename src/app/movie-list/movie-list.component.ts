import { Component } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import {FormsModule} from '@angular/forms';
import {NgModel} from '@angular/forms';
import { RequestapiService } from '../services/requestapi.service';
import { NgbPaginationConfig, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule,MovieCardComponent,FormsModule,NgbPaginationModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
 movies?:Movie[];
 movie?:Movie;
 title?:string;
 page = 1;
 pageSize = 12;  

 constructor(private movierequestService: RequestapiService , private config: NgbPaginationConfig){

 }


 ngOnInit() {
  this.loadMovies();
  this.loadSecondPage();
  this.loadthirdpage();
}

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





}
