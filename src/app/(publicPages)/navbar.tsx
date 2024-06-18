"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ShoppingCartIcon, Bars3BottomRightIcon, XMarkIcon, MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import formatAsCurrency from "../lib/formatAsCurrency";




const NavBar = () => {
  const router = useRouter();


  return (
    <nav className="navbar bg-white text-primary px-3 lg:px-28 sticky top-0 shadow-sm z-50">
      <div className="navbar-start w-auto">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.png" className="" alt="IBSMART LOGO" width={50} height={50} />
        </Link>
      </div>

      <div className="navbar-end w-auto ml-auto">
        <ul className="menu menu-horizontal px-1 hidden md:flex gap-8">
          <li><a>Quales Academy</a></li>
          <li><a>Use Cases</a></li>
          <li><a>Thought Leadership</a></li>
          <li><a>About Us</a></li>
        </ul>

        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost px-3 lg:hidden">
            <Bars3BottomRightIcon className="w-5" />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a className="py-3 text-xs">About Us</a></li>
            <li><a className="py-3 text-xs" href="#products">Products</a></li>
            <li><a className="py-3 text-xs">Social Media</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;