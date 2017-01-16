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
  public trailers=[];
  public musicvideos=[];
  constructor(public moviservice:MoviesService,private router: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  	
   this.router.params.subscribe((params) => {
      const id = params['id'];
      this.moviservice.getMovies("moviedetail/"+id).subscribe(movie => {
        this.movie = movie;
        for(let i=0;i<movie.trailors.length;i++)
        {
          var url=this.sanitizer.bypassSecurityTrustHtml(movie.trailors[i].url)
          this.trailers.push(url)

        }

        for(let i=0;i<movie.musicvideos.length;i++)
        {
          var url=this.sanitizer.bypassSecurityTrustHtml(movie.musicvideos[i].url)
          this.musicvideos.push(url)

        }
      });


  })
}
}
