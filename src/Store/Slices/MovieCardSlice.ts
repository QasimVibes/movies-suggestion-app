import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../instance/AxiosInstance";
import { MovieCardState, PopularMovies, ErrorResponse, TrendingMovies, ReleasesMovies, FetchMovieCardPayload} from "../../types";
import { AxiosError, AxiosResponse } from "axios";


const initialState: MovieCardState = {
  isLoading: false,
  isError: null,
  popularMovies: null,
  trendingMovies: null,
  releasesMovies: null,
};

export const fetchMovieCard = createAsyncThunk<FetchMovieCardPayload,void,{ rejectValue: ErrorResponse }>
("movieCard/fetchMovieCard", async (_, { rejectWithValue }) => {
  try {
    const popularMovies: AxiosResponse<{ results: PopularMovies[] }> =await AxiosInstance.get<{ results: PopularMovies[] }>("/movie/popular");
    const trendingMovies: AxiosResponse<{ results: TrendingMovies[] }> =await AxiosInstance.get<{ results: TrendingMovies[] }>("/trending/movie/week");
    const releasesMovies: AxiosResponse<{ results: ReleasesMovies[] }> =await AxiosInstance.get<{ results: ReleasesMovies[] }>("/movie/top_rated");
    
    const popularMoviesData: PopularMovies[] = popularMovies.data.results;
    const trendingMoviesData: TrendingMovies[] = trendingMovies.data.results;
    const releasesMoviesData: ReleasesMovies[] = releasesMovies.data.results;

    return { popularMoviesData, trendingMoviesData, releasesMoviesData };
    
  } catch (err: AxiosError | any) {
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

export const MovieCardSlice = createSlice({
  name: "movieCard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieCard.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder
      .addCase(fetchMovieCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.popularMovies = action.payload.popularMoviesData;
        state.trendingMovies = action.payload.trendingMoviesData;
        state.releasesMovies = action.payload.releasesMoviesData;
      })
      .addCase(fetchMovieCard.rejected, (state, action) => {
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

export default MovieCardSlice.reducer;
