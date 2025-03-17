import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">NectGenDev</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="mx-2">
              <Link to="/home">Home</Link>
            </li>
            <li className="mx-2">
              <Link to="/about">About</Link>
            </li>
            <li className="mx-2">
              <Link to="projects">Projects</Link>
            </li>
            <li className="mx-2">
              <Link to="resume">Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
