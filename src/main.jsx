import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ProductInfo from "./Components/ProductInfo.jsx";
import SummaryPage from "./Components/SummaryPage.jsx";
import Checkout from "./Components/Checkout.jsx";
import ShippingPage from "./Components/ShippingPage.jsx";
import Payment from "./Components/Payment.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/productInfo", element: <ProductInfo /> },
  { path: "/summary", element: <SummaryPage /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/shipping", element: <ShippingPage /> },
  { path: "/payment", element: <Payment /> },
  { path: "/home", element: <App /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
