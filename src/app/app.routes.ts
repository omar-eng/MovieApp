import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchListComponent } from './search-list/search-list.component';
import { WishlistComponent } from './wishlist/wishlist.component';

export const routes: Routes = [
    {
        path:"",
        component: MovieListComponent,
        title:"Movie"
    },{
        path:"search/:searchKey",
        component:SearchListComponent,
        title:"Search"
    },
    {
        path:"wishlist",
        component:WishlistComponent,
        title:"Wishlist"
    }
];
