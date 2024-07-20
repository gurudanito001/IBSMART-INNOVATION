import Image from "next/image";
import NavBar from "./navbar";
import HeroSection from "./heroSection";
import Products from "./products";
import Footer from "./footer";

export default function Home() {
  return (
    <main className="bg-white">
    <NavBar />
    <HeroSection />
    <Products />
    <Footer />
    </main>
  );
}
