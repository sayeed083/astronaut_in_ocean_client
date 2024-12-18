import React from 'react';
import { FaSearch, FaUserAstronaut } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {



  const navsections = <>
    <li className="text-lg"><Link to="/">Home</Link></li>
    <li className="text-lg"><Link to="about">About</Link></li>
    <li className="text-lg"><Link to="contact">Contact</Link></li>
    <li className="text-lg"><Link to="/blogs">Blogs</Link></li>
  </>







  return (
    <div>
      <div className="navbar fixed z-50 bg-transparent max-w-screen-xl text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navsections}
            </ul>
          </div>
          <FaUserAstronaut className='text-[50px]'></FaUserAstronaut>
          <Link to="/" className="btn btn-ghost uppercase text-xl">Astral Journey</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navsections}
          </ul>
        </div>
        <div className="navbar-end">
        <FaSearch className='text-xl mx-5'></FaSearch>
        </div>
      </div>
    </div>
  );
};

export default Navbar;