import PopularMovie from "../components/PopularMovies/PopularMovie";
import PopularReleases from "../components/PopularReleases/PopularReleases";
import Trending from "../components/Trending/Trending";

export default function Home() {
  return (
    <div className="md:mx-[80px] mx-5 md:mb-[85px] mb-[38px] mt-[38px]">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-[70px] md:gap-[35px]">
        <div className="md:col-span-1 lg:col-span-1 row-start-1">
          <PopularMovie />
        </div>
        <div className="md:col-span-2 md:ml-[85px] md:mt-0 mt-[48px]  row-start-3  md:row-start-1">
          <Trending />
        </div>
        <div className="md:col-span-3 md:mt-0 mt-[48px] row-start-2 md:row-start-3 lg:row-start-2">
          <PopularReleases />
        </div>
      </div>
    </div>
  );
}
