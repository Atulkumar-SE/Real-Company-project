import React from "react";
import Content from "./Content";
import { Card } from "./Card";

const WelcomeCard = () => {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center ">
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

export default WelcomeCard;
