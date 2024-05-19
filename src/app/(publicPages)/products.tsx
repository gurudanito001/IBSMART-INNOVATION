"use client"
import { products } from "../products";
import formatAsCurrency from "../lib/formatAsCurrency";
import Image from "next/image";
import ProductModal from "./productModal";
import { useRef, useState } from "react";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

//console.log(products);
const ColorIndicator = ({ color = "#000000" }) => {
  return (
    <div className=" w-2 h-2 rounded-full mr-1" style={{ background: color }}>

    </div>
  )
}


const Products = () => {
  const initProduct = {
    name: "",
    price: "",
    images: [],
    description: "",
    colors: [],
    categories: [],
    available: true,
    discount: "",
    additionalInformation: ""
  }
  const [modalProduct, setModalProduct] = useState(initProduct)
  const modalRef: any = useRef(null);

  const openModal = (product: any) => {
    setModalProduct(product);
    let el: any = document.getElementById('productModal')
    if (el) {
      el.showModal()
    }
  }

  const closeModal = () => {
    setModalProduct(initProduct);
    let el: any = document.getElementById('closeModalBtn');
    if (el) {
      el.click()
    }
  }

  const getAllCategories = ()=>{
    let categories: string[] = [];
    products.forEach( item =>{
      categories = [...categories, ...item?.categories]
    })
    return [...new Set(categories)];
  }

  const generateCategoryOptions = ()=>{
    let categories = getAllCategories();
    return categories.map( item =>{
      return(
        <li key={item}><a className="capitalize text-gray-700 text-xs">{item}</a></li>
      )
    })
  }

  return (
    <section id="products" className="bg-primary py-8 px-3 lg:px-20 overflow-x-hidden">
      <h6 className="text-white mb-5">Products</h6>
      <header className="flex items-center mb-3">
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="flex items-center m-1 text-xs md:text-sm h-4">Categories <ChevronDownIcon className="w-4 ml-1" /></div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            {generateCategoryOptions()}
          </ul>
        </div>

        <label className="input input-bordered flex items-center gap-2 ml-4 h-12 md:ml-auto w-full md:w-80 bg-transparent border border-gray-200">
          <input type="text" placeholder="Search Products" className="input w-full max-w-xs text-white text-xs" />
          <MagnifyingGlassIcon className="w-4 text-white" />
        </label>
      </header>
      <ul className="carousel rounded-box w-full z-0 py-5 mb-20" >
        {products?.map(item => {
          return (
            <li key={item?.name} onClick={() => openModal(item)} className="carousel-item w-2/5 inline-flex flex-col lg:w-1/6 justify-end p-1 md:p-4 mx-2 cursor-pointer glass">
              <Image
                src={`/images/${item?.images[0]}`}
                style={{ height: "200px", width: "auto", objectFit: "contain" }}
                alt="Product Image"
                width={300}
                height={300}
              />
              <h4 className="text-sm mt-3"> {item?.name} </h4>
              <div className="flex items-center">
                <span className="text-xs font-bold">₦{formatAsCurrency(item?.price)}</span>
                <div className="flex items-center ml-auto">
                  {item?.colors?.map(item => <ColorIndicator key={item} color={item} />)}
                </div>
              </div>
            </li>
          )
        })}

      </ul>

      {/* <h6 className="text-lg text-white mb-1">Laptops</h6>
      <ul className="carousel rounded-box w-full glass z-0 py-5 mb-20" >
        <div className="carousel-item w-2/5 inline-flex flex-col lg:w-1/5 justify-center p-1 md:p-4 mx-2">
          <img src="/images/macbook.png" alt="Product" />
          <h4 className="text-sm mt-3 ml-3"> Macbook Pro 2023 M1</h4>
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-bold">$19.99</span>
            <div className="flex items-center ">
              <ColorIndicator color="#EEEDEB" />
              <ColorIndicator color="#E8C872" />
              <ColorIndicator color="#436850" />
              <ColorIndicator color="#A3C9AA" />
            </div>
          </div>
        </div>
        <div className="carousel-item w-2/5 inline-flex flex-col lg:w-1/5 justify-center p-1 md:p-4 mx-2">
          <img src="/images/macbook.png" alt="Product" />
          <h4 className="text-sm mt-3 ml-3"> Macbook Pro 2023 M1</h4>
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-bold">$19.99</span>
            <div className="flex items-center ">
              <ColorIndicator color="#EEEDEB" />
              <ColorIndicator color="#E8C872" />
              <ColorIndicator color="#436850" />
              <ColorIndicator color="#A3C9AA" />
            </div>
          </div>
        </div>
        <div className="carousel-item w-2/5 inline-flex flex-col lg:w-1/5 justify-center p-1 md:p-4 mx-2">
          <img src="/images/macbook.png" alt="Product" />
          <h4 className="text-sm mt-3 ml-3"> Macbook Pro 2023 M1</h4>
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-bold">$19.99</span>
            <div className="flex items-center ">
              <ColorIndicator color="#EEEDEB" />
              <ColorIndicator color="#E8C872" />
              <ColorIndicator color="#436850" />
              <ColorIndicator color="#A3C9AA" />
            </div>
          </div>
        </div>
        <div className="carousel-item w-2/5 inline-flex flex-col lg:w-1/5 justify-center p-1 md:p-4 mx-2">
          <img src="/images/macbook.png" alt="Product" />
          <h4 className="text-sm mt-3 ml-3"> Macbook Pro 2023 M1</h4>
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-bold">$19.99</span>
            <div className="flex items-center ">
              <ColorIndicator color="#EEEDEB" />
              <ColorIndicator color="#E8C872" />
              <ColorIndicator color="#436850" />
              <ColorIndicator color="#A3C9AA" />
            </div>
          </div>
        </div>
        <div className="carousel-item w-2/5 inline-flex flex-col lg:w-1/5 justify-center p-1 md:p-4 mx-2">
          <img src="/images/macbook.png" alt="Product" />
          <h4 className="text-sm mt-3 ml-3"> Macbook Pro 2023 M1</h4>
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-bold">$19.99</span>
            <div className="flex items-center ">
              <ColorIndicator color="#EEEDEB" />
              <ColorIndicator color="#E8C872" />
              <ColorIndicator color="#436850" />
              <ColorIndicator color="#A3C9AA" />
            </div>
          </div>
        </div>
        <div className="carousel-item w-2/5 inline-flex flex-col lg:w-1/5 justify-center p-1 md:p-4 mx-2">
          <img src="/images/macbook.png" alt="Product" />
          <h4 className="text-sm mt-3 ml-3"> Macbook Pro 2023 M1</h4>
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-bold">$19.99</span>
            <div className="flex items-center ">
              <ColorIndicator color="#EEEDEB" />
              <ColorIndicator color="#E8C872" />
              <ColorIndicator color="#436850" />
              <ColorIndicator color="#A3C9AA" />
            </div>
          </div>
        </div>
        <div className="carousel-item w-2/5 inline-flex flex-col lg:w-1/5 justify-center p-1 md:p-4 mx-2">
          <img src="/images/macbook.png" alt="Product" />
          <h4 className="text-sm mt-3 ml-3"> Macbook Pro 2023 M1</h4>
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-bold">$19.99</span>
            <div className="flex items-center ">
              <ColorIndicator color="#EEEDEB" />
              <ColorIndicator color="#E8C872" />
              <ColorIndicator color="#436850" />
              <ColorIndicator color="#A3C9AA" />
            </div>
          </div>
        </div>
        <div className="carousel-item w-2/5 inline-flex flex-col lg:w-1/5 justify-center p-1 md:p-4 mx-2">
          <img src="/images/macbook.png" alt="Product" />
          <h4 className="text-sm mt-3 ml-3"> Macbook Pro 2023 M1</h4>
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-bold">$19.99</span>
            <div className="flex items-center ">
              <ColorIndicator color="#EEEDEB" />
              <ColorIndicator color="#E8C872" />
              <ColorIndicator color="#436850" />
              <ColorIndicator color="#A3C9AA" />
            </div>
          </div>
        </div>
        <div className="carousel-item w-2/5 inline-flex flex-col lg:w-1/5 justify-center p-1 md:p-4 mx-2">
          <img src="/images/macbook.png" alt="Product" />
          <h4 className="text-sm mt-3 ml-3"> Macbook Pro 2023 M1</h4>
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-bold">$19.99</span>
            <div className="flex items-center ">
              <ColorIndicator color="#EEEDEB" />
              <ColorIndicator color="#E8C872" />
              <ColorIndicator color="#436850" />
              <ColorIndicator color="#A3C9AA" />
            </div>
          </div>
        </div>
        <div className="carousel-item w-2/5 inline-flex flex-col lg:w-1/5 justify-center p-1 md:p-4 mx-2">
          <img src="/images/macbook.png" alt="Product" />
          <h4 className="text-sm mt-3 ml-3"> Macbook Pro 2023 M1</h4>
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-bold">$19.99</span>
            <div className="flex items-center ">
              <ColorIndicator color="#EEEDEB" />
              <ColorIndicator color="#E8C872" />
              <ColorIndicator color="#436850" />
              <ColorIndicator color="#A3C9AA" />
            </div>
          </div>
        </div>
        <div className="carousel-item w-2/5 inline-flex flex-col lg:w-1/5 justify-center p-1 md:p-4 mx-2">
          <img src="/images/macbook.png" alt="Product" />
          <h4 className="text-sm mt-3 ml-3"> Macbook Pro 2023 M1</h4>
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-bold">$19.99</span>
            <div className="flex items-center ">
              <ColorIndicator color="#EEEDEB" />
              <ColorIndicator color="#E8C872" />
              <ColorIndicator color="#436850" />
              <ColorIndicator color="#A3C9AA" />
            </div>
          </div>
        </div>

      </ul>

      <h6 className="text-lg text-white mb-1">Accessories</h6>
      <ul className="carousel rounded-box w-full glass z-0 py-5 mb-20" >
        <div className="carousel-item w-2/5 inline-flex flex-col lg:w-1/5 justify-center p-1 md:p-4 mx-2">
          <img src="/images/airpods-pro.png" alt="Product" />
          <h4 className="text-sm mt-3 ml-3"> Airpods Pro</h4>
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-bold">$19.99</span>
            <div className="flex items-center ">
              <ColorIndicator color="#EEEDEB" />
              <ColorIndicator color="#E8C872" />
              <ColorIndicator color="#436850" />
              <ColorIndicator color="#A3C9AA" />
            </div>
          </div>
        </div>

        <div className="carousel-item w-2/5 inline-flex flex-col lg:w-1/5 justify-center p-1 md:p-4 mx-2">
          <img src="/images/airpods-pro.png" alt="Product" />
          <h4 className="text-sm mt-3 ml-3"> Airpods Pro</h4>
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-bold">$19.99</span>
            <div className="flex items-center ">
              <ColorIndicator color="#EEEDEB" />
              <ColorIndicator color="#E8C872" />
              <ColorIndicator color="#436850" />
              <ColorIndicator color="#A3C9AA" />
            </div>
          </div>
        </div>

        <div className="carousel-item w-2/5 inline-flex flex-col lg:w-1/5 justify-center p-1 md:p-4 mx-2">
          <img src="/images/airpods-pro.png" alt="Product" />
          <h4 className="text-sm mt-3 ml-3"> Airpods Pro</h4>
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-bold">$19.99</span>
            <div className="flex items-center ">
              <ColorIndicator color="#EEEDEB" />
              <ColorIndicator color="#E8C872" />
              <ColorIndicator color="#436850" />
              <ColorIndicator color="#A3C9AA" />
            </div>
          </div>
        </div>

        <div className="carousel-item w-2/5 inline-flex flex-col lg:w-1/5 justify-center p-1 md:p-4 mx-2">
          <img src="/images/airpods-pro.png" alt="Product" />
          <h4 className="text-sm mt-3 ml-3"> Airpods Pro</h4>
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-bold">$19.99</span>
            <div className="flex items-center ">
              <ColorIndicator color="#EEEDEB" />
              <ColorIndicator color="#E8C872" />
              <ColorIndicator color="#436850" />
              <ColorIndicator color="#A3C9AA" />
            </div>
          </div>
        </div>

        <div className="carousel-item w-2/5 inline-flex flex-col lg:w-1/5 justify-center p-1 md:p-4 mx-2">
          <img src="/images/airpods-pro.png" alt="Product" />
          <h4 className="text-sm mt-3 ml-3"> Airpods Pro</h4>
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-bold">$19.99</span>
            <div className="flex items-center ">
              <ColorIndicator color="#EEEDEB" />
              <ColorIndicator color="#E8C872" />
              <ColorIndicator color="#436850" />
              <ColorIndicator color="#A3C9AA" />
            </div>
          </div>
        </div>

        <div className="carousel-item w-2/5 inline-flex flex-col lg:w-1/5 justify-center p-1 md:p-4 mx-2">
          <img src="/images/airpods-pro.png" alt="Product" />
          <h4 className="text-sm mt-3 ml-3"> Airpods Pro</h4>
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-bold">$19.99</span>
            <div className="flex items-center ">
              <ColorIndicator color="#EEEDEB" />
              <ColorIndicator color="#E8C872" />
              <ColorIndicator color="#436850" />
              <ColorIndicator color="#A3C9AA" />
            </div>
          </div>
        </div>

        <div className="carousel-item w-2/5 inline-flex flex-col lg:w-1/5 justify-center p-1 md:p-4 mx-2">
          <img src="/images/airpods-pro.png" alt="Product" />
          <h4 className="text-sm mt-3 ml-3"> Airpods Pro</h4>
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-bold">$19.99</span>
            <div className="flex items-center ">
              <ColorIndicator color="#EEEDEB" />
              <ColorIndicator color="#E8C872" />
              <ColorIndicator color="#436850" />
              <ColorIndicator color="#A3C9AA" />
            </div>
          </div>
        </div>

        <div className="carousel-item w-2/5 inline-flex flex-col lg:w-1/5 justify-center p-1 md:p-4 mx-2">
          <img src="/images/airpods-pro.png" alt="Product" />
          <h4 className="text-sm mt-3 ml-3"> Airpods Pro</h4>
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-bold">$19.99</span>
            <div className="flex items-center ">
              <ColorIndicator color="#EEEDEB" />
              <ColorIndicator color="#E8C872" />
              <ColorIndicator color="#436850" />
              <ColorIndicator color="#A3C9AA" />
            </div>
          </div>
        </div>

        <div className="carousel-item w-2/5 inline-flex flex-col lg:w-1/5 justify-center p-1 md:p-4 mx-2">
          <img src="/images/airpods-pro.png" alt="Product" />
          <h4 className="text-sm mt-3 ml-3"> Airpods Pro</h4>
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-bold">$19.99</span>
            <div className="flex items-center ">
              <ColorIndicator color="#EEEDEB" />
              <ColorIndicator color="#E8C872" />
              <ColorIndicator color="#436850" />
              <ColorIndicator color="#A3C9AA" />
            </div>
          </div>
        </div>

        <div className="carousel-item w-2/5 inline-flex flex-col lg:w-1/5 justify-center p-1 md:p-4 mx-2">
          <img src="/images/airpods-pro.png" alt="Product" />
          <h4 className="text-sm mt-3 ml-3"> Airpods Pro</h4>
          <div className="flex items-center justify-between px-3">
            <span className="text-xs font-bold">$19.99</span>
            <div className="flex items-center ">
              <ColorIndicator color="#EEEDEB" />
              <ColorIndicator color="#E8C872" />
              <ColorIndicator color="#436850" />
              <ColorIndicator color="#A3C9AA" />
            </div>
          </div>
        </div>

      </ul> */}

      {<ProductModal product={modalProduct} closeModal={closeModal} />}

    </section>
  )
}

export default Products