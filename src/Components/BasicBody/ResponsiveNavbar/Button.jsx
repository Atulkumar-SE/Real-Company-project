import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <Link to="/contactus">
      <button className="bg-blue-700 text-white text-xl py-3 px-4 w-fit">
        Contact Us
      </button>
    </Link>
  );
};

export default Button;
