import React from "react";
import IdeasFlow from "../img/IdeasFlow.svg";
import Image from "next/image";

const Preview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Long headline on two lines to turn your visitors into users and
            achieve more
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Separated they live in Bookmarks right at the coast of the famous
            Semantics, large language ocean
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Showcase and embed your work with</li>
            <li>Publish across social channels in a click</li>
            <li>Sell your videos worldwide</li>
            <li>Embed your work with</li>
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
