import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/solid";


const TalentNetwork = ()=>{

  return(
    <section className=" bg-white px-5 lg:px-28 py-28 grid grid-cols-1 md:grid-cols-2 ">
      
      <div className="grid grid-cols-2 mb-5 md:mb-0 gap-5">


        <div className="flex flex-col mb-5 items-end ">
          <header className=" w-40 h-16 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-40 h-32 shadow-md border border-gray-200 rounded-lg">
            <article className=" flex flex-col items-center relative -mt-8">
              <span className=" rounded-full h-16 w-16 bg-gray-200 flex items-center content-center mb-3">
                <UserIcon className="text-gray-500 w-10 mx-auto" />
              </span>
              <h6 className="text-primary">TALENT NAME</h6>
              <div className="flex items-center"> 
                <Image src="/images/codeIcon.png" width={15} height={15} objectFit="contain" alt="Code Icon"/>
                <span className="text-primary text-xs font-light ml-1">Software Developer</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-start">
          <header className=" w-40 h-16 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-40 h-32 shadow-md border border-gray-200 rounded-lg">
            <article className=" flex flex-col items-center relative -mt-8">
              <span className=" rounded-full h-16 w-16 bg-gray-200 flex items-center content-center mb-3">
                <UserIcon className="text-gray-500 w-10 mx-auto" />
              </span>
              <h6 className="text-primary">TALENT NAME</h6>
              <div className="flex items-center"> 
                <Image src="/images/codeIcon.png" width={15} height={15} objectFit="contain" alt="Code Icon"/>
                <span className="text-primary text-xs font-light ml-1">Software Developer</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-end">
          <header className=" w-40 h-16 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-40 h-32 shadow-md border border-gray-200 rounded-lg">
            <article className=" flex flex-col items-center relative -mt-8">
              <span className=" rounded-full h-16 w-16 bg-gray-200 flex items-center content-center mb-3">
                <UserIcon className="text-gray-500 w-10 mx-auto" />
              </span>
              <h6 className="text-primary">TALENT NAME</h6>
              <div className="flex items-center"> 
                <Image src="/images/codeIcon.png" width={15} height={15} objectFit="contain" alt="Code Icon"/>
                <span className="text-primary text-xs font-light ml-1">Software Developer</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-start ">
          <header className=" w-40 h-16 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-40 h-32 shadow-md border border-gray-200 rounded-lg">
            <article className=" flex flex-col items-center relative -mt-8">
              <span className=" rounded-full h-16 w-16 bg-gray-200 flex items-center content-center mb-3">
                <UserIcon className="text-gray-500 w-10 mx-auto" />
              </span>
              <h6 className="text-primary">TALENT NAME</h6>
              <div className="flex items-center"> 
                <Image src="/images/codeIcon.png" width={15} height={15} objectFit="contain" alt="Code Icon"/>
                <span className="text-primary text-xs font-light ml-1">Software Developer</span>
              </div>
            </article>
          </div>
        </div>

      </div>

      <article className="text-base-content flex flex-col">
        <header className="mt-auto">
          <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r max-w-550 from-slate-800 to-indigo-700 inline text-transparent bg-clip-text ">Talents Within our Network</h3>
        </header>
        
        <p className="text-primary max-w-600 mt-6 text-sm lg:text-lg">
          Our network boasts a diverse group of highly skilled professionals specializing in QA Engineering, Scrum Mastery, Data Science, and Software Development. Each talent is meticulously vetted and trained to ensure they bring unparalleled expertise and value to your organization. Discover the power of a workforce dedicated to excellence and innovation.
        </p>
        <button className="btn bg-primary text-white text-xs md:text-sm rounded-full w-48 mt-8 mb-auto">Explore Talents</button>
      </article>
    </section>
  )
}

export default TalentNetwork