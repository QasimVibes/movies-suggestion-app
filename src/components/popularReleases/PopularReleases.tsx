<<<<<<< HEAD
=======
import { colors } from "../../constants/colors";
>>>>>>> 2dab8c151b39f5185b3a5450fc8e6feedb708355
import { ReleasesMovies, PopularReleasesProps } from "../../types/types";
import Card from "../card/Card";

export default function PopularReleases({
  releasesMovies,
}: PopularReleasesProps) {
  return (
    <>
      <div className="flex flex-col">
<<<<<<< HEAD
        <h3 className="font-roboto w-[211px] text-[20px] text-black font-[500] leading-[23.44px] md:mb-[23px] mb-[11px]">
=======
        <h3
          className={`font-roboto text-[20px] ${colors.textBlack}  font-[500] leading-[23.44px] md:mb-[23px] mb-[11px]`}
        >
>>>>>>> 2dab8c151b39f5185b3a5450fc8e6feedb708355
          Popular Releases
        </h3>
        <div className="flex overflow-x-scroll hide-scroll-bar">
          <div className="flex flex-nowrap  ">
            {releasesMovies?.map((item: ReleasesMovies) => (
              <Card key={item?.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
