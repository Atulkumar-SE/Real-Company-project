import React from "react";
import Content from "./Content";
import { Card } from "./Card";

const PartnerBrandCard = () => {
  return (
    <div className="grid  grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-10 sm:gap-5 place-items-center ">
      {Content.map((content) => (
        <Card className=""
          key={content.id}
          image={content.image}
         
        />
      ))}
    </div>
  );
};

export default PartnerBrandCard;
