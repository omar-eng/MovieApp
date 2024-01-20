import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
export const routes: Routes = [
    {
        path:"",
        component: MovieListComponent,
        title:"Movie"
    },
    {
        path:"movie-details/:id",
        component: MovieDetailsComponent,
        title:"Movie Details"
    }
];
