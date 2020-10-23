import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { TravelPageComponent } from './travel-page/travel-page.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';



const routes: Routes = [
  {
    path:"", component:HomePageComponent
  },
  {
    path:"blog", component:BlogPageComponent
  },
  {
    path:"travel", component:TravelPageComponent
  },
  {
    path:"cart", component:CartPageComponent
  },
  {
  path:'tours/:tourId', component:TourDetailsComponent
},
{
  path:'blogs/:blogId', component:BlogDetailsComponent
},

{
  path: 'cartpage', component: CartPageComponent
},
{
  path: 'about', component: AboutUsComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
