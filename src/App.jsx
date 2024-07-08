import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import ProductInfo from "./Components/ProductInfo";
import SummaryPage from "./Components/SummaryPage";
import ShippingPage from "./Components/ShippingPage";
import SecondNavBar from "./Components/SecondNavBar";
import Checkout from "./Components/Checkout";
import Payment from "./Components/Payment";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      {/* <SecondNavBar /> */}
      <Header />
      <ProductList />
      <Footer />
      {/* <ProductInfo /> */}
      {/* <SummaryPage /> */}
      {/* <ShippingPage /> */}
      <Checkout />
      {/* <Payment /> */}
      <Outlet />
    </div>
  );
};

export default App;
