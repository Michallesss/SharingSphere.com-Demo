import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Preview from '@/components/Preview';
import Faq from "@/components/Faq";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";
import { NavbarMenu } from "@/components/NavbarMenu";

export default function Landing() {
  return (
    <>
      <Hero>
        <NavbarMenu />
      </Hero>
      <Features />
      <Preview />
      <div className="mb-8">
        <Faq />
      </div>
      <Waitlist />
      <Footer />
    </>
  );
}
