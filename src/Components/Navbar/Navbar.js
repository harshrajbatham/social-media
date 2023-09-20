import React from "react";
import NavLinks from "./NavLinks";
import UserLinks from "./UserLinks";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center border-b border-gray-100 w-full px-44 py-2">
        <Link to= "/">
        <div className="text-3xl font-extrabold text-gray-900 dark:text-white font-roboto">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-blue-gray-400">
            THE LIFE
          </span>{" "}
          APP
        </div>
        </Link>
        <div className="flex justify-center item-center mx-auto">
          <NavLinks />
        </div>
        <div>
          <UserLinks/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
