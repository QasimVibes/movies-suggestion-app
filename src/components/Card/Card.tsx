export default function Card() {
  return (
    <>
      <div className="inline-block  bg-transparent ">
        <div className="w-[177px] h-[263px]  overflow-hidden  transition-shadow duration-300 ease-in-out">
          <div className="mr-[11px]">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/d/dc/Greencardposter.jpg"
              alt="#"
              className="rounded-[20px] object-cover "
            />
          </div>
        </div>
      </div>
    </>
  );
}
