"use client"

import NavBar from "../navbar";
import Footer from "../footer";
import useAnalytics from '@/app/hooks/useAnalytics'
import Image from "next/image";
import Link from "next/link";

const ArticleCard = ({imageUrl, title, url}: {imageUrl: string, title: string, url: string})=> {
  return (
    <Link href={`/blog${url}`} className="card bg-base-100 shadow-xl">
      <figure className="border h-56 bg-slate-400">
        <Image
          className=" h-full w-full object-cover"
          src={imageUrl}
          alt="Article Image"
          width={300}
          height={200} 
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
      </div>
    </Link>
  )
}

const articles = [
  <ArticleCard key={0} imageUrl="/images/ibsmart2.jpeg" title="Introduction to Ibsmart Innovation" url="/introduction-to-ibsmart-innovation" />,
  <ArticleCard key={1} imageUrl="/images/processor-thumbnail.jpg" title="Processors and Computer Performance" url="/processors-and-computer-performance" />,
  <ArticleCard key={2} imageUrl="/images/laptop-series.avif" title="Popular laptops and their series" url="/laptop-series" />,
  <ArticleCard key={3} imageUrl="/images/slow-laptop-user.jpg" title="Why Your Laptop Gets Slower" url="/why-your-laptop-gets-slower" />,
  <ArticleCard key={4} imageUrl="/images/fast-laptop-happy-children.jpg" title="How to Make Your Computer Faster" url="/how-to-make-your-laptop-faster" />,
  <ArticleCard key={5} imageUrl="/images/georgeous-laptops/stylish-laptop.avif" title="Ten Gorgeous Laptops You Might Wish You Never Bought" url="/gorgeous-laptops-you-wish-you-never-bought" />,
  <ArticleCard key={6} imageUrl="/images/gorgeous-and-functional/laptop-performance.jpg" title="Ten Gorgeous and Efficient Laptop (Beauty with Brains 😁)" url="/gorgeous-and-efficient-laptops" />,
]
const reversedArticles = articles.reverse();


export default function Page() {
  useAnalytics();
  return (
    <main className="bg-white text-black flex flex-col">
      <NavBar />
      <section className="w-full max-w-screen-xl grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 md:px-12 mx-auto my-14 text-lg">
          {reversedArticles}
      </section>
      <Footer />
    </main>
  )
}