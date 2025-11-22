import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="flex" >
            <ul className="flex" >
                <li> 
                    <a href="#">Home</a> 
                </li>

                <li> 
                    <a href="#">About</a> 
                </li>

                <li> 
                    <a href="#">Contact</a> 
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
