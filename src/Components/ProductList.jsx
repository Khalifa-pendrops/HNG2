import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image6 from "../images/image 6.svg";
import image7 from "../images/image 7.svg";
import image8 from "../images/image 8.svg";
import image9 from "../images/image 9.svg";
import image10 from "../images/image 10.svg";
import image11 from "../images/image 11.svg";
import image12 from "../images/image 12.svg";
import image13 from "../images/image 13.svg";
import club from "../images/club.svg";
import star from "../images/star.svg";
import nostar from "../images/nostar.svg";
import arrowdown from "../images/arrowdown.svg";

function ProductList() {
  return (
    <div className="flex justify-center gap-[4rem] mt-[2rem] font-Outfit">
      <div className="flex flex-col gap-4 max-sm:hidden">
        <aside className="flex flex-col gap-4 p-2 ">
          <div className="flex items-center gap-4">
            <h6 className="font-semibold">Filters</h6>
            <p className="text-[.7rem] underline">Clear filters</p>
          </div>
          <div className="flex flex-col gap-2 w-fit pr-2 pb-2">
            <h6 className="">Categories</h6>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p className="text-[.8rem]">Perfume</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p className="text-[.8rem]">Perfume</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p className="text-[.8rem]">Perfume</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p className="text-[.8rem]">Perfume</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p className="text-[.8rem]">Perfume</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p className="text-[.8rem]">Perfume</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p className="text-[.8rem]">Perfume</p>
            </div>
          </div>
        </aside>

        <aside className="flex flex-col gap-4 p-2 ">
          <div className="flex items-center gap-4">
            <h6 className="font-semibold">Brands</h6>
          </div>
          <div className="flex flex-col gap-2 w-fit pr-2 pb-2">
            {/* <h6 className="">Categories</h6> */}
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p className="text-[.8rem]">Gucci</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p className="text-[.8rem]">Hugo Boss</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p className="text-[.8rem]">Elizabeth Arden</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p className="text-[.8rem]">Police</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p className="text-[.8rem]">Joop</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p className="text-[.8rem]">Armani</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p className="text-[.8rem]">Burbery</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p className="text-[.8rem]">Dior</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p className="text-[.8rem]">David off</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p className="text-[.8rem]">Aramis</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p className="text-[.8rem]">Ck</p>
            </div>
            <div className="flex gap-1">
              <input type="checkbox"></input>
              <p className="text-[.8rem]">Creed Aventus</p>
            </div>
          </div>
        </aside>

        <aside className="flex flex-col gap-4 p-2 ">
          <div className="flex items-center gap-4">
            <h6 className="font-semibold">Review Ratings</h6>
          </div>
          <div className="flex flex-col gap-4 w-fit pr-2 pb-2">
            <div className="flex gap-3">
              <img src={star} alt="full star" />
              <img src={star} alt="full star" />
              <img src={star} alt="full star" />
              <img src={star} alt="full star" />
              <img src={star} alt="full star" />
            </div>
            <div className="flex gap-1">
              <img src={star} alt="full star" />
              <img src={star} alt="full star" />
              <img src={star} alt="full star" />
              <img src={star} alt="full star" />
              <img src={nostar} alt="empty star" />
            </div>
            <div className="flex gap-1">
              <img src={star} alt="full star" />
              <img src={star} alt="full star" />
              <img src={star} alt="full star" />
              <img src={nostar} alt="empty star" />
              <img src={nostar} alt="empty star" />
            </div>
          </div>
        </aside>
      </div>
      <section className="mb-[4rem] flex flex-col items-center gap-8">
        <div className="border flex items-center gap-2 px-2 self-end max-sm:hidden">
          <p className="text-customtxt text-[.7rem] underline">Sort By</p>
          <h6 className="font-semibold">Popular</h6>
          <img src={arrowdown} alt="down arrow" />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 max-sm:w-[334px]">
          <div className="flex items-center justify-center gap-[2rem] max-sm:flex-wrap">
            <div className="flex flex-col justify-center items-center gap-4 border-2 border-navYellow h-[472px] w-[300.75px] py-2 rounded-xl">
              <img src={club} alt="perfume" width="117.48px" height="178px" />
              <div className="flex flex-col items-center gap-2">
                <p className="font-bold">Club de Nuit</p>
                <p className="font-bold">Club de Nuit Precieux 1</p>
                <p>Eau de Parfum 100ml</p>
                <p className="font-bold">&#36;87.25</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-6 border-2 border-navYellow h-[472px] w-[300.75px] py-2 rounded-xl">
              <Link to="/productInfo">
                <img src={image6} alt="perfume" width="160px" height="160px" />
              </Link>
              <div className="flex flex-col items-center gap-2">
                <p className="font-bold">Dior Sausage</p>
                <p className="font-bold">SAUSAGE Elixir x Baccarat</p>
                <p>Eau de Parfum 100ml</p>
                <p className="font-bold">&#36;99.10</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>

            <div className="flex flex-col justify-center gap-8 items-center border-2 border-navYellow h-[472px] w-[300.75px] py-2 rounded-xl">
              <img src={image7} alt="perfume" width="300px" height="181px" />
              <div className="flex flex-col items-center gap-2">
                <p className="font-bold">Creed Aventus</p>
                <p className="font-bold">4 You Creed Aventus</p>
                <p>Eau de Parfum 100ml</p>
                <p className="font-bold">&#36;50.45</p>
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

          <div className="flex items-center justify-center gap-[2rem] max-sm:flex-wrap">
            <div className="flex flex-col justify-center gap-1  items-center border-2 border-navYellow h-[472px] w-[300.75px] py-2 rounded-xl">
              <img src={image8} alt="perfume" width="185px" height="185px" />
              <div className="flex flex-col items-center gap-2 text-center">
                <p className="font-bold">Calvin Klein</p>
                <p className="font-bold">
                  Calvin Klein Eternity For Men Parfum 100ml
                </p>
                <p>Eau de Parfum 100ml</p>
                <p className="font-bold">&#36;87.25</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>

            <div className="flex flex-col justify-center gap-10 items-center border-2 border-navYellow h-[472px] w-[300.75px] py-2 rounded-xl">
              <img src={image9} alt="perfume" width="265.4px" height="152px" />
              <div className="flex flex-col items-center gap-2">
                <p className="font-bold">Gucci</p>
                <p className="font-bold">Gucci Bamboo Perfume</p>
                <p>Eau de Parfum 100ml</p>
                <p className="font-bold">&#36;60.55</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 items-center border-2 border-navYellow h-[472px] w-[300.75px] py-2 rounded-xl">
              <img src={image10} alt="perfume" width="185px" height="185px" />
              <div className="flex flex-col items-center gap-2">
                <p className="font-bold">Burbery</p>
                <p className="font-bold">Her Eau de Toilette</p>
                <p>Extrait de Parfum 100ml</p>
                <p className="font-bold">&#36;45.87</p>
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

          <div className="flex items-center justify-center gap-[2rem] max-sm:flex-wrap">
            <div className="flex flex-col justify-center gap-6 items-center border-2 border-navYellow h-[472px] w-[300.75px] py-2 rounded-xl">
              <img
                src={image11}
                alt="perfume"
                width="259.7px"
                height="146.23px"
              />
              <div className="flex flex-col items-center gap-2 text-center">
                <p className="font-bold">Aramis</p>
                <p className="font-bold">
                  ARAMIS DEVIN ARAMIS 100ML EDT FOR MEN
                </p>
                <p>Extrai de Parfum 100ml</p>
                <p className="font-bold">&#36;60.55</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 items-center border-2 border-navYellow h-[472px] w-[300.75px] py-2 rounded-xl">
              <img src={image12} alt="perfume" width="177px" height="177px" />
              <div className="flex flex-col items-center gap-2 text-center">
                <p className="font-bold">Davidoff</p>
                <p className="font-bold">Davidoff cool water reborn</p>
                <p>Extrai de Parfum 100ml</p>
                <p className="font-bold">&#36;70.55</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>

            <div className="flex flex-col justify-center gap-2 items-center border-2 border-navYellow h-[472px] w-[300.75px] py-2 rounded-xl">
              <img src={image13} alt="perfume" width="190px" height="190px" />
              <div className="flex flex-col items-center gap-2 text-center">
                <p className="font-bold">Jaguar</p>
                <p className="font-bold">Jaguar For Men</p>
                <p>Eau de Toilette</p>
                <p className="font-bold">&#36;70.55</p>
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
      </section>
    </div>
  );
}

export default ProductList;
