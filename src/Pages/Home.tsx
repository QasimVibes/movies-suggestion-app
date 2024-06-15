import PopularMovie from "../components/PopularMovies/PopularMovie";
import PopularReleases from "../components/PopularReleases/PopularReleases";
import Trending from "../components/Trending/Trending";

export default function Home() {
  return (
    <div className="mx-[80px] mb-[85px] ">
      <div className="grid grid-cols-3 gap-[70px]">
        <div className="col-span-1">
          <PopularMovie />
        </div>
        <div className="col-span-2 ml-[85px]">
          <Trending />
        </div>
        <div className="col-span-3">
          <PopularReleases />
        </div>
      </div>
    </div>
  );
}
