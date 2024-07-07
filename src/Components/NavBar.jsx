import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.svg";
import bag from "../images/bag.svg";
import search from "../images/search.svg";

const NavBar = () => {
  return (
    <div>
      <header className="flex items-center justify-between bg-navYellow py-4 px-[4rem]">
        <h2 className="font-bold text-3xl ">Scentsory</h2>
        <nav>
          <ul className="flex items-center gap-3 text-xl font-semibold">
            <li>Shop</li>
            <li>About us</li>
            <li>Blog</li>
          </ul>
        </nav>
        <div className="relative">
          <input
            type="text"
            className="rounded-md px-12 placeholder-textBlck placeholder-pxl relative"
            placeholder="search"
          ></input>
          <img
            className="absolute z-10 inset-y-0 left-60 top-1 pointer-events-none"
            src={search}
            alt="search"
          />
        </div>
        <div className="flex items-center gap-[7rem]">
          <Link to="/profile" className="">
            <img src={user} alt="user" />
          </Link>
          <Link to="/profile" className="">
            <img src={bag} alt="user" />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
