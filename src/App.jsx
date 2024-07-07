import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <ProductList />
      <Outlet />
    </div>
  );
};

export default App;
