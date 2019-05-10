import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMoviesService } from '../api-movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  id: string;
  typeSubscription: any;
  movie: object;
  movieSimilar: any[];

  constructor(private route: ActivatedRoute, private api: ApiMoviesService, private router: Router) { }

  ngOnInit() {
    this.typeSubscription = this.route.params.subscribe(params => {
      this.id = params.id;
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      this.api.getMovies(this.id).subscribe((res: any) => {
        console.log(res);
        this.movie = res;

      });
      this.api.getMoviesSimilar(this.id).subscribe((res: any) => {
        console.log(res);
        this.movieSimilar = res.results;
      });


    });
  }

  ngOnDestroy() {
    this.typeSubscription.unsubscribe();

  }
}
