import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Navbar() {
  const navigate = useNavigate();
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
    <div className="relative flex w-full py-[46px]">
      <div className="absolute top-[40px] left-[80px] w-[130px] h-[106px]">
        <Link to="/">
          <span className="text-[35px] font-[600] font-caros-bold leading-[21.56px]">
            The Movie Tracker
          </span>
        </Link>
      </div>
      <div className="flex justify-center w-full">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="🔍 Search a movie or a series"
          className="bg-[#D9D9D9] rounded-[30px] w-[630px] h-[57px] font-roboto text-[20px] font-normal leading-[23.44px] text-center focus:outline-none"
        />
      </div>
    </div>
  );
}
