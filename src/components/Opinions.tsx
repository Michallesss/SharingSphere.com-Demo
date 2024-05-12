"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { opinions } from "@/data/opinions";

export default function Opinions() {
  return (
    <div className="rounded-md flex flex-col antialiase dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={opinions}
        direction="right"
        speed="slow"
      />
    </div>
  )
}