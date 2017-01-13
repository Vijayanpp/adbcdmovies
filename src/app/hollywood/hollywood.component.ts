import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
@Component({
  selector: 'app-hollywood',
  templateUrl: './hollywood.component.html',
  styleUrls: ['./hollywood.component.css']
})
export class HollywoodComponent implements OnInit {
 public movies: Array<Object>;
  constructor(public moviservice:MoviesService) { }

  ngOnInit() {
  	this.moviservice.getMovies("hupcoming").subscribe(res=>{
      this.movies=res;     
    })
  }

}
