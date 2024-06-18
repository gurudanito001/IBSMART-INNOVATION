


const LatestArticles = () => {

  return (
    <section className="bg-white px-5 xl:px-28 pt-10 mb-20">
      <header>
        <h5 className="text-primary font-semibold mb-8">Read our Latest Articles</h5>
      </header>
      <div className="flex flex-col gap-3">
        <div className="collapse bg-white rounded-xl">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-primary text-md font-semibold rounded-xl border shadow-md">
            lorem ipsum
          </div>
          <div className="collapse-content text-primary bg-gray-100">
            <p className="p-3">hello</p>
          </div>
        </div>

        <div className="collapse bg-white rounded-xl">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-primary text-md font-semibold rounded-xl border shadow-md">
            lorem ipsum
          </div>
          <div className="collapse-content text-primary bg-gray-100">
            <p className="p-3">hello</p>
          </div>
        </div>

        <div className="collapse bg-white rounded-xl">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-primary text-md font-semibold rounded-xl border shadow-md">
            lorem ipsum
          </div>
          <div className="collapse-content text-primary bg-gray-100">
            <p className="p-3">hello</p>
          </div>
        </div>

        <div className="collapse bg-white rounded-xl">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-primary text-md font-semibold rounded-xl border shadow-md">
            lorem ipsum
          </div>
          <div className="collapse-content text-primary bg-gray-100">
            <p className="p-3">hello</p>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default LatestArticles