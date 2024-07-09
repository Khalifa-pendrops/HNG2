import React, { useState } from "react";
import { Link } from "react-router-dom";
import SecondNavBar from "./SecondNavBar";
import Footer from "./Footer";
import image6 from "../images/image 6.svg";
import NavBar from "./NavBar";
import Header from "./Header";

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
    <div>
      <NavBar />
      <Header />
      <div className="flex justify-around my-[2rem]      max-sm:flex-col">
        <div className="left flex flex-col justify-center gap-4 font-[Outfit]        max-sm:px-[1.8rem] max-sm:mx-[1rem]">
          <div className="top flex flex-col">
            <h1 className="text-[34px] font-bold      max-sm:text-[24px]">
              Checkout
            </h1>
            <p className="hidden  max-sm:flex  max-sm:text-[14px]">
              Address ==> Shipping ==> Payment
            </p>
            <p className="text-[20px]     max-sm:text-[16px]">
              Shipping Information
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col gap-2        "
          >
            <div className="flex  gap-1 ">
              <input
                type="text"
                name="name"
                value={FormData.firstname}
                onChange={handleChange}
                placeholder="First Name"
                className="border w-[100%] placeholder-pxl py-1 px-1"
              ></input>
              <input
                type="text"
                name="name"
                value={FormData.lastname}
                onChange={handleChange}
                placeholder="First Name"
                className="border w-[100%] placeholder-pxl py-1 px-1"
              ></input>
            </div>

            <input
              type="address"
              name="address"
              value={FormData.address}
              onChange={handleChange}
              placeholder="Address"
              className="border placeholder-pxl py-1 px-1"
            ></input>
            <input
              type="text"
              name="name"
              value={FormData.apartment}
              onChange={handleChange}
              placeholder="Apartment"
              className="border placeholder-pxl py-1 px-1"
            ></input>
            <input
              type="text"
              name="name"
              value={FormData.city}
              onChange={handleChange}
              placeholder="City"
              className="border placeholder-pxl py-1 px-1"
            ></input>
            <div className="flex gap-1     max-sm:flex-wrap">
              {" "}
              <input
                type="text"
                name="country"
                value={FormData.country}
                onChange={handleChange}
                placeholder="Country"
                className="border placeholder-pxl py-1 px-1"
              ></input>
              <input
                type="text"
                name="name"
                value={FormData.city}
                onChange={handleChange}
                placeholder="City"
                className="border placeholder-pxl py-1 px-1"
              ></input>
              <input
                type="number"
                name="name"
                value={FormData.zipcode}
                onChange={handleChange}
                placeholder="Zipcode"
                className="border placeholder-pxl py-1 px-1"
              ></input>
            </div>
          </form>
          <div className="flex items-center gap-1">
            <input type="checkbox"></input>
            <p className="text-[16px]    max-sm:text-[10px]">
              Save contact information
            </p>
          </div>
          <Link to="/shipping">
            {" "}
            <button
              type="submit"
              className="bg-navYellow py-2 px-8 text-[24px] font-bold    max-sm:text-[16px]"
            >
              Continue to Shipping
            </button>
          </Link>
        </div>
        <div className="right bg-custBG flex flex-col justify-center px-[2rem] gap-6 py-2      max-sm:hidden">
          <h1 className="text-[20px]">Your cart</h1>
          <div className="flex items-center gap-6">
            <div className="w-[130px] border border-navYellow py-4">
              <img className="w-[118px]" src={image6} alt="perfume" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[22px] font-semibold">Dior Sausage</p>
              <p className="text-[14px]">Quantity: 1</p>
              <div className="flex gap-[4rem] items-center">
                <p className="text-[22px] font-semibold">&#36;99.10</p>
                <p className="underline text-[20px]">Remove</p>
              </div>
            </div>
          </div>
          <input
            type="text"
            placeholder="Enter coupon code here"
            className="py-1 px-2 placeholder-pxl border border-gray-400"
          ></input>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>&#36;99.10</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>Calculated at the next step</p>
            </div>
            <hr className="border-1 border-gray-400"></hr>
            <div className="flex justify-between">
              <p>Total</p>
              <p>&#36;99.10</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Checkout;
