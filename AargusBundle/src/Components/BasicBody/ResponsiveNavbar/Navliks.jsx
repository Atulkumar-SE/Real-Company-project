import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import "./Navbar.css";

const Navliks = ({ closeMobileMenu }) => {
  const links = [
    {
      name: "Services",
      submenu: "true",
      sublinks: [
        {
          Head: "ICT Infrastructure",
          sublink: [
            { name: "Digital Workplace", path: "/" },
            { name: "Networking", path: "/" },
            { name: "Data Center", path: "/Datacenter" },
            { name: "Cloud", path: "/" },
          ],
        },
        {
          Head: "Management",
          sublink: [
            { name: "Workplace Management", path: "/" },
            { name: "Networking Management", path: "/" },
            { name: "Data Center Operation", path: "/" },
            { name: "Cloud Management", path: "/" },
          ],
        },
        {
          Head: "Application",
          sublink: [
            { name: "Website Development", path: "/" },
            { name: "Mobile App Development", path: "/" },
            { name: "Tally-Financial ERP", path: "/" },
            { name: "Application Development & Support", path: "/" },
          ],
        },
        {
          Head: "Automation",
          sublink: [
            { name: "Robotic Process", path: "/" },
            { name: "Intelligent Process", path: "/" },
            { name: "IT Automation", path: "/" },
          ],
        },
        {
          Head: "Training & Certification",
          sublink: [
            { name: "Adobe", path: "/" },
            { name: "Corel Draw", path: "/" },
            { name: "Auto Desk", path: "/" },
            { name: "Tally ERP", path: "/" },
            { name: "Smart Class Solution", path: "/" },
            { name: "Customized Application ", path: "/" },
          ],
        },
        {
          Head: "IT Resourcing",
          sublink: [
            { name: "Application Architecture", path: "/" },
            { name: "Business analysis", path: "/" },
            { name: "Customer Relationship Management", path: "/" },
            { name: "Machine learning", path: "/" },
            { name: "Data warehousing", path: "/" },
            { name: "Big Data", path: "/" },
          ],
        },
        {
          Head: "Financial ERP",
          sublink: [
            { name: "Implementation Services", path: "/" },
            { name: "Customization Services", path: "/" },
            { name: "Data Migration", path: "/" },
            { name: "Synchronization", path: "/" },
            { name: "Support", path: "/" },
            { name: "Product Support", path: "/" },
          ],
        },
      ],
    },

    {
      name: "Solutions",
      submenu: "true",
      sublinks: [
        {
          Head: "Education Solutions",
          sublink: [
            { name: "Smart Class Solution", path: "/" },
            { name: "Virtual classrooms & Lecture Recordings", path: "/" },
            { name: "Language Labs", path: "/" },
            { name: "ICT Solutions for Inclusive Education", path: "/" },
            { name: "Multimedia E-content Solutions", path: "/" },
            { name: "Educational & Lab Solutions", path: "/" },
            { name: "School Management Systems", path: "/" },
            { name: "Student Assessment Solutions", path: "/" },
          ],
        },
        {
          Head: "Security And Surveillance",
          sublink: [
            { name: "Access Control Devices", path: "/" },
            { name: "CCTV", path: "/" },
            { name: "Fire Alarm Systems", path: "/" },
            { name: "Video Analytics", path: "/" },
            { name: "Control center", path: "/" },
            { name: "Video Analytics", path: "/" },
            { name: "Intrusion Detection", path: "/" },
          ],
        },
        {
          Head: "Management",
          sublink: [
            { name: "Digital Workplace", path: "/" },
            { name: "Service", path: "/" },
            { name: "Service", path: "/" },
            { name: "Service", path: "/" },
            { name: "Service", path: "/" },
            { name: "Service", path: "/" },
          ],
        },
        {
          Head: "Application",
          sublink: [
            { name: "Digital Workplace", path: "/" },
            { name: "Service", path: "/" },
            { name: "Service", path: "/" },
            { name: "Service", path: "/" },
            { name: "Service", path: "/" },
            { name: "Service", path: "/" },
          ],
        },
      ],
    },
  ];

  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((NavItem) => (
        <div key={NavItem.name}>
          <div className="px-3 py-2 text-left md:cursor-pointer group ">
            <h1
              className="md:text-[.8rem] text-[1rem] py-3 flex justify-between items-center  group"
              onClick={() => {
                heading !== NavItem.name
                  ? setHeading(NavItem.name)
                  : setHeading("");
                setSubHeading("");
              }}
            >
              {NavItem.name}
              <span className="text-sm md:hidden inline ">
                {heading === NavItem.name ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </span>
              <span className="text-sm md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-1 ">
                <IoIosArrowDown />
              </span>
            </h1>
            {NavItem.submenu && (
              <div>
                <div className="Position zIndex absolute top-[4.5rem] rounded-lg  hidden group-hover:md:block  hover:md:block left-[100%] group-hover:left-[30%] group-hover:duration-500">
                  <div className="bg-white rounded-lg p-5 grid grid-cols-4 gap-5">
                    {NavItem.sublinks.map((SubNavItem) => (
                      <div>
                        <h1 className="text-[.8rem] font-bold pb-[.5rem] text-[#002C78]">
                          {SubNavItem.Head}
                        </h1>

                        {SubNavItem.sublink.map((slink) => (
                          <li className="text-[.8rem]  text-gray-600 my-1.5 hover:text-[#F23100] flex items-center gap-3">
                            <Link to={slink.path}>{slink.name}</Link>
                            <BsArrowRight className="md:hidden block" />
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* ----------------Responsive mob navbar (error in navitem map so use conditional )---------------------- */}
          <div
            className={` ${heading === NavItem.name ? "md:hidden" : "hidden"}  `} >
            {/* -------------------Sublink------------------ */}
            {NavItem.sublinks &&
              NavItem.sublinks.map((mlinks) => (
                <div key={mlinks.name}>
                  <div className="overflow-y-auto">
                    <h1
                      onClick={() =>
                        subHeading !== mlinks.Head
                          ? setSubHeading(mlinks.Head)
                          : setSubHeading("")
                      }
                      className="py-2 pl-10 font-semibold  md:pr-0 pr-3 text-[1rem] flex justify-between items-center "
                    >
                      {mlinks.Head}
                      <span className="text-sm md:mt-1 md:ml-2 inline">
                        {subHeading === mlinks.Head ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </span>
                    </h1>
                    <div
                      className={`${
                        subHeading === mlinks.Head ? "md:hidden" : "hidden"
                      } `}
                    >
                      {mlinks.sublink.map((mlink) => (
                        <li className="py-1 pl-14">
                          <Link to={mlink.path} className="hover:text-blue-500" onClick={closeMobileMenu}>
                            {mlink.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Navliks;
