/** @format */

import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Contact() {
  return (
    <div className="contactPage">
      <h1>
        This is <i>Contact</i> page
      </h1>
      <hr />
      <NavLink
        to="email"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>
        <button>Email</button>
      </NavLink>
      <NavLink
        to="address"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>
        <button>Address</button>
      </NavLink>
      <Outlet />
    </div>
  );
}

export default Contact;
