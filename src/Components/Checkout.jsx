import React, { useState } from "react";
import { Link } from "react-router-dom";
import SecondNavBar from "./SecondNavBar";
import Footer from "./Footer";
import image6 from "../images/image 6.svg";

function Checkout() {
  // DO THIS IF YOU WISH TO MAKE THIS FUNCTIONAL!!!
  const [forData, setFormData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    apartment: "",
    city: "",
    country: "",
    zipcode: "",
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
    <div className="hidden max-sm:flex max-sm:flex-col max-sm:justify-center">
      <SecondNavBar />
      <div className="flex justify-center items-center gap-[8rem] my-[4rem] max-sm:flex-col max-sm:my-[2rem] max-sm:w-[600px]">
        <div className="flex flex-col gap-4 max-sm:justify-center  max-sm:items-center">
          <div className="max-sm:px-6 max-sm:self-start max-sm:ml-[5rem]">
            <h3 className="font-semibold text-2xl">Checkout</h3>
            <p>Shipping Information</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2  max-sm:px-6 max-sm:justify-center max-sm:items-center"
          >
            <div className="flex gap-2 max-sm:flex-wrap">
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
            </div>
            <input
              type="text"
              name="address"
              value={FormData.address}
              onChange={handleChange}
              placeholder="Address"
              className="border pl-2 py-2 placeholder-pxl max-sm:w-[24.3rem]"
            ></input>
            <input
              type="text"
              name="apartment"
              value={FormData.apartment}
              onChange={handleChange}
              placeholder="Apartment, suite, etc (optional)"
              className="border pl-2 py-2 placeholder-pxl max-sm:w-[24.3rem]"
            ></input>
            <input
              type="text"
              name="city"
              value={FormData.city}
              onChange={handleChange}
              placeholder="City"
              className="border pl-2 py-2 placeholder-pxl max-sm:w-[24.3rem]"
            ></input>
            <div className="flex gap-2 max-sm:justify-center max-sm:items-center max-sm:flex-wrap">
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
            <div className="flex gap-2 max-sm:justify-center max-sm:items-center max-sm:self-start max-sm:ml-[5rem]">
              <input type="checkbox"></input>
              <p>Save contact information</p>
            </div>
            <button
              className="bg-navYellow py-2  font-semibold flex items-center justify-center max-sm:w-[24.3rem]"
              type="submit"
            >
              Continue to Shipping
            </button>
          </form>
        </div>

        <div className="bg-customBGLight w-[25rem] py-2 px-6 flex flex-col gap-6 max-sm:hidden">
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
          <input
            className="bg-customBGLight pl-2 py-2 border border-black placeholder-pxl"
            type="text"
            placeholder="Enter coupon code here"
          ></input>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
