import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { Top250MoviesComponent } from './components/top250-movies/top250-movies.component';




@NgModule({
  declarations: [
    Top250MoviesComponent,
  
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
