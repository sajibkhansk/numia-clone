import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Navbar.css'
const arrowStyles = {
    transition: 'transform 0.2s',
  };
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a href='https://docs.google.com/forms/d/e/1FAIpQLSfRYxYUtbgLPMdEMB6_ao05S56hxUwpK6-KUS6O73lST49-Vg/viewform'>Contacts</a></li>
      <li><a href='https://docs.numia.xyz/overview/what-is-numia'>Docs</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">
    <div className="w-10 rounded-full">
          <img src="https://img.freepik.com/free-icon/logo_318-195518.jpg" /> 
        </div> <span className='text-white'> Numia </span> 
    </a>
  </div>
  
  <div className="navbar-end hidden lg:flex">
 <ul className="menu menu-horizontal px-1 text-white">
  <li><a>Home</a></li>
  <li><a href='https://docs.google.com/forms/d/e/1FAIpQLSfRYxYUtbgLPMdEMB6_ao05S56hxUwpK6-KUS6O73lST49-Vg/viewform'>Contacts</a></li>
  <li className='text-orange-500 arrow-icon' style={arrowStyles}>
    <a href='https://docs.numia.xyz/overview/what-is-numia'> 
      Docs
      <FaArrowRight/>
    </a>
  </li>
</ul>
  </div>
</div>
    );
};

export default Navbar;