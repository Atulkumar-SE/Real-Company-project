import React from "react";
import Content from "./Content";
import { Card } from "./Card";

const OurServices = () => {
  return (
    
    <div className=" grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1rem] sm:gap-[4rem]  ">
      {Content.map((content) => (
        <Card className=""
          key={content.id}
          icon={content.icon}
          title={content.title}
          text={content.text}
          path={content.path}
          list={content.list}
        />
      ))}
    </div>
  );
};

export default OurServices;
