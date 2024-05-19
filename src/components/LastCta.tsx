'use client';
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function LastCta() {
  return (
    <div className="h-[40rem] w-full rounded-md  relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-50  text-center font-sans font-bold">
          Unlock Your Social Media Potential
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Our app provides everything you need to manage and grow your social
          media accounts effectively.
        </p>
        <div className="flex justify-center">
          <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
            Log In
          </button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}