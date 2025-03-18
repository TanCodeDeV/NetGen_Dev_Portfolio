import React, { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar bg-base-300 shadow-sm px-4">
      {/* Left Section: Brand Name */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          NextGenDev
        </Link>
      </div>

      {/* Right Section: Navigation */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (Hamburger) */}
      <div className="lg:hidden">
        <button className="btn btn-ghost" onClick={() => setIsOpen(!isOpen)}>
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <div className="absolute top-16 right-4 bg-base-200 shadow-lg rounded-lg p-4 w-48">
          <ul className="flex flex-col space-y-3">
            <li>
              <Link to="/home" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/resume" onClick={() => setIsOpen(false)}>
                Resume
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
