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
        <div>
          <div className="">
            <h3>Your cart</h3>
            <p>
              Not ready to checkout?
              <Link to="/shop">
                <span className="text-blue-400">Continue Shopping</span>
              </Link>
            </p>
          </div>
          <div>
            <div className="border p-2 border-navYellow">
              <img src={image6} alt="perfume" width="100px" />
            </div>
            <div>
              <h5>Dior Sausage</h5>
              <p>Quantity: 1</p>
              <h5>&#36;99.10</h5>
            </div>
            <div className="flex flex-col self-end items-end gap-1 my-[4rem]">
              <p className="underline cursor-pointer">Remove</p>
            </div>
          </div>

          <div>
            <h5>Order Information</h5>
            <div className=" flex justify-between">
              <h6>Return Policy</h6>
              <p>-</p>
            </div>
            <p>
              This is iur return policy which is everything you need to know
              about our returns.
            </p>
            <div className=" flex justify-between">
              <h6>Shipping Options</h6>
              <p>+</p>
            </div>
          </div>
          <div className="bg-customBGLight">
            <h6>Order Summary</h6>
            <input type="text" placeholder="Enter coupon code here"></input>
            <button type="submit">Apply Promo code</button>
            <div className=" flex flex-col">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>&#36;99.10</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping</p>
                <p>Calculated at the next step</p>
              </div>
              <div className="flex justify-between">
                <p>Total</p>
                <p>&#36;99.10</p>
              </div>
            </div>
            <button type="submit">Continue to checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SummaryPage;
