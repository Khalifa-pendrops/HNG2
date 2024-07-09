import React from "react";
// import "../Components/Nav.css";
import { Link } from "react-router-dom";
import user from "../images/user.svg";
import bag from "../images/bag.svg";
import search from "../images/search.svg";

const NavBar = () => {
  return (
    <div>
      <header className="bg-navYellow flex justify-between items-center px-[8rem] py-4  max-sm:px-2 max-sm:justify-center max-sm:gap-[14rem] max-sm:py-0">
        <div className="flex items-center gap-12">
          <h2 className="font-[Oregano] font-normal italic text-[40px] max-sm:text-[24px]">
            Scentsory
          </h2>
          <nav className="max-sm:hidden">
            <ul className="flex text-[24px] gap-12">
              <Link>
                <li>Shop</li>
              </Link>
              <Link>
                <li>About us</li>
              </Link>
              <Link>
                <li>Blog</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className=" flex justify-center items-center gap-12 ">
          <label className="flex max-sm:hidden">
            <input
              className=" placeholder:pxt px-10 py-1 rounded-full w-[20rem] relative bg-navYellow border border-gray-500"
              type="search"
              placeholder="search"
            ></input>
            <img
              className="absolute top-[5%] right-[20%]"
              src={search}
              alt="search"
            />
          </label>
          <img className="max-sm:hidden" src={user} alt="user" />
          <img className="max-sm:w-[16px]" src={bag} alt="bag" />
        </div>
      </header>
    </div>
  );
};

export default NavBar;
