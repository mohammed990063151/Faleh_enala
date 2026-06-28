import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";

const About = dynamic(() => import("@/components/sections/About").then((m) => m.About));
const Roles = dynamic(() => import("@/components/sections/Roles").then((m) => m.Roles));
const Statistics = dynamic(() => import("@/components/sections/Statistics").then((m) => m.Statistics));
const Journey = dynamic(() => import("@/components/sections/Journey").then((m) => m.Journey));
const Vision = dynamic(() => import("@/components/sections/Vision").then((m) => m.Vision));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((m) => m.Testimonials));
const Portfolio = dynamic(() => import("@/components/sections/Portfolio").then((m) => m.Portfolio));
const Contact = dynamic(() => import("@/components/sections/Contact").then((m) => m.Contact));

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
