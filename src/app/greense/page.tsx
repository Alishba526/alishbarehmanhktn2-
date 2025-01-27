import React from 'react'
import Image from 'next/image'
const Green = () => {
  return (
    <div> 
    <div className="w-full bg-[#23856D] py-10 lg:py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-12">
        <div className="flex-1 text-center lg:text-left">
          <h4 className="text-[16px] font-Montserrat font-medium leading-6 text-white">SUMMER 2020</h4>
          <h1 className="text-[32px] lg:text-[58px] font-Montserrat font-bold leading-10 lg:leading-[72px] text-white mt-2">
            Vita Classic Product
          </h1>
          <p className="text-[14px] lg:text-[16px] font-Montserrat font-medium leading-6 text-white mt-4">
            Discover the perfection of our products.
          </p>
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-6">
            <h3 className="text-[24px] font-Montserrat font-bold text-white">$16.48</h3>
            <button className="bg-[#2DC071] text-white font-Montserrat font-medium px-6 py-3 rounded-md">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/greenman.png"
            alt="Green Man"
            width={500}
            height={500}
            className="mx-auto lg:mx-0"
          />
        </div>
      </div>
    </div>
</div>
  )
}

export default Green