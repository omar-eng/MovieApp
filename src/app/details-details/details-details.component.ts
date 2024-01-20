import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { CommonModule } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-details-details',
  standalone: true,
  imports: [CommonModule, NgbRatingModule],
  templateUrl: './details-details.component.html',
  styleUrl: './details-details.component.css'
})
export class DetailsDetailsComponent {
isHeartFilled = true;

@Input() movie ?: any;

toggleHeart(){
  this.isHeartFilled = !this.isHeartFilled;

}
 
}
