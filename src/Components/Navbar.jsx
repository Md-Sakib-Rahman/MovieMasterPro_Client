import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { Link, NavLink } from "react-router";

const Navbar = () => {
const links = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "border-b-2 border-orange-500 rounded-none transition-all ease-in-out font-bold" : " transition-all ease-in-out font-bold"
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to='/allmovies'
        className={({ isActive }) =>
          isActive ? "border-b-2 border-orange-500 rounded-none transition-all ease-in-out font-bold" : " transition-all ease-in-out font-bold"
        }
      >
        All Movies
      </NavLink>
    </li>
    <li>
      <NavLink
        to='/mycollection'
        className={({ isActive }) =>
          isActive ? "border-b-2 border-orange-500 rounded-none transition-all ease-in-out font-bold" : " transition-all ease-in-out font-bold"
        }
      >
        My Collection
      </NavLink>
    </li>
  </>
);
const linksMenu = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "py-2 w-full text-black bg-amber-500/80 block rounded-sm text-md" // Active style
            : "py-2 w-full hover:text-black hover:bg-amber-500/80 block rounded-sm text-md" // Inactive style
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to='/allmovies'
        className={({ isActive }) =>
          isActive
            ? "py-2 w-full text-black bg-amber-500/80 block rounded-sm text-md" // Active style
            : "py-2 w-full hover:text-black hover:bg-amber-500/80 block rounded-sm text-md" // Inactive style
        }
      >
        All Movies
      </NavLink>
    </li>
    <li>
      <NavLink
        to='/mycollection'
        className={({ isActive }) =>
          isActive
            ? "py-2 w-full text-black bg-amber-500/80 block rounded-sm text-md" // Active style
            : "py-2 w-full hover:text-black hover:bg-amber-500/80 block rounded-sm text-md" // Inactive style
        }
      >
        My Collection
      </NavLink>
    </li>
  </>
);
  return (
    <div className="navbar bg-base-100/90 shadow-sm px-20 max-lg:px-2 fixed z-40">
      <div className="navbar-start">
        
        <a className="btn btn-ghost text-xl">Movie Master <span className="text-primary" >Pro</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex justify-center items-center gap-10">
          {links}
        </ul>
      </div>
      <div className="navbar-end flex justify-end items-center gap-5">

        <div>
          <Link to='/login' className="btn btn-primary max-lg:hidden">Login</Link>
        </div>
        <div>
          <ThemeSwitch />
        </div>
        
      </div>
      <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100/50 backdrop-blur-md  rounded-box z-1 mt-3  p-2 shadow w-60 absolute right-2 top-15 h-[500px] border-primary border-2 text-left text-xl transition-all ease-in-out duration-1000"
          >
            <h2 className="font-bold text-primary mb-4">Menu</h2>
            {
                linksMenu
            }
          </ul>
        </div>
    </div>
  );
};

export default Navbar;
