import React, { useState } from "react";
import { Link } from "react-router-dom";
import SecondNavBar from "./SecondNavBar";
import Footer from "./Footer";
import image6 from "../images/image 6.svg";
import visa from "../images/visa.svg";
import paypal2 from "../images/Paypal2.svg";
import mastercard from "../images/mastercard.svg";
import apple from "../images/apple.svg";

function Payment() {
  // DO THIS IF YOU WISH TO MAKE THIS FUNCTIONAL!!!
  const [forData, setFormData] = useState({
    cardname: "",
    cardnumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...forData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <SecondNavBar />
      <div className="flex justify-center font-[Outfit]  items-center gap-[4rem] my-[4rem] max-sm:flex-col max-sm:my-[2rem]">
        <div className="flex flex-col gap-4 max-sm:py-4 max-sm:w-[80%]">
          <h3 className="font-semibold text-2xl">Checkout</h3>
          <div className="flex  items-center gap-4 w-fit    max-sm:flex-wrap">
            <img
              className="max-sm:w-[100px]"
              src={paypal2}
              alt="paypal"
              width=""
            />
            <img src={visa} alt="visa" width="80px" />
            <img src={mastercard} alt="mastercard" width="60px" />
            <img className="max-sm:w-[60px]" src={apple} alt="apple pay" />
          </div>
          <p>Payment Details</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="text"
              name="firstname"
              value={FormData.firstname}
              onChange={handleChange}
              placeholder="First Name"
              className="border pl-2 py-2 placeholder-pxl"
            ></input>
            <input
              type="text"
              name="lastname"
              value={FormData.lastname}
              onChange={handleChange}
              placeholder="Last Name"
              className="border pl-2 py-2 placeholder-pxl"
            ></input>

            <input
              type="text"
              name="address"
              value={FormData.address}
              onChange={handleChange}
              placeholder="Address"
              className="border pl-2 py-2 placeholder-pxl"
            ></input>
            <div className="flex gap-2 max-sm:flex-wrap">
              <input
                type="text"
                name="country"
                value={FormData.country}
                onChange={handleChange}
                placeholder="Country"
                className="border pl-2 py-2 placeholder-pxl"
              ></input>
              <input
                type="text"
                name="city"
                value={FormData.city}
                onChange={handleChange}
                placeholder="City"
                className="border pl-2 py-2 placeholder-pxl"
              ></input>
              <input
                type="text"
                name="zipcode"
                value={FormData.zipcode}
                onChange={handleChange}
                placeholder="Zipcode"
                className="border pl-2 py-2 placeholder-pxl"
              ></input>
            </div>
            <label className="relative inline-flex items-center cursor-pointer gap-2 ">
              <p>Save contact information</p>
              <input type="checkbox" className="sr-only peer"></input>
              <span className="w-11 h-6 left-[92%] bg-slider rounded-full absolute peer peer-focus: ring-0 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 "></span>
            </label>
            <button
              className="bg-navYellow py-2 px-8 text-[24px] font-semibold flex items-center justify-center    max-sm:text-[16px]"
              type="submit"
            >
              Pay with card
            </button>
          </form>
        </div>
        <div className="bg-customBGLight w-[25rem] py-2 px-6 flex flex-col gap-6 max-sm:w-[100%]">
          <p>Your cart</p>
          <div className="flex gap-[2rem]">
            {/* <div className="border p-2 border-navYellow    max-sm:w-[120px]"> */}
            <img
              className="border-2 w-[104px] max-sm:w-[50%]"
              src={image6}
              alt="perfume"
            />
            {/* </div> */}
            <div className="flex flex-col gap-2">
              <h5 className="font-semibold text-[16px] text-nowrap">
                Dior Sausage
              </h5>
              <p className="text-[.7rem]">Quantity: 1</p>
              <h5 className="font-semibold text-[14px]">&#36;99.10</h5>
            </div>
            <div className="flex flex-col self-end items-end ml-8 mb-5 ">
              <Link to="/home">
                <p className="underline cursor-pointer">Remove</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
