import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
@Component({
  selector: 'app-bollywood',
  templateUrl: './bollywood.component.html',
  styleUrls: ['./bollywood.component.css']
})
export class BollywoodComponent implements OnInit {

  public movies: Array<Object>;

  constructor(public moviservice:MoviesService) { }

  ngOnInit() {
    this.moviservice.getUpComingMovies().subscribe(res=>{
      this.movies=res.results;     
    })
  }

}
