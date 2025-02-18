"use client"

import NavBar from "../../navbar";
import Footer from "../../footer";
import useAnalytics from '@/app/hooks/useAnalytics'
import Image from "next/image";


export default function Page() {
  useAnalytics();
  return (
    <main className="bg-white text-black flex flex-col">
      <NavBar />
      <article className=" w-full max-w-screen-lg px-5 md:px-12 mx-auto my-14 text-lg">
        <h1 className="font-semibold text-2xl md:text-4xl mb-5">Popular laptops and their series </h1>
        
        <p>
        In this article, we want to know all the different series of the most popular laptop brands and see the target consumers for each of them.
        By the end of this article, you will be better informed on which laptop best suits your needs or is best suited for your work environment.
        </p>

        <h4 className="text-3xl mt-10 mb-7 font-bold">Dell</h4>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/dell-inspiron.avif" alt="Dell Inspiron" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Dell Inspiron
              </h2>
              <p className="text-sm">Aimed at general consumers, offering a range of performance and price options</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-2" src="/images/dell-xps.avif" alt="Dell XPS" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Dell XPS
              </h2>
              <p className="text-sm">Premium laptops known for their high build quality and performance, often targeting professionals and creatives.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-2" src="/images/dell-lattitude.avif" alt="Dell Latitude" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Dell Latitude
              </h2>
              <p className="text-sm">Designed for business use, featuring durability and security features.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-2" src="/images/dell-vostro.avif" alt="Dell Vostro" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Dell Vostro
              </h2>
              <p className="text-sm">Targeted at small businesses, offering a balance of performance and affordability.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/dell-alienware.png" alt="Dell Alienware" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Dell Alienware
              </h2>
              <p className="text-sm">High-performance gaming laptops with distinctive design and powerful hardware.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/dell-G-series.avif" alt="Dell G Series" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Dell G Series
              </h2>
              <p className="text-sm">A more budget-friendly gaming option compared to Alienware.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/dell-precision.avif" alt="Dell Precision" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Dell Precision
              </h2>
              <p className="text-sm">Workstation laptops designed for professionals in fields like engineering, architecture, and graphic design.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/dell-chromebook.avif" alt="Dell Chromebook" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Dell Chromebook
              </h2>
              <p className="text-sm">Dell&apos;s range of Chromebooks for educational and general use, running Chrome OS.</p>
            </div>
          </li>
        </ul>



        <h4 className="text-3xl mt-20 mb-7 font-bold">Lenovo</h4>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/lenovo-thinkpad.avif" alt="Lenovo Thinkpad" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Lenovo Thinkpad
              </h2>
              <p className="text-sm">Renowned for its durability and business features, this series is popular among professionals.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/lenovo-ideapad.webp" alt="Lenovo IdeaPad" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Lenovo IdeaPad
              </h2>
              <p className="text-sm">Targeted at everyday consumers, offering a range of performance and price options.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/lenovo-yoga.avif" alt="Lenovo Yoga" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Lenovo Yoga
              </h2>
              <p className="text-sm">2-in-1 convertible laptops that can be used as both a laptop and a tablet, known for their flexibility.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/lenovo-legion.webp" alt="Lenovo Legion" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Lenovo Legion
              </h2>
              <p className="text-sm">Gaming laptops designed for performance and immersive gaming experiences.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/lenovo-flex.avif" alt="Lenovo Flex" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Lenovo Flex
              </h2>
              <p className="text-sm">Similar to Yoga, these are convertible laptops that focus on versatility.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/lenovo-thinkbook.avif" alt="Lenovo ThinkBook" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Lenovo ThinkBook
              </h2>
              <p className="text-sm">Aimed at small to medium-sized businesses, combining modern design with business features.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/lenovo-chromebook.avif" alt="Lenovo Chromebook" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Lenovo Chromebook
              </h2>
              <p className="text-sm">Renowned for its durability and business features, this series is popular among professionals.</p>
            </div>
          </li>

        </ul>


        <h4 className="text-3xl mt-20 mb-7 font-bold">HP</h4>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/hp-pavilion.png" alt="HP Pavilion" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                HP Pavilion
              </h2>
              <p className="text-sm">Targeted at everyday consumers, balancing performance and affordability for general use.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/hp-envy.png" alt="HP Envy" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title">
                HP Envy
              </h2>
              <p className="text-sm">Premium laptops known for their design and performance, aimed at creatives and professionals.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/hp-spectre.png" alt="HP Spectre" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                HP Spectre
              </h2>
              <p className="text-sm">High-end ultrabooks with premium materials and features, designed for style and portability.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/hp-elitebook.png" alt="HP Elite" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                HP Elite
              </h2>
              <p className="text-sm">Business-focused laptops that emphasize security, performance, and durability.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/hp-probook.png" alt="HP ProBook" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                HP ProBook
              </h2>
              <p className="text-sm">Aimed at small to medium-sized businesses, offering a mix of performance and value.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32 pt-4">
              <Image className="mr-auto ml-5" src="/images/hp-omen.png" alt="HP Omen" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                HP Omen
              </h2>
              <p className="text-sm">Gaming laptops designed for high performance and gaming experiences.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/hp-stream.jpg" alt="HP Stream" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                HP Stream
              </h2>
              <p className="text-sm">Budget-friendly laptops designed for basic tasks and educational use, often running Windows 10 S.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/hp-chromebook.png" alt="HP Chromebook" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                HP Chromebook
              </h2>
              <p className="text-sm">HP&apos;s range of Chromebooks for educational and general use, running Chrome OS.</p>
            </div>
          </li>

        </ul>


        <h4 className="text-3xl mt-20 mb-7 font-bold">Asus</h4>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/asus-zenbook.webp" alt="Asus ZenBook" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Asus ZenBook
              </h2>
              <p className="text-sm">Premium ultrabooks known for their sleek design, high performance, and portability.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/asus-vivobook.webp" alt="Asus VivoBook" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Asus VivoBook
              </h2>
              <p className="text-sm">Aimed at everyday users, offering a mix of performance and affordability for casual computing.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/asus-rog.webp" alt="Asus ROG" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Asus ROG
              </h2>
              <p className="text-sm">High-performance gaming laptops designed for serious gamers, featuring powerful hardware and cooling solutions.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/asus-tuf.png" alt="Asus TUF" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Asus TUF
              </h2>
              <p className="text-sm">Gaming laptops that are more budget-friendly than ROG, built for durability and performance.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/asus-expertbook.webp" alt="Asus ExpertBook" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Asus ExpertBook
              </h2>
              <p className="text-sm">Business-focused laptops that emphasize productivity, security, and performance for professionals.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/asus-chromebook.webp" alt="Asus Chromebook" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Asus Chromebook
              </h2>
              <p className="text-sm">Asus&apos;s range of Chromebooks designed for education and general use, running Chrome OS.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/asus-proart.webp" alt="Asus ProArt" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Asus ProArt
              </h2>
              <p className="text-sm">Targeted at creative professionals, offering high performance and features for content creation.</p>
            </div>
          </li>

        </ul>

        <h4 className="text-3xl mt-20 mb-7 font-bold">Apple</h4>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/apple-macbook-air.png" alt="Apple Macbook Air" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Apple Macbook Air
              </h2>
              <p className="text-sm">Known for its thin and lightweight design, the MacBook Air is geared toward portability and everyday use, featuring good battery life.</p>
            </div>
          </li>

          <li className="card bg-base-100 w-44 sm:w-52 md:w-56 shadow-xl">
            <figure className="flex h-32">
              <Image className="mr-auto ml-5" src="/images/apple-macbook-pro.png" alt="Apple Macbook Pro" width={160} height={160} />
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title ">
                Apple Macbook Pro
              </h2>
              <p className="text-sm">Aimed at professionals and creatives, the MacBook Pro series offers more power and advanced features, available in various sizes (13-inch, 14-inch, and 16-inch models).</p>
            </div>
          </li>


        </ul>

      </article>

      <Footer />
    </main>
  )
}