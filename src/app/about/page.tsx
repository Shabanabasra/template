import React from "react";
import Image from "next/image"; 
import Header2 from "@/components/header2";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Footer2 from "@/components/footer2";

export default function About() {
  return (
    <div>
      {/* Header2 section */}
      <Header2 />
      <main>
        {/* Section 1 */}
        <section className="relative flex flex-col md:flex-row items-center justify-center py-24 px-6 bg-white overflow-hidden">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">
              About Company
            </h4>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-gray-600 mb-6">
              We know how large objects will act, but things on a small scale.
            </p>
            <a
              href="#"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
              Get Quote Now
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative inline-block">
              {/*  Pink Background Circle */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[30rem] h-[30rem] bg-pink-200 rounded-full shadow-lg z-0"></div>

              {/*  Image */}
              <Image
                src="/images/shopping-girl.jpg"
                alt="Shopping Girl"
                width={300}
                height={400}
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="py-16 px-6 bg-white text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <h5 className="text-sm font-semibold uppercase text-gray-500 mb-2">
              Highlights
            </h5>
            <p className="text-2xl font-bold text-gray-900 mb-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </p>
            <p className="text-gray-500">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics.
            </p>
          </div>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">15K</p>
              <p className="text-gray-500">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">150K</p>
              <p className="text-gray-500">Monthly Visitors</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">15</p>
              <p className="text-gray-500">Countries Worldwide</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">100+</p>
              <p className="text-gray-500">Top Partners</p>
            </div>
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Image
                src="/images/mountain-video-thumbnail.png"
                alt="Video Thumbnail"
                width={800}
                height={450}
                className="rounded-lg shadow-lg"
              />
              <a
                href="https://www.youtube.com/watch?v=your-video-id"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* section 3 */}

        <section className="relative bg-white py-16">
          <div className="container mx-auto flex flex-col items-center gap-16 px-4">
            <div className="text-center max-w-lg">
              <h2 className="text-4xl font-bold text-[#252B42]">
                Meet Our Team
              </h2>
              <p className="text-base text-[#737373] mt-4">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Card 1 */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full h-[230px] relative">
                  <Image
                    src="/images/media3.png"
                    alt="User 1"
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="p-6 text-center">
                  <h5 className="text-xl font-bold text-[#252B42]">John Doe</h5>
                  <h6 className="text-sm font-semibold text-[#737373]">
                    Software Engineer
                  </h6>

                  {/*  Social Media Icons */}
                  <div className="flex justify-center gap-4 mt-4">
                    <a
                      href="https://www.facebook.com/"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      <FaFacebookF size={24} />
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      className="text-gray-600 hover:text-pink-500"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a
                      href="https://www.twitter.com/"
                      className="text-gray-600 hover:text-blue-400"
                    >
                      <FaTwitter size={24} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full h-[230px] relative">
                  <Image
                    src="/images/media.png"
                    alt="User 2"
                    width={300}
                    height={230}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h5 className="text-xl font-bold text-[#252B42]">
                    Jane Smith
                  </h5>
                  <h6 className="text-sm font-semibold text-[#737373]">
                    Marketing Head
                  </h6>
                  <div className="flex justify-center gap-4 mt-4">
                    <a
                      href="https://www.facebook.com/"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      <FaFacebookF size={24} />
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      className="text-gray-600 hover:text-pink-500"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a
                      href="https://www.twitter.com/"
                      className="text-gray-600 hover:text-blue-400"
                    >
                      <FaTwitter size={24} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full h-[230px] relative">
                  <Image
                    src="/images/team-1-user-3.jpg"
                    alt="User 3"
                    width={300}
                    height={230}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h5 className="text-xl font-bold text-[#252B42]">
                    Emily Rose
                  </h5>
                  <h6 className="text-sm font-semibold text-[#737373]">
                    UI/UX Designer
                  </h6>
                  <div className="flex justify-center gap-4 mt-4">
                    <a
                      href="https://www.facebook.com/"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      <FaFacebookF size={24} />
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      className="text-gray-600 hover:text-pink-500"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a
                      href="https://www.twitter.com/"
                      className="text-gray-600 hover:text-blue-400"
                    >
                      <FaTwitter size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section 4 */}

        <section className="bg-gray-100 py-20 flex justify-center">
          <div className="w-full max-w-6xl flex flex-col gap-[24px] items-center px-4 md:px-8">
            {/* Heading Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Big Companies Are Here
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>

            {/* Logo  */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
              <div className="flex justify-center">
                <Image
                  src="/images/col-12.png"
                  alt="col-12"
                  width={100} 
                  height={48} 
                  className="h-12 w-auto"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/fa-brands-2 (1).png"
                  alt="fa-brands-2 (1)"
                  width={100}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/fa-brands-3 (1).png"
                  alt="fa-brands-3 (1)"
                  width={100}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/col-md-2 (4).png"
                  alt="col-md-2 (4)"
                  width={100}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/col-md-2 (1).png"
                  alt="col-md-2 (1)"
                  width={100}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/col-md-2.png"
                  alt="col-md-2"
                  width={100}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* groW */}
        <section className="relative w-full h-[636px] flex bg-[#2A7CC7] justify-center items-center mt-[-30px]">
          {/* Right Side */}
          <div className="w-full md:w-1/2 h-full bg-[#2A7CC7] lg:px-[250px] px-8 py-16 flex flex-col justify-center">
            <div className="max-w-[438px] flex flex-col gap-6">
              <h5 className="text-white text-lg font-bold leading-[24px] tracking-[0.1px]">
                WORK WITH US
              </h5>
              <h2 className="text-white text-4xl font-bold leading-[50px] tracking-[0.2px]">
                Now Let&#39;s Grow Yours
              </h2>
              <p className="text-white text-sm leading-[20px] tracking-[0.2px]">
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th
                century.
              </p>
              <button className="w-[132px] h-[52px] border border-white rounded-md flex items-center justify-center py-3 px-6 mt-6">
                <span className="text-white text-sm font-bold">Button</span>
              </button>
            </div>
          </div>

          {/* Left Side */}
          <div className="w-full md:w-1/2 h-full relative flex justify-center items-center overflow-hidden">
            <Image
              src="/images/gril-5.jpg"
              alt="Girl"
              width={540}
              height={636}
              className="w-full h-full object-contain max-w-[540px] max-h-[636px]"
            />
          </div>
        </section>

        {/* footer2 */}
        <Footer2 />
      </main>
    </div>
  );
}
