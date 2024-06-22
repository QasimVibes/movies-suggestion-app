import {Card} from "../";
import {ReleasesMovies, PopularReleasesProps} from "../../types"

export default function PopularReleases({releasesMovies}:PopularReleasesProps) {

  return (
    <>
      <div className="flex flex-col">
        <h3 className="font-roboto text-[20px] font-[500] leading-[23.44px]  md:mb-[23px] mb-[11px]  ">
          Popular Releases
        </h3>
        <div className="flex overflow-x-scroll hide-scroll-bar">
          <div className="flex flex-nowrap  ">
            {releasesMovies?.map((item: ReleasesMovies) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
