import React from "react";
import { Link } from "react-router-dom";
import "../css/Style.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        {/* <Link className="link" to="">Pofile</Link> */}
        {/* <Link className="link" to="">Contact</Link> */}
      </div>
    </div>
  );
}

export default Navbar;
