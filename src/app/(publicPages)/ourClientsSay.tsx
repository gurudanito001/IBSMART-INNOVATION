import Image from "next/image"


const OurClientsSay = () => {

  return (
    <section className="bg-white px-5 xl:px-28">
      <header className="flex">
        <h3 className="text-lg md:text-xl mx-auto font-semibold bg-gradient-to-r max-w-550 from-slate-800 to-indigo-700 inline text-transparent bg-clip-text py-10">What our Clients Say About Us</h3>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className=" flex flex-col items-center">
          <div className="w-64 md:w-60 xl:w-80 h-full flex flex-col items-center bg-white p-4 xl:p-12 rounded-3xl mb-5 shadow-md">
          <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. Sed eget malesuada enim. Aliquam vitae mi nec nibh interdum commodo eu vitae quam. Ut purus sem, porta et eros vitae, placerat ornare augue. Nullam non ipsum libero. 
          </p>
          <h5 className="text-primary mt-4 text-center font-semibold">Client Representative</h5>
          <h6 className="text-primary mt-1 text-center text-xs">Representative Role</h6>
            <span className="w-20 h-20 md:w-28 md:h-28 flex items-center bg-neutral rounded-full mt-5">
            </span>
          </div>
        </div>

        <div className=" flex flex-col items-center">
          <div className=" w-64 md:w-60 xl:w-80 h-full flex flex-col items-center bg-white p-4 xl:p-12 rounded-3xl mb-5 shadow-md">
          <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. Sed eget malesuada enim. Aliquam vitae mi nec nibh interdum commodo eu vitae quam. Ut purus sem, porta et eros vitae, placerat ornare augue. Nullam non ipsum libero. 
          </p>
          <h5 className="text-primary mt-4 text-center font-semibold">Client Representative</h5>
          <h6 className="text-primary mt-1 text-center text-xs">Representative Role</h6>
            <span className="w-20 h-20 md:w-28 md:h-28 flex items-center bg-neutral rounded-full mt-5">
            </span>
          </div>
        </div>

        <div className=" flex flex-col items-center">
          <div className=" w-64 md:w-60 xl:w-80 h-full flex flex-col items-center bg-white p-4 xl:p-12 rounded-3xl mb-5 shadow-md">
          <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. Sed eget malesuada enim. Aliquam vitae mi nec nibh interdum commodo eu vitae quam. Ut purus sem, porta et eros vitae, placerat ornare augue. Nullam non ipsum libero. 
          </p>
          <h5 className="text-primary mt-4 text-center font-semibold">Client Representative</h5>
          <h6 className="text-primary mt-1 text-center text-xs">Representative Role</h6>
            <span className="w-20 h-20 md:w-28 md:h-28 flex items-center bg-neutral rounded-full mt-5">
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default OurClientsSay