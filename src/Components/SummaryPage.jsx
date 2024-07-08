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
      <div>
        <div className="flex justify-center items-center gap-[4rem] my-[4rem] max-sm:flex-col max-sm:gap-[.2rem] max-sm:my-[1rem]">
          <div className="flex flex-col gap-[8rem] max-sm:justify-center max-sm:items-center">
            <div className="flex flex-col justify-between gap-4 max-sm:w-[90%] max-sm:gap-6">
              <div className=" flex flex-col gap-4 max-sm:justify-center max-sm:items-center">
                <h3 className="text-2xl max-sm:self-start max-sm:ml-[5.5rem]">
                  Your cart
                </h3>
                <div className="hidden max-sm:flex max-sm:justify-between max-sm:border-b max-sm:pb-4 max-sm:border-gray-600 max-sm:w-[70%]">
                  <p>PRODUCT</p>
                  <p>TOTAL</p>
                </div>
                <p className="flex gap-1 max-sm:hidden">
                  Not ready to checkout?
                  <Link to="/shop">
                    <span className="text-blue-400 cursor-pointer">
                      Continue Shopping
                    </span>
                  </Link>
                </p>
              </div>
              <div className="flex gap-[14.5rem] border-b-2 border-horizontalLine pb-8 max-sm:border-none max-sm:w-[70%] max-sm:ml-[6rem]">
                <div className="flex gap-[4rem] max-sm:gap-[4rem] max-sm:w-[80%] max-sm:justify-between">
                  <div className="border p-2 border-navYellow w-fit max-sm:w-[80px] max-sm:height-[80px] max-sm:border-none">
                    <img
                      className="max-sm:w-[80px]"
                      src={image6}
                      alt="perfume"
                      width="100px"
                    />
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <h5 className="font-semibold">Dior Sausage</h5>
                    <p className="text-[.7rem]">Quantity: 1</p>
                    <h5 className="font-semibold max-sm:hidden">&#36;99.10</h5>
                    <div className="hidden max-sm:flex max-sm:items-center max-sm:gap-[4rem] max-sm:w-[100%]">
                      {" "}
                      <div className="hidden max-sm:flex max-sm:items-center max-sm:gap-4 max-sm:w-[100%] max-sm:justify-between">
                        <div className="hidden max-sm:flex max-sm:items-center max-sm:gap-2 max-sm:rounded-full max-sm:py-1 max-sm:px-4 max-sm:border">
                          <p className="font-bold">-</p>
                          <p>1</p>
                          <p className="font-bold">+</p>
                        </div>
                        <img src={union} alt="delete" />
                      </div>
                      <p className="hidden max-sm:flex max-sm:font-bold">
                        &#36;99.10
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col self-end items-end gap-1 my-[4rem]">
                  <p className="underline cursor-pointer max-sm:hidden">
                    Remove
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-2 border-dashed p-4 max-sm:hidden">
              <div className=" flex justify-between text-horizontalLine border-b border-horizontalLine pb-4">
                <h6>Return Policy</h6>
                <Link to="/policy">
                  <p className="font-semibold">+</p>
                </Link>
              </div>
              <div className="flex flex-col text-horizontalLine border-b border-horizontalLine pb-4">
                <div className=" flex justify-between pb-4">
                  <h6>Return Policy</h6>
                  <Link to="/policy">
                    <p className="font-semibold">-</p>
                  </Link>
                </div>
                <p className="text-horizontalLine">
                  You have 30 days from the date of delivery to return your
                  item.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-customBGLight p-[3rem] flex flex-col gap-10 w-[20rem] max-sm:bg-white max-sm:w-[80%] max-sm:py-[0]">
            <h6 className="font-semibold max-sm:hidden">Order Summary</h6>
            <div className="flex flex-col gap-6">
              <input
                className="bg-customBGLight pl-2 py-2 border border-black placeholder-pxl"
                type="text"
                placeholder="Enter coupon code here"
              ></input>
              <button
                className="bg-black text-white py-2 cursor-pointer font-semibold max-sm:hidden"
                type="submit"
              >
                Apply Promo code
              </button>
            </div>
            <div className=" flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <p className="text-[.6rem]">Subtotal</p>
                <p className="font-semibold">&#36;99.10</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[.6rem]">Shipping</p>
                <p className="text-[.8rem]">Calculated at the next step</p>
              </div>
              <hr className="border-1 border-horizontalLine"></hr>
              <div className="flex justify-between items-center">
                <p className="font-semibold">Total</p>
                <p className="font-semibold">&#36;99.10</p>
              </div>
            </div>
            <Link to="/checkout">
              <button className="bg-navYellow py-2 px-8 font-semibold" type="submit">
                Continue to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SummaryPage;
