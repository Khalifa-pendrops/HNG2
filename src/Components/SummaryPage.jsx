import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import image6 from "../images/image 6.svg";

function SummaryPage() {
  return (
    <div>
      <NavBar />
      <div>
        <div className="flex justify-center items-center gap-[4rem] my-[4rem]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col justify-between gap-4">
              <div className=" flex flex-col gap-2">
                <h3 className="text-2xl">Your cart</h3>
                <p className="flex gap-1">
                  Not ready to checkout?
                  <Link to="/shop">
                    <span className="text-blue-400 cursor-pointer">
                      Continue Shopping
                    </span>
                  </Link>
                </p>
              </div>
              <div className="flex gap-[14.5rem] border-b-2 border-horizontalLine pb-8">
                <div className="flex gap-[4rem]">
                  <div className="border p-2 border-navYellow w-fit">
                    <img src={image6} alt="perfume" width="100px" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="font-semibold">Dior Sausage</h5>
                    <p className="text-[.7rem]">Quantity: 1</p>
                    <h5 className="font-semibold">&#36;99.10</h5>
                  </div>
                </div>
                <div className="flex flex-col self-end items-end gap-1 my-[4rem]">
                  <p className="underline cursor-pointer">Remove</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h5 className="font-semibold border-b border-horizontalLine pb-4">
                Order Information
              </h5>
              <div className=" flex justify-between text-horizontalLine">
                <h6>Return Policy</h6>
                <Link to="/policy">
                  <p className="font-semibold">-</p>
                </Link>
              </div>
              <p className="text-horizontalLine">
                This is our return policy which is everything you need to know
                about our returns.
              </p>
              <hr className="border-1 border-horizontalLine"></hr>
              <div className=" flex justify-between text-horizontalLine border-b border-horizontalLine pb-4">
                <h6>Shipping Options</h6>
                <Link to="/shippingOptions">
                  <p className="font-semibold">+</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-customBGLight p-[3rem] flex flex-col gap-10 w-[20rem]">
            <h6 className="font-semibold">Order Summary</h6>
            <div className="flex flex-col gap-6">
              <input
                className="bg-customBGLight pl-2 py-2 border border-black placeholder-pxl"
                type="text"
                placeholder="Enter coupon code here"
              ></input>
              <button
                className="bg-black text-white py-2 cursor-pointer font-semibold"
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
            <button className="bg-navYellow py-2 font-semibold" type="submit">
              Continue to checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SummaryPage;
