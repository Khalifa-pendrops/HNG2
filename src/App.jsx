import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";




import ProductInfo from "./Components/ProductInfo.jsx";
import SummaryPage from "./Components/SummaryPage.jsx";
import Checkout from "./Components/Checkout.jsx";
import ShippingPage from "./Components/ShippingPage.jsx";
import Payment from "./Components/Payment.jsx";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <ProductList />
      <Footer />
      <Outlet />
      {/* <ProductInfo />
      <SummaryPage /> */}
      
    </div>
  );
};

export default App;
