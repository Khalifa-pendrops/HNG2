import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.svg";
import bag from "../images/bag.svg";
import search from "../images/search.svg";

const NavBar = () => {
  return (
    <div>
      <header className="flex items-center justify-between bg-navYellow py-4 px-[8rem] max-sm:w-[100%] max-sm:justify-center max-sm:gap-[6rem] max-sm:border-2">
        <h2 className="font-bold text-3xl font-[Oregano] italic max-sm: text-[24px]">Scentsory</h2>
        <nav className="max-sm:hidden">
          <ul className="flex items-center gap-[3rem] text-xl font-semibold">
            <li>Shop</li>
            <li>About us</li>
            <li>Blog</li>
          </ul>
        </nav>
        <div className="relative">
          <input
            type="text"
            className="max-sm:hidden rounded-xl px-4 h-8 placeholder-textBlck placeholder-pxl relative bg-navYellow border border-customBorder"
            placeholder="search"
          ></input>
          <img
            className="absolute z-10 inset-y-0 left-[85%] top-2 pointer-events-none"
            src={search}
            alt="search"
          />
        </div>
        <div className="flex items-center gap-[2rem]">
          <Link to="/profile" className="">
            <img className="w-5 max-sm:hidden" src={user} alt="user" />
          </Link>
          <Link to="/profile" className="">
            <img className="w-5" src={bag} alt="user" />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
