"use client";
import React from "react";
import Image from "next/image";
import IdeasFlow  from "../img/IdeasFlow.svg";
const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative">
        <div className="absolute z-10 w-full">
        {children} 
        </div>
        <section className="flex items-center justify-between py-20 bg-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold text-blue-600 mb-4">
                Medium length display headline
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Separated they live in Bookmarks right at the coast of the
                famous Semantics, large language.
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                  Action
                </button>
                <p className="text-gray-600">
                  5,000 people like you have purchased this product!
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
