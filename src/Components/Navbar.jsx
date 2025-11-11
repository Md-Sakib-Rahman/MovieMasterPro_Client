import React, { useContext } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { Link, NavLink } from "react-router";
import { Context } from "../Context/Context";

const Navbar = () => {
  const { user, logOut } = useContext(Context);
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Sign-out successful.")
      })
      .catch((error) => {
        console.log(error)
      });
  };
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-orange-500 rounded-none transition-all ease-in-out font-bold"
              : " transition-all ease-in-out font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allmovies"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-orange-500 rounded-none transition-all ease-in-out font-bold"
              : " transition-all ease-in-out font-bold"
          }
        >
          All Movies
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/mycollection"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-orange-500 rounded-none transition-all ease-in-out font-bold"
              : " transition-all ease-in-out font-bold"
          }
        >
          My Collection
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/watchlist"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-orange-500 rounded-none transition-all ease-in-out font-bold"
              : " transition-all ease-in-out font-bold"
          }
        >
          Watchlist
        </NavLink>
      </li>
      {
        user ? (
          <li>
        <NavLink
          to="/addmovies"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-orange-500 rounded-none transition-all ease-in-out font-bold"
              : " transition-all ease-in-out font-bold"
          }
        >
          Add Movies
        </NavLink>
      </li>
        ):(
          ''
        )
      }
    </>
  );
  const linksMenu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "py-2 w-full text-black bg-amber-500/80 block rounded-sm text-md"
              : "py-2 w-full hover:text-black hover:bg-amber-500/80 block rounded-sm text-md"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allmovies"
          className={({ isActive }) =>
            isActive
              ? "py-2 w-full text-black bg-amber-500/80 block rounded-sm text-md"
              : "py-2 w-full hover:text-black hover:bg-amber-500/80 block rounded-sm text-md"
          }
        >
          All Movies
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/mycollection"
          className={({ isActive }) =>
            isActive
              ? "py-2 w-full text-black bg-amber-500/80 block rounded-sm text-md"
              : "py-2 w-full hover:text-black hover:bg-amber-500/80 block rounded-sm text-md"
          }
        >
          My Collection
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/watchlist"
          className={({ isActive }) =>
            isActive
              ? "py-2 w-full text-black bg-amber-500/80 block rounded-sm text-md"
              : "py-2 w-full hover:text-black hover:bg-amber-500/80 block rounded-sm text-md"
          }
        >
          Watchlist
        </NavLink>
      </li>
      {
        user ? (
          <NavLink
          to="/addmovies"
          className={({ isActive }) =>
            isActive
              ? "py-2 w-full text-black bg-amber-500/80 block rounded-sm text-md"
              : "py-2 w-full hover:text-black hover:bg-amber-500/80 block rounded-sm text-md"
          }
        >
          AddMovies
        </NavLink>
        ) : 
        (
          ''
        )
      }
    </>
  );
  return (
    <div className="navbar bg-base-100/90 shadow-sm px-20 max-lg:px-2 fixed z-40">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl max-sm:text-sm">
          Movie Master <span className="text-primary">Pro</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex justify-center items-center gap-10">
          {links}
        </ul>
      </div>
      <div className="navbar-end flex justify-end items-center gap-5">
        {user ? (
          <div className="dropdown dropdown-end relative">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={user.photoURL}
                  alt={user.displayName || "User"}
                  title={user.displayName || "User"}
                />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border-orange-500 border-2 absolute -right-20 "
            >
              <li>
                <p className="justify-between font-bold">
                  Profile Name: {user.displayName || "Profile"}
                </p>
              </li>
              
              <li>
                <button className="btn btn-primary " onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <Link to="/login" className="btn btn-primary max-lg:hidden ">
              Login
            </Link>
          </div>
        )}

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
            
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex="-1"
          className="menu menu-sm dropdown-content bg-base-100/50 backdrop-blur-md  rounded-box z-1 mt-3  p-2 shadow w-60 absolute right-2 top-15 h-[500px] border-primary border-2 text-left text-xl transition-all ease-in-out duration-1000"
        >
          <h2 className="font-bold text-primary mb-4">Menu</h2>
          {linksMenu}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
