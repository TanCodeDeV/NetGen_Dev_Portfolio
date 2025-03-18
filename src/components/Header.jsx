import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation(); // Detect route change

  // Close menu when navigating to a new page
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-base-300 shadow-sm relative z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a className="text-xl font-bold">NextGenDev</a>

        {/* Hamburger Menu Button (Visible Only on Mobile) */}
        <button
          className="md:hidden block text-xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <ul
          ref={menuRef}
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-base-300 md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-5 invisible md:visible md:opacity-100 md:translate-y-0"
          } md:flex md:space-x-6`}
        >
          <li>
            <Link
              to="/home"
              className="block px-3 py-2 hover:text-primary md:inline-block"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block px-3 py-2 hover:text-primary md:inline-block"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="block px-3 py-2 hover:text-primary md:inline-block"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className="block px-3 py-2 hover:text-primary md:inline-block"
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
