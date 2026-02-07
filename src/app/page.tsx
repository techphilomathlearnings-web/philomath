import Image from "next/image";
import Nav from "@/components/nav"
import Hero from "@/components/hero";
import Features from "@/components/features";
import Courses from "@/components/courses";
import Toppers from "@/components/toppers";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-base-100 font-sans">
      <Nav />
      <Hero />
      <Features />
      <Courses />
      <Toppers />
      <Footer />
    </div>
  );
}
