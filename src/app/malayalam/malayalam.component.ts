import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-malayalam',
  templateUrl: './malayalam.component.html',
  styleUrls: ['./malayalam.component.css']
})
export class MalayalamComponent implements OnInit {
  public movies: Array<Object>;

  constructor(public moviservice:MoviesService) { }

  ngOnInit() {
    this.moviservice.getMovies("mlupcoming").subscribe(res=>{
      this.movies=res;     
    })
  }

}
