import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import ProductInfo from "./Components/ProductInfo";
import SummaryPage from "./Components/SummaryPage";
import ShippingPage from "./Components/ShippingPage";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <ProductList />
      <Footer />
      {/* <ProductInfo /> */}
      {/* <SummaryPage /> */}
      <ShippingPage />
      <Outlet />
    </div>
  );
};

export default App;
