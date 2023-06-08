/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>
        About
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>
        Contact
      </NavLink>
    </nav>
  );
}

export default Header;
