import React from "react";
import '../css/Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <a href="/home">Homw</a>
            <a href="/about">About</a>
            <a href="/profile">Pofile</a>
            <a href="/contact">Contact</a>
        </div>
    )
}

export default Navbar