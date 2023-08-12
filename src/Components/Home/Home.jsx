import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import WelcomeCard from "../../GlobalComponents/HomeWelcomeCard/WelcomeCard";
import WWA from "../../Images/HomeWhoWeAre.png";
import CareerGirl from "../../Images/CareerGirl.png";
import Customer from "../../Images/HomeCostumerBrandGroup.png";
import SuccessCard from "../../GlobalComponents/SuccessStoryCard/SuccessCard";
import OurServices from "../../GlobalComponents/OurServices/OurServices";
import PartnerBrandCard from "../../GlobalComponents/PartnerBrandCard/PartnerBrandCard";

const Home = () => {
  return (
    <>
      <div className=" grid grid-cols-1 gap-[5rem]">
        {/* ------------Hero Section------------- */}
        <Hero />
        {/* -------------Welcome Section------------- */}
        <div className="w-[70%] m-auto text-center  ">
          <h2 className="text-[1.5rem] sm:text-[2.5rem] text-[#002C78] font-bold">
            WELCOME TO AARGUS INFOTEC
          </h2>
          <p className="text-[1rem] pt-8 text-justify">
            Aargus Infotec Pvt. Ltd. (AIPL) was incorporated, in 2012, with the
            underlying objectives of honesty, transparency, accountability and
            sublime business ethics. Since then, it has carved out a niche in
            the market and established itself as the largest solution provider
            and rapidly expanding company. AIPL, over the years, has built a
            powerful portfolio of products and services.
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
        <div className="w-[100%] m-auto ">
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

        <div className=" w-[85%] m-auto ">
          <h1 className="text-[2.75rem] sm:text-[3.75rem] text-[#002C78] text-center">
            Our Success Stories
          </h1>
          <p className="text-[1.5rem] text-center">
            Gain insights on how our services actually impacted other businesses
            !
          </p>
          <div className=" mt-[3rem]">
            <SuccessCard />
            <Link to="/Aboutus" className="flex mt-9">
              <div className="HoverBtn text-[#047FCC] float-left pt-6">
                <div className="CircleHover duration-500 "></div>
                <button className=" items-center flex gap-3 px-4 text-xl font-semibold ">
                  <BsArrowRight className="text-3xl " /> View More Stories
                </button>
              </div>
            </Link>
          </div>
        </div>
        {/* ---------------------Our Services---------------------- */}
        <div className="Services bg-slate-600 py-[4rem] flex-col justify-center items-center   place-items-center ">
          <h1 className="text-center text-[2rem] sm:text-[2.75rem] font-semibold text-white ">
            OUR SERVICES
          </h1>
          <div className="w-[85%] m-auto flex justify-center pt-10">
            <OurServices />
          </div>
        </div>
        {/* ---------------------Customer---------------------- */}
<div className=" pt-5 sm:pt-0">
          <div className=" w-[85%] m-auto flex-row sm:flex justify-center items-center">
            <div className="flex-col justify-center items-center place-items-center">
              <h1 className=" text-[#002C78] text-[1.8rem] md:text-[2rem] lg:text-[2.75rem] font-semibold sm:font-bold text-center sm:text-left leading-[2rem] lg:leading-[3.5rem]">
               Our broad customer base spanning various sectors and industries.
              </h1>
              <p className="text-[#047FCC] text-center sm:text-left text-[1.2rem] mt-5 sm:mt-10">
              Clients we helped succeed and take the lead.
              </p>
            </div>
            <div className=" flex justify-center">
              <img
                src={Customer}
                alt="Career"
                className="flex justify-center items-center py-5 w-[70%] sm:w-[80%] lg:w-[100%]"
              />
            </div>
          </div>
        </div>

        {/* ---------------------Partner---------------------- */}
        <div className="Customer  py-5">
          <div className=" w-[85%]  m-auto ">
            <h1 className=" text-[1.8rem] sm:text-[3.75rem] text-white">
              Partners
            </h1>
            <div className=" my-[3.6rem] lg:ml-[10%]">
              <PartnerBrandCard />
            </div>
            <Link to="/Aboutus" className=" float-left">
              <div className="HoverBtn text-white ">
                <div className="CircleHover duration-500 "></div>
                <button className=" items-center flex gap-3 px-4 text-xl font-semibold ">
                  <BsArrowRight className="text-3xl " /> View More Stories
                </button>
              </div>
            </Link>
          </div>
        </div>
        {/* ---------------------Career---------------------- */}

        <div className="CareerBg pt-5 sm:pt-0 ">
          <div className=" w-[85%] m-auto flex-row sm:flex justify-center items-center">
            <div className="flex-col justify-center items-center place-items-center">
              <h1 className="text-[#002C78] text-[1.5rem] lg:text-[2.5rem] md:text-[2.5rem] font-semibold">
                Careers at Aargus Infotec
              </h1>
              <p className="text-[1.2rem] pt-3">
                We invite you to supercharge your potential. Find what inspires
                and drives you. Find your spark.
              </p>
              <Link to="/Aboutus" className="">
                <div className="HoverBtn text-[#047FCC] float-left pt-10">
                  <div className="CircleHover duration-500 "></div>
                  <button className=" items-center flex gap-3 px-4 text-xl font-semibold ">
                    <BsArrowRight className="text-3xl" /> View More Stories
                  </button>
                </div>
              </Link>
            </div>
            <div className="">
              <img
                src={CareerGirl}
                alt="Career"
                className="flex float-right align-bottom w-[60%] sm:w-[100%] lg:w-[70%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
