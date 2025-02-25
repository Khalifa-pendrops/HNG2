import React from "react";
import { Link } from "react-router-dom";
import mastercard from "../images/mastercard.svg";
import visa from "../images/visa.svg";
import paypal from "../images/paypal.svg";

function Footer() {
  return (
    <div>
      <footer className="flex flex-col items-center font-[Outfit]     max-sm:justify-center ">
        <div className=" flex justify-center gap-[12rem] items-center bg-footerbg w-[100%] py-[2rem] border-t border-t-customBorder     max-sm:flex-col max-sm:gap-8 max-sm:self-center max-sm:flex-col-reverse">
          <div className="flex flex-col items-center gap-2      max-sm:">
            <h2 className="text-3xl font-[Oregano] italic     max-sm:text-[32px]">
              Scentsory
            </h2>
            <p className="text-[.8rem] w-[12rem] text-center ">
              Where every scent is a memory waiting to happen.
            </p>
          </div>
          <div className="flex gap-[4rem]      max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-4">
            <div className="flex flex-col gap-2    max-sm:items-center max-sm:justify-center">
              <h5 className="text-footerTxt">SHOP</h5>
              <div className="flex flex-col gap-1      max-sm:items-center">
                <Link to="collections">
                  <p className="text-[.8rem]">All Connections</p>
                </Link>
                <Link to="collections">
                  <p className="text-[.8rem]">New Fragrances</p>
                </Link>
                <Link to="collections">
                  <p className="text-[.8rem]">Discount</p>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2    max-sm:justify-center max-sm:items-center">
              <h5 className="text-footerTxt">COMPANY</h5>
              <div className="flex flex-col gap-1 max-sm:items-center">
                <Link to="collections">
                  <p className="text-[.8rem]">About Us</p>
                </Link>
                <Link to="collections">
                  <p className="text-[.8rem]">Contacts</p>
                </Link>
                <Link to="collections">
                  <p className="text-[.8rem]">Affiliates</p>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2      max-sm:justify-center max-sm:items-center">
              <h5 className="text-footerTxt">SUPPORT</h5>
              <div className="flex flex-col gap-1 max-sm:items-center">
                <Link to="collections">
                  <p className="text-[.8rem]">FAQs</p>
                </Link>
                <Link to="collections">
                  <p className="text-[.8rem]">Cookie Policy</p>
                </Link>
                <Link to="collections">
                  <p className="text-[.8rem]">Terms of Use</p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4 max-sm:items-center">
              <h5 className="text-footerTxt">PAYMENT METHODS</h5>
              <div className="flex items-center justify-center gap-4">
                <Link to="mastercard">
                  <img src={mastercard} alt="mastercard" />
                </Link>
                <Link to="mastercard">
                  <img src={visa} alt="visa" />
                </Link>
                <Link to="mastercard">
                  <img src={paypal} alt="paypal" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black text-white w-[100%] flex items-center justify-center p-4 text-[.8rem]">
          Copyright &copy;2024 Scentsory. All right reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
