import { BsArrowRight } from "react-icons/bs";
import "./OurServicesStyle.css";
import { Link } from "react-router-dom";
export function Card(props) {
  return (
    <div className="Container">
      <div className="ServiceCard">
        <div className="ServiceCard_Inner relative bg-black text-white rounded-[10px] ">
          <div className="ServiceCard_Front">
            <div
              className="w-full h-full absolute rounded-[10px]  z-20"
              style={{ boxShadow: "inset 0px 0px 15px 1px #fff" }}
            ></div>
            <div className="w-full h-[2rem]  bg-[#047FCC] rounded-t-[10px] "></div>
            <svg
              className="absolute mt-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#047FCC"
                fill-opacity="1"
                d="M0,224L40,229.3C80,235,160,245,240,224C320,203,400,149,480,160C560,171,640,245,720,282.7C800,320,880,320,960,282.7C1040,245,1120,171,1200,138.7C1280,107,1360,117,1400,122.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
              ></path>
            </svg>
            <div
              key={props.id}
              className="w-[100%] px-[2rem] py-[1rem] group text-white  text-center "
            >
              <h1 className="text-[3rem] mt-9 pl-[35%]">{props.icon}</h1>
              <h1 className="text-[1.1rem] mt-5 font-semibold uppercase">
                {props.title}
              </h1>
              <p className="text-[.8rem] mt-3 text-center z-30">{props.text}</p>
              <div className="text-[5rem] z-0 absolute mt-[-1rem] pl-[35%] text-[#047fcc3a]">
                {props.icon}
              </div>
            </div>
          </div>
          {/* -----------------Back Card------------------ */}
          <div className="ServiceCard_Back text-center bg-gradient-to-b from-[#CA26FF] to-[#1A99D4] rounded-[10px]">
            <div key={props.id} className=" px-[2rem] py-[1rem]  w-full h-full rounded-[10px] z-0"  style={{ boxShadow: "inset 0px 0px 15px 1px #fff" }}>
         
              <h1 className="text-[1.1rem] mt-5 font-semibold uppercase">
                {props.title}
              </h1>
              <ul className=" mt-10 ">
                {props.list.map((List, index) => (
                  <li key={index} className="p-1 text-[.8rem]">{List}</li>
                ))}
              </ul>
              <Link
                to={props.path}
                className=" my-5 mt-14 z-40 flex justify-center items-center  gap-2 cursor-pointer"
              >
                More
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
