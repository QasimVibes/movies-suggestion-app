import { configureStore } from "@reduxjs/toolkit";
import MovieCardSlice from "./slices/MovieCardSlice";
import MovieDetailsSlice from "./slices/MovieDetailsSlice";
import SearchSlice from "./slices/SearchSlice";

const store = configureStore({
  reducer: {
    movieCard: MovieCardSlice,
    search: SearchSlice,
    movieDetails: MovieDetailsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
