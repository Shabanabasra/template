import React from 'react';
import Image from 'next/image';

const editorsSection = () => {
  return (
    <div>
      <section className="mt-12">
                <div className="font-extrabold text-3xl gap-[10px] h-[55px] w-full mx-auto mb-6 text-center">
                  <h1>EDITORS PICK</h1>
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
    </div>
  )
}

export default editorsSection
