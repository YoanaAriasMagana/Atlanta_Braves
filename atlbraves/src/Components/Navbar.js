import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
   
        return (
            <div className="header">
                <div className="logo">
                <img
                  src="./img/braves-logo.png"
                  alt="logo"
                  width="120px"
                  height="90px"
                />
                </div>
              <ul className="nav-bar">
                <Link to="/" >Home</Link>
                <Link to="/Excel" >Stats</Link>
              </ul>
            </div>
        );
    }