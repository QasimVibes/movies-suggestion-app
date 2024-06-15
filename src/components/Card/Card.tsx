export default function Card({
  margin = "mr-[22px]",
  size = "w-[177px] h-[263px]",
  ...item
}) {
  return (
    <>
      <div className="inline-block  bg-transparent ">
        <div
          className={`${size} overflow-hidden  transition-shadow duration-300 ease-in-out`}
        >
          <div className={`${margin} `}>
            <img
              src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
              alt={item?.title}
              className={`rounded-[20px] object-cover ${size}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
