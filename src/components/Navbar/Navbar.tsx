import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Navbar() {
  const navigate = useNavigate();
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const query = useQuery();
  const searchQuery = query.get("query");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.length > 0) {
      navigate(`/search?query=${inputValue}`);
    }
  };

  useEffect(() => {
    setInputValue(searchQuery ?? "");
  }, [searchQuery]);

  return (
    <div className="relative flex flex-col lg:flex-row w-full lg:py-[46px] px-[20px] pt-[82px] pb-[18.4px] lg:px-[0px]">
      <div className="absolute md:top-[40px] md:left-[80px]  top-[47px] w-[130px] h-[106px]">
        <Link to="/">
          <span className="text-[35px] font-[600] font-caros-bold leading-[21.56px]">
            The Movie Tracker
          </span>
        </Link>
      </div>
      <div className="flex justify-end w-full lg:hidden space-x-5">
        <button
          onClick={() => setShowInput((prev) => !prev)}
          className={`${showInput ? "hidden" : ""}`}
        >
          <img src="/search.png" alt="Search" />
        </button>
        <button>
          <img src="/plus.png" alt="Add" />
        </button>
      </div>
      <div
        className={`flex justify-center w-full ${
          showInput ? "pt-[56px]" : "hidden lg:flex"
        }`}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          placeholder="🔍 Search a movie or a series"
          className="bg-[#D9D9D9] md:rounded-[30px] lg:w-[630px] lg:h-[57px] md:w-[410px] md:h-[54px] w-[334px] h-[52.6px] rounded-[20px] font-roboto text-[20px] font-normal leading-[23.44px] text-center focus:outline-none"
        />
      </div>
    </div>
  );
}
