import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Card(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="slide-up" className="  border-2  border-[#002C78] p-5 group">
      <div key={props.id} className="flex flex-col gap-1 ">
        <h2 className=" font-semibold">{props.Designation}</h2>
        <h6>Experience: {props.Exp}</h6>
        <div className="flex  gap-10">
          <h6>Location: {props.Location}</h6>
          <h1 className=" bg-[#047fcc41] text-[#002C78] font-semibold px-2">
            {props.jobtype}
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-center pt-5">
        <div className="flex gap-4">
          {props.socialmedia.map((media, index) => (
            <li key={index} className=" hover:text-[#047FCC]">
              <Link to={media.path}>{media.icon}</Link>
            </li>
          ))}
        </div>
        <div>
          <Link to="/careers">
        
            <button className="border border-[#047FCC] text-[.9rem] text-[#047FCC] uppercase group-hover:text-white font-semibold group-hover:bg-[#047FCC] px-4 py-1">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
