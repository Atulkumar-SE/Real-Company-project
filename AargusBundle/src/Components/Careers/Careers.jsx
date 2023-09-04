import React, { useEffect } from "react";
import "./Careers.css";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSlideBtn from "../../GlobalComponents/HeroSlideBtn/HeroSlideBtn";
import { PiTrophy, PiPottedPlant, PiHandHeartDuotone } from "react-icons/pi";
import { FaRegHandshake } from "react-icons/fa";
import { LiaGamepadSolid } from "react-icons/lia";
import TeamCard from "../../GlobalComponents/TeamCard/TeamCard";
import Careerabout from "../../Images/Career/careeraAargus.png";
import CareerClient from "../../Images/Career/careerhandshake.png";
import linkedin from "../../Images/Career/linkedin.png";
import instagram from "../../Images/Career/instagram.png";

import { Link } from "react-router-dom";
import Jobs from "../../GlobalComponents/Jobs/Jobs";

const Careers = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      {/* -----------------Career Hero--------------- */}
      <div className="Careers_Hero flex flex-col justify-center items-center p-2">
        <div className="flex flex-col justify-center items-center text-center gap-10 text-white">
          <h1 className="text-[2.5rem] sm:text-[5rem] font-semibold leading-[2.5rem] sm:leading-[4.5rem]">
            Discover your new career
          </h1>
          <p className="text-[1rem] sm:text-[1.5rem] px-10">
            Navigate your next and take the first step towards a bright future!
          </p>
        </div>
        <div className=" absolute bottom-0 py-5 ">
          <HeroSlideBtn />
        </div>
      </div>
      <div className="flex flex-col py-10 w-[85%] m-auto">
        {/* -----------------Career Intro--------------- */}
        <div className=" w-[80%] m-auto flex flex-col gap-10 text-center ">
          <p>
            At Argus Infotec, a renowned provider of advanced technological
            solutions, our commitment to excellence is at the core of nurturing
            the collective talents of our team. We foster a culture of
            innovation, leveraging cutting-edge technology to not only meet but
            surpass our clients' expectations.
          </p>
          <p>
            If you are in search of a company that values hard work, encourages
            creativity, and embraces individuality, Argus Infotec is the perfect
            fit for you. We cultivate a positive work environment where every
            employee is respected, supported, and treated with utmost
            professionalism and care.
          </p>
        </div>
      </div>
      {/* -----------------Career Intro--------------- */}
      <div className="Life_at_Work my-10">
        <div className=" bg-gradient-to-r from-[#1a99d4e5] from-40% to-[#5ce93196] to-90%">
          <div className="w-[85%] m-auto flex flex-col justify-center items-center gap-10 px-0 py-10 sm:p-10">
            <h1 className=" text-[2rem] font-bold text-white">Life at Work</h1>
            <ul className="flex justify-between w-[100%]">
              <li>
                <PiPottedPlant />
                <span>Growth</span>
              </li>
              <li>
                <FaRegHandshake />
                <span>Respect</span>
              </li>
              <li>
                <LiaGamepadSolid />
                <span>Play</span>
              </li>
              <li>
                <PiHandHeartDuotone />
                <span>Love</span>
              </li>
              <li>
                <PiTrophy />
                <span>Rewards</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* -----------------Leader--------------- */}
      <div className="flex flex-col justify-center items-center py-10 gap-10">
        <h1 className="text-[1.5rem] sm:text-[2.5rem] text-[#002C78] font-bold mb-2">
          Our Leaders
        </h1>
        <div>
          <TeamCard />
        </div>
      </div>
      {/* ---------------------Explore Life at Aargus---------------------- */}
      <div className="LifeAtAargus my-10">
        <div className="p-1 sm:p-10 bg-gradient-to-r from-[#002c78af] from-90deg to-[#31F2FFce] to-10deg">
          <div className="w-[85%] m-auto flex flex-col items-center ">
            <h1 className="text-[1.5rem] sm:text-[2.5rem] text-[#fff] font-bold mb-2">
              Explore Life at Aargus
            </h1>
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-20 justify-between  p-5">
              <div className="w-[100%] sm:w-[50%] flex items-center text-justify">
                <p className="text-[1rem] sm:text-[1.5rem] text-white">
                  We are not just a technology company full of people, we're a
                  people company full of technology. It is people like you who
                  make us what we are today. Welcome to our world: Our people,
                  our culture, our voices, and our passions.
                </p>
              </div>
              <div data-aos="fade-left" className="w-[100%] sm:w-[50%] md:w-[40%] flex flex-col items-center gap-10">
                <div className=" relative ">
                  <img
                    src={Careerabout}
                    alt="Careerabout"
                    className="w-[100%] "
                  />
                  <Link to="/aboutus">
                    <button className="absolute translate-y-[-100%]">
                      About us
                    </button>
                  </Link>
                </div>
                <div>
                  <img
                    src={CareerClient}
                    alt="CareerClient"
                    className="w-[100%]"
                  />
                  <Link to="/">
                    <button className="absolute  translate-y-[-100%]">
                      Our Clients
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            {/* ---------------------Job Openings--------------------- */}
          <div className="w-[70%]  m-auto ">
            <div className="flex flex-col gap-10">
            <div className=" flex flex-col items-center">
              <h1 className="text-[1.5rem] sm:text-[2.5rem] text-[#002C78] font-bold mb-2">Job Openings</h1>
            </div>
            <div className="py">
              <Jobs/>
            </div>
          </div>
          </div>
 {/* ---------------------Life At Aargus--------------------- */}
 <div className=" bg-gradient-to-r from-[#1a99d4d7] from-90deg to-[#5ce931b7] to-10deg my-20 py-20">
  <div className="w-[70%] m-auto">
  <div className="flex flex-col sm:flex-row gap-5  justify-between items-center">
    <h1 className="text-[1.5rem] sm:text-[2rem] text-white text-center">Follow us to know <span className=" font-bold"> #LifeAtAargus</span></h1>
    <div className="flex gap-5">
      <img src={linkedin} alt="linkedin" className="w-[3rem] h-[3rem]" />
      <img src={instagram} alt="instagram" className="w-[3rem] h-[3rem]"/>
    </div>
  </div>
 </div>
    </div>
 
    </div>
  );
};

export default Careers;
