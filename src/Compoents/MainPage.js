import React from "react";
import Navbar from "./Navbar";

export default function MainPage() {
    return (
        <div className="mainPage">
            <Navbar />
            <h1>Welcome To Home Page!</h1>
            <button>Click Here!</button>
            <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"></img>
        </div>
    );
}