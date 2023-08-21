import React from "react";
import "./Contact.css";
import lady from "../../Images/Contact/ContactGirl.png";
import Indiagate from "../../Images/Contact/Indiagate.png";
import Buddha from "../../Images/Contact/Buddha.png";
import map from "../../Images/Contact/map.png";
import SendMsg from "../../Images/Contact/SendMsg.png";
import HeroSlideBtn from "../../GlobalComponents/HeroSlideBtn/HeroSlideBtn";

const Contact = () => {
  return (
    <div>
      {/* ----------------Contact Hero-------------------- */}
      <div className="Contact_Hero flex justify-center items-center">
        <div className=" flex justify-center items-center text-white  ">
          <h1 className=" text-[3rem] sm:text-[5rem] ">How can we help you?</h1>
          <div className=" absolute bottom-0 py-10 ">
            <HeroSlideBtn />
          </div>
        </div>
        <img src={lady} alt="lady" className="w-[40%]" />
      </div>

      <div className="w-[80%] flex flex-col gap-10 m-auto py-10">
        {/* ----------------Contact intro-------------------- */}
        <div className="flex justify-center items-center text-center px-1 md:px-20">
          <p>
            To gain a competitive advantage in today's fast-paced era, contact
            us immediately to explore the realm of possibilities and transform
            them into tangible achievements!
          </p>
        </div>
        {/* ----------------Address 1-------------------- */}
        <div className="flex flex-col sm:flex-row m-auto ">
          <div className="flex flex-col gap-5 justify-center items-center place-items-center ">
            <div className="flex justify-center">
              <img src={Indiagate} alt="Indiagate" className="w-[80%]" />
            </div>
            <h1 className="text-[2.5rem] font-bold text-[#047FCC] uppercase">
              Delhi
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center   text-center mb-[3rem]">
              <h3 className="text-[2rem] font-semibold mb-10">
                Registered office
              </h3>
              <p className="px-[10%] sm:px-[25%]">
                S-3, Anupam PlazaOpposite Azad ApartmentsSri Aurbindo MargHauz
                KhasNew Delhi - 110016 <br />{" "}
                <span className="font-bold">Email:</span> mail@aargusinfotec.com{" "}
                <br /> <span className="font-bold">Phone:</span>
                +91-11-41072677
              </p>
            </div>
            <div>
              <img src={map} alt="Indiagate" />
            </div>
          </div>
        </div>
        {/* ----------------Address 2-------------------- */}
        <div className="flex flex-col sm:flex-row-reverse m-auto ">
          <div className="flex flex-col gap-5 justify-center items-center place-items-center ">
            <div className="flex justify-center">
              <img src={Buddha} alt="Indiagate" className="w-[80%]" />
            </div>
            <h1 className="text-[2.5rem] font-bold text-[#047FCC] uppercase">
              Noida
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center   text-center mb-[3rem]">
              <h3 className="text-[2rem] font-semibold mb-10">
                corporate office
              </h3>
              <p className="px-[10%] sm:px-[20%]">
                605, Tower A,The I-Thum, Plot No.A-40,Sector-62, Noida
                (U.P.)-201301016 <br />{" "}
                <span className="font-bold">Email:</span> mail@aargusinfotec.com{" "}
                <br /> <span className="font-bold">Phone:</span>
                +91-11-41072677
              </p>
            </div>
            <div>
              <img src={map} alt="Indiagate" />
            </div>
          </div>
        </div>
      </div>
      {/* ----------------Let's talk-------------------- */}
      <div className="LetsTalk">
        <div className="flex">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="FormContainer">
              <h1 className="text-[1.5rem]">Let’s talk</h1>
              <form action="" className="flex flex-col">
                <div className="flex flex-col ">
                  <label>Your Name </label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="flex flex-col">
                  <label>Your Email </label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="flex flex-col">
                  <label>Your Message </label>
                  <input type="textarea" className=" textArea" id="msg" name="msg" placeholder="Type something if you want..." required />
                </div>
                <button className="">Send Message</button>
              </form>
            </div>
            <div>
              <img src={SendMsg} alt="SendMsg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
