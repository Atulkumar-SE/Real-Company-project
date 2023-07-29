import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from '../../Images/logo.svg'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'


const Header = () => {
  return (
    <nav className="bg-[yellow] p-2 md:px-[100px]">
      <div className="max-w-[1512px] border-black mx-auto flex justify-between items-center bg-[pink]">
        <div className="logo">
        <img src={logo} className="" alt="logo" />
        </div>
      <FaBars className="text-2xl md:hidden block"/>
      <AiOutlineClose className="text-2xl md:hidden block"/>
        <ul className="hidden md:flex text-black  gap-[1.25rem] text-[14px] items-center ">
          <li>
            <Link to="/">Home</Link>
          </li> 
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/solutions">solutions</Link>
          </li>
          <li>
            <Link to="/partners">Partners</Link>
          </li>
          <li>
            <Link to="/Careers">Careers</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>

          <Link to="/contactus">
            <button className="bg-[#047FCC] text-white font-bold py-2 px-4 ">
              Contact Us
            </button>
          </Link>
        </ul>
        {/* ----------------Responsive Menu-------------- */}
        <ul className=" md:hidden text-black  fixed">
          <li>
            <Link to="/">Home</Link>
          </li> 
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/solutions">solutions</Link>
          </li>
          <li>
            <Link to="/partners">Partners</Link>
          </li>
          <li>
            <Link to="/Careers">Careers</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>

          <Link to="/contactus">
            <button className="bg-[#047FCC] text-white font-bold py-2 px-4 ">
              Contact Us
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
