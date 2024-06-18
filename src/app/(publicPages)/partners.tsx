import Image from "next/image"


const Partners = () =>{

  return(
    <section className="bg-white py-20 px-5 lg:px-20">
      <h6 className="text-center text-primary font-bold md:mb-4">Quales is Trusted By:</h6>
      <div className="grid grid-cols-4 md:grid-cols-7 lg:gap-8 items-center">
          <li>
            <Image
              src={`/images/coursera-logo.png`}
              className="px-4"
              style={{ height: "auto", objectFit: "contain" }}
              alt="Product Image"
              width={300}
              height={300}
            />
          </li>
          <li>
            <Image
              src={`/images/abinbev-logo.png`}
              className="px-4"
              style={{ height: "auto", objectFit: "contain" }}
              alt="Product Image"
              width={300}
              height={100}
            />
          </li>
          <li>
            <Image
              src={`/images/mars-logo.png`}
              className="px-4"
              style={{ height: "auto", objectFit: "contain" }}
              alt="Product Image"
              width={300}
              height={100}
            />
          </li>
          <li>
            <Image
              src={`/images/zone-logo.png`}
              className="px-4"
              style={{ height: "auto", objectFit: "contain" }}
              alt="Product Image"
              width={300}
              height={100}
            />
          </li>
          <li>
            <Image
              src={`/images/qcore-logo.png`}
              className="px-4"
              style={{ height: "auto", objectFit: "contain" }}
              alt="Product Image"
              width={300}
              height={100}
            />
          </li>
          <li>
            <Image
              src={`/images/signature-bank-logo.png`}
              className="px-4"
              style={{ height: "auto", objectFit: "contain" }}
              alt="Product Image"
              width={300}
              height={100}
            />
          </li>
          <li>
            <Image
              src={`/images/riby-logo.png`}
              className="px-4"
              style={{ height: "auto", objectFit: "contain" }}
              alt="Product Image"
              width={300}
              height={100}
            />
          </li>
      </div>
      
    </section>
  )
}

export default Partners