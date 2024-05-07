import Image from "next/image";
import NavBar from "./navbar";
import HeroSection from "./heroSection";
import Products from "./products";

export default function Home() {
  return (
    <>
    <NavBar/>
    <HeroSection />
    <Products />
    </>
  );
}
