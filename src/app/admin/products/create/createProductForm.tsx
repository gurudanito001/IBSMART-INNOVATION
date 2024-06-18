"use client"

import NavBar from "@/app/(publicPages)/navbar";
import { use, useEffect, useRef, useState } from "react";
import { Product } from "@/app/products";
import axios from "axios";
import { XMarkIcon, XCircleIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";


const CreateProductForm = () =>{


  const inputFileRef = useRef(null);
  const [fileUrls, setFileUrls] = useState<string[]>([]);
  const [files, setFiles] = useState<Blob[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [categorySearch, setCategorySearch] = useState("")
  const [productColor, setProductColor] = useState("");

  useEffect(()=>{
    fetchProducts();
  },[])

  const fetchProducts = ()=>{
    axios.get(`/api/products`)
      .then( (res)=>{
        console.log( res.data)
        setProducts(res.data.data)
      }).catch(error =>{
        console.log(error)
      })
  }

  const [formData, setFormData] = useState<Product>({
    name: "",
    price: "",
    images: [],
    description: "",
    colors: [],
    categories: [],
    available: true,
    discount: "",
    additionalInformation: ""
  })

  const createFileUrl = (e:any) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files)
    let urls: string[] = []
    let files: Blob[] = []
    if (chosenFiles.length > 0) {
      chosenFiles.forEach((item: any) =>{
        files.push(item);
        urls.push(URL.createObjectURL(item));
      })
      setFiles(files);
      setFileUrls(urls)
    } else {
      setFiles([])
      setFileUrls([]);
    }
  }

  const listSelectedFiles = ()=>{
    return fileUrls.map( item =>{
      return(
        <Image key={item} src={item} alt="product Image" width={100} height={100} objectFit="contain" />
      )
    })
  }

  const getAllCategories = ()=>{
    let categories: string[] = [];
    products.forEach( item =>{
      categories = [...categories, ...item.categories]
    })
    const uniqueCategories = [...new Set(categories)];
    return uniqueCategories;
  }

  const listCategoryOptions = () => {
    let categories = getAllCategories();
    let filteredCategories = categories.filter(item => item.trim().toLocaleLowerCase().includes(categorySearch.trim().toLocaleLowerCase()))
    return filteredCategories?.map(item => {
      return (
        <li key={item} className={`text-base-content flex text-sm py-1 px-3 capitalize ${categoryIsChecked(item) && "bg-gray-200"}`} onClick={() => {
          addToCategory(item);
          setCategorySearch("")
        }}> {item} {categoryIsChecked(item) && <CheckCircleIcon className="ml-auto w-4 text-success"/>}</li>
      )
    })
  }

  const listCategories = ()=>{
    return formData.categories.map( item =>{
      return (
        <li key={item} className="mr-2 border inline-flex my-1 text-xs items-center rounded-xl px-2 py-1 text-base-content">{item} <XMarkIcon onClick={() => removeCategory(item)} className="w-4 ml-3 text-red-600 cursor-pointer" /></li>
      )
    })
  }

  const categoryIsChecked = (category: string)=>{
    
    return formData.categories.includes(category)
  }

  const removeCategory = (category: string) =>{

    let data = {...formData};
    data.categories = data.categories.filter( item => item !== category);
    console.log(data)
    setFormData(data);
  }

  const addToCategory = (newCategory: string)=>{
    if(newCategory.trim() === ""){
      return;
    }
    if(formData.categories.includes( newCategory.trim().toLowerCase())){
      return;
    }else{
      let data = {...formData};
      data.categories = [...data.categories, newCategory.trim().toLowerCase()];
      setFormData(data)
    }
  }
  

  const handleChange = (prop: any) => (event: any) =>{
    setFormData( prevState =>({
      ...prevState,
      [prop]: event.target.value
    }))
  }

  const listProductColors = ()=>{
    return formData.colors.map( item =>{
      return(
      <li key={item} className="flex items-start py-1">
        <div className=" w-8 h-8 rounded-full" style={{backgroundColor: item}}></div>
        <XMarkIcon className="text-error w-4" onClick={()=>removeProductColor(item)} />
      </li>
      )
    })
  }

  const removeProductColor = (color: string) =>{
    let data = {...formData};
    data.colors = data.colors.filter( item => item !== color);
    setFormData(data)
  }

  const postFile = async (filename: any, file: any) =>{
    const response = await fetch(
      `/api/upload?filename=${filename}`,
      {
        method: 'POST',
        body: file,
      },
    );
    const newBlob = await response.json();
    return newBlob.url
  }

  const postProduct = (data: Product)=>{
    const options = {
      url: `/api/products`,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: data
    }
    axios(options)
      .then(response => {
        console.log(response);
      }).catch(error =>{
        console.log(error)
      })

  }

  /* const postManyFiles = async(files: Blob[])=>{
    files.forEach( async(item: any) =>{
      let url = await postFile(item?.name, item)
      images.push(url)
    })
  } */

  const handleSubmit = async (event: any)=>{
    let data = {...formData}
    // validate data here
    try {
      event.preventDefault();
      let images = await Promise.all(files.map( async(item: any) =>{
        let url = await postFile(item?.name, item)
        return url
      }))
      data.images = images;
      postProduct(data)
    } catch (error) {
      console.log(error)
    }
  }





  return(
    <>
    <NavBar />

    <section className="bg-white text-base-content p-8 lg:px-16">
      <h3 className="text-3xl font-bold">Create Product</h3>

      <form className="my-5">
        <label className="form-control w-full max-w-lg mb-2">
          <div className="label">
            <span className="label-text text-xs font-semibold">Product Name</span>
          </div>
          <input type="text" value={formData?.name} onChange={handleChange("name")} className="input input-bordered w-full max-w-lg text-sm" />
        </label>

        <label className="form-control w-full max-w-lg mb-2">
          <div className="label">
            <span className="label-text text-xs font-semibold">Category</span>
          </div>
          <div className="flex items-center">
            <input type="text" value={categorySearch} onChange={(e)=> setCategorySearch(e.target.value)} className="input input-bordered w-full text-sm" placeholder="Type to Search for Category" />
            <button className="btn bg-primary text-white text-xs" onClick={(e)=>{
              e.preventDefault()
              addToCategory(categorySearch);
              setCategorySearch("")
              }}>Add</button>
          </div>
          <ul className=" block">{listCategories()}</ul>
          {categorySearch.length > 0 &&
          <ul  className="border w-full max-w-lg h-28 overflow-y-auto">
            {listCategoryOptions()}
          </ul>}
        </label>

        <label className="form-control w-full max-w-lg mb-0">
          <div className="label">
            <span className="label-text text-xs font-semibold">Product Colors</span>
          </div>
          <div className="flex items-center">
            <input type="color" value={productColor} onChange={(e)=>setProductColor(e.target.value)} className="input input-bordered w-full text-sm" />
            <button className="btn bg-primary text-white text-xs" onClick={(e)=>{
              e.preventDefault();
              if(productColor === ""){
                return;
              }
              if(formData.colors.includes(productColor)){
                return;
              }
              setFormData(prevState => ({
                ...prevState,
                colors: [...prevState.colors, productColor]
              }))
              setProductColor("")
              }
            }>Add</button>
          </div>
        </label>
        <ul className="flex items-center py-2 mb-4">
          {listProductColors()}
        </ul>

        <label className="form-control w-full max-w-lg mb-2">
          <div className="label">
            <span className="label-text text-xs font-semibold">Product Images</span>
          </div>
          <div className="flex items-center">
            <input ref={inputFileRef} accept="image/*" multiple className="input input-bordered w-full text-sm  h-12" onChange={createFileUrl} type="file" id="imageUpload" name="imageUpload"></input>
            {/* <button className="btn bg-primary text-white text-xs" onClick={(e)=>{
              e.preventDefault();
              console.log(fileUrls)
            }}>Add</button> */}
          </div>
        </label>
        <div className="flex items-center gap-4 mt-3 mb-4">
            {listSelectedFiles()}
        </div>

        <label className="form-control w-full max-w-lg mb-2">
          <div className="label">
            <span className="label-text text-xs font-semibold">Product Price</span>
          </div>
          <input type="text" value={formData?.price} onChange={handleChange("price")} className="input input-bordered w-full max-w-lg text-sm" />
        </label>

        <label className="form-control w-full max-w-lg mb-2">
          <div className="label">
            <span className="label-text text-xs font-semibold">Discount</span>
          </div>
          <input type="text" value={formData?.discount} onChange={handleChange("discount")} className="input input-bordered w-full max-w-lg text-sm" placeholder="20%" />
        </label>

        <label className="form-control w-full max-w-lg mb-2">
          <div className="label">
            <span className="label-text text-xs font-semibold">Description</span>
          </div>
          <textarea value={formData?.description} onChange={handleChange("description")} className="textarea textarea-bordered text-sm" rows={3}></textarea>
        </label>

        <label className="form-control w-full max-w-lg mb-2">
          <div className="label">
            <span className="label-text text-xs font-semibold">Additional Information</span>
          </div>
          <textarea value={formData?.additionalInformation} onChange={handleChange("additionalInformation")} className="textarea textarea-bordered text-sm" rows={2}></textarea>
        </label>

        <button type="button" className="btn bg-slate-800 text-white px-11 mt-8" onClick={handleSubmit}>Upload Product</button>
      </form>
    </section>
  </>
  )
}

export default CreateProductForm