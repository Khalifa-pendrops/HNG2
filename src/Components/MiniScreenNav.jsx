import React from 'react'
import { Link } from "react-router-dom";
import user from "../images/user.svg";
import bag from "../images/bag.svg";
import search from "../images/search.svg";

function MiniScreenNav() {
  return (
    <div>
      <header className="hidden max-sm:flex max-sm: ">
        <h2>Scentsory</h2>
        <img src={bag} alt="contact" />
      </header>
    </div>
  );
}

export default MiniScreenNav
