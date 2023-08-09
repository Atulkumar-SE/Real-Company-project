import React, { useState } from "react";
import Navliks from "./Navliks";
import Button from "./Button";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import './Navbar.css'
import logo from "../../../Images/logo.svg";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="zIndex bg-[#ffffff] w-full fixed">
      <div className="z-50 flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <div className="md:cursor-pointer text-5xl text-blue-800 font-bold ">
       <Link to="/"><img src={logo}  alt="logo" /></Link>
          
          </div>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <GrClose /> : <FaBars />}
          </div>
        </div>
        <ul className="md:flex text-[.8rem] hidden uppercase items-center ">
          <li className="py-7 px-3 ">
            <Link to="/">Home</Link>
          </li>
          <Navliks />
          <li className="py-7 px-3 ">
            <Link to="/partners">Partners</Link>
          </li>
          <li className="py-7 px-3 ">
            <Link to="/careers">Careers</Link>
          </li>
          <li className="py-7 px-3 ">
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
      </div>
      {/* -----------------------Responsive mob navbar----------------- */}

      <ul
        className={`zIndex md:hidden bg-white absolute w-full h-fit top-[5rem] py-3 pl-4 duration-300 ${
          open ? "left-0" : "left-[-100%]"
        }`}
      >
        <li className="py-3 px-3 "> <Link to="/">Home</Link></li>

        <Navliks />
        
        <li className="py-3 px-3 ">
          <Link to="/partners">Partners</Link>
        </li>
        <li className="py-3 px-3 ">
          <Link to="/careers">Careers</Link>
        </li>
        <li className="py-3 px-3 ">
          <Link to="/About">About Us</Link>
        </li>
        <div className="py-5">
          <Button />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
