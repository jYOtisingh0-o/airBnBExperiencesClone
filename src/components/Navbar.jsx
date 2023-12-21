import React from "react";
import airbnbLogo from "../assets/airbnb-logo.png"

export default function NavBar(){
    return (
        <nav>
            <img src={airbnbLogo} className="nav--logo" alt="AirBnb logo" />
        </nav>
    )
}