import React from 'react';
import Image from 'next/image'

const CollectionSection = () => {
  return (
    <div>
      <section className="mt-0">
        <div className="relative w-full h-screen">
          <Image
            src="/images/image10.jpg"
            alt="image10"
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
    </div>
  )
}

export default CollectionSection
