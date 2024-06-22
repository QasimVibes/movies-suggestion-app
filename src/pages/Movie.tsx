import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../store/Store";
import { fetchMovieDetails } from "../store/slices/MovieDetailsSlice";
import { AppState, MovieDetailsState, Genres, SimilarMovies } from "../types";
import { Loading, Error } from "../components";

export default function Movie(): JSX.Element {
  const { id } = useParams();
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
  const { details, trailer, similarMovies, isLoading, isError } = useSelector<
    AppState,
    MovieDetailsState
  >((state) => state.movieDetails);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetails(id));
    }
  }, [dispatch, id]);

  const formatReviewCount = (count: number) => {
    if (count >= 1000 && count < 1000000) {
      return `${(count / 1000).toFixed(1)}k`;
    } else if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else {
      return count.toString();
    }
  };
  

  if (isLoading === true) {
    return <Loading />;
  }

  if (isError !== null) {
    return <Error message={isError.message} statusCode={isError.statusCode} />;
  }
 

  return (
    <div className="md:mx-[80px] md:mb-[74px] mx-[21px]  mt-[42px]">
      <div className="flex items-center justify-between w-full">
        <div className="font-roboto font-[700] md:text-[40px] text-[30px] md:leading-[46.88px] leading-[35.16px]">
          <h1>{details?.title}</h1>
        </div>
        <div className="hidden lg:flex bg-[#D9D9D9] rounded-[30px]">
          <Link
            to={""}
            className="flex items-center font-roboto font-[500] text-[15px] leading-[17.58px] py-[11px] px-[30px]"
          >
            <img
              src="/bookmark.png"
              alt="bookmark"
              className="w-[18.2px] h-[23.39px] mr-[10px]"
            />
            Add to watchlist
          </Link>
        </div>
      </div>
      <div className="relative flex flex-col lg:flex-row pt-[27px] lg:pb-[51px] pb-[40px] justify-between items-start w-full">
        <div className="absolute z-50 order-2 lg:order-1 lg:relative md:top-28 md:left-8 top-[84px] left-[28px]  lg:left-0 lg:top-0 ">
          <img
            src={`https://image.tmdb.org/t/p/original${details?.poster_path}`}
            alt="#"
            className="lg:h-[291px] lg:w-[196px] md:w-[140px] md:h-[187px] w-[98px] h-[146px] order-2 rounded-[20px] object-cover"
          />
        </div>
        <div className="relative order-3 lg:order-2 flex-grow lg:pl-5 pl-0  mt-[36px] lg:mt-0  w-full lg:w-auto">
          <div className="flex space-x-5">
            {details?.genres?.slice(0, 2).map((genre: Genres) => (
              <Link
                key={genre.id}
                to={""}
                className="font-roboto font-[500] text-[18px] leading-[21.09px] py-[6px] px-[18px] rounded-[20px] border border-black"
              >
                {genre.name}
              </Link>
            ))}
          </div>
          <div className="w-full lg:w-[413px] lg:mt-[19px] lg:mb-12 mt-[27px] mb-[44px]">
            <p className="font-roboto font-[500] text-[18px] leading-[21.09px]">
              {details?.overview}
            </p>
          </div>
          <div className="flex items-center font-roboto font-[400] space-x-[15px]">
            <div className="leading-[21.09px]">
              <p>IMDB Rating</p>
              <p className="leading-[17.58px]">
                ⭐ {details?.vote_average?.toFixed(1)}
                <span className="text-[#636363]">/10</span>
              </p>
            </div>
            <div className="leading-[17.58px] text-[15px] text-[#636363]">
            <p>{formatReviewCount(details?.vote_count || 0)} Reviews</p>
            </div>
          </div>
        </div>
        <div className="relative z-40 order-1 lg:order-3">
          <iframe
            title="YouTube Trailer"
            className="lg:h-[291px] lg:w-[521px] md:w-[80vw] md:h-[250px] w-[93vw] order-1 h-[187px] rounded-[20px]"
            src={`https://www.youtube.com/embed/${
              trailer && trailer.length > 0 ? trailer[0].key : "defaultKey"
            }?autoplay=0&modestbranding=0&controls=1&showinfo=0&rel=0`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center space-x-0 md:space-x-[30px] font-roboto font-[700]">
        <h2 className="text-[30px] leading-[35.16px] mb-4 md:mb-0">Seasons</h2>
        <div className="flex flex-wrap md:flex-nowrap space-x-[7.73px]">
          <Link
            to={""}
            className="rounded-[10px] py-[10px] px-[15.30px] bg-[#D9D9D9] text-[20px] leading-[23.44px] mb-2 md:mb-0"
          >
            1
          </Link>
          <Link
            to={""}
            className="rounded-[10px] py-[10px] px-[15.30px] bg-[#D9D9D9] text-[20px] leading-[23.44px] mb-2 md:mb-0"
          >
            2
          </Link>
          <Link
            to={""}
            className="rounded-[10px] py-[10px] px-[15.30px] bg-[#D9D9D9] text-[20px] leading-[23.44px] mb-2 md:mb-0"
          >
            3
          </Link>
          <Link
            to={""}
            className="rounded-[10px] py-[10px] px-[15.30px] bg-[#D9D9D9] text-[20px] leading-[23.44px] mb-2 md:mb-0"
          >
            4
          </Link>
        </div>
      </div>
      <div className=" flex flex-wrap justify-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-0 md:space-x-4 lg:space-x-4 mt-[34.73px]">
        {similarMovies?.slice(0, 4).map((movie: SimilarMovies) => (
          <div
            key={movie.id}
            className="flex flex-col w-full sm:w-[calc(100%-20px)] md:w-[calc(50%-20px)] lg:w-[calc(25%-20px)] h-[202px] rounded-[20px] bg-[#FFFFFF]"
          >
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="h-[142px] w-full rounded-t-[20px]"
              />
              <div className="font-roboto font-bold text-base leading-[23.44px] flex items-center px-[17px] py-2">
                <h3>{movie.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
