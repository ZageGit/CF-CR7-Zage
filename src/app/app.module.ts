import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { TravelPageComponent } from './travel-page/travel-page.component';
import { FooterComponent } from './footer/footer.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    BlogPageComponent,
    CartPageComponent,
    TravelPageComponent,
    FooterComponent,
    TourDetailsComponent,
    AboutUsComponent,
    BlogDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
