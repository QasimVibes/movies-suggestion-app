import Card from "../components/Card/Card";
import { useLocation } from "react-router-dom";
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
      <div className="mx-[80px] mb-[85px]">
        <div className="mb-[14px]">
          <h1 className="font-roboto text-[15px] font-[500] leading-[10.95px] text-black">
            Showing search results for:{" "}
            <span className="font-roboto text-[20px] font-[500] leading-[14.6px] text-[#7D7D7D]">
              {searchQuery}
            </span>
          </h1>
        </div>
        <div className="pt-[20px] ">
          <div className="grid grid-cols-6 gap-y-[20px]">
            {stateData?.map((item: any) =>
              item.backdrop_path !== null ? (
                <Card
                  key={item.id}
                  {...item}
                  size="w-[197px] h-[287px]"
                  margin="mx-[10px]"
                />
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
}
