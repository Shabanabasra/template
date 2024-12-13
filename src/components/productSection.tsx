import React from 'react';
import Image from 'next/image'

const productSection = () => {
  return (
    <div>
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
                      src="/images/image16.jpg"
                      alt="Vita Classic Product"
                      width={400}
                      height={400}
                      className="w-full max-w-sm h-auto rounded-md"
                    />
                  </div>
                </div>
              </section>
        
        
                
                
      
    </div>
  )
}

export default productSection
