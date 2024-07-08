import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.svg";
import bag from "../images/bag.svg";
import search from "../images/search.svg";

const SecondNavBar = () => {
  return (
    <div>
      <header className="flex items-center justify-between bg-navYellow py-4 px-[8rem]">
        <h2 className="font-bold text-3xl font-[Oregano] italic">Scentsory</h2>
        <div className="relative flex gap-8 max-sm:gap-[0rem]">
          <input
            type="text"
            className=" max-sm:hidden rounded-xl px-4 h-8 placeholder-textBlck placeholder-pxl relative bg-navYellow border border-customBorder"
            placeholder="search"
          ></input>
          <img
            className="max-sm:hidden absolute z-10 inset-y-0 left-[70%] top-2 pointer-events-none"
            src={search}
            alt="search"
          />
          <div className="flex items-center gap-[2rem]">
            <Link to="/profile" className="">
              <img className="w-5" src={bag} alt="user" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default SecondNavBar;
