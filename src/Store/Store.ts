import { configureStore } from "@reduxjs/toolkit";
import MovieCardSlice from "./Slices/MovieCardSlice";
import SearchSlice from "./Slices/SearchSlice";

const store = configureStore({
  reducer: {
    movieCard: MovieCardSlice,
    search: SearchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
