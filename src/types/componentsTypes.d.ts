import { PopularMovies, TrendingMovies, ReleasesMovies } from "./";

export interface PopularMovieProps {
  popularMovies: PopularMovies[] | null;
}

export interface TrendingMoviesProps {
  trendingMovies: TrendingMovies[] | null;
}

export interface PopularReleasesProps {
  releasesMovies: ReleasesMovies[] | null;
}

export interface CardProps {
  reviewStar?: boolean;
  item: PopularMovies | TrendingMovies | ReleasesMovies;
}