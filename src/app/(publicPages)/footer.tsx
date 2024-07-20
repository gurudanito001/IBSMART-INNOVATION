import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const Footer = ()=>{

  return(
    <section className="text-white py-8 lg:py-12 bg-primary">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 px-5 lg:px-28 border-t py-8">
        <div>
          <h6 className="text-sm font-semibold mb-5">Contact Us</h6>
          <article className="flex items-start mb-4">
            <MapPinIcon className="w-5 text-white" />
            <p className="text-xs ml-4">
            No.2 Pepple street, <br />
            Mq plaza before Zenith Bank, Ikeja
            </p>
          </article>
          <article className="flex items-start">
            <EnvelopeIcon className="w-5 text-white" />
            <p className="text-xs ml-4">
            ibsmartinnovation1@gmail.com
            </p>
          </article>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h6 className="text-sm font-semibold mb-5">Company</h6>
            <ul className="text-xs flex flex-col gap-2">
              <li>About Us</li>
              <li>How It Works</li>
              <li>Reviews</li>
              <li>FAQ’s</li>
            </ul>
          </div>

          <div>
            <h6 className="text-sm font-semibold mb-5">Support</h6>
            <ul className="text-xs flex flex-col gap-2">
              <li>Privacy Policy</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <div className="flex items-start gap-6">
          <Link href="https://www.instagram.com/ibsmartinnovation/"><Image src="/images/instagram.svg" width={40} height={40} alt="Instagram Icon" className="ml-auto" /></Link>
          <Link href="https://web.facebook.com/profile.php?id=61556284827504"><Image src="/images/facebook.svg" width={40} height={40} alt="Facebook Icon" /></Link>
          <Link href="https://x.com/IbsmartInnovate"><Image src="/images/x.svg" width={40} height={40} alt="X Icon" /></Link>

          
        </div>
      </div>

      <p className="text-center mx-5 lg:mx-28 border-t pt-8 text-sm lg:text-lg">
        Copyright © 2024 IBSMART INNOVATION. All rights reserved.
      </p>

    </section>
  )
}

export default Footer