import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";
import TopHeader from "@/components/TopHeader";

export default function Home() {
  return (
    <div>
      <TopHeader />
      <Header />
      <main className="flex-grow">
        {/* Section 1 */}
        <section className="mt-0">
  <div className="relative w-full h-screen">
    <Image
      src="/images/image15.JPG"
      alt="image15"
      height={716}
      width={1440}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start p-8 sm:p-12">
      <div className="w-full sm:w-[599px] gap-[25px] text-center sm:text-left">
        <h5 className="font-montserrat font-bold text-[14px] sm:text-[16px] text-white">
          SUMMER 2020
        </h5>
        <h1 className="font-montserrat font-bold text-[40px] sm:text-[58px] text-white">
          NEW COLLECTION
        </h1>
        <h4 className="font-montserrat font-normal text-[16px] sm:text-[20px] text-white">
          We know how large objects will act, but things on a small scale.
        </h4>
        <button className="w-full sm:w-auto bg-[#2DC071] py-[12px] sm:px-[40px] rounded-[5px] text-white">
          Shop Now
        </button>
      </div>
    </div>
  </div>
</section>
        {/* Section 2 */}
        <section className="mt-12">
          <div className="font-extrabold text-3xl gap-[10px] h-[55px] w-full mx-auto mb-6 text-center">
            <h1>EDITOR&#39;S PICK</h1>
          </div>
          <div className="w-full mx-auto mb-12 text-center">
            <h1>Problems trying to resolve the conflict between</h1>
          </div>

          <div className="flex justify-center gap-8 flex-wrap">
            <div className="relative w-[250px] h-[530px]">
              <Image
                src="/images/image20.JPG"
                className="w-full h-full object-cover rounded-md"
                alt="Men Collection"
                width={250}
                height={530}
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-6 rounded-md">
                Men
              </button>
            </div>

            <div className="relative w-[250px] h-[530px]">
              <Image
                src="/images/card-item (1).JPG"
                className="w-full h-full object-cover rounded-md"
                alt="Women Collection"
                width={250}
                height={530}
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-6 rounded-md">
                Women
              </button>
            </div>

            <div className="flex flex-col gap-8">
              <div className="relative w-[200px] h-[250px]">
                <Image
                  src="/images/card-item (2).JPG"
                  className="w-full h-full object-cover rounded-md"
                  alt="Accessories Collection"
                  width={200}
                  height={250}
                />
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-6 rounded-md">
                  Accessories
                </button>
              </div>

              <div className="relative w-[200px] h-[250px]">
                <Image
                  src="/images/filter.JPG"
                  className="w-full h-full object-cover rounded-md"
                  alt="Kids Collection"
                  width={200}
                  height={250}
                />
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black py-2 px-6 rounded-md">
                  Kids
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* /* section 3 */}
        <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                <div className="w-full h-56 mb-4 flex items-center justify-center bg-gray-100">
                  <Image
                    src={`/images/image${index + 1}.JPG`}
                    alt={`Graphic Design ${index + 1}`}
                    width={200}
                    height={224}
                    className="w-auto h-full object-contain"
                  />
                </div>
                <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42] mb-2">
                  Graphic Design
                </h5>
                <p className="font-Montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373] mb-4">
                  English Department
                </p>
                <div className="flex justify-center gap-3 mb-4">
                  <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD] line-through">
                    $16.48
                  </h5>
                  <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
                    $6.48
                  </h5>
                </div>
                <div className="flex gap-2">
                  <button className="w-4 h-4 rounded-full bg-red-500"></button>
                  <button className="w-4 h-4 rounded-full bg-yellow-500"></button>
                  <button className="w-4 h-4 rounded-full bg-green-500"></button>
                  <button className="w-4 h-4 rounded-full bg-blue-500"></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


        {/* /* section 4 */}
        <section className="relative bg-[#23856D] py-12 px-4 rounded-[5px]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="max-w-lg flex flex-col gap-6">
            <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-white">
              SUMMER 2020
            </h4>
            <h1 className="font-Montserrat font-bold text-[48px] md:text-[58px] leading-[60px] md:leading-[80px] text-white">
              Vita Classic Product
            </h1>
            <p className="font-Montserrat font-medium text-[14px] leading-[20px] text-white">
              We know how large objects will act. We know how our objects will act. We know.
            </p>
            <div className="flex items-center gap-8">
              <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-white">
                $16.48
              </h3>
              <button className="bg-[#2DC071] text-white py-3 px-6 rounded-[5px] hover:bg-[#27a05d] transition">
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/image16.JPG"
              alt="Vita Classic Product"
              width={400}
              height={400}
              className="w-full max-w-sm h-auto rounded-md"
            />
          </div>
        </div>
      </section>


        
        
        {/* Section Five */}
        <section className="relative mb-16">
        <div className="w-full h-auto">
          <div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-[30px] px-4 lg:px-0">
            <div className="relative w-full lg:w-[707px] h-[400px] lg:h-[682px] flex justify-center">
              <Image
                src="/images/image14.JPG"
                alt="Couple Collection"
                width={707}
                height={682}
                className="object-contain w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-[573px] h-auto flex flex-col gap-[20px] justify-center items-center lg:items-start text-center lg:text-left mt-[20px] lg:mt-0">
              <h5 className="text-[14px] lg:text-[16px] font-Montserrat font-bold leading-[24px] text-[#BDBDBD]">
                SUMMER 2020
              </h5>
              <h2 className="lg:w-[375px] text-[24px] lg:text-[40px] font-Montserrat font-bold leading-[32px] lg:leading-[50px] text-[#252B42]">
                Part of the Neural Universe
              </h2>
              <h4 className="lg:w-[375px] text-[16px] lg:text-[20px] font-Montserrat font-normal leading-[24px] lg:leading-[30px] text-[#737373]">
                We know how large objects will act, but things on a small scale.
              </h4>
              <div className="flex flex-wrap justify-center lg:justify-start gap-[10px]">
                <button className="w-[140px] lg:w-[156px] h-[52px] rounded-[5px] py-[12px] px-[20px] lg:px-[40px] bg-[#2DC071] flex justify-center items-center">
                  <h1 className="text-[14px] font-Montserrat font-bold text-white">
                    BUY NOW
                  </h1>
                </button>
                <button className="w-[140px] lg:w-[156px] h-[52px] rounded-[5px] py-[12px] px-[20px] lg:px-[40px] border border-[#2DC071] flex justify-center items-center">
                  <h1 className="text-[14px] font-Montserrat font-bold whitespace-nowrap text-[#2DC071]">
                    READ MORE
                  </h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* section 6 */}
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-blue-500 text-sm font-semibold uppercase">
              Practice Advice
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Featured Posts
            </h2>
            <p className="mt-4 text-base text-gray-500">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
            </p>
          </div>

          {/* Posts Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* First Post */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-56">
                <Image
                  src="/images/post1.JPG"
                  alt="Post 1"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs uppercase px-2 py-1 rounded">
                  New
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">Google Trending New</p>
                <h3 className="text-lg font-semibold text-gray-900">
                  Loudest &#224; la Madison #1 (L&#39;integral)
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  We focus on ergonomics and meeting you where you work. It&#39;s only a keystroke away.
                </p>
                <div className="mt-4 flex items-center justify-between text-gray-500 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center">
                      <svg
                        className="h-4 w-4 text-gray-400 mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M6 2a6 6 0 0112 0v8a6 6 0 11-12 0V2zM2 14a4 4 0 014-4h8a4 4 0 014 4v2H2v-2z" />
                      </svg>
                      22 April 2021
                    </span>
                    <span>|</span>
                    <span>10 comments</span>
                  </div>
                  <a href="#" className="text-blue-500 font-semibold hover:underline">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            {/* Second Post */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-56">
                <Image
                  src="/images/post2.JPG"
                  alt="Post 2"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs uppercase px-2 py-1 rounded">
                  New
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">Google Trending New</p>
                <h3 className="text-lg font-semibold text-gray-900">
                  Loudest &#224; la Madison #1 (L&#39;integral)
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  We focus on ergonomics and meeting you where you work. It&#39;s only a keystroke away.
                </p>
                <div className="mt-4 flex items-center justify-between text-gray-500 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center">
                      <svg
                        className="h-4 w-4 text-gray-400 mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M6 2a6 6 0 0112 0v8a6 6 0 11-12 0V2zM2 14a4 4 0 014-4h8a4 4 0 014 4v2H2v-2z" />
                      </svg>
                      22 April 2021
                    </span>
                    <span>|</span>
                    <span>10 comments</span>
                  </div>
                  <a href="#" className="text-blue-500 font-semibold hover:underline">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            {/* Third Post */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative w-full h-56">
                <Image
                  src="/images/post3.JPG"
                  alt="Post 3"
                  fill
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs uppercase px-2 py-1 rounded">
                  New
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">Google Trending New</p>
                <h3 className="text-lg font-semibold text-gray-900">
                  Loudest &#224; la Madison #1 (L&#39;integral)
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  We focus on ergonomics and meeting you where you work. It&#39;s only a keystroke away.
                </p>
                <div className="mt-4 flex items-center justify-between text-gray-500 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center">
                      <svg
                        className="h-4 w-4 text-gray-400 mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M6 2a6 6 0 0112 0v8a6 6 0 11-12 0V2zM2 14a4 4 0 014-4h8a4 4 0 014 4v2H2v-2z" />
                      </svg>
                      22 April 2021
                    </span>
                    <span>|</span>
                    <span>10 comments</span>
                  </div>
                  <a href="#" className="text-blue-500 font-semibold hover:underline">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}