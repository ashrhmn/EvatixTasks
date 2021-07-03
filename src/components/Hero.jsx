import React from "react";
import image_02 from "../assets/image_02.png";
import image_02_2x from "../assets/image_02@2x.png";

const Hero = () => {
  return (
    <div>
      <div className="mt-4 flex flex-col lg:flex-row lg:space-x-8 lg:justify-around lg:items-center space-y-4">
        <div
          style={{ maxWidth: "570px" }}
          className="p-2 flex flex-col space-y-4 mx-auto lg:w-4/5 lg:text-left"
        >
          <h1 className="font-bold text-white">BUSINESS WORKFLOW</h1>
          <h1 className="text-4xl md:text-6xl font-semibold text-white">
            Get the most efficient UI design for your business now!
          </h1>
          <h1 className="text-white">
            Hire me to design a clean and modern UI for your product's website
          </h1>
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 lg:space-x-4">
            <button className="bg-white text-primary w-60 md:w-64 mx-auto rounded-lg py-3">
              HIRE ME
            </button>
            <button className="border-4 border-white text-white w-60 md:w-64 mx-auto rounded-lg py-3">
              PORTFOLIO
            </button>
          </div>
        </div>
        <div className="w-full">
          <img className="md:hidden" src={image_02} alt="" />
          <img
            style={{ minWidth: "470px" }}
            className="hidden w-full md:block px-4"
            src={image_02_2x}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
