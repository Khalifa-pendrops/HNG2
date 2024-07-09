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
          <h1 className="text-[2rem] font-bold">Product details</h1>
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
          <div className="top flex flex-col gap-6">
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Dior Sausage</h1>
              <div className="flex items-center gap-2">
                <img
                  className="cursor-pointer w-[24px]"
                  src={heart}
                  alt="favorite"
                />
                <img
                  className="cursor-pointer w-[24px]"
                  src={boxarrow}
                  alt="save"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <img className="w-[151px]" src={image6} alt="perfume" />
              <div className="flex flex-col gap-4">
                <p className="text-[18px] w-[14rem]">
                  Fragrance: Dior Sauvage Type: Eau de Toilette
                </p>
                <p className="text-[18px] font-bold">&#36;99.10</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[18px]">Quantity</p>
                <div className="flex text-[18px] font-bold items-center justify-center gap-2 border-2 cursor-pointer border-navYellow">
                  <p>-</p>
                  <p>1</p>
                  <p>+</p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="bg-navYellow text-[20px] font-bold text-black w-[100%]"
            type="submit"
          >
            Add to Cart
          </button>
          <div className="down flex justify-between">
            <p className="text-[14px]">Free standard shipping</p>
            <p className="underline text-[14px] cursor-pointer">Free Returns</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductInfo;
