import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD
import AxiosInstance from "../../utills/instance/axiosInstance";
=======
import AxiosInstance from "../../instance/axiosInstance";
>>>>>>> 2dab8c151b39f5185b3a5450fc8e6feedb708355
import {
  SearchState,
  Movies,
  FetchSearchPayload,
  AsyncThunkReturnType,
  AsyncThunkArgumentType,
  AsyncThunkConfig,
} from "../../types/types";
import { AxiosResponse } from "axios";

const initialState: SearchState = {
  isLoading: false,
  isError: null,
  movies: null,
};

export const fetchMovies = createAsyncThunk<
  AsyncThunkReturnType,
  AsyncThunkArgumentType,
  AsyncThunkConfig
>("search/fetchMovies", async (query: string, { rejectWithValue }) => {
  try {
<<<<<<< HEAD
    const response: AxiosResponse = await AxiosInstance.get(
      `/search/movie?query=${query}`
    );
=======
    const response: AxiosResponse<{ results: Movies[] }> =
      await AxiosInstance.get<{ results: Movies[] }>(
        `/search/movie?query=${query}`
      );

>>>>>>> 2dab8c151b39f5185b3a5450fc8e6feedb708355
    const movieDetailsData: Movies[] = response.data.results;

    return { movieDetailsData };
  } catch (err: any) {
    if (err.response) {
      const data = err.response.data;
      return rejectWithValue({
        message: data.status_message || "Unknown error",
        statusCode: err.response.status,
      });
    } else if (err.request) {
      return rejectWithValue({
        message: "Network error",
        statusCode: 500,
      });
    } else {
      return rejectWithValue({
        message: err.message || "Unknown error",
        statusCode: 500,
      });
    }
  }
});

export const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        const payload = action.payload as FetchSearchPayload;
        state.movies = payload.movieDetailsData;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
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

export default SearchSlice.reducer;
