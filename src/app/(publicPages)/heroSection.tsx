"use client"
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {heroProducts} from "../products";
import Image from "next/image";
import { useState } from "react";




const HeroSection = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const formatDescription = (description: string) =>{
    if(showFullDescription){
      return description
    }else{
      return description.slice(0, 200)
    }

  }
  return (
    <section className="bg-base text-gray-700 grow flex items-center px-10 pb-10 lg:px-40">
      <div className=" w-1/2 lg:pr-20 mt-auto hidden md:block">
        <h1 className="text-gray-950 font-light text-5xl">{heroProducts[0].name}</h1>
        <p className=" font-extralight text-lg mt-10">
          {formatDescription(heroProducts[0].description)}
          <button className="btn btn-link btn-xs text-blue-900 inline" onClick={()=>setShowFullDescription ( prevState => !prevState)}> {showFullDescription ? "Show Less" : "Show More"} </button>
        </p>
        
        <button className="btn btn-lg bg-white border-gray-950 text-gray-950 hover:text-white hover:bg-gray-950 text-sm rounded-none mt-14 w-40 flex items-center">
          Buy Now <div className="badge badge-lg w-8 h-8 bg-gray-950 p-2 ml-auto"> <ShoppingCartIcon className="w-6 text-white" /></div>
        </button>
      </div>
      <div className="w-full md:w-1/2 flex flex-col">
        
        <div className="carousel w-full py-0">
          {heroProducts[0].images.map((item, index) =>{
            return(
              
              <div key={item + index} className="carousel-item w-full flex flex-col justify-center">
                <div  id={`item${index}`} className=" mb-14 lg:mb-32"> </div>
                <Image
                  src={`/images/${item}`}
                  style={{ height: "400px", width: "auto", objectFit: "contain"}}
                  alt="Product Image"
                  width={500}
                  height={400}
                />   
              </div>
            )
          })}
        </div>
        <div className="flex justify-center w-full mt-4 gap-2">
          {heroProducts[0].images.map((item, index) => {
            return (
              <Link key={item + index} href={`#item${index}`} className="" shallow={true}>
                <Image
                  src={`/images/${item}`}
                  style={{ height: "100px", width: "auto", objectFit: "contain"}}
                  alt="Product Image"
                  width={70}
                  height={100}
                />
                {/* <img src={`/images/${item}`} alt="Product" width={50} /> */}
              </Link>
            )
          })}
        </div>
        <h1 className="text-gray-950 font-light text-2xl text-center md:hidden mt-5">{heroProducts[0].name}</h1>
        <button className="btn bg-white border-gray-950 text-gray-950 hover:text-white hover:bg-gray-950 text-sm rounded-none mt-8 w-40 flex items-center mx-auto md:hidden">
          Buy Now <div className="badge badge-lg w-8 h-8 bg-gray-950 p-2 ml-auto"> <ShoppingCartIcon className="w-6 text-white" /></div>
        </button>
      </div>
    </section>
  )
}

export default HeroSection;