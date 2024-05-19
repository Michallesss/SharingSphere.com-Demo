"use client";
import React from "react";
import Image from "next/image";
import IdeasFlow  from "../img/IdeasFlow.svg";
import Loop from "../img/Loop.png";
const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative">
        <div className="absolute z-10 w-full">{children}</div>
        <section className="flex items-center justify-between py-20 bg-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold text-blue-600 mb-4">
                Seamlessly Share Your Stories Across Social Platforms
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Our app makes it effortless to share your content on Instagram,
                Facebook, and other social networks, helping you reach a wider
                audience and increase engagement.
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                  Get Started
                </button>
                <p className="text-gray-600">
                  Join{" "}
                  <Image
                    className="w-6 inline" // Adjust the width and add inline styling
                    src={Loop}
                    alt="Ideas Flow"
                  />{" "}
                  users who are already enhancing their social media presence
                  with our app!
                </p>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Image src={IdeasFlow} alt="Ideas Flow" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
