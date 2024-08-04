import Image from "next/image";
import NavBar from "./navbar";
import HeroSection from "./heroSection";
import Products from "./products";
import Footer from "./footer";
import Categories from "./categories";

export default function Home() {
  return (
    <main className="bg-white">
    <NavBar />
    <HeroSection />
    <Categories />
    <Products />
    <Footer />
    </main>
  );
}
