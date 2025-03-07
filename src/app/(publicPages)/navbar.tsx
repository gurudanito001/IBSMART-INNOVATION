"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ShoppingCartIcon, Bars3BottomRightIcon, XMarkIcon, MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import formatAsCurrency from "../lib/formatAsCurrency";




const NavBar = () => {
  const router = useRouter();


  const getCartData = () => {
    if(typeof window === "undefined"){
      return [];
    }
    let cart = localStorage.getItem("cartProducts");
    let cartProducts: any = []
    if (cart) {
      cart = JSON.parse(cart)
      cartProducts = cart
    }
    return cartProducts
  }

  const decreaseQuantity = (productId: string) => {
    if(typeof window === "undefined"){
      return;
    }
    let cartData = getCartData();
    cartData.forEach((item: any) => {
      if (item?.id === productId && item?.quantity > 1) {
        item.quantity -= 1
      }
    })
    localStorage.setItem("cartProducts", JSON.stringify(cartData))
    router.refresh();
  }
  const increaseQuantity = (productId: string) => {
    if(typeof window === "undefined"){
      return;
    }
    let cartData = getCartData();
    cartData.forEach((item: any) => {
      if (item?.id === productId) {
        item.quantity += 1
      }
    })
    localStorage.setItem("cartProducts", JSON.stringify(cartData))
    router.refresh();
  }

  const removeFromCart = (productId: string)=>{
    if(typeof window === "undefined"){
      return;
    }
    let cartData = getCartData();
    cartData = cartData.filter( (item: any) => item.id !== productId)
    localStorage.setItem("cartProducts", JSON.stringify(cartData))
    router.refresh();
  }

  const getTotalAmount = () =>{
    if(typeof window === "undefined"){
      return 0;
    }
    let cartData = getCartData();
    let total = 0
    cartData.forEach( (item: any) =>{
      total += (parseInt(item?.price) * parseInt(item?.quantity))
    })
    return total;
  }

  const generateCheckoutMessage = ()=>{
    let cartData = getCartData();
    let message = `> I want to buy: `
    cartData.forEach( (item: any, index: number) =>{
      message += `*${item?.quantity}* unit(s) of *${item?.name}*,`
    })

    return message
  }



  return (
    <nav className="navbar bg-base text-gray-900 px-3 lg:px-12 sticky top-0 shadow-sm z-50">
      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/ibsmart2.jpeg" className="rounded-full" alt="IBSMART LOGO" width={50} height={50} />
          <span className="font-bold text-xs"> IBSMART <br/> INNOVATION</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/blog/introduction-to-ibsmart-innovation">About Us</Link></li>
          <li className="px-5"><Link href="/blog">Blog</Link></li>
          <li className="dropdown dropdown-hover flex flex-col">
            <a tabIndex={0} role="button" className="">Products</a>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-screen lg:-ml-45vw xl:-ml-46.5vw p-2 shadow mt-12">
              
              <section className="grid grid-cols-1 sm:grid-cols-4 gap-3 md:gap-6 px-5 md:px-6">
                <div className="h-60 bg-[url('/images/zflip-mobile-nobg.png')] bg-no-repeat bg-contain bg-center border rounded-lg bg-primary">
                </div>
                <div className="h-60 bg-[url('/images/tablet-desktop-nobg.png')] bg-no-repeat bg-contain bg-center border rounded-lg bg-primary">
                </div>
                <div className="h-60 bg-[url('/images/macbook-mobile-nobg.png')] bg-no-repeat bg-contain bg-center border rounded-lg bg-primary">
                </div>
                <div className="h-60 bg-[url('/images/airpods-pro-nobg.png')] bg-no-repeat bg-contain bg-center border rounded-lg bg-primary">
                </div>
              </section>
            </ul>
          </li>
          <li><a>Social Media</a></li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="drawer drawer-end w-16">
          <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
          <label htmlFor="cart-drawer" className="indicator mx-3 cursor-pointer drawer-content z-10" suppressHydrationWarning={true}>
            {getCartData().length ? <span className="indicator-item badge border-secondary bg-secondary text-xs rounded-2xl text-white">{getCartData().length}</span> : ""}
            <ShoppingCartIcon className="w-6" />
          </label>

          <div className="drawer-side z-50">
            <label htmlFor="cart-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <div className="menu w-[375px] min-h-full bg-base-200 text-base-content">
              <header className="flex items-center p-4">
                <h4 className="font-bold ">Cart ({getCartData().length} Item{getCartData().length > 1 ? "s" : ""})</h4>
                <label htmlFor="cart-drawer" className="btn btn-circle bg-transparent btn-sm ml-auto"> <XMarkIcon className="w-4" /></label>
              </header>

              <section className="grow h-full flex flex-col">
                {getCartData().length === 0 &&
                  <div className="flex flex-col items-center mt-10">
                    <ShoppingCartIcon className="w-14" />
                    <h6 className="font-bold">Your Cart is empty</h6>
                    <p>Explore our list of products and add to cart </p>
                    <a href="#products" onClick={()=>document.getElementById("cart-drawer")?.click()} className="btn bg-white border-gray-950 text-gray-950 hover:text-white hover:bg-gray-950 text-sm rounded-none mt-14 w-40 flex items-center">
                      View Products
                    </a>
                  </div>
                }

                {getCartData().length > 0 &&
                  <section className="mt-4 flex flex-col">
                    {getCartData().map((item: any) => {
                      return (
                        <div key={item?.name} className="flex items-center hover:bg-gray-300 px-3">
                          <figure>
                            <Image
                              alt={`${item?.name} image`}
                              src={`${item?.images[0].includes("public.blob.vercel") ? item?.images[0] : `/images/${item?.images[0]}`}`}
                              style={{ height: "70px", width: "auto", objectFit: "contain" }}
                              width={70}
                              height={70} />
                          </figure>
                          <div className="flex flex-col ml-3 w-full">
                            <p className="font-bold">{item?.name}</p>
                            <div className="flex items-center">
                              <span className="text-xs font-semibold">₦{formatAsCurrency(item?.price)}</span>
                              <div className="flex items-center mx-auto">
                                <button onClick={() => decreaseQuantity(item?.id)} className="btn btn-circle btn-xs ml-auto"> <MinusIcon className="w-4" /></button>
                                <span className="px-3">{item?.quantity}pc</span>
                                <button onClick={() => increaseQuantity(item?.id)} className="btn btn-circle btn-xs mr-auto"> <PlusIcon className="w-4" /></button>
                              </div>
                            </div>
                          </div>
                          <span>
                            <button onClick={() => removeFromCart(item?.id)} className="btn btn-circle bg-gray- btn-sm mr-auto"> <TrashIcon className="w-4 text-red-700" /></button>
                          </span>
                        </div>
                      )
                    })}
                  </section>
                }
              </section>
              <section className="">
                  {/* <div className="flex items-center border-t border-b py-1">
                    <span className="font-semibold">Subtotal:</span>
                    <span className="text-lg font-bold ml-auto">₦{formatAsCurrency(getTotalAmount())}</span>
                  </div> */}
                  <a style={{pointerEvents: getCartData().length === 0 ? "none" : "all"}} href={`https://wa.me/2349159859599?text=${generateCheckoutMessage()}`} target="_blank" className="btn btn-lg border-gray-900 text-white bg-gray-900 hover:bg-gray-950 text-sm rounded-none mt-3 w-full flex items-center">
                    Checkout <div className="p-2 ml-auto"> ₦{formatAsCurrency(getTotalAmount())} </div>
                  </a>
                </section>
            </div>
          </div>
        </div>


        {/* <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost px-3 lg:hidden">
            <Bars3BottomRightIcon className="w-5" />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a className="py-3 text-xs">About Us</a></li>
            <li><a className="py-3 text-xs" href="#products">Products</a></li>
            <li><a className="py-3 text-xs">Social Media</a></li>
          </ul>
        </div> */}
        <div className="dropdown dropdown-end lg:hidden z-10">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost px-3">
                
                  <Bars3BottomRightIcon className="w-5" />
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu min-h-full w-full max-w-md px-0 py-0 bg-white text-primary">
                {/* Sidebar content here */}
                <li className="h-16 m-0 flex">
                  <Link href="/" className="flex items-center gap-3">
                    <Image src="/images/ibsmart2.jpeg" className="rounded-full" alt="IBSMART LOGO" width={50} height={50} />
                    <span className="font-bold text-xs"> IBSMART <br /> INNOVATION</span>
                  </Link>
                  <label htmlFor="my-drawer-4" aria-label="close sidebar" className="inline-block ml-auto my-auto">
                    <XMarkIcon className="w-6 text-primary p-0" />
                  </label>
                </li>

                <li className="px-5"><Link href="/blog/introduction-to-ibsmart-innovation">About Us</Link></li>
                <li className="px-5"><Link href="/blog">Blog</Link></li>
                <li className="px-5 text-lg font-semibold">
                  <details open>
                    <summary>Products</summary>
                    <ul>
                      <li className="text-sm font-medium"><a>Laptops</a></li>
                      <li className="text-sm font-medium"><a>Phones</a></li>
                      <li className="text-sm font-medium"><a>Tablets</a></li>
                      <li className="text-sm font-medium"><a>Accessories</a></li>
                    </ul>
                  </details>
                </li>
                <li className="px-5 text-lg font-semibold"><a className="py-3">Social Media</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;