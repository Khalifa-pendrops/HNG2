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
        <div className="left flex flex-col justify-center gap-4        max-sm:px-[4rem] max-sm:mx-[1rem]">
          <div className="top flex flex-col">
            <h1 className="text-[34px] font-bold">Checkout</h1>
            <p className="hidden  max-sm:flex">
              Address ---------- Shipping ----------- Payment
            </p>
            <p className="text-[20px]">Shipping Information</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col gap-1        "
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
            <p className="text-[16px]">Save contact information</p>
          </div>
          <button
            type="submit"
            className="bg-navYellow py-1 text-[20px] font-bold"
          >
            Continue to Shipping
          </button>
        </div>
        <div className="right bg-custBG flex flex-col justify-center px-[2rem] gap-6 py-2      max-sm:hidden">
          <h1 className="text-[20px]">Your cart</h1>
          <div className="flex items-center gap-6">
            <div className="w-[130px] border border-red-500 ">
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

    // <div>
    //   <SecondNavBar />
    //   <div className="flex justify-center items-center gap-[8rem] my-[4rem] max-sm:flex-col max-sm:my-[2rem] max-sm:w-[600px]">
    //     <div className="flex flex-col gap-4 max-sm:justify-center max-sm:items-center">
    //       <div className=" max-sm:flex max-sm:flex-col max-sm:items-center">
    //         <h3 className="font-semibold text-2xl">Checkout</h3>
    //         <p>Shipping Information</p>
    //       </div>
    //       <form
    //         onSubmit={handleSubmit}
    //         className="flex flex-col gap-2 max-sm:justify-center max-sm:border-2 max-sm:p-6 max-sm:ml-10"
    //       >
    //         <div className="flex gap-2 max-sm:flex-wrap max-sm:justify-between max-sm:items-center">
    //           <input
    //             type="text"
    //             name="firstname"
    //             value={FormData.firstname}
    //             onChange={handleChange}
    //             placeholder="First Name"
    //             className="border pl-2 py-2 placeholder-pxl"
    //           ></input>
    //           <input
    //             type="text"
    //             name="lastname"
    //             value={FormData.lastname}
    //             onChange={handleChange}
    //             placeholder="Last Name"
    //             className="border pl-2 py-2 placeholder-pxl"
    //           ></input>
    //         </div>
    //         <input
    //           type="text"
    //           name="address"
    //           value={FormData.address}
    //           onChange={handleChange}
    //           placeholder="Address"
    //           className="border pl-2 py-2 placeholder-pxl"
    //         ></input>
    //         <input
    //           type="text"
    //           name="apartment"
    //           value={FormData.apartment}
    //           onChange={handleChange}
    //           placeholder="Apartment, suite, etc (optional)"
    //           className="border pl-2 py-2 placeholder-pxl"
    //         ></input>
    //         <input
    //           type="text"
    //           name="city"
    //           value={FormData.city}
    //           onChange={handleChange}
    //           placeholder="City"
    //           className="border pl-2 py-2 placeholder-pxl"
    //         ></input>
    //         <div className="flex gap-2  max-sm:flex-wrap">
    //           <input
    //             type="text"
    //             name="country"
    //             value={FormData.country}
    //             onChange={handleChange}
    //             placeholder="Country"
    //             className="border pl-2 py-2 placeholder-pxl"
    //           ></input>
    //           <input
    //             type="text"
    //             name="city"
    //             value={FormData.city}
    //             onChange={handleChange}
    //             placeholder="City"
    //             className="border pl-2 py-2 placeholder-pxl"
    //           ></input>
    //           <input
    //             type="text"
    //             name="zipcode"
    //             value={FormData.zipcode}
    //             onChange={handleChange}
    //             placeholder="Zipcode"
    //             className="border pl-2 py-2 placeholder-pxl"
    //           ></input>
    //         </div>
    //         <div className="flex gap-2">
    //           <input type="checkbox"></input>
    //           <p>Save contact information</p>
    //         </div>
    //         <Link to="/shipping">
    //           <button
    //             className="bg-navYellow py-2 px-8 font-semibold flex items-center justify-center"
    //             type="submit"
    //           >
    //             Continue to Shipping
    //           </button>
    //         </Link>
    //       </form>
    //     </div>

    //     <div className="bg-customBGLight w-[25rem] py-2 px-6 flex flex-col gap-6 max-sm:hidden">
    //       <p>Your cart</p>
    //       <div className="flex gap-[2rem]">
    //         <div className="border p-2 border-navYellow w-fit">
    //           <img src={image6} alt="perfume" width="100px" />
    //         </div>
    //         <div className="flex flex-col gap-1">
    //           <h5 className="font-semibold">Dior Sausage</h5>
    //           <p className="text-[.7rem]">Quantity: 1</p>
    //           <h5 className="font-semibold">&#36;99.10</h5>
    //         </div>
    //         <div className="flex flex-col self-end items-end ml-8 mb-5 ">
    //           <p className="underline cursor-pointer">Remove</p>
    //         </div>
    //       </div>
    //       <input
    //         className="bg-customBGLight pl-2 py-2 border border-black placeholder-pxl"
    //         type="text"
    //         placeholder="Enter coupon code here"
    //       ></input>
    //       <div className=" flex flex-col gap-4">
    //         <div className="flex justify-between items-center">
    //           <p className="text-[.6rem]">Subtotal</p>
    //           <p className="font-semibold">&#36;99.10</p>
    //         </div>
    //         <div className="flex justify-between items-center">
    //           <p className="text-[.6rem]">Shipping</p>
    //           <p className="text-[.8rem]">Calculated at the next step</p>
    //         </div>
    //         <hr className="border-1 border-horizontalLine"></hr>
    //         <div className="flex justify-between items-center">
    //           <p className="font-semibold">Total</p>
    //           <p className="font-semibold">&#36;99.10</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <Footer />
    // </div>
  );
}

export default Checkout;
