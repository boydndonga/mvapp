import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Top250MoviesComponent } from './components/top250-movies/top250-movies.component';

const routes: Routes = [
  {
    path: '',
    component: Top250MoviesComponent
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
