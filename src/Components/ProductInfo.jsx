import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import image6 from "../images/image 6.svg";
import image12 from "../images/image 12.svg";
import heart from "../images/heart.svg";
import boxarrow from "../images/boxarrow.svg";
import { Link } from "react-router-dom";
import Header from "./Header";

function ProductInfo() {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="flex my-[2rem] justify-around        max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-6">
        <div className="left flex flex-col gap-4 px-4      max-sm:items-center">
          <h1 className="text-[2rem] font-bold       max-sm:text-[1.6rem]">
            Product details
          </h1>
          <div className="images flex flex-col gap-6">
            <img className="w-[429px]" src={image6} alt="perfume" />
            <div className="jointimages flex gap-4       max-sm:hidden">
              <img
                className="w-[160px] border border-navYellow"
                src={image6}
                alt="perfume"
              />
              <img
                className="w-[160px] border border-gray-500"
                src={image6}
                alt="perfume"
              />
              <img
                className="w-[160px] border border-gray-500"
                src={image6}
                alt="perfume"
              />
            </div>
          </div>
        </div>
        <div className="right bg-custBG p-8 flex flex-col gap-8 h-fit">
          {/* ALIGNMENT NEEDED  in line 44 div!!! */}
          <div className="top flex flex-col gap-6    max-sm:justify-center ">
            <div className="flex justify-between">
              <h1 className="font-bold text-xl        max-sm:text-[15px]">
                Dior Sausage
              </h1>
              <div className="flex items-center gap-2">
                <img
                  className="cursor-pointer w-[24px]      max-sm:w-[18px]"
                  src={heart}
                  alt="favorite"
                />
                <img
                  className="cursor-pointer w-[24px]       max-sm:w-[18px]"
                  src={boxarrow}
                  alt="save"
                />
              </div>
            </div>
            <div className="flex gap-4      max-sm:items-center max-sm:gap-[.2rem]">
              <img
                className="w-[151px]     max-sm:w-[123px]"
                src={image6}
                alt="perfume"
              />
              <div className="flex flex-col gap-4">
                <p className="text-[18px] w-[14rem]     max-sm:text-[10px] max-sm:w-[8rem]">
                  Fragrance: Dior Sauvage Type: Eau de Toilette
                </p>
                <p className="text-[18px] font-bold   max-sm:text-[12px]">&#36;99.10</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[18px]     max-sm:text-[12px]">Quantity</p>
                <div className="flex text-[18px] font-bold items-center justify-center gap-2 border-2 cursor-pointer border-navYellow      max-sm:font-normal max-sm:px-1">
                  <p>-</p>
                  <p>1</p>
                  <p>+</p>
                </div>
              </div>
            </div>
          </div>
          <Link to="/summary">
            {" "}
            <button
              className="bg-navYellow text-[24px] px-8 py-2 font-bold text-black w-[100%]      max-sm:text-[16px] max-sm:py-2"
              type="submit"
            >
              Add to Cart
            </button>
          </Link>
          <div className="down flex justify-between">
            <p className="text-[14px]      max-sm:text-[12px]">
              Free standard shipping
            </p>
            <p className="underline text-[14px] cursor-pointer     max-sm:text-[12px]">
              Free Returns
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductInfo;
