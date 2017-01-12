import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  movies: Array<Object>;
  searchRes: Array<Object>;
  searchStr: string;
  genres: Array<Object>;
  constructor(private _moviesService: MoviesService) {
    this._moviesService.getUpComingMovies().subscribe(res => {
      this.movies = res.results;
    });


    this._moviesService.getGenres().subscribe(res => {
      this.genres = res.genres.slice(0, 20);
    });
  }

  ngOnInit() {
  }

  searchMovies() {
    this._moviesService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    })
  }

}
