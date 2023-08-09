import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Hero.css";
import { BsArrowRight } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../Images/sliderimage1.png";
import image2 from "../../Images/sliderimage2.png";
import image3 from "../../Images/sliderimage3.png";
import image4 from "../../Images/sliderimage4.png";
const Hero = () => {
  const images = [
    {
      id: 1,
      src: image1,
      alt: "Image 1",
    },
    {
      id: 2,
      src: image2,
      alt: "Image 2",
    },
    {
      id: 2,
      src: image3,
      alt: "Image 3",
    },
    {
      id: 2,
      src: image4,
      alt: "Image 4",
    },
  ];
  return (
    <div className="slider-container">
      <Carousel infiniteLoop autoPlay showArrows={true} showThumbs={false}> 
        {images.map((image) => (
          <div key={image.id} className="">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover h-screen w-full"
            />
          </div>
        ))}
        
      </Carousel>
      <div className="welcome-text ">
        <h1 className=" font-semibold text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] md:leading-[4.5rem]">
          Reinventing Enterprise Operations
        </h1>
        <p className="text-[1.2rem] md:text-[1.5rem] font-semibold pt-[3rem]">
          How optimizing operations can help to access a new performance
          frontier
        </p> 
        <div className="HoverBtn pt-[3.15rem]">
          <div className="CircleHover duration-500 "></div>
        <button className=" items-center flex gap-5 px-4">
              <BsArrowRight className="text-3xl" /> Read our new update
            </button>
        </div>
       
      </div>
    </div>
  );
};

export default Hero;
