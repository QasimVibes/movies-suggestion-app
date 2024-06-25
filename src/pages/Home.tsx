import { PopularMovie,PopularReleases,Trending,Loading, Error } from "../components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieCard } from "../store/slices/MovieCardSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../store/Store";
import { AppState, MovieCardState } from "../types";

export default function Home(): JSX.Element {
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
 
  useEffect(() => {
    dispatch(fetchMovieCard());
  }, [dispatch]);

  const {popularMovies, isLoading, isError, trendingMovies, releasesMovies} = useSelector<AppState, MovieCardState>((state) => state.movieCard);

  if (isLoading === true) {
    return <Loading />;
  }

  if (isError !== null) {
    return <Error message={isError.message} statusCode={isError.statusCode} />;
  }

  return (
    <div className="md:mx-[80px] mx-5 md:mb-[85px] mb-[38px] md:mt-[41px] mt-[37px]">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-[70px] md:gap-[35px]">
        <div className="md:col-span-1 lg:col-span-1 row-start-1">
          <PopularMovie popularMovies={popularMovies} />
        </div>
        <div className="md:col-span-2 md:ml-[96px]  md:mt-0 mt-[48px] row-start-3 md:row-start-1">
          <Trending trendingMovies={trendingMovies} />
        </div>
        <div className="md:col-span-3 md:mt-0 mt-[48px] row-start-2 md:row-start-3 lg:row-start-2">
          <PopularReleases releasesMovies={releasesMovies}/>
        </div>
      </div>
    </div>
  );
}
