import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Roles } from "@/components/sections/Roles";
import { Statistics } from "@/components/sections/Statistics";
import { Journey } from "@/components/sections/Journey";
import { Vision } from "@/components/sections/Vision";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Roles />
        <Statistics />
        <Journey />
        <Vision />
        <Testimonials />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
