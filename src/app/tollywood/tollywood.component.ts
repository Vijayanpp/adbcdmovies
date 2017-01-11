import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-tollywood',
  templateUrl: './tollywood.component.html',
  styleUrls: ['./tollywood.component.css']
})
export class TollywoodComponent implements OnInit {

  public movies: Array<Object>;

  constructor(public moviservice:MoviesService) { }

  ngOnInit() {
    this.moviservice.getUpComingMovies().subscribe(res=>{
      this.movies=res.results;     
    })
  }
}
