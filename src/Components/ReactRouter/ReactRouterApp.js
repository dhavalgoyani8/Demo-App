/** @format */

import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import "./ReactRouterApp.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./Header";
import Email from "./Email";
import Address from "./Address";

function ReactRouterApp() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />

          <Route path={"/contact"} element={<Contact />}>
            <Route index  element={<Email />} />
            <Route path="email" element={<Email />} />
            <Route path="address" element={<Address />} />
          </Route>

          <Route path={"*"} element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ReactRouterApp;
