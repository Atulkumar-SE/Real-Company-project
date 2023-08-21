import React, { useEffect } from "react";
import "./AboutUs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsArrowRight } from "react-icons/bs";
import HomePartnerCard from "../../GlobalComponents/HomePartnerCard/HomePartnerCard";
import HeroSlideBtn from "../../GlobalComponents/HeroSlideBtn/HeroSlideBtn";
import WWD from "../../Images/About/AboutWWD.png";
import WCU from "../../Images/About/AboutWCU.png";
import AboutAim from "../../Images/About/AboutAim.png";
import AboutMission from "../../Images/About/AboutMission.png";
import OurServices from "../../GlobalComponents/OurServices/OurServices";
import { Link } from "react-router-dom";
import TeamCard from "../../GlobalComponents/TeamCard/TeamCard";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      {/* ----------------About Hero-------------------- */}
      <div className="AboutUs_Hero flex justify-center items-center">
        <div className=" flex justify-center items-center text-white  ">
          <h1 className=" text-[3rem] sm:text-[5rem] ">About Us</h1>
          <div className=" absolute bottom-0 py-10 ">
            <HeroSlideBtn />
          </div>
        </div>
      </div>
      <div className="w-[90%] sm:w-[85%] m-auto flex flex-col gap-5 md:gap-[10rem] py-10">
        {/* ----------------Intro-------------------- */}
        <div className="flex flex-col justify-center items-center text-center gap-5 sm:px-[6rem]">
          <h1 className="text-[1.5rem] sm:text-[2.5rem] text-[#002C78] font-bold">
            Who we are
          </h1>
          <p>
            Aargus Infotec, a leading system integrator in India, empowers
            clients with state-of-the-art IT software and services, enabling
            seamless business automation. Our unwavering commitment to serving
            public and corporate enterprises encompasses top-notch IT, IoT,
            analytics, and AI solutions.
          </p>
        </div>
        {/* ----------------what we do-------------------- */}
        <div className="flex flex-col md:flex-row-reverse  w-[100%]  justify-center items-center">
          <div data-aos="fade-left" className="w-[100%] md:w-[50%] ">
            <img src={WWD} alt="WE do" className="w-[100%]" />
          </div>
          <div className="w-[100%] md:w-[50%]  flex justify-center items-center  ">
            <div className="w-[90%] bg-white translate-y-[-5%] md:translate-x-[25%] p-10 shadow-lg">
              <h1 className="text-[1.5rem] sm:text-[2.5rem] text-[#002C78] font-bold mb-5">
                What we do
              </h1>
              <p>
                Aargus Infotec, a leading system integrator in India, empowers
                clients with state-of-the-art IT software and services, enabling
                seamless business automation. Our unwavering commitment to
                serving public and corporate enterprises encompasses top-notch
                IT, IoT, analytics, and AI solutions.
              </p>
            </div>
          </div>
        </div>
        {/* ----------------Why choose us-------------------- */}
        <div className="flex flex-col md:flex-row  w-[100%]  justify-center items-center">
          <div data-aos="fade-right" className="w-[100%] md:w-[50%]">
            <img src={WCU} alt="Why" className="w-[100%] " />
          </div>
          <div className="w-[100%] md:w-[50%]  flex justify-center items-center  ">
            <div className="w-[90%] bg-white translate-y-[-5%] md:translate-x-[-25%] p-10 shadow-lg">
              <h1 className="text-[1.5rem] sm:text-[2.5rem] text-[#002C78] font-bold mb-5">
                Why choose us
              </h1>
              <p>
                Unlock your potential with Aargus Infotec: Where technology
                meets limitless possibilities.
              </p>
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* ----------------Vision and Mission-------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center ">
          <div className=" group w-[70%] ">
            <div className=" overflow-hidden">
              <img src={AboutAim} alt="AboutAim" className=" group-hover:scale-110 duration-100" />
            </div>
            <div className=" text-center">
              <h3 className="text-[1.5rem] sm:text-[2.5rem] text-[#002C78] font-bold mb-2">Vision</h3>
              <p className=" text-justify">At Aargus Infotec, our vision is to revolutionize the technological landscape, empowering individuals and organizations to thrive in the digital age. We aspire to be pioneers in crafting innovative solutions that transcend boundaries, making technology accessible to all, and igniting a culture of continuous growth and transformation.</p>
            </div>
          </div>
          <div className=" group w-[70%]">
          <div className=" overflow-hidden">
              <img src={AboutMission} alt="AboutAim" className=" group-hover:scale-110 duration-100" />
            </div>
            <div className="text-center">
              <h3 className="text-[1.5rem] sm:text-[2.5rem] text-[#002C78] font-bold mb-2">Mission</h3>
              <p className=" text-justify">Our mission is to be the driving force behind our clients' success, leveraging cutting-edge technology to optimize their operations, enhance efficiency, and unlock new possibilities. We are committed to fostering long-lasting partnerships, providing exceptional service, and delivering unmatched value to every customer. With passion, integrity, and a customer-centric approach, we strive to create a brighter future for individuals and businesses alike.</p>
            </div>
          </div>
        </div>
        
         {/* ---------------------The Inspector---------------------- */}
         <div  className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-[1.5rem] sm:text-[2.5rem] text-[#002C78] font-bold mb-2">The Inceptors</h1>
          <div data-aos="fade-up">
            <TeamCard/>
          </div>
         </div>

         {/* ---------------------Our Services---------------------- */}
         <div className="Services bg-slate-600 py-[4rem] flex-col justify-center items-center   place-items-center ">
          <h1 className="text-center text-[2rem] sm:text-[2.75rem] font-semibold text-white ">
            OUR SERVICES
          </h1>
          <div data-aos="fade-up" className="w-[85%] m-auto flex justify-center pt-10">
            <OurServices />
          </div>
        </div>
         {/* ---------------------Partner---------------------- */}
         <div className="Customer  py-5">
          <div className=" w-[85%]  m-auto ">
            <h1 className=" text-[1.8rem] sm:text-[3.75rem] text-white">
              Partners
            </h1>
            <div data-aos="fade-left" className=" my-[3.6rem] lg:ml-[10%]">
              <HomePartnerCard/>
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
      </div>
    </div>
  );
};

export default AboutUs;
