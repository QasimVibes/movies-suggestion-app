import { configureStore } from '@reduxjs/toolkit'
import MovieCardSlice from './Slices/MovieCardSlice'

const store = configureStore({
  reducer: {
    movieCard: MovieCardSlice
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

