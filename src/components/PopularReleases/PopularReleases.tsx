import Card from "../Card/Card";
export default function PopularReleases() {
  return (
    <>
      
    <div className="flex flex-col">
      <h3 className="font-roboto text-[20px] font-[500] leading-[23.44px] mb-[23px] ">
      Popular Releases
      </h3>
      <div className="flex overflow-x-scroll hide-scroll-bar">
        <div className="flex flex-nowrap  ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </div>
      </div>
    </div>
     
    </>
  );
}
