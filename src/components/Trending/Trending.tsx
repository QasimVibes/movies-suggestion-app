import {Card} from "../";
import {TrendingMovies, TrendingMoviesProps} from "../../types"

export default function Trending({ trendingMovies }: TrendingMoviesProps) {

  return (
    <div className="flex flex-col">
      <h3 className="font-roboto text-[20px] font-[500] leading-[23.44px] md:mb-[23px] mb-[11px] ">
        Trending
      </h3>
      <div className="flex overflow-x-scroll hide-scroll-bar">
        <div className="flex flex-nowrap  ">
          {trendingMovies?.map((item: TrendingMovies) => (
            <Card key={item.id} item={item} reviewStar={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
