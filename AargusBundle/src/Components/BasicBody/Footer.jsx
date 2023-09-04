import React, { useEffect } from "react";
import "./BasicBody.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbMailFilled } from "react-icons/tb";
import { BsGlobe2 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import logo from "../../Images/logo.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="w-[100%] h-[5.5rem] bg-white text-white"> .</div>
      <footer className="w-full h-fit py-5 bg-[#002C78] text-white md:place-content-center ">
        {/* ------------------------footer just above------------------------ */}
        <div data-aos="slide-up" className="FooterContact hidden md:flex justify-between place-items-center content-center items-center mx-[8rem] lg:px-[5.688rem] px-[2rem] py-[3rem] mt-[-5.5rem] ">
          <h1 className=" text-2xl lg:text-4xl font-semibold">
            Let's Start Conversation
          </h1>
          <Link to="/contactus">
            <button className="px-[1.5rem] py-3 text-xl font-bold bg-[#002C78] ">
              Contact Us
            </button>
          </Link>
        </div>
        {/* ------------------------footer navbar------------------------ */}
        <div className="hidden md:block px-[6.25rem] pt-[3.62rem] pb-[28px] border-b border-white">
          <ul className="flex justify-between ">
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
          </ul>
        </div>
        {/* -------------------------------Footer items------------------------------ */}
        <div className="px-[1.25rem]  lg:px-[6.25rem]     gap-10  mt-[2.813rem] justify-between  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <div className=" ">
            {/* ----------------------------SErvices--------------------------------- */}
            <h5 className="text-xl font-bold mb-[1.25rem]">Services</h5>
            <ul className="gap-y-[5rem]">
              <li>Conslting</li>
              <li>Data Migration</li>
              <li>Web Development</li>
              <li>App Development</li>
              <li>IT Infrastructure</li>
              <li>Automation</li>
              <li>Training</li>
              <li>Tally Support</li>
              <li>Managed Services</li>
            </ul>
          </div>
          {/* ----------------------------Address--------------------------------- */}

          <div className=" ">
            <h5 className="text-xl font-bold mb-[1.25rem]">Address</h5>
            <ul className="gap-y-[5rem]">
              <li>
                <span className="font-bold">Regd. off. :</span> S-3, Anupam
                PlazaOpposite Azad ApartmentsSri Aurbindo MargHauz KhasNew Delhi
                - 110016.
              </li>
              <li>
                <span className="font-bold">Corp. Off. :</span> 605, Tower A,The
                I-Thum, Plot No.A-40,Sector-62, Noida (U.P.)-201301
              </li>
            </ul>
          </div>
          {/* ----------------------------Contactus--------------------------------- */}

          <div className="">
            <h5 className="text-xl font-bold mb-[1.25rem]">Contact Us</h5>
            <ul className="gap-y-[5rem] ">
              <li className="flex items-center gap-[10px] mb-[15px]">
                <BsFillTelephoneFill />
                +91-11-41072677
              </li>
              <li className="flex items-center gap-[10px] mb-[15px]">
                <TbMailFilled />
                mail@aargusinfotec.com
              </li>
              <li className="flex items-center gap-[10px] mb-[15px]">
                <BsGlobe2 />
                www.aargusinfotec.com
              </li>
              {/* ----------------------------Search bar--------------------------------- */}

              <div className="w-[14rem] h-[40px] bg-white rounded-md flex mt-[80px] ">
                <input
                  type="text"
                  placeholder="Search..."
                  className="text-lg text-black px-[19px] outline-none  w-[11rem] h-full rounded-md"
                />
                <div className="w-[3rem]  border-l-2 border-[#9F9797] place-content-center px-1 py-[.1rem]">
                  <button>
                    <FiSearch className="text-[#9F9797] text-[2.25rem] " />
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>
        {/* ------------------------------Copyright----------------------- */}
        <div className="  py-[26px] mx-[1.25rem] md:mx-[6.25rem]  mt-[2.75rem] place-items-center justify-around items-center  gap-9 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <div className="">
            <img src={logo} className="" alt="logo" />
          </div>
          <div className=" text-sm">
            © 2023 All rights reserved by Aargus Infotec Pvt Ltd
          </div>
          <div className="	">
            <ul className="flex gap-5 text-2xl ">
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
                <FaInstagram />
              </li>
              <li className="hover:text-[#1A99D4]">
                <FaFacebookF />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
