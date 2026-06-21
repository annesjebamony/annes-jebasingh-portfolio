import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Project from "@/components/Projects";
import Recommendation from "@/components/Recommendations";
import Certification from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Project />
      <Recommendation />
      <Certification />
      <Contact />
      <Footer />
    </>
  );
}