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
{/* <section key={item} className={`carousel-item ${images[index]} bg-cover bg-center bg-no-repeat h-screen max-h-800`}>
          <h3 className="text-white font-semibold text-2xl md:text-4xl p-5 md:p-14"> {titles[index]}</h3>
        </section>  */}

  const listImages = ()=>{
    return images.map( (item: string, index) =>{
      return (
        <div key={item} className={`carousel-item h-screen max-h-800`}>
          <div className="w-full h-full flex flex-col lg:flex-row">
            <article className={`h-full w-full ${bgs[index]} flex flex-col justify-center p-5 md:pl-10 lg:pl-14`}>
              { index === 0 &&
                <>
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl text-primary font-semibold mb-5 bg-gradient-to-r max-w-550 from-primary to-red-400 text-transparent bg-clip-text">Boost your productivity <br/> with a wide range of laptop devices.</h3>
                  <p className="text-gray-700 text-lg lg:text-xl font-light mb-7 max-w-3xl">What would you like to do with your laptop? Zoom meetings, Emails, Music and Movies, Microsoft Suite, Graphic design, Software development.
                  Whatever the task, we offer expert advice on which device would be perfect for your workflow.</p>
                  <button className="btn bg-primary border-primary text-white max-w-40">Shop Now</button>
                </>
              }

              {index === 1 &&
                <>
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl text-primary font-semibold mb-5 bg-gradient-to-r max-w-550 from-primary to-indigo-700 text-transparent bg-clip-text">Get quality smartphones <br/>guaranteed to last at affordable prices  <br /></h3>
                  <p className="text-gray-700 text-lg lg:text-xl font-light mb-7 max-w-3xl">We sell a wide range of smartphones, from IOS to Android, brand new to used phones imported from the US and Europe.
                  All our smartphones come in good working condition with up to 1 year warranty.</p>
                  <button className="btn bg-primary border-primary text-white max-w-40">Shop Now</button>
                </>
              }

              {index === 2 &&
                <>
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl text-primary font-semibold mb-5 bg-gradient-to-r max-w-550 from-primary to-blue-800 text-transparent bg-clip-text">How big do you like your display? <br />No worries, we love a bigger display too.  <br /></h3>
                  <p className="text-gray-700 text-lg lg:text-xl font-light mb-7 max-w-3xl">Would you like a tablet for your kids or work and task management? We always have a perfect tablet for you. From Convertible laptops to iPads and Android tablets, we always have one that suits your needs.</p>
                  <button className="btn bg-primary border-primary text-white max-w-40">Shop Now</button>
                </>
              }

              {index === 3 &&
                <>
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl text-primary font-semibold mb-5 bg-gradient-to-r max-w-550 from-primary to-teal-700 text-transparent bg-clip-text">Enhance your style <br />and Connectivity with our accessories </h3>
                  <p className="text-gray-700 text-lg lg:text-xl font-light mb-7 max-w-3xl">From Smartwatches to headphones and Bluetooth speakers. We sell all types of devices to connect with and support your smart devices. We get the best accessories at the most affordable prices on the market.</p>
                  <button className="btn bg-primary border-primary text-white max-w-40">Shop Now</button>
                </>
              }
            </article>
            <figure className={`h-full w-full ${images[index]} bg-no-repeat bg-contain bg-bottom md:bg-center`}>

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
    <section className="w-screen overflow-x-clip h-screen max-h-800">
      <Slider {...settings} className="h-full">
        {listImages()}
      </Slider>
    </section>
      
  )
}

export default HeroSection;


{/* <div className=" w-1/2 lg:pr-20 mt-auto hidden md:block">
        <h1 className="text-gray-950 font-light text-5xl">{heroProducts[productIndex].name}</h1>
        <p className=" font-extralight text-lg mt-10">
          {formatDescription(heroProducts[productIndex].description)}
          <button className="btn btn-link btn-xs text-blue-900 inline" onClick={()=>setShowFullDescription ( prevState => !prevState)}> {showFullDescription ? "Show Less" : "Show More"} </button>
        </p>
        
        <button onClick={()=>addToCart(heroProducts[productIndex])} className="btn btn-lg bg-white border-gray-950 text-gray-950 hover:text-white hover:bg-gray-950 text-sm rounded-none mt-14 flex items-center">
          Add to Cart <div className="badge badge-lg w-8 h-8 bg-gray-950 p-2 ml-auto"> <ShoppingCartIcon className="w-6 text-white" /></div>
        </button>
      </div>
      <div className="w-full md:w-1/2 flex flex-col">
        
        <div className="carousel w-full py-0">
          {heroProducts[productIndex].images.map((item, index) =>{
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
          {heroProducts[productIndex].images.map((item, index) => {
            return (
              <Link key={item + index} href={`#item${index}`} className="" shallow={true}>
                <Image
                  src={`/images/${item}`}
                  style={{ height: "100px", width: "auto", objectFit: "contain"}}
                  alt="Product Image"
                  width={70}
                  height={100}
                />
              </Link>
            )
          })}
        </div>
        <h1 className="text-gray-950 font-light text-2xl text-center md:hidden mt-5">{heroProducts[productIndex].name}</h1>
        <button onClick={()=>addToCart(heroProducts[productIndex])} className="btn bg-white border-gray-950 text-gray-950 hover:text-white hover:bg-gray-950 text-sm rounded-none mt-8 flex items-center mx-auto md:hidden">
          Add to Cart <div className="badge badge-lg w-8 h-8 bg-gray-950 p-2 ml-auto"> <ShoppingCartIcon className="w-6 text-white" /></div>
        </button>
      </div> */}