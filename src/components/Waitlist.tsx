'use client';
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { onSign } from "@/functions/onSign";

export default function Waitlist() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-black/[0.96] relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores eveniet, recusandae, deserunt veritatis accusamus labore minus quia aliquam cupiditate rerum vero? At adipisci excepturi, maiores earum nobis suscipit illum quasi.
        </p>
        <form onSubmit={onSign}>
          <input
            type="text"
            placeholder="your_mail@mail.com"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}