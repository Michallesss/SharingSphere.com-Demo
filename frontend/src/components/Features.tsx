"use client";
import React from "react";
// import Feature1Icon from "../public/icons/feature1.svg"; // Adjust the path as necessary
// import Feature2Icon from "../public/icons/feature2.svg";
// import Feature3Icon from "../public/icons/feature3.svg";

const features = [
  {
    icon: "",
    title: "Effortless Integration",
    description:
      "Easily connect all your social media accounts in one place, making it simple to manage and share content across multiple platforms.",
  },
  
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center md:text-left"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;