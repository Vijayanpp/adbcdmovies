import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
@Component({
  selector: 'app-kollywood',
  templateUrl: './kollywood.component.html',
  styleUrls: ['./kollywood.component.css']
})
export class KollywoodComponent implements OnInit {

 public movies: Array<Object>;

  constructor(public moviservice:MoviesService) { }

  ngOnInit() {
    this.moviservice.getUpComingMovies().subscribe(res=>{
      this.movies=res.results;     
    })
  }
}
