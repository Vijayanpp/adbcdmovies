import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {MoviesService} from '../movies.service';
@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {
  public movie:Object;
  constructor(public moviservice:MoviesService,private router: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  	
   this.router.params.subscribe((params) => {
      const id = params['id'];
      this.moviservice.getMovies("moviedetail/"+id).subscribe(movie => {
        this.movie = movie;
      });


  })
}
}
