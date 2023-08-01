import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.svg";
import {
  FaBars,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  return (
    
    <nav className="bg-[white] p-2 md:px-[100px] drop-shadow-md fixed w-full">
      <div className="max-w-[1512px] border-black mx-auto flex justify-between items-center bg-[white]">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {toggle ? (
          <FaBars
            onClick={() => setToggle(!toggle)}
            className="text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-2xl md:hidden block"
          />
        )}
        <ul className="hidden md:flex text-black  gap-[1.85rem] text-[14px] items-center ">
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

        <ul
          className={`fixed duration-300 font-bold md:hidden w-full border-solid border-t-2 border-[#9F9797]-100  h-screen text-black   bg-white top-[62px] ${
            toggle ? "left-[-100%]" : "left-0"
          }`}
        >
          <li className="p-3 border-solid border-b-2 border-[#9F9797]-100 ">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 border-solid border-b-2 border-[#9F9797]-100 flex justify-between items-center">
            <Link to="/services">Services </Link><BsChevronDown/>
          </li>
          <li className="p-3 border-solid border-b-2 border-[#9F9797]-100 flex justify-between items-center">
            <Link to="/solutions">solutions</Link><BsChevronDown/>
          </li>
          <li className="p-3 border-solid border-b-2 border-[#9F9797]-100">
            <Link to="/partners">Partners</Link>
          </li>
          <li className="p-3 border-solid border-b-2 border-[#9F9797]-100">
            <Link to="/Careers">Careers</Link>
          </li>
          <li className="p-3 border-solid border-b-2 border-[#9F9797]-100">
            <Link to="/aboutus">About Us</Link>
          </li>
          {/* --------------------bottom content--------------------------- */}
          <ul className="mt-[9rem] ">
            <li className=" text-center mb-2">
              <Link to="/contactus">Contact Us</Link> 
            </li>
            <li className=" text-center mb-2">
              <Link to="/contactus">Location</Link>
            </li>
            <li className=" text-center mb-2">
              <Link to="/contactus">Why Choose Us</Link>
            </li>
            <div className="">
              <ul className="flex gap-5 text-2xl mt-4 justify-center">
                <li className="hover:text-[#1A99D4]">
                  <FaWhatsapp />
                </li>
                <li className="hover:text-[#1A99D4]">
                  <FaLinkedinIn />
                </li>
                <li className="hover:text-[#1A99D4]">
                  <FaTwitter />
                </li>

                <li className="hover:text-[#1A99D4]">
                  <FaFacebookF />
                </li>
              </ul>
            </div>
          </ul>
        </ul>
      </div>
      <div></div>
    </nav>
  );
};

export default Header;
