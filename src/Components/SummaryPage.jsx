import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import image6 from "../images/image 6.svg";
import union from "../images/Union.svg";

function SummaryPage() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-around items-center my-[2rem] font-[Outfit]      max-sm:flex-col max-sm:gap-[2rem]">
        <div className="left flex flex-col gap-[4rem]">
          <div className="top px-2 flex flex-col gap-4      max-sm:gap-1-0">
            <h1 className="text-[36px]      max-sm:text-[20px]">Your cart</h1>
            <p className="text-[16px]     max-sm:hidden">
              Not ready to checkout?{" "}
              <span className="text-red-800 cursor-pointer">
                Continue Shopping
              </span>
            </p>
            <div className="hidden max-sm:Producttotal max-sm:flex max-sm:items-center max-sm:gap-[14rem] max-sm:border     ">
              <h6 className="max-sm:text-[12px]">PRODUCT</h6>
              <h6 className="max-sm:text-[12px]">TOTAL</h6>
            </div>
            <div>
              <div className="dior flex gap-[8rem]      max-sm:gap-6">
                <img
                  className="border border-navYellow w-[130px]"
                  src={image6}
                  alt="perfume"
                />
                <div className="rightside flex flex-col gap-4">
                  <div className="top flex flex-col gap-4">
                    <p className="font-semibold text-[22px]      max-sm:text-[12px]">
                      Dior Sausage
                    </p>
                    <p className="text-sm text-[14px]     max-sm:text-[10px]">
                      Quantity: 1
                    </p>
                  </div>
                  <div className="bottom flex gap-[8rem]     max-sm:gap-[4rem]">
                    <div className="max-sm:flex max-sm:gap-2">
                      {" "}
                      <div className="max-sm:flex max-sm:border max-sm:px-4 max-sm:gap-2 max-sm:items-center max-sm:font-semibold max-sm:border-navYellow">
                        <h6 className="font-semibold text-[22px]      max-sm:hidden">
                          &#36;99.10
                        </h6>
                        <p>-</p>
                        <p>1</p>
                        <p>+</p>
                      </div>
                      <img
                        className="cursor-pointer"
                        src={union}
                        alt="delete"
                      ></img>
                    </div>
                    <p className="underline text-[20px] cursor-pointer     max-sm:hidden">
                      Remove
                    </p>
                    <h6 className="hidden max-sm:flex font-semibold">
                      &#36;99.10
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom flex flex-col gap-4 border-2 border-dashed roundedsm p-4 text-horizontalLine font-[Montserrat]      max-sm:hidden">
            <div className="flex justify-between">
              <h6 className="text-[16px] font-semibold">Return Policy</h6>
              <p className="cursor-pointer">+</p>
            </div>
            <div>
              <div className="flex justify-between">
                <h6 className="text-[16px] font-semibold">Return Policy</h6>
                <p className="cursor-pointer">-</p>
              </div>
              <p className="text-[16px]">
                You have 30 days from the date of delivery to return your
                item(s).
              </p>
            </div>
          </div>
        </div>
        <div className="right flex flex-col bg-customeBG justify-center p-6 gap-8     max-sm:px-[4rem]">
          <h3 className="font-semibold text-[22px]     max-sm:hidden">
            Order Summary
          </h3>
          <input
            className="px-8 py-2 border-0 border-gray placeholder-pxl"
            type="text"
            placeholder="Enter coupon code here"
          ></input>
          <button
            className="px-8 py-2 text-white bg-black font-bold text-[24px]     max-sm:text-[16px]"
            type="submit"
          >
            Apply Promo code
          </button>
          <div className="calculate flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="text-[14px]      max-sm:text-[12px]">Subtotal</p>
              <p className="font-bold      max-sm:text-[12px]">&#36;99.10</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px]       max-sm:text-[12px]">Shipping</p>
              <p className="max-sm:text-[12px]">Calculated at the next step</p>
            </div>
            <hr className="border-1 border-gray-400"></hr>
            <div className="flex justify-between">
              <p className="text-[20px] font-bold     max-sm:text-[12px]">
                Total
              </p>
              <p className="font-bold    max-sm:text-[12px]">&#36;99.10</p>
            </div>
          </div>
          <button
            className="px-8 py-2 font-bold text-[24px] bg-navYellow     max-sm:text-[16px]"
            type="submit"
          >
            Continue to checkout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SummaryPage;
