const Home1Page = () => {
  return (
    <div className="relative w-full h-[50vh] sm:h-[716px] bg-cover">
    <div
      className="relative w-full h-full"
      style={{
        backgroundImage: "url('/banner.jpg')", // Adjust this path to your banner image
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 opacity-40"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start p-8 sm:p-12 text-white">
        <div className="w-full sm:w-[599px] h-auto gap-[25px] text-center sm:text-left">
          <h5 className="font-montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.1px]">
            SUMMER 2020
          </h5>
          <h1 className="font-montserrat font-bold text-[30px] sm:text-[58px] leading-[40px] sm:leading-[80px] tracking-[0.2px]">
            NEW COLLECTION
          </h1>
          <h4 className="font-montserrat font-normal text-[14px] sm:text-[20px] leading-[20px] sm:leading-[30px] tracking-[0.2px] w-full sm:w-[376px]">
            We know how large objects will act, but things on a small scale.
          </h4>
          <br />
          <button className="w-[60%] sm:w-[170px] bg-[#2DC071] py-[12px] sm:px-[40px] px-[30px] rounded-[5px] gap-[10px] text-white font-montserrat">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home1Page