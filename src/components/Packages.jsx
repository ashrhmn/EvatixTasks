import React, { useState } from "react";

const Packages = () => {
  const [cardData] = useState([
    {
      title1: "GETTING STARTED",
      title2: "Singularity",
      desc: `This package will suit you if you want a single page simple website for you product.
      It will cover only one web UI. You can revise the design for 2 times after the`,
    },
    {
      title1: "BUSINESS WORKFLOW",
      title2: "Plurality",
      desc: `This package will suit you if you want a single page simple website for you product.
      It will cover only one web UI. You can revise the design for 2 times after the`,
    },
    {
      title1: "INTERACTION",
      title2: "Professional",
      desc: `This package will suit you if you want a single page simple website for you product.
      It will cover only one web UI. You can revise the design for 2 times after the`,
    },
  ]);
  return (
    <div>
      <h1 className="text-3xl font-semibold border-primary-light border-b-2 w-min pb-4 mx-auto mb-8">
        Packages
      </h1>
      <div className="lg:flex lg:space-x-6">
        {cardData.map((data) => (
          <PackageCard key={data.title1} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Packages;

const PackageCard = ({ data }) => {
  return (
    <div
      style={{
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
      }}
      className="p-6 my-8 flex flex-col space-y-6 rounded-lg mx-auto max-w-sm md:max-w-2xl lg:max-w-sm"
    >
      <div className="flex flex-col space-y-4">
        <h1 className="text-primary text-left">{data.title1}</h1>
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl text-left font-medium">{data.title2}</h1>
          <p className="text-sm text-left text-gray-700">{data.desc}</p>
        </div>
      </div>
      <div className="flex">
        <button className="bg-gradient-to-r from-primary to-primary-light py-3 px-6 rounded text-white">
          SEE MORE
        </button>
      </div>
    </div>
  );
};
