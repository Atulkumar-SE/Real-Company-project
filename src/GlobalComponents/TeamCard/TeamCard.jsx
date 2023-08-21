import React from "react";
import Content from "./Content";
import { Card } from "./Card";

const TeamCard = () => {
  return (
    
    <div className=" grid  grid-cols-1  md:grid-cols-3 gap-[3rem] sm:gap-[5rem]   ">
      {Content.map((content) => (
        <Card className=""
          key={content.id}
          image={content.image}
          name={content.name}
          post={content.post}
          socialmedia={content.socialmedia}
        />
      ))}
    </div>
  );
};

export default TeamCard;
