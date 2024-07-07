import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
// import Home from "./Components/Home";
// import About from "./Components/About";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route index element={<Home />} />
          <Route path="about" element={<About />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
