import Image from "next/image";
import NavBar from "./navbar";
import HeroSection from "./heroSection";
import Partners from "./partners";
import OurCommunity from "./our-community";
import TalentNetwork from "./talentNetwork";
import HiringProcess from "./hiringProcess";
import ExecutionProcess from "./executionProcess";
import OurClientsSay from "./ourClientsSay";
import LatestArticles from "./ourLatestArticles";
import Footer from "./footer";

export default function Home() {
  return (
    <main className="bg-white">
    <NavBar/>
    <HeroSection />
    <Partners />
    <OurCommunity />
    <TalentNetwork />
    <HiringProcess />
    <ExecutionProcess />
    <OurClientsSay />
    <LatestArticles />
    <Footer />
    </main>
  );
}
