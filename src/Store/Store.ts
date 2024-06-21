import { configureStore } from "@reduxjs/toolkit";
import MovieCardSlice from "./Slices/MovieCardSlice";
import SearchSlice from "./Slices/SearchSlice";
import movieDetailsSlice from "./Slices/MovieDetails";

const store = configureStore({
  reducer: {
    movieCard: MovieCardSlice,
    search: SearchSlice,
    movieDetails: movieDetailsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
