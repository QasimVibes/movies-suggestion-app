export default function Navbar() {
  return (
    <>
      <div className="relative flex w-full py-[46px]">
        <div className="absolute top-[40px] left-[80px] w-[130px] h-[106px]">
          <span className="text-[35px]  font-[600]  font-caros-bold  leading-[21.56px]">
            The Movie Tracker
          </span>
        </div>
        <div className="flex justify-center w-full">
          <input
            type="text"
            placeholder="🔍 Search a movie or a series"
            className="bg-[#D9D9D9] rounded-[30px] w-[630px] h-[57px] font-roboto text-[20px] font-normal leading-[23.44px] text-center focus:outline-none"
          />
        </div>
      </div>
    </>
  );
}
