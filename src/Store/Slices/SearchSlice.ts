import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import AxiosInstance from "../../Instance/AxiosInstance";

export interface SearchState {
  isLoading: boolean;
  isError: boolean;
  movies: string[] | null;
}

const initialState: SearchState = {
  isLoading: false,
  isError: false,
  movies: null,
};

export const fetchMovies = createAsyncThunk(
  "search/fetchMovies",
  async (query: string, thunkAPI) => {
    try {
      const movies = await AxiosInstance.get(`/search/movie?query=${query}`);
      const moviesData = movies.data.results || [];
      return moviesData;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Something went wrong while Searching movies data"
      );
    }
  }
);

export const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchMovies.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.movies = action.payload;
      }
    );
    builder.addCase(fetchMovies.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default SearchSlice.reducer;
