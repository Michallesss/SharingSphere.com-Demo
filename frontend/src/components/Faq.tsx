"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-12">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">
        Maximize Your Social Media Impact with Ease
      </h2>
      <p className="text-gray-700 mb-8">
        Our app simplifies the process of managing your social media presence,
        offering powerful features and seamless integration.
      </p>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-blue-600 hover:text-blue-800">
            How do I get started with the app?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Getting started is easy! Simply sign up for an account, connect your
            social media profiles, and start creating your
            content.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
