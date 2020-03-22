import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav>
    <div className="nav-wrapper">
      <NavLink to="/" className="brand-logo">Rick and Morty</NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/fav">Look at all your shwifty episodes</NavLink></li>
        <li>WABB-LABB-DABB-DA</li>
      </ul>
    </div>
  </nav>
  )
}