"use client"

import Image from "next/image";
import NavBar from "./navbar";
import HeroSection from "./heroSection";
import Products from "./products";
import Footer from "./footer";
import Categories from "./categories";
import useAnalytics from "../hooks/useAnalytics";

export default function Home() {
  useAnalytics()
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
