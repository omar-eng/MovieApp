import { Component } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import {FormsModule} from '@angular/forms';
import {NgModel} from '@angular/forms';
import { RequestapiService } from '../services/requestapi.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule,MovieCardComponent,FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
 movies?:Movie[];
 movie?:Movie;
 title?:string;

 constructor(private movierequestService: RequestapiService){}


 ngOnInit() {
  this.movierequestService.getpopularmovies().subscribe((data)=>{
    console.log(data);
    this.movies=data.results;
    console.log(this.movies);
  })
 }

 


recievedFromchild(id:number){
  this.movies=this.movies?.filter((movie: { id: number; }) => movie.id!==id);
}
 Search(){

 }
}
