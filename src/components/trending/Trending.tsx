import { colors } from "../../constants/colors";
import { TrendingMovies, TrendingMoviesProps } from "../../types/types";
import Card from "../card/Card";

export default function Trending({ trendingMovies }: TrendingMoviesProps) {
  return (
    <div className="flex flex-col">
      <h3
        className={`font-roboto text-[20px] ${colors.textBlack} text-[#000000] font-[500] leading-[23.44px] md:mb-[23px] mb-[11px]`}
      >
        Trending
      </h3>
      <div className="flex overflow-x-scroll hide-scroll-bar">
        <div className="flex flex-nowrap">
          {trendingMovies?.map((item: TrendingMovies) => (
            <Card key={item?.id} item={item} reviewStar={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
