import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import WelcomeCard from "../../GlobalComponents/HomeWelcomeCard/WelcomeCard";
import WWA from "../../Images/HomeWhoWeAre.png";
import cwc from "../../Images/cwc.png";
import cocacola from "../../Images/cocacola.png";
import ncert from "../../Images/ncert.png";
import nsic from "../../Images/nsic.png";
import SuccessCard from "../../GlobalComponents/SuccessStoryCard/SuccessCard";

const Home = () => {
  return (
    <>
      {/* ------------Hero Section------------- */}
      <Hero />
      {/* -------------Welcome Section------------- */}
      <div className="w-[70%] m-auto text-center py-[6.25rem] ">
        <h2 className="text-[2.5rem] text-[#002C78] font-bold">
          WELCOME TO AARGUS INFOTEC
        </h2>
        <p className="text-[1rem] pt-8">
          Aargus Infotec Pvt. Ltd. (AIPL) was incorporated, in 2012, with the
          underlying objectives of honesty, transparency, accountability and
          sublime business ethics. Since then, it has carved out a niche in the
          market and established itself as the largest solution provider and
          rapidly expanding company. AIPL, over the years, has built a powerful
          portfolio of products and services.
        </p>
        <Link to="/Aboutus">
          <div className="HoverBtn text-[#047FCC] pt-8">
            <div className="CircleHover duration-500 "></div>
            <button className=" items-center flex gap-5 px-4 text-xl font-semibold ">
              <BsArrowRight className="text-3xl " /> More About Us
            </button>
          </div>
        </Link>
      </div>
      <div className="w-[100%] m-auto p-5">
        <WelcomeCard />
      </div>
      {/* -------------Who We Are------------- */}

      <div className="WWA_Container">
        <img src={WWA} alt="WWA" />
        <div className="WWA_Text  p-5 px-5 md:px-10 h-fit flex flex-col gap-1 md:gap-5 bg-white ">
          <h4 className="text-[#0000007e] lg:text-[1.25rem] text-[1rem] ">
            WHO WE ARE
          </h4>
          <h2 className="text-[1rem] lg:text-[1.875rem] text-[#002C78] leading-[1.5] lg:leading-[2.2rem]">
            We build greater futures through innovation and collective
            knowledge.
          </h2>
          <p className="text-[.8rem] text-[#000000da]">
            Aargus is an IT services, consulting and business solutions
            organization that has been partnering with many of the world’s
            largest businesses in their transformation journeys for over 12
            years.
          </p>
          <Link to="/Aboutus">
            <div className="HoverBtn text-[#047FCC] float-left pt-6">
              <div className="CircleHover duration-500 "></div>
              <button className=" items-center flex gap-5 px-4 text-xl font-semibold ">
                <BsArrowRight className="text-3xl " /> Get to Know Us
              </button>
            </div>
          </Link>
        </div>
      </div>
      {/* ---------------------Our Success Stories---------------------- */}
    
      <div className="text-center w-[85%] m-auto">
        <h1 className="text-[3.75rem] text-[#002C78]">Our Success Stories</h1>
        <p className="text-[1.5rem]">
          Gain insights on how our services actually impacted other businesses !
        </p>
          <div>
        <SuccessCard/>
      </div>
      </div>
    </>
  );
};

export default Home;
