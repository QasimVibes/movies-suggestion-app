import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../Store/Store";
import { fetchMovies } from "../Store/Slices/SearchSlice";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Search() {
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
  const stateData = useSelector((state: any) => state.search.movies);
  const query = useQuery();
  const searchQuery: string | null = query.get("query");

  useEffect(() => {
    if (searchQuery !== null) {
      dispatch(fetchMovies(searchQuery));
    }
  }, [dispatch, searchQuery]);

  return (
    <>
      <div className="lg:mx-[80px] lg:mb-[85px] lg:mt-[24px] my-[20px] mx-[20px] relative">
        <div className="lg:mb-[14px]">
          <h1 className="font-roboto text-[15px] font-[500] leading-[10.95px] text-black hidden lg:block">
            Showing search results for:{" "}
            <span className="font-roboto text-[20px] font-[500] leading-[14.6px] text-[#7D7D7D]">
              {searchQuery}
            </span>
          </h1>
        </div>
        <div className="lg:pt-[20px] relative">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-[31px] sm:gap-y-[20px] gap-x-[20px] sm:gap-x-[20px] relative">
            {stateData?.map((item: any) =>
              item.backdrop_path !== null ? (
                <Link key={item.id} to={`/movie/${item.id}`}>
                  <div className="relative">
                    <img
                      src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
                      alt={item?.title}
                      className="rounded-[20px] object-cover w-full h-full"
                    />
                    <div className="absolute top-[17px] left-[12px] text-white font-caros-bold text-[15px] font-semibold leading-[9.24px] text-left">
                      ⭐ {item.vote_average.toFixed(1)}
                    </div>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
}
