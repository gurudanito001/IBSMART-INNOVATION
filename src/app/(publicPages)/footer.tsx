import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Footer = ()=>{

  return(
    <section className="text-white py-8 lg:py-12 bg-primary">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 px-5 lg:px-28 border-t py-8">
        <div>
          <h6 className="text-sm font-semibold mb-5">Contact Us</h6>
          <article className="flex items-start mb-4">
            <MapPinIcon className="w-5 text-white" />
            <p className="text-xs ml-4">
              No. 35, Kola Amodu Cres, Magodo, Lagos <br/>
              8 The Green STE A Dover, DE 19901, USA
            </p>
          </article>
          <article className="flex items-start">
            <EnvelopeIcon className="w-5 text-white" />
            <p className="text-xs ml-4">
              info@quales.tech
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
          <Image src="/images/instagram-icon.png" width={40} height={40} alt="Instagram Icon" className="ml-auto" />
          <Image src="/images/linkedIn-icon.png" width={40} height={40} alt="Instagram Icon" />
          <Image src="/images/facebook-icon.png" width={40} height={40} alt="Instagram Icon" />
          <Image src="/images/x-icon.png" width={40} height={40} alt="Instagram Icon" />
          <Image src="/images/thread-icon.png" width={35} height={35} alt="Instagram Icon" className="mr-auto lg:mr-0" />
        </div>
      </div>

      <p className="text-center mx-5 lg:mx-28 border-t pt-8 text-sm lg:text-lg">
        Copyright © 2024 Quales Consulting. All rights reserved.
      </p>

    </section>
  )
}

export default Footer