import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { PcarouselComponent } from './pcarousel/pcarousel.component';
import { ProductService } from './services/product.service';


@NgModule({
  declarations: [
    AppComponent,
    PcarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule.forRoot()
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
