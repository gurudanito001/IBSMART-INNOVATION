import Image from "next/image";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";


const NavBar = () => {

  return (
    <nav className="navbar bg-base text-gray-900 px-3 lg:px-12 sticky top-0 shadow-sm z-50">
      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-3">
        <Image src="/images/ibsmart2.jpeg" className="rounded-full" alt="IBSMART LOGO" width={50} height={50}/>
        <span className="font-bold"> IBSMART</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>About Us</a></li>
          <li>
            <details>
              <summary>Products</summary>
              <ul className="p-2 bg-white min-w-40 rounded-none">
                <li><a className="text-xs">New</a></li>
                <li><a className="text-xs">Used</a></li>
              </ul>
            </details>
          </li>
          <li><a>Social Media</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="indicator mx-5 mt-2 cursor-pointer">
          <span className="indicator-item badge border-secondary bg-secondary text-xs rounded-2xl text-white">12</span>
          <ShoppingCartIcon className="w-6" />
        </div>
        <a className="btn bg-white border-gray-950 text-gray-950 hover:text-white text-sm rounded-none w-28 ml-5 hover:bg-gray-950 hidden md:inline-flex">Buy Now</a>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;