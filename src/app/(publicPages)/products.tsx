"use client"
import { Product } from "../products";
import formatAsCurrency from "../lib/formatAsCurrency";
import Image from "next/image";
import ProductModal from "./productModal";
import { useEffect, useRef, useState } from "react";
import { CheckIcon, ChevronDownIcon, MagnifyingGlassIcon, XMarkIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import axios from "axios";

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
  const [products, setProducts] = useState<Product[]>([])
  const [modalProduct, setModalProduct] = useState(initProduct);
  const [phoneSearch, setPhoneSearch] = useState<{ name: string, categories: string[] }>({
    name: "",
    categories: []
  });
  const [laptopSearch, setLaptopSearch] = useState<{ name: string, categories: string[] }>({
    name: "",
    categories: []
  });
  const [accessorySearch, setAccessorySearch] = useState<{ name: string, categories: string[] }>({
    name: "",
    categories: []
  });

  const fetchProducts = ()=>{
    const options = {
      url: `/api/products`,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }
    axios(options)
      .then(response => {
        console.log(response);
        setProducts(response.data.data)
      }).catch(error =>{
        console.log(error)
      })
  }
  
  useEffect(()=>{
    fetchProducts();
  }, [])
  useEffect(()=>{
    if(modalProduct?.name){
      let el: any = document.getElementById('productModal')
      if (el) {
        el.showModal()
      }
    }else{
      let el: any = document.getElementById('closeModalBtn');
      if (el) {
        el.click()
      }
    }
  }, [modalProduct])

  const openModal = (product: any) => {
    setModalProduct(product);
  }

  const closeModal = () => {
    setModalProduct(initProduct);
  }

  const handleSearchPhone = (prop: string, value: string) => {
    setPhoneSearch(prevState => ({
      ...prevState,
      [prop]: value
    }))
  }

  const handleSearchLaptop = (prop: string, value: string) => {
    setLaptopSearch(prevState => ({
      ...prevState,
      [prop]: value
    }))
  }


  const handleSearchAccessory = (prop: string, value: string) => {
    setAccessorySearch(prevState => ({
      ...prevState,
      [prop]: value
    }))
  }

  const handleSetCategorySearch = (mainCategory: "phone" | "laptop" | "accessories", category: string) => {
    if (mainCategory === "phone") {
      let data = { ...phoneSearch };
      if (data?.categories.includes(category)) {
        return;
      }
      data.categories = [...data.categories, category]
      setPhoneSearch(data);
    } else if (mainCategory === "laptop") {
      let data = { ...laptopSearch };
      if (data?.categories.includes(category)) {
        return;
      }
      data.categories = [...data.categories, category]
      setLaptopSearch(data);
    } else if (mainCategory === "accessories") {
      let data = { ...accessorySearch };
      if (data?.categories.includes(category)) {
        return;
      }
      data.categories = [...data.categories, category]
      setAccessorySearch(data);
    }
  }

  const listCategories = (mainCategory: "phone" | "laptop" | "accessories") => {
    let categories;
    if (mainCategory === "phone") {
      categories = phoneSearch.categories
    } else if (mainCategory === "laptop") {
      categories = laptopSearch.categories
    } else if (mainCategory === "accessories") {
      categories = accessorySearch.categories
    }

    return categories?.map(item => {
      return (
        <li key={item} className="mr-2 glass text-primary text-xs flex items-center rounded-xl px-2">{item} <XMarkIcon onClick={() => removeCategory(mainCategory, item)} className="w-4 ml-3 text-red-600 cursor-pointer" /></li>
      )
    })
  }

  const removeCategory = (mainCategory: "phone" | "laptop" | "accessories", category: string) => {
    if (mainCategory === "phone") {
      let data = { ...phoneSearch };
      data.categories = data.categories.filter(item => item !== category);
      setPhoneSearch(data)
    } else if (mainCategory === "laptop") {
      let data = { ...laptopSearch };
      data.categories = data.categories.filter(item => item !== category);
      setLaptopSearch(data)
    } else if (mainCategory === "accessories") {
      let data = { ...accessorySearch };
      data.categories = data.categories.filter(item => item !== category);
      setAccessorySearch(data)
    }
  }


  const getAllCategories = (products: Product[], mainCategory: string) => {
    let categories: string[] = [];
    products.forEach(item => {
      categories = [...categories, ...item?.categories]
    })
    let allCategories = [...new Set(categories)]
    let mainCategoryIndex = allCategories.indexOf(mainCategory);
    allCategories.splice(mainCategoryIndex, 1);
    return allCategories
  }

  const getProductsOfCategory = (category: string) => {
    let categoryProducts = products.filter(item => item.categories.includes(category))
    if (category === "phone") {
      if (phoneSearch.name) {
        categoryProducts = categoryProducts.filter(item => item.name.toLowerCase().trim().includes(phoneSearch?.name.toLowerCase().trim()))
      }
      if(phoneSearch.categories.length > 0){
        categoryProducts = categoryProducts.filter( item => {
          let combinedCategories = new Set([...item.categories, ...phoneSearch.categories]);
          if(combinedCategories.size === item.categories.length){
            return item
          } 
        })
      }
    }
    if (category === "laptop") {
      if (laptopSearch.name) {
        categoryProducts = categoryProducts.filter(item => item.name.toLowerCase().trim().includes(laptopSearch?.name.toLowerCase().trim()))
      }
      if(laptopSearch.categories.length > 0){
        categoryProducts = categoryProducts.filter( item => {
          let combinedCategories = new Set([...item.categories, ...laptopSearch.categories]);
          if(combinedCategories.size === item.categories.length){
            return item
          } 
        })
      }
    }
    return categoryProducts;
  }

  const categoryIsChecked = (mainCategory: "phone" | "laptop" | "accessories", category: string)=>{
    if(mainCategory === "phone"){
      return phoneSearch?.categories.includes(category)
    }else if(mainCategory === "laptop"){
      return laptopSearch.categories.includes(category)
    }else if(mainCategory === "accessories"){
      return accessorySearch.categories.includes(category)
    }
  }

  const generateCategoryOptions = (mainCategory: "phone" | "laptop" | "accessories") => {
    let filteredproducts = products.filter(item => item.categories.includes(mainCategory))
    let categories = getAllCategories(filteredproducts, mainCategory);
    return categories.map(item => {
      return (
        <li onClick={() => handleSetCategorySearch(mainCategory, item)} key={item}><a className={`capitalize ${categoryIsChecked(mainCategory, item) && "bg-gray-300"} text-gray-700 text-xs flex items-center`}>{item} {categoryIsChecked(mainCategory, item) && <CheckIcon className="ml-auto w-3"/>}</a></li>
      )
    })
  }

  return (
    <section id="products" className="bg-white py-8 px-3 lg:px-20 overflow-x-hidden mt-20">
      <header className="flex items-center mb-3">
        <h3 className="text-lg font-semibold text-primary">Phones</h3>
        <button className="btn btn-link text-primary ml-auto">View All <ChevronRightIcon className="w-4 ml-1" /></button>
      </header>

      <ul className="carousel rounded-box w-full z-0 py-5 mb-20 min-h-80" >
        {getProductsOfCategory("phone")?.map(item => {
          return (
            <li key={item?.name} onClick={() => openModal(item)} className="carousel-item w-2/5 inline-flex flex-col lg:w-1/6 justify-end p-1 md:p-4 mx-2 cursor-pointer bg-gray-100">
              <Image
                src={`${item?.images[0].includes("public.blob.vercel") ? item?.images[0] : `/images/${item?.images[0]}`}`}
                style={{ height: "200px", width: "auto", objectFit: "contain" }}
                alt="Product Image"
                width={300}
                height={300}
              />
              <h4 className="text-sm mt-3 text-primary"> {item?.name} </h4>
              <div className="flex items-center">
                <span className="text-xs font-bold text-primary">₦{formatAsCurrency(item?.price)}</span>
                <div className="flex items-center ml-auto">
                  {item?.colors?.map(item => <ColorIndicator key={item} color={item} />)}
                </div>
              </div>
            </li>
          )
        })}

      </ul>



      <header className="flex items-center mb-3">
        <h3 className="text-lg font-semibold text-primary ">Laptops</h3>
        <button className="btn btn-link text-primary ml-auto">View All <ChevronRightIcon className="w-4 ml-1" /></button>
      </header>
      <ul className="carousel rounded-box w-full z-0 py-5 mb-20 min-h-80" >
        {getProductsOfCategory("laptop")?.map(item => {
          return (
            <li key={item?.name} onClick={() => openModal(item)} className="carousel-item w-2/5 inline-flex flex-col lg:w-1/6 justify-end p-1 md:p-4 mx-2 cursor-pointer bg-gray-100">
              <Image
                src={`/images/${item?.images[0]}`}
                style={{ height: "200px", width: "auto", objectFit: "contain" }}
                alt="Product Image"
                width={300}
                height={300}
              />
              <h4 className="text-sm mt-3 text-primary"> {item?.name} </h4>
              <div className="flex items-center">
                <span className="text-xs font-bold text-primary">₦{formatAsCurrency(item?.price)}</span>
                <div className="flex items-center ml-auto">
                  {item?.colors?.map(item => <ColorIndicator key={item} color={item} />)}
                </div>
              </div>
            </li>
          )
        })}
      </ul>



      {modalProduct?.name && <ProductModal product={modalProduct} closeModal={closeModal} />}

    </section>
  )
}

export default Products