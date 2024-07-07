import React, {useState, useEffect} from "react";
import club from "../images/club.svg";
import star from "../images/star.svg";
import nostar from "../images/nostar.svg";

function ProductList() {
  return (
    <div>
      <section className="my-[4rem] flex flex-col items-center gap-8">
        <div className="flex flex-col justify-center items-center gap-4 ">
          <div className="flex items-center justify-center gap-[2rem]">
            <div className="flex flex-col justify-between items-center border border-navYellow w-[15rem] h-[20rem] py-2 rounded-xl">
              <div className="flex flex-col items-center">
                <img src={club} alt="perfume" />
                <p>Club de Nuit</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>

            <div className="flex flex-col justify-between items-center border border-navYellow w-[15rem] h-[20rem] py-2 rounded-xl">
              <div className="flex flex-col items-center">
                <img src={club} alt="perfume" />
                <p>Club de Nuit</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>

            <div className="flex flex-col justify-between items-center border border-navYellow w-[15rem] h-[20rem] py-2 rounded-xl">
              <div className="flex flex-col items-center">
                <img src={club} alt="perfume" />
                <p>Club de Nuit</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-[2rem]">
            <div className="flex flex-col justify-between items-center border border-navYellow w-[15rem] h-[20rem] py-2 rounded-xl">
              <div className="flex flex-col items-center">
                <img src={club} alt="perfume" />
                <p>Club de Nuit</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>

            <div className="flex flex-col justify-between items-center border border-navYellow w-[15rem] h-[20rem] py-2 rounded-xl">
              <div className="flex flex-col items-center">
                <img src={club} alt="perfume" />
                <p>Club de Nuit</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>

            <div className="flex flex-col justify-between items-center border border-navYellow w-[15rem] h-[20rem] py-2 rounded-xl">
              <div className="flex flex-col items-center">
                <img src={club} alt="perfume" />
                <p>Club de Nuit</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-[2rem]">
            <div className="flex flex-col justify-between items-center border border-navYellow w-[15rem] h-[20rem] py-2 rounded-xl">
              <div className="flex flex-col items-center">
                <img src={club} alt="perfume" />
                <p>Club de Nuit</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>

            <div className="flex flex-col justify-between items-center border border-navYellow w-[15rem] h-[20rem] py-2 rounded-xl">
              <div className="flex flex-col items-center">
                <img src={club} alt="perfume" />
                <p>Club de Nuit</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>

            <div className="flex flex-col justify-between items-center border border-navYellow w-[15rem] h-[20rem] py-2 rounded-xl">
              <div className="flex flex-col items-center">
                <img src={club} alt="perfume" />
                <p>Club de Nuit</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>
          </div>
              </div>
              <button className= "border-none bg-navYellow px-6 py-1 rounded-sm" type="submit">Load more products</button>
      </section>
    </div>
  );
}

export default ProductList;
