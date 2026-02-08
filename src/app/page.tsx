import Nav from "@/components/nav"
import Hero from "@/components/hero";
import Features from "@/components/features";
import Courses from "@/components/courses";
import Toppers from "@/components/toppers";
import Footer from "@/components/footer";
import Copyright from "@/components/copyright";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center min-h-screen bg-base-100 font-sans">
      <Nav />
      <Hero />
      <Features />
      <Courses />
      <Toppers />
      <Footer />
      <Copyright />
    </div>
  );
}
