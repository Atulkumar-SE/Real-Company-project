import React from "react";
import "./Partner.css";
import PartnerBrandCard from "../../GlobalComponents/PartnerBrandCard/PartnerBrandCard";
import HeroSlideBtn from "../../GlobalComponents/HeroSlideBtn/HeroSlideBtn";
import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <div>
      {/* --------------Hero------------------- */}
      <div className="Partner_Hero relative w-[100%] h-[90vh] flex justify-center ">
        <div className=" w-[85%] text-white text-center sm:text-left">
          <h1 className=" text-[2.5rem] mt-14 sm:mt-28 sm:text-[5.5rem]  font-semibold">
            Nexus Alliance
          </h1>
          <p className="   text-[1.5rem]">
            Unleashing Potential through <br/> Collaborative Excellence
          </p>
        </div>
        <div className=" absolute bottom-0 py-10 ">
          <Link className=" ">
            <HeroSlideBtn />
          </Link>
        </div>
      </div>

      <div className="w-[85%] flex-col my-[5rem] m-auto grid  gap-[5rem]">
        {/* --------------About Partner------------------- */}
        <div className=" m-auto text-center">
          <h1 className="text-[1.5rem] sm:text-[2.5rem] text-[#002C78] font-bold">
            Partners
          </h1>
          <p className="text-[1rem] pt-8 text-justify">
            At Aargus Infotec Pvt. Ltd., we recognize the transformative power
            of corporate partnerships. Through collaborative efforts, we strive
            to forge strategic alliances that drive innovation, fuel growth, and
            amplify our collective impact. By leveraging the diverse strengths
            and expertise of our partners, we navigate challenges, unlock new
            opportunities, and propel our organization towards sustainable
            success. Together, we create a synergistic environment that fosters
            creativity, builds resilience, and paves the way for a future of
            shared achievements.
          </p>
        </div>
        <div className="flex justify-center">
          <h1 className=" sm:w-[80%] w-[100%] text-[1.2rem] sm:text-[2rem] text-[#002C78] font-bold text-center">
            Driving Live Enterprise Growth through transformative partnerships.
          </h1>
        </div>
        {/* --------------Partner Brands------------------- */}
        <div className="grid gap-10">
          <div className="">
            <PartnerBrandCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
