import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import image6 from "../images/image 6.svg";
import image12 from "../images/image 12.svg";
import heart from "../images/heart.svg";
import boxarrow from "../images/boxarrow.svg";
import { Link } from "react-router-dom";

function ProductInfo() {
  return (
    <div>
      <div>
        <NavBar />
        <div className="flex justify-center items-center my-[4rem] gap-[4rem] max-sm:flex-col">
          <div className="flex flex-col gap-[4rem] max-sm:items-center">
            <h3 className="text-2xl">Product details</h3>
            <img src={image6} alt="perfume"></img>
            <div className="flex items-center justify-center gap-4 ">
              <div className="border p-2 border-navYellow">
                <img src={image6} alt="perfume" width="100px" />
              </div>
              <div className="border p-2 border-customtxt">
                <img src={image12} alt="perfume" width="100px" />
              </div>
              <div className="border p-2 border-customtxt">
                <img src={image12} alt="perfume" width="100px" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 p-[3rem] bg-customeBG  ">
            <div className="flex items-center justify-between w-[100%]">
              <h3 className="font-semibold text-xl">Dior Sausage</h3>
              <div className="flex  gap-3 items-center">
                <img className="cursor-pointer" src={heart} alt="heart" />
                <img className="cursor-pointer" src={boxarrow} alt="save" />
              </div>
            </div>

            <div className="flex">
              <div className="flex">
                <img src={image6} alt="perfume" />
                <div className="flex flex-col gap-14">
                  <p
                    className="text-[.8rem]
                  w-[10rem]"
                  >
                    Fragrance: Dior Sauvage Type: Eau de Toilette
                  </p>
                  <p className="text-[.8rem]">&#36;99.10</p>
                </div>
              </div>

              <div className="flex flex-col self-end items-end gap-1 my-[4rem]">
                <p>Quantity</p>
                <div className="flex items-center border rounded-sm justify-center gap-4 px-2 border-navYellow">
                  <p className="font-semibold">-</p>
                  <p>2</p>
                  <p className="font-semibold">+</p>
                </div>
              </div>
            </div>

            {/* <div className="buttons flex items-center gap-6"> */}
            {/* <Link to="/cart">
                <button className="border py-2 px-6 bg-black text-white cursor-pointer">
                  Add to Cart
                </button>
              </Link> */}
            <Link to="/summary">
              <button className="py-2 px-6 cursor-pointer bg-navYellow w-[100%] font-semibold">
                Add to Cart
              </button>
            </Link>
            {/* </div> */}
            <div className="checkDown flex justify-between w-[100%] text-sm">
              <p>Free standard shipping</p>
              <p className="underline cursor-pointer">Free Returns</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ProductInfo;
