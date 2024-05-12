'use client';
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { authors } from "@/data/authors";

export default function Authors() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={authors} />
    </div>
  )
}
