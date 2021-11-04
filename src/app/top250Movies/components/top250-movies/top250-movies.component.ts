import { Component, OnInit } from '@angular/core';
import { Top250moviesService } from '../../services/top250movies.service';
import { Top250movies } from '../../interface/top250movies'

@Component({
  selector: 'app-top250-movies',
  templateUrl: './top250-movies.component.html',
  styleUrls: ['./top250-movies.component.scss']
})
export class Top250MoviesComponent implements OnInit {

  top250Response: any [] = []; 

  constructor(private top250:Top250moviesService) { }

  ngOnInit() {
    this.displayTop250();
  }

  displayTop250() {
    this.top250.getTop250Movies().subscribe(resp => {
      this.top250Response.push(resp.items);
      console.log('tafuta', resp.items)
    }) 
  }

}
