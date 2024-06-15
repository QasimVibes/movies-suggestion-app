import Card from "../Card/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieCard } from "../../Store/Slices/MovieCardSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../Store/Store";
export default function PopularReleases() {
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieCard());
  }, [dispatch]);
  const stateData = useSelector((state: any) => state.movieCard.releasesMovies);
  return (
    <>
      <div className="flex flex-col">
        <h3 className="font-roboto text-[20px] font-[500] leading-[23.44px] mb-[23px] ">
          Popular Releases
        </h3>
        <div className="flex overflow-x-scroll hide-scroll-bar">
          <div className="flex flex-nowrap  ">
            {stateData?.results?.map((item: any) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
