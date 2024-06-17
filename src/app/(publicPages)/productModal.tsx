"use client"

import Image from "next/image";
import Link from "next/link";
import { ShoppingCartIcon, XMarkIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import formatAsCurrency from "../lib/formatAsCurrency";
import { useState } from "react";
import { useRouter } from "next/navigation";
import generateRandomId from "../lib/generateRandomId";

export type Product = {
  name: string,
  price: string ,
  images: string[],
  description: string,
  colors: string[],
  categories: string[],
  available: boolean,
  discount: string,
  additionalInformation: string
}
const ProductModal = ({product, closeModal}: {product: Product, closeModal: ()=>void}) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1)

  const decreaseQuantity = () =>{
    if(quantity === 1){
      return;
    }
    setQuantity( prevState => prevState - 1)
  }
  const increaseQuantity = () =>{
    setQuantity( prevState => prevState + 1)
  }

  const addToCart = (product: any) =>{
    let cartProducts: any = localStorage.getItem("cartProducts");
    let id = generateRandomId();
    if(cartProducts){
      cartProducts = JSON.parse(cartProducts)
      cartProducts = [...cartProducts, {...product, id, quantity}]
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
    }else{
      localStorage.setItem("cartProducts", JSON.stringify([{...product, id, quantity}]))
    }
    router.refresh();
    closeModal()
  }

  return (
    <>
      {/* <button className="btn" onClick={() => document.getElementById('productModal').showModal()}>open modal</button> */}
      <dialog id="productModal" className="modal px-0">
        <div className="modal-box">
          <section className=" text-gray-700 grow flex flex-col items-center">
            <div className="w-full flex flex-col">
              <div className="carousel w-full py-0">
                {product.images.map((item, index) => {
                  return (
                    <div key={item + index} className="carousel-item w-full flex flex-col justify-center">
                      <div id={`modalItem${index}`} className=" mb-12"> </div>
                      <Image
                        //src={`/images/${item}`}
                        src={`${item.includes("public.blob.vercel") ? item : `/images/${item}`}`}
                        style={{ height: "400px", width: "auto", objectFit: "contain" }}
                        alt="Product Image"
                        width={500}
                        height={400}
                      />
                    </div>
                  )
                })}
              </div>
              <div className="flex justify-center w-full mt-4 gap-2">
                {product.images.map((item, index) => {
                  return (
                    <Link key={item + index} href={`#modalItem${index}`} className="" shallow={true}>
                      <Image
                        src={`${item.includes("public.blob.vercel") ? item : `/images/${item}`}`}
                        style={{ height: "100px", width: "auto", objectFit: "contain" }}
                        alt="Product Image"
                        width={70}
                        height={100}
                      />
                    </Link>
                  )
                })}
              </div>
              <h1 className="text-gray-950 font-light text-2xl mt-5">{product.name}</h1>
              <span className="font-bold text-black">₦{formatAsCurrency(product?.price)}</span>
              <div className="flex items-center border-t border-b py-2 mt-3">
                <button onClick={decreaseQuantity} className="btn btn-circle bg-gray- btn-sm ml-auto"> <MinusIcon className="w-4"/></button>
                <span className="px-3">{quantity}pc</span>
                <button onClick={increaseQuantity} className="btn btn-circle bg-gray- btn-sm mr-auto"> <PlusIcon className="w-4"/></button>
              </div>
              <h6 className="text-sm font-bold mt-5">Product Description</h6>
              <p className=" font-extralight text-sm md:text-lg mt-1">
                {product.description}
              </p>
              <button onClick={()=>addToCart(product)} className="btn bg-white border-gray-950 text-gray-950 hover:text-white hover:bg-gray-950 text-sm rounded-none mt-8 w-40 flex items-center mx-auto">
                Add to Cart <div className="badge badge-lg w-8 h-8 bg-gray-950 p-2 ml-auto"> <ShoppingCartIcon className="w-6 text-white" /></div>
              </button>
            </div>
          </section>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button id="closeModalBtn" onClick={closeModal} className="btn btn-circle btn-xs fixed top-2 right-2"><XMarkIcon className="w-4" /></button>
            </form>
          </div>
        </div>
      </dialog>
    </>
    
  )
}

export default ProductModal;