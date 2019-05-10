import { Component, OnInit, OnDestroy } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMoviesService } from '../api-movies.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {
  type: string;
  typeSubscription: any;
  movies: any[];
  validTypes = ['top_rated', 'popular', 'upcoming'];
  constructor(private route: ActivatedRoute, private api: ApiMoviesService, private router: Router) {


  }

  ngOnInit() {

    this.typeSubscription = this.route.params.subscribe(params => {
      this.type = params.type.replace('_', ' ');
      if (this.validTypes.includes(params.type)) {
        this.api.getMovies(this.type).subscribe((res: any) => {
          console.log(res);
          this.movies = res.results;

        });
      } else {
        this.router.navigate(['/movie/popular']);
      }
    });
  }
  ngOnDestroy() {
    this.typeSubscription.unsubscribe();

  }

}
