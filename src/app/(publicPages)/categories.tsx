

const Categories = ()=>{
  return(
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 lg:gap-10 mt-20 lg:mt-32 px-5 md:px-6 xl:px-32">
      <div className="h-96 bg-[url('/images/zflip-mobile-nobg.png')] bg-no-repeat bg-contain bg-right border rounded-lg bg-primary">
        <h3 className="text-white font-semibold text-xl md:text-2xl p-3 lg:p-6"> Phones</h3>
      </div>
      <div className="h-96 bg-[url('/images/tablet-desktop-nobg.png')] bg-no-repeat bg-contain bg-right border rounded-lg bg-primary">
        <h3 className="text-white font-semibold text-xl md:text-2xl p-3 lg:p-6"> Tablets</h3>
      </div>
      <div className="h-96 bg-[url('/images/macbook-mobile-nobg.png')] bg-no-repeat bg-contain bg-right border rounded-lg bg-primary">
        <h3 className="text-white font-semibold text-xl md:text-2xl p-3 lg:p-6"> Laptops</h3>
      </div>
      <div className="h-96 bg-[url('/images/airpods-pro-nobg.png')] bg-no-repeat bg-contain bg-right border rounded-lg bg-primary">
        <h3 className="text-white font-semibold text-xl md:text-2xl p-3 lg:p-6">Accessories</h3>
      </div>
    </section>
  )
}

export default Categories;