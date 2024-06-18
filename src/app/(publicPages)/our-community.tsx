import Image from "next/image"


const OurCommunity = ()=>{

  return(
    <section className=" bg-neutral px-5 lg:px-28 py-28 flex flex-col-reverse md:flex-row items-center">
      <article className="text-base-content md:w-1/2">
        <header >
          <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r max-w-550 from-slate-800 to-indigo-700 inline text-transparent bg-clip-text ">Leverage our Community <br /> of Top Technology Mavericks</h3>
        </header>
        
        <p className="text-primary max-w-600 mt-6 text-sm lg:text-lg">
        Unlock the potential of your projects with our elite network of tech experts. Our community of top-tier QA engineers and Scrum Masters is ready to drive innovation and deliver exceptional results. Partner with us to elevate your technology initiatives to the next level.
        </p>
        <button className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 md:ml-auto mt-8">Quales Academy</button>
      </article>
      <figure className=" md:w-1/2 mb-10 md:mb-0">
        <Image
          src={`/images/leverage-section-image.png`}
          className="w-100"
          style={{ height: "auto", objectFit: "contain" }}
          alt="Product Image"
          width={700}
          height={700}
        />
      </figure>
    </section>
  )
}

export default OurCommunity