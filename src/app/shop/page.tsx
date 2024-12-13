import React from "react";
import { FiArrowRight } from "react-icons/fi";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import ShopSection from "@/components/shopSection";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from "next/image";

export default function Shop() {
  return (
    <div>
      <TopHeader />
      <Header />

      <div className="container mx-auto p-4">
        {/* Section Heading */}
        <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-full h-[92px] py-[24px] flex flex-col items-center">
          <div className="w-[1049px] h-[44px] flex gap-[1000px] items-center py-[40px]">
            {/* Shop Title */}
            <div className="w-full h-[32px] flex justify-center items-center mb-[8px]">
              <h2 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
                Shop
              </h2>
            </div>
            {/* Breadcrumb */}
            <div className="w-full h-[44px] flex justify-center items-center gap-[5px]">
              <div className="flex items-center gap-[15px]">
                <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                  Home
                </div>
                <FiArrowRight size={8} />
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
                  Shop
                </h6>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-[200px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Product Card 1 */}
          <div className="relative group h-[300px] overflow-hidden">
            <Image
              src="/images/col-md-4 (2).PNG"
              alt="Product Image"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
              <p className="text-white text-lg font-bold">CLOTHS</p>
              <p className="text-white mt-1">5 Items</p>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="relative group h-[300px] overflow-hidden">
            <Image
              src="/images/image15.JPG"
              alt="Product Image"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
              <p className="text-white text-lg font-bold">CLOTHS</p>
              <p className="text-white mt-1">5 Items</p>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="relative group">
            <Image
              src="/images/col-md-4 (3).PNG"
              alt="Product Image"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
              <p className="text-white text-lg font-bold">CLOTHS</p>
              <p className="text-white mt-1">5 Items</p>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="relative group">
            <Image
              src="/images/card-item (9).PNG"
              alt="Product Image"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
              <p className="text-white text-lg font-bold">CLOTHS</p>
              <p className="text-white mt-1">5 Items</p>
            </div>
          </div>

          {/* Product Card 5 */}
          <div className="relative group">
            <Image
              src="/images/card-item (10).PNG"
              alt="Product Image"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
              <p className="text-white text-lg font-bold">CLOTHS</p>
              <p className="text-white mt-1">5 Items</p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-6 flex justify-between items-center">
          <p className="text-gray-500">Showing all 12 results</p>
          <div className="mt-6 flex justify-center items-center gap-4 ">
            <span className="text-gray-500">Views:</span>
            <button className="text-gray-700 hover:text-blue-600">
              <i className="fas fa-th"></i>
            </button>
            <button className="text-gray-700 hover:text-blue-600">
              <i className="fas fa-list"></i>
            </button>
            <div className="mt-6 flex justify-center items-center gap-2 ">
              {/* Frame with 4 Dots */}
              <div className="w-8 h-8 border-2 border-gray-400 flex flex-wrap items-center justify-center">
                <div className="w-2 h-2 bg-gray-600 m-0.5"></div>
                <div className="w-2 h-2 bg-gray-600 m-0.5"></div>
                <div className="w-2 h-2 bg-gray-600 m-0.5"></div>
                <div className="w-2 h-2 bg-gray-600 m-0.5"></div>
              </div>
              {/* Frame with 4 Dots */}
              <div className="w-12 h-8 border-2 border-gray-400 flex flex-col items-center justify-center gap-0">
                <div className="text-gray-600 font-bold leading-none -my-0.5">
                  —
                </div>
                <div className="text-gray-600 font-bold leading-none -my-0.5">
                  —
                </div>
                <div className="text-gray-600 font-bold leading-none -my-0.5">
                  —
                </div>
              </div>
            
            <select className="border-gray-300 rounded px-2 py-1">
              <option>Popularity</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Filter
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* 2nd section */}

      <div className="container mx-auto flex flex-col items-center justify-center space-y-6">
        {/* Logo Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="flex justify-center">
            <Image
              src="/images/col-12.PNG"
              alt="col-12"
              width={100}
              height={48}
              className="h-12 w-auto"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/fa-brands-2 (1).PNG"
              alt="fa-brands-2 (1)"
              width={100}
              height={48}
              className="h-12 w-auto"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/fa-brands-3 (1).PNG"
              alt="fa-brands-3 (1)"
              width={100}
              height={48}
              className="h-12 w-auto"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/col-md-2 (4).PNG"
              alt="col-md-2 (4)"
              width={100}
              height={48}
              className="h-12 w-auto"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/col-md-2 (1).PNG"
              alt="col-md-2 (1)"
              width={100}
              height={48}
              className="h-12 w-auto"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/col-md-2.PNG"
              alt="col-md-2"
              width={100}
              height={48}
              className="h-12 w-auto"
            />
          </div>
        </div>
      </div>

      {/*  Bandage Text */}
      <p className="text-gray-600 text-sm font-semibold">Bandage</p>

      
      {/* Social Icons Section */}
      <div className="flex justify-end items-center gap-4">
      {/* Facebook Icon */}
      <a href="https://www.facebook.com/" className="text-blue-500 hover:text-blue-700">
        <FaFacebook className="w-6 h-6" />
      </a>
      
      {/* Instagram Icon */}
      <a href="https://www.instagram.com/" className="text-pink-500 hover:text-pink-700">
        <FaInstagram className="w-6 h-6" />
      </a>
      
      {/* Twitter Icon */}
      <a href="https://www.twitter.com/" className="text-blue-400 hover:text-blue-600">
        <FaTwitter className="w-6 h-6" />
      </a>
    </div>

      {/* 3rd section */}

      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
            {/* Company Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company Info</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Carrier
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    We are hiring
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal  */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Carrier
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    We are hiring
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/*  Features  */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Features</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Business Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    User Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Live Chat
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Unlimited Support
                  </a>
                </li>
              </ul>
            </div>

            {/*  Resources  */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    iOS & Android
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Watch a Demo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Customers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    API
                  </a>
                </li>
              </ul>
            </div>

            {/*  Get In Touch  */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <form className="flex items-center space-x-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Subscribe
                </button>
              </form>
              <p className="text-gray-500 text-sm mt-2">
                Lorem ipsum dolor amet.
              </p>
            </div>
          </div>

          {/*  Footer Text  */}
          <div className="text-center border-t border-gray-200 pt-6">
            <p className="text-gray-600">
              Made With Love By Tailwind All Right Reserved
            </p>
          </div>
        </div>
      </footer>

      {/* 4th section */}
      <ShopSection />
    </div>
  );
}
