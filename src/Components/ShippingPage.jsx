import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import image6 from "../images/image 6.svg";
import SecondNavBar from "./SecondNavBar";

function ShippingPage() {
  return (
    <div>
      <SecondNavBar />
      <div className="flex justify-center items-center gap-[12rem] my-[4rem]">
        <div className="flex flex-col gap-[4rem]">
          <h3 className="font-semibold">Checkout</h3>
          <div className="flex flex-col gap-4">
            <div className=" flex items-center gap-6 border w-[14rem] px-4 py-2">
              <input type="checkbox"></input>
              <div className="flex flex-col gap-1">
                <h6 className="text-[.8rem] font-semibold">DHL</h6>
                <p className="text-[.8rem]">4-7 Business Days </p>
              </div>
            </div>
            <div className=" flex items-center gap-6 border w-[14rem] px-4 py-2">
              <input type="checkbox"></input>
              <div className="flex flex-col gap-1">
                <h6 className="text-[.8rem] font-semibold">DHL</h6>
                <p className="text-[.8rem]">4-7 Business Days </p>
              </div>
            </div>
          </div>
          <button className="bg-navYellow py-2  font-semibold" type="submit">Continue to Payment</button>
        </div>

        <div className="bg-customBGLight w-[25rem] py-2 px-6 flex flex-col gap-6">
          <p>Your cart</p>
          <div className="flex gap-[2rem]">
            <div className="border p-2 border-navYellow w-fit">
              <img src={image6} alt="perfume" width="100px" />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="font-semibold">Dior Sausage</h5>
              <p className="text-[.7rem]">Quantity: 1</p>
              <h5 className="font-semibold">&#36;99.10</h5>
            </div>
            <div className="flex flex-col self-end items-end ml-8 mb-5 ">
              <p className="underline cursor-pointer">Remove</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShippingPage;
