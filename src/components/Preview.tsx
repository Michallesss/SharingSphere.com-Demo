import React from "react";
import IdeasFlow from "../img/IdeasFlow.svg";
import Image from "next/image";

const Preview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Expand Your Reach and Maximize Your Social Media Impact.
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our app provides a seamless way to share your content across
            multiple platforms effortlessly.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Publish across social channels with a click</li>
            <li>Embed your work with ease</li>
          </ul>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image src={IdeasFlow} alt="Ideas Flow" />
        </div>
      </div>
    </section>
  );
};

export default Preview;
