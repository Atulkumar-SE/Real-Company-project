import React from "react";
import Content from "./Content";
import { Card } from "./Card";

const SuccessCard = () => {
  return (
    
    <div className=" grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1rem] sm:gap-[4rem]   ">
      {Content.map((content) => (
        <Card className=""
          key={content.id}
          image={content.image}
          title={content.title}
          text={content.text}
        />
      ))}
    </div>
  );
};

export default SuccessCard;
