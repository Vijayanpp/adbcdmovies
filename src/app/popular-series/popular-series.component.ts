import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-popular-series',
  templateUrl: './popular-series.component.html',
  styleUrls: ['./popular-series.component.css']
})
export class PopularSeriesComponent implements OnInit {
  series: Array<Object>;
  genres: Array<Object>;

  constructor(private _moviesService: MoviesService) {
    this._moviesService.getPopularSeries().subscribe(res => {
      this.series = res.results;
    });

    this._moviesService.getGenres().subscribe(res => {
      this.genres = res.genres.slice(0, 20);
    });
  }

  ngOnInit() {
  }

}
