export default function Card({...item}) {
  return (
    <>
      <div className="inline-block  bg-transparent ">
        <div className="w-[177px] h-[263px]  overflow-hidden  transition-shadow duration-300 ease-in-out">
          <div className="mr-[11px]">
            <img
              src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
              alt={item?.title}
              className="rounded-[20px] object-cover w-[177px] h-[263px]   "
            />
          </div>
        </div>
      </div>
    </>
  );
}
