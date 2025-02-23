import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD
import AxiosInstance from "../../utills/instance/axiosInstance";
=======
import AxiosInstance from "../../instance/axiosInstance";
>>>>>>> 2dab8c151b39f5185b3a5450fc8e6feedb708355
import {
  MovieDetailsData,
  SimilarMovies,
  Trailer,
  MovieDetailsState,
  FetchMovieDetailsPayload,
  AsyncThunkReturnType,
  AsyncThunkArgumentType,
  AsyncThunkConfig,
} from "../../types/types";
import { AxiosResponse } from "axios";

const initialState: MovieDetailsState = {
  isLoading: false,
  isError: null,
  details: null,
  trailer: null,
  similarMovies: null,
};

export const fetchMovieDetails = createAsyncThunk<
  AsyncThunkReturnType,
  AsyncThunkArgumentType,
  AsyncThunkConfig
>("movieDetails/fetchMovieDetails", async (id: string, { rejectWithValue }) => {
  try {
<<<<<<< HEAD
    const movieDetailsResponse: AxiosResponse = await AxiosInstance.get(
      `/movie/${id}`
    );
    const trailerResponse: AxiosResponse = await AxiosInstance.get(
      `/movie/${id}/videos`
    );
    const similarMoviesResponse: AxiosResponse = await AxiosInstance.get(
      `/movie/${id}/similar`
    );

    const videos: Trailer[] = trailerResponse.data.results;
    const movieDetailsData: MovieDetailsData = movieDetailsResponse.data;
    const similarMoviesData: SimilarMovies[] =
      similarMoviesResponse.data.results;

    const similarMovies: SimilarMovies[] = similarMoviesData.filter((movie) => {
      if (
        movie.poster_path !== null &&
        movie.id !== null &&
        movie.title !== null
      ) {
        return movie;
      } else {
        return null;
      }
    });
=======
    const movieDetailsResponse: AxiosResponse<MovieDetailsData> =
      await AxiosInstance.get<MovieDetailsData>(`/movie/${id}`);
    const trailerResponse: AxiosResponse<{ results: Trailer[] }> =
      await AxiosInstance.get<{ results: Trailer[] }>(`/movie/${id}/videos`);
    const similarMoviesResponse: AxiosResponse<{ results: SimilarMovies[] }> =
      await AxiosInstance.get<{ results: SimilarMovies[] }>(
        `/movie/${id}/similar`
      );

    const videos: Trailer[] = trailerResponse.data.results;
    const movieDetailsData: MovieDetailsData = movieDetailsResponse.data;
    const similarMovies: SimilarMovies[] = similarMoviesResponse.data.results;
>>>>>>> 2dab8c151b39f5185b3a5450fc8e6feedb708355

    const trailer =
      videos.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      ) || null;
    const trailerData = trailer ? [trailer] : [];

    return { movieDetailsData, trailerData, similarMovies };
  } catch (err: any) {
    if (err.response) {
      const data = err.response.data;
      return rejectWithValue({
        message: data.status_message,
        statusCode: data.status_code,
      });
    } else if (err.request) {
      return rejectWithValue({
        message: "Network error",
        statusCode: 500,
      });
    } else {
      return rejectWithValue({
        message: err.message,
        statusCode: 500,
      });
    }
  }
});

export const MovieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        const payload = action.payload as FetchMovieDetailsPayload;
        state.details = payload.movieDetailsData;
        state.trailer = payload.trailerData;
        state.similarMovies = payload.similarMovies;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.isError = action.payload;
        } else {
          state.isError = {
            message: action.error.message || "Unknown error",
            statusCode: 500,
          };
        }
      });
  },
});

export default MovieDetailsSlice.reducer;
