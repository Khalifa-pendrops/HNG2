import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import image6 from "../images/image 6.svg";
import SecondNavBar from "./SecondNavBar";
import Header from "./Header";

function ShippingPage() {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="flex justify-around items-center my-[4rem] font-[Outfit]      max-sm:flex-col max-sm:my-[2rem] max-sm:gap-[2rem]">
        <div className="left flex flex-col gap-8     max-sm:gap-6 max-sm:items-center">
          <h1 className="text-[36px] font-semibold      max-sm:text-[24px]">
            Checkout
          </h1>
          <div className="boxes flex flex-col gap-4">
            <div className="box flex flex-col  border px-4 py-4    max-sm:px-10">
              <div className="content flex gap-2    max-sm:gap-4">
                <input type="checkbox"></input>
                <div className="flex flex-col">
                  <h6 className="text-[16px] font-bold     max-sm:text-[12px]">
                    DHL
                  </h6>
                  <p className="text-[16px]     max-sm:text-[12px]">
                    4-7 Business Days
                  </p>
                </div>
              </div>
            </div>

            <div className="box flex flex-col  border px-4 py-4    max-sm:px-10">
              <div className="content flex gap-2     max-sm:gap-4">
                <input type="checkbox"></input>
                <div>
                  <h6 className="text-[16px] font-bold     max-sm:text-[12px]">
                    DHL
                  </h6>
                  <p className="text-[16px]     max-sm:text-[12px]">
                    4-7 Business Days
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Link to="/payment">
            {" "}
            <button
              type="submit"
              className="bg-navYellow py-2 text-[24px] font-bold px-6      max-sm:text-[20px]"
            >
              Continue to Payment
            </button>
          </Link>
        </div>
        <div className="right bg-custBG flex flex-col justify-center px-[2rem] gap-6 py-4 ">
          <h1 className="text-[20px]       max-sm:text-[14px]">Your cart</h1>
          <div className="flex items-center gap-6">
            <div className="w-[130px] border border-navYellow py-4    max-sm:w-[109px]">
              <img
                className="w-[118px]    max-sm:w-[96px]"
                src={image6}
                alt="perfume"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[22px] font-semibold     max-sm:text-[16px]">
                Dior Sausage
              </p>
              <p className="text-[14px]    max-sm:text-[10px]">Quantity: 1</p>
              <div className="flex gap-[4rem] items-center">
                <p className="text-[22px] font-semibold      max-sm:text-[16px]">
                  &#36;99.10
                </p>
                <p className="underline text-[20px] cursor-pointer    max-sm:text-[12px]">
                  Remove
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShippingPage;
