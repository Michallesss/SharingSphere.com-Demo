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
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Short headline</h2>
      <p className="text-gray-700 mb-8">
        Acme automates your subscription revenue and customer reporting. Just
        connect your data and Acme will calculate and visualize your most
        important metrics.
      </p>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-blue-600 hover:text-blue-800">
            System requirements
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Details about system requirements.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-blue-600 hover:text-blue-800">
            Where can I learn more about how to get started?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Information on how to get started.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-blue-600 hover:text-blue-800">
            Is Acme available for Linux?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Yes, Acme is available for Linux.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-blue-600 hover:text-blue-800">
            What about a version for iOS?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Acme is available for iOS.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-blue-600 hover:text-blue-800">
            Will I automatically be charged when my trial ends?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Explanation about charges after the trial ends.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
