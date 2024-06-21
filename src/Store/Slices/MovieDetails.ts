import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../Instance/AxiosInstance";

interface MovieDetailsData {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

interface SimilarMovies {
  id: number;
  title: string;
  poster_path: string;
}

interface Trailer {
  id: string;
  key: string;
  type: string;
  site: string;
}

export interface MovieDetailsState {
  isLoading: boolean;
  isError: boolean;
  details: MovieDetailsData | null;
  trailer: Trailer[] | null;
  similarMovies: SimilarMovies[] | null;
}

const initialState: MovieDetailsState = {
  isLoading: false,
  isError: false,
  details: null,
  trailer: null,
  similarMovies: null,
};

export const fetchMovieDetails = createAsyncThunk<
  {
    movieDetailsData: MovieDetailsData | null;
    trailerData: Trailer[] | null;
    similarMovies: SimilarMovies[] | null;
  },
  string,
  { rejectValue: string }
>("movieDetails/fetchMovieDetails", async (id: string, thunkAPI) => {
  try {
    const movieDetailsResponse = await AxiosInstance.get<MovieDetailsData>(
      `/movie/${id}`
    );
    const movieDetailsData = movieDetailsResponse.data;

    const trailerResponse = await AxiosInstance.get<{ results: Trailer[] }>(
      `/movie/${id}/videos`
    );
    const videos = trailerResponse.data.results;
    const trailer =
      videos.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      ) || null;
    const trailerData = trailer ? [trailer] : [];

    const similarMoviesResponse = await AxiosInstance.get<SimilarMovies[]>(
      `/movie/${id}/similar`
    );
    const similarMovies = similarMoviesResponse.data;

    return { movieDetailsData, trailerData, similarMovies };
  } catch (error) {
    return thunkAPI.rejectWithValue(
      "Something went wrong while fetching movie details"
    );
  }
});

export const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.details = action.payload.movieDetailsData;
        state.trailer = action.payload.trailerData;
        state.similarMovies = action.payload.similarMovies;
      })
      .addCase(fetchMovieDetails.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default movieDetailsSlice.reducer;
