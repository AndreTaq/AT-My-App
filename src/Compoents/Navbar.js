import React from "react";
// import { Link } from "react-router-dom";
import "../css/Style.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/profile">Pofile</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
