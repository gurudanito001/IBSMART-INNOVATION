"use client"

import NavBar from "../../navbar";
import Footer from "../../footer";
import useAnalytics from '@/app/hooks/useAnalytics'


export default function Page() {
  useAnalytics();
  return (
    <main className="bg-white text-black flex flex-col">
      <NavBar />
      <article className=" w-full max-w-screen-lg px-5 md:px-12 mx-auto my-14 text-lg">
        <h1 className="font-semibold text-2xl md:text-4xl mb-5">ABOUT IBSMART INNOVATION</h1>
        <div className="h-80 w-auto border bg-[url('/images/who-are-we.png')] bg-no-repeat bg-contain bg-center bg-gray-400">
        </div>
        <h4 className="mt-7 text-gray-700 text-xl font-semibold mb-3">Who are we</h4>
        

        <p>
          IBSMART Innovation is a tech brand that aims to ease the process of purchasing quality gadgets. For a long time, we have maintained the slogan “We are a team of tech enthusiasts passionate about bringing quality tech gadgets to your household”.  We always aim to keep the quality of the products that we sell high while making sure it is affordable. We will never compromise on any of these values.
        </p>

        <p className="mt-3">
          We understand the struggles of genuine buyers who have to be wary of scammers and fake products when they intend to buy tech products.
          To maintain the high bar we set for ourselves, we make sure we only deal and partner with brands, importers, and wholesalers who share the same values that we have. The process of trading with a customer does not end with a bank alert and delivery of the product, we make sure the product meets the needs of the customer and will be available to support the customer after a purchase has been concluded.
        </p>


        <h4 className="mt-7 text-gray-700 text-xl font-semibold mb-3">What products do we deal in</h4>

        <div className="h-80 w-auto border bg-[url('/images/products.png')] bg-no-repeat bg-contain bg-center bg-gray-400">
        </div>
        <p className="mt-3">We basically deal in tech products. Tech is a wide and ever-expanding field, so it encompasses a wide range of products. Here are some categories we mainly deal in:</p>

        <ul className="mt-3 list-disc px-5">
          <li>New Phones</li>
          <li>New Laptops</li>
          <li>Used Imported Phones</li>
          <li>Used Imported Laptops</li>
          <li>Tech Accessories of various kinds</li>
        </ul>


        <h4 className="mt-7 text-gray-700 text-xl font-semibold mb-3">What are our core values</h4>
        <div className="h-80 w-auto border bg-[url('/images/core-values.png')] bg-no-repeat bg-contain bg-center bg-gray-400">
        </div>
        <p className="mt-3">Here are our core values</p>

        <ul className="mt-3 list-disc px-5">
          <li>Prioritize customer satisfaction</li>
          <li>Good quality products only</li>
          <li>Affordable prices</li>
          <li>Honesty</li>
          <li>Accountability</li>
          <li>Integrity</li>
        </ul>

        <h4 className="mt-7 text-gray-700 text-xl font-semibold">More than a tech gadget sales company</h4>
        <p className="mt-3">IBSMART INNOVATION is more than a gadget sales company. We also provide other services and partner with other organizations to ensure that we make online transactions safe for both the buyer and the seller.We also create articles and posts on social media to educate customers to make informed decisions when buying gadgets online.

        </p>

        <p className="mt-3">We also create content to help users of tech products troubleshoot common problems they may encounter when using their gadgets and devices.</p>
      </article>

      <Footer />
    </main>
  )
}