import React from "react";
import Navbar from "./Navbar";

export default function About() {
    return (
        <div className="about">
            <Navbar />
            <h1>About Page</h1>
            <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"></img>
            <button>Click Here!</button>
        </div>
    );
}