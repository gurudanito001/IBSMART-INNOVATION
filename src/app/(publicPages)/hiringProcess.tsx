
import Image from "next/image"

const HiringProcess =()=>{

  return(
    <section className="py-14 bg-neutral px-5 xl:px-28">
      <h3 className="text-center text-xl font-semibold mb-3 text-primary">Our Hiring Process</h3>
      <p className="text-xs md:text-sm text-center text-primary">We have gone full circle so you can get to your needs in a simple, straight line</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 mt-12 md:mt-20 gap-5">
        <div className=" flex flex-col items-center md:px-5">
          <div className="w-44 sm:w-56 ml-auto xl:w-64 h-full flex flex-col items-center bg-base p-4 xl:p-12 rounded-3xl mb-5 shadow">
            <span className="w-20 h-20 md:w-28 md:h-28 flex items-center bg-white rounded-full">
              <Image src="/images/calendar-icon.png" className="mx-auto w-10 h-10 md:w-14 md:h-14" width={50} height={50} objectFit="contain" alt="Calendar Icon" />
            </span>
            <Image className="relative -mr-96 -ml-20 hidden lg:block" src="/images/arrowIcon.png" alt="Arrow Icon" width={30} height={15} />
            <h6 className="text-primary mt-4 text-center font-semibold">Schedule Meeting</h6>
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">Book a consultation to discuss your specific needs and project requirements.</p>
          </div>
        </div>

        <div className=" flex flex-col items-center md:px-5">
          <div className="w-44 sm:w-56 mr-auto lg:mx-auto xl:w-64 h-full flex flex-col items-center bg-base p-4 xl:p-12 rounded-3xl mb-5 shadow">
            <span className="w-20 h-20 md:w-28 md:h-28 flex items-center bg-white rounded-full">
              <Image src="/images/list-icon.png" className="mx-auto w-10 h-10 md:w-14 md:h-14" width={50} height={50} objectFit="contain" alt="Calendar Icon" />
            </span>
            <Image className="relative -mr-96 -ml-20 hidden lg:block" src="/images/arrowIcon.png" alt="Arrow Icon" width={30} height={15} />
            <h6 className="text-primary mt-4 text-center font-semibold">Confirm Talents</h6>
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">Review and select from our pool of pre-vetted, highly skilled professionals.</p>
          </div>
        </div>

        <div className=" flex flex-col items-center md:px-5">
          <div className="w-44 sm:w-56 ml-auto lg:mx-auto xl:w-64 h-full flex flex-col items-center bg-base p-4 xl:p-12 rounded-3xl mb-5 shadow">
            <span className="w-20 h-20 md:w-28 md:h-28 flex items-center bg-white rounded-full">
              <Image src="/images/suitcase-icon.png" className="mx-auto w-10 h-10 md:w-14 md:h-14" width={50} height={50} objectFit="contain" alt="Calendar Icon" />
            </span>
            <Image className="relative -mr-96 -ml-20 hidden lg:block" src="/images/arrowIcon.png" alt="Arrow Icon" width={30} height={15} />
            <h6 className="text-primary mt-4 text-center font-semibold">Sign Contract</h6>
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">Formalize your partnership with a clear and comprehensive contract.</p>
          </div>
        </div>

        <div className=" flex flex-col items-center md:px-5">
          <div className="w-44 sm:w-56 mr-auto xl:w-64 h-full flex flex-col items-center bg-base p-4 xl:p-12 rounded-3xl mb-5 shadow">
            <span className="w-20 h-20 md:w-28 md:h-28 flex items-center bg-white rounded-full">
              <Image src="/images/calendar-icon.png" className="mx-auto w-10 h-10 md:w-14 md:h-14" width={50} height={50} objectFit="contain" alt="Calendar Icon" />
            </span>
            <Image className="relative invisible -mr-96 -ml-6" src="/images/arrowIcon.png" alt="Arrow Icon" width={30} height={15} />
            <h6 className="text-primary mt-4 text-center font-semibold">Talent Resume</h6>
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">Your chosen talent starts working on your project, bringing immediate value and expertise.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HiringProcess