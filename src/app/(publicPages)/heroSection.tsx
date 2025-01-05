"use client"
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {heroProducts} from "../products";
import Image from "next/image";
import { useState } from "react";
import generateRandomId from "../lib/generateRandomId";
import { useRouter } from "next/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "@ant-design/react-slick";




const HeroSection = () => {

  

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  

  const images = [
    `bg-app-peach bg-[url('/images/laptop.png')]`,
    `bg-app-orange bg-[url('/images/phone.jpg')]`,
    `bg-app-dullYellow bg-blend-darken bg-[url('/images/tablet.jpg')] bg-cover md:bg-contain`,
    `bg-app-yellow bg-[url('/images/accessory.jpg')]`,
  ]
  const bgs = [
    `bg-app-peach`,
    `bg-app-orange`,
    `bg-app-dullYellow bg-blend-darken`,
    `bg-app-yellow`,
  ]
  const titles = ["Laptops", "Phones", "Tablets", "Accessories"]

  const listImages = ()=>{
    return images.map( (item: string, index) =>{
      return (
        <div key={item} className={`carousel-item h-screen max-h-650 lg:max-h-800`}>
          <div className="w-full h-full flex flex-col-reverse lg:flex-row">
            <article className={`h-full w-full ${bgs[index]} flex flex-col lg:justify-center p-5 md:pl-10 lg:pl-14`}>
              { index === 0 &&
                <>
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl text-primary font-semibold mb-5 bg-gradient-to-r max-w-550 from-primary to-red-400 text-transparent bg-clip-text text-center lg:text-left">Boost your productivity <br/> with a wide range of laptop devices.</h3>
                  <p className="text-gray-700 text-lg xl:text-xl font-light mb-7 max-w-3xl hidden md:block text-center lg:text-left">What would you like to do with your laptop? Zoom meetings, Emails, Music and Movies, Microsoft Suite, Graphic design, Software development.
                  Whatever the task, we offer expert advice on which device would be perfect for your workflow.</p>
                  <button className="btn bg-primary border-primary text-white w-full max-w-40 mx-auto lg:mx-0">Shop Now</button>
                </>
              }

              {index === 1 &&
                <>
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl text-primary font-semibold mb-5 bg-gradient-to-r max-w-550 from-primary to-indigo-700 text-transparent bg-clip-text text-center lg:text-left">Get quality smartphones <br/>guaranteed to last at affordable prices  <br /></h3>
                  <p className="text-gray-700 text-lg xl:text-xl font-light mb-7 max-w-3xl hidden md:block text-center lg:text-left">We sell a wide range of smartphones, from IOS to Android, brand new to used phones imported from the US and Europe.
                  All our smartphones come in good working condition with up to 1 year warranty.</p>
                  <button className="btn bg-primary border-primary text-white w-full max-w-40 mx-auto lg:mx-0">Shop Now</button>
                </>
              }

              {index === 2 &&
                <>
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl text-primary font-semibold mb-5 bg-gradient-to-r max-w-550 from-primary to-blue-800 text-transparent bg-clip-text text-center lg:text-left">How big do you like your display? <br className="hidden lg:inline" />No worries, we love a bigger display too.  <br /></h3>
                  <p className="text-gray-700 text-lg xl:text-xl font-light mb-7 max-w-3xl hidden md:block text-center lg:text-left">Would you like a tablet for your kids or work and task management? We always have a perfect tablet for you. From Convertible laptops to iPads and Android tablets, we always have one that suits your needs.</p>
                  <button className="btn bg-primary border-primary text-white w-full max-w-40 mx-auto lg:mx-0">Shop Now</button>
                </>
              }

              {index === 3 &&
                <>
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl text-primary font-semibold mb-5 bg-gradient-to-r max-w-550 from-primary to-teal-700 text-transparent bg-clip-text text-center lg:text-left">Enhance your style <br />and Connectivity with our accessories </h3>
                  <p className="text-gray-700 text-lg xl:text-xl font-light mb-7 max-w-3xl hidden md:block text-center lg:text-left">From Smartwatches to headphones and Bluetooth speakers. We sell all types of devices to connect with and support your smart devices. We get the best accessories at the most affordable prices on the market.</p>
                  <button className="btn bg-primary border-primary text-white w-full max-w-40 mx-auto lg:mx-0">Shop Now</button>
                </>
              }
            </article>
            <figure className={`h-full w-full ${images[index]} bg-no-repeat bg-contain bg-center`}>
            </figure>
          </div>
        </div>
      )
    })
  }




  const router = useRouter();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [productIndex, setProductIndex] = useState(0)



  const formatDescription = (description: string) =>{
    if(showFullDescription){
      return description
    }else{
      return description.slice(0, 200)
    }
  }

  const addToCart = (product: any) =>{
    let cartProducts: any = localStorage.getItem("cartProducts");
    let id = generateRandomId();
    if(cartProducts){
      cartProducts = JSON.parse(cartProducts)
      cartProducts = [...cartProducts, {...product, id, quantity: 1}]
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
    }else{
      localStorage.setItem("cartProducts", JSON.stringify([{...product, id, quantity: 1}]))
    }
    router.refresh();
  }


  return (
    <section className="w-screen overflow-x-clip h-screen max-h-650 lg:max-h-800">
      <Slider {...settings} className="h-full">
        {listImages()}
      </Slider>
    </section>
      
  )
}

export default HeroSection;
