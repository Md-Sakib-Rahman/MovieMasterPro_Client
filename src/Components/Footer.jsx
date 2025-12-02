import React from "react";
import { Link } from "react-router";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="w-full bg-base-200">
      <footer className="footer sm:footer-horizontal 2xl:max-w-7xl lg:max-w-[1124px] max-xl:px-20 max-lg:px-2 mx-auto py-10 flex flex-wrap justify-between gap-10 max-xl:justify-center max-md:flex-col items-start max-md:justify-center max-md:items-center max-md:text-center bg-base-200 text-base-content">
        <aside className="flex flex-col items-start max-md:items-center">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current max-md:w-full max-xl:w-[60px]"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p className="mt-2">
            <span className="font-bold text-xl">
              Movie Master <span className="text-primary">Pro</span>
            </span>
            <br />
            The ultimate tool for film enthusiasts.
          </p>
        </aside>

        <nav className="flex flex-col gap-2">
          <h6 className="footer-title opacity-100">Discover</h6>
          <Link to="/allmovies" className="link link-hover hover:text-primary">All Movies</Link>
          <Link to="/about" className="link link-hover hover:text-primary">About Us</Link>
          <Link to="/" className="link link-hover hover:text-primary">Contact</Link>
        </nav>

        <nav className="flex flex-col gap-2">
          <h6 className="footer-title opacity-100">Account</h6>
          <Link to="/mycollection" className="link link-hover hover:text-primary">My Collection</Link>
          <Link to="/watchlist" className="link link-hover hover:text-primary">Watchlist</Link>
          <Link to="/login" className="link link-hover hover:text-primary">Login</Link>
        </nav>

        <nav className="flex flex-col gap-2">
          <h6 className="footer-title opacity-100">Support</h6>
          <Link to="/faq" className="link link-hover hover:text-primary">Help & FAQ</Link>
          <Link to="/about" className="link link-hover hover:text-primary">Terms & Conditions</Link>
          <span className="text-sm opacity-70">sakibrahman.user@gmail.com</span>
        </nav>

        <nav className="flex flex-col gap-2">
          <h6 className="footer-title opacity-100">Legal</h6>
          <div className="flex justify-center items-center gap-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="link link-hover hover:text-primary transition-colors">
              <FaSquareFacebook size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="link link-hover hover:text-primary transition-colors">
              <BsTwitterX size={30} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="link link-hover hover:text-primary transition-colors">
              <GrLinkedin size={30} />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

