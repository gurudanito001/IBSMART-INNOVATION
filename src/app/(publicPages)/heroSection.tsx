import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-base text-gray-700 grow flex items-center px-10 pb-10 lg:px-40 lg:py-28">
      <div className=" w-1/2 lg:pr-20 mt-auto hidden md:block">
        <h1 className="text-gray-950 font-light text-4xl lg:text-7xl">Macbook M1 2021</h1>
        <p className=" font-extralight text-xl mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam</p>
        <button className="btn btn-lg bg-white border-gray-950 text-gray-950 hover:text-white hover:bg-gray-950 text-sm rounded-none mt-14 w-40 flex items-center">
          Buy Now <div className="badge badge-lg w-8 h-8 bg-gray-950 p-2 ml-auto"> <ShoppingCartIcon className="w-6 text-white" /></div>
        </button>
      </div>
      <div className="w-full md:w-1/2 flex flex-col">
        
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full flex justify-center pt-10">
            <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Product" />
          </div>
          <div id="item2" className="carousel-item w-full flex justify-center pt-10">
            <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Product" />
          </div>
          <div id="item3" className="carousel-item w-full flex justify-center pt-10">
            <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Product" />
          </div>
          <div id="item4" className="carousel-item w-full flex justify-center pt-10">
            <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Product" />
          </div>
        </div>
        <div className="flex justify-center w-full mt-4 gap-2">
          <Link href="#item1" className="" shallow={true}>
            <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" width={50} />
          </Link>
          <Link href="#item2" className="">
            <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Product" width={50} />
          </Link>
          <Link href="#item3" className="">
            <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Product" width={50} />
          </Link>
          <Link href="#item4" className="">
            <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Product" width={50} />
          </Link>
        </div>
        <h1 className="text-gray-950 font-light text-2xl text-center md:hidden mt-5">Macbook M1 2021</h1>
        <button className="btn bg-white border-gray-950 text-gray-950 hover:text-white hover:bg-gray-950 text-sm rounded-none mt-8 w-40 flex items-center mx-auto md:hidden">
          Buy Now <div className="badge badge-lg w-8 h-8 bg-gray-950 p-2 ml-auto"> <ShoppingCartIcon className="w-6 text-white" /></div>
        </button>
      </div>
      
    </section>
  )
}

export default HeroSection;