import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import AxiosInstance from "../../Instance/AxiosInstance";

export interface MovieCardState {
  isLoading: boolean;
  isError: boolean;
  popularMovies: string[] | null;
  trendingMovies: string[] | null;
  releasesMovies: string[] | null;
}

const initialState: MovieCardState = {
  isLoading: false,
  isError: false,
  popularMovies: null,
  trendingMovies: null,
  releasesMovies: null,
};

export const fetchMovieCard = createAsyncThunk(
  "movieCard/fetchMovieCard",
  async (_, thunkAPI) => {
    try {
      const popularMovies = await AxiosInstance.get("/movie/popular");
      const trendingMovies = await AxiosInstance.get("/trending/movie/week");
      const releasesMovies = await AxiosInstance.get("/movie/top_rated");
      const popularMoviesData = popularMovies.data || [];
      const trendingMoviesData = trendingMovies.data || [];
      const releasesMoviesData = releasesMovies.data || [];
      return { popularMoviesData, trendingMoviesData, releasesMoviesData };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Something went wrong while fetching movies data"
      );
    }
  }
);

export const MovieCardSlice = createSlice({
  name: "movieCard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieCard.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchMovieCard.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.popularMovies = action.payload.popularMoviesData;
        state.trendingMovies = action.payload.trendingMoviesData;
        state.releasesMovies = action.payload.releasesMoviesData;
      }
    );
    builder.addCase(fetchMovieCard.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default MovieCardSlice.reducer;
