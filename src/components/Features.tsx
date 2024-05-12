'use client';
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { features } from "@/data/features";

export default function Features() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={features} />
    </div>
  );
}
