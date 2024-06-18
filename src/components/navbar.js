import Link from "next/link";
import React from "react";

import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <Link href={"/"}>
        <h1 className="text-2xl font-anton text-gray-900 dark:text-white">ByAkinyaz</h1>
      </Link>

      <ul className="flex justify-center">
        <li className="pt-2 pr-5">
          {darkMode ? (
            <BsSun
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl  text-white"
            />
          ) : (
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            />
          )}
        </li>
        <Link href="/resume">
          <li className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 ml-5 rounded-md">
            Resume
          </li>
          </Link>
          {/*
          <Link href="/jobs">
            <li className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 ml-5 rounded-md">
              Wanna Work?
            </li>
          </Link> 
        */}

      </ul>
    </nav>
  );
};

export default Navbar;
