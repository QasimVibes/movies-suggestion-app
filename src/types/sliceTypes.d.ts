export interface Genres {
  id: number;
  name: string;
}

export interface ErrorResponse {
  message: string;
  statusCode: number;
}

export interface MovieDetailsData {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  genres: Genres[];
  vote_average: number;
  vote_count: number;
}

export interface SimilarMovies {
  id: number;
  title: string;
  poster_path: string;
}

export interface Trailer {
  id: string;
  key: string;
  type: string;
  site: string;
}

export interface MovieDetailsState {
  isLoading: boolean;
  isError: ErrorResponse | null;
  details: MovieDetailsData | null;
  trailer: Trailer[] | null;
  similarMovies: SimilarMovies[] | null;
}

export interface PopularMovies {
  id: number;
  title: string;
  poster_path: string;
  vote_average?: number;
}

export interface TrendingMovies {
  id: number;
  title: string;
  poster_path: string;
  vote_average?: number;
}

export interface ReleasesMovies {
  id: number;
  title: string;
  poster_path: string;
  vote_average?: number;
}
export interface MovieCardState {
  isLoading: boolean;
  isError: ErrorResponse | null;
  popularMovies: PopularMovies[] | null;
  trendingMovies: TrendingMovies[] | null;
  releasesMovies: ReleasesMovies[] | null;
}

export interface Movies {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

export interface SearchState {
  isLoading: boolean;
  isError: ErrorResponse | null;
  movies: Movies[] | null;
}

export interface AppState {
  movieDetails: MovieDetailsState;
  movieCard: MovieCardState;
  search: SearchState;
}

export interface FetchMovieCardPayload {
  popularMoviesData: PopularMovies[] | null;
  trendingMoviesData: TrendingMovies[] | null;
  releasesMoviesData: ReleasesMovies[] | null;
}

export interface FetchMovieDetailsPayload {
  movieDetailsData: MovieDetailsData | null;
  trailerData: Trailer[] | null;
  similarMovies: SimilarMovies[] | null;
}

export interface FetchSearchPayload {
  movieDetailsData: Movies[] | null;
}
