import React, { useState, useEffect } from "react";
import logo_black from "../assets/logo_02.png";
import logo_white from "../assets/logo_white.png";

const Menu = () => {
  const [drawerShown, setDrawerShown] = useState(false);
  const [scrollOnTop, setScrollOnTop] = useState(true);
  const handleScroll = () => {
    // when the user scrolls, check the pageYOffset
    if (window.pageYOffset > 0) {
      // user is scrolled
      if (scrollOnTop) setScrollOnTop(false);
    } else {
      // user is at top of page
      if (scrollOnTop) setScrollOnTop(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log("Used Effect");
    console.log(scrollOnTop);
  });
  return (
    <div
      className={`fixed z-10 inset-x-0 px-6 pt-4 top-0 pb-4 ${
        drawerShown ? "bg-white" : `${!scrollOnTop ? "bg-white shadow-xl" : ""}`
      }`}
    >
      <div className="App">
        <div className="flex justify-between">
          <img
            className={`w-56 ${drawerShown || !scrollOnTop ? "hidden" : ""}`}
            src={logo_white}
            alt="Logo"
          />
          <img
            className={`w-56 ${drawerShown || !scrollOnTop ? "" : "hidden"}`}
            src={logo_black}
            alt="Logo"
          />
          <div className="hidden lg:flex space-x-40">
            <NavItems drawerShown={drawerShown} scrollOnTop={scrollOnTop} />
          </div>
          <button
            onClick={() => setDrawerShown(!drawerShown)}
            className={`border-2 ${
              drawerShown || !scrollOnTop ? "border-black" : "border-white"
            } rounded-md px-2 py-1 lg:hidden`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${
                drawerShown || !scrollOnTop ? "text-black" : "text-white"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {drawerShown ? (
          <div className="lg:hidden flex flex-col space-y-8 pt-4">
            <NavItems drawerShown={drawerShown} scrollOnTop={scrollOnTop} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Menu;

const NavItems = ({ drawerShown, scrollOnTop }) => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <ul
          className={`${
            drawerShown || !scrollOnTop ? "text-black" : "text-white"
          } flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-6`}
        >
          <li className="font-bold">Home</li>
          <li>Portfolio</li>
        </ul>
      </div>
      <button
        className={`w-48 lg:w-32 mx-auto px-8 py-2 focus:outline-none ${
          drawerShown || !scrollOnTop ? "text-white" : "text-primary"
        } rounded ${
          drawerShown || !scrollOnTop
            ? "bg-gradient-to-r from-primary to-primary-light"
            : "bg-white"
        }`}
      >
        HIRE ME
      </button>
    </>
  );
};
