import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
<<<<<<< HEAD
import { MovieDetailsComponent } from './movie-details/movie-details.component';
=======
import { SearchListComponent } from './search-list/search-list.component';
import { WishlistComponent } from './wishlist/wishlist.component';

>>>>>>> f9d9976a4ebdfb2ee4228f841548292ea3603e0f
export const routes: Routes = [
    {
        path:"",
        component: MovieListComponent,
        title:"Movie"
<<<<<<< HEAD
    },
    {
        path:"movie-details/:id",
        component: MovieDetailsComponent,
        title:"Movie Details"
=======
    },{
        path:"search/:searchKey",
        component:SearchListComponent,
        title:"Search"
    },
    {
        path:"wishlist",
        component:WishlistComponent,
        title:"Wishlist"
>>>>>>> f9d9976a4ebdfb2ee4228f841548292ea3603e0f
    }
];
