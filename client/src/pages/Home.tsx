const Home = () => {
  return (
    <>
      {/* discover banner */}
      <div>
        <div className="flex md:flex-row-reverse flex-col w-full">
          <div className="mx-3 md:mx-0 my-10 md:my-0 rounded-2xl md:rounded-none md:w-1/2 overflow-hidden">
            <img
              src="./discover-banner-buiding.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:px-8 md:py-10 md:w-1/2">
            <div className="mx-4 my-6">
              <h3 className="font-semibold text-3xl md:text-5xl xl:text-6xl">
                Discover Your Dream Property with MyProperty
              </h3>
              <p className="my-6 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
                Your journey to finding the perfect property begins here.
                Explore our listings to find the home that matches your dreams.
              </p>
            </div>

            <div className="flex md:flex-row flex-col md:gap-4 px-4 py-6 w-full">
              <button className="my-2 md:px-4 py-4 border border-gray-800 rounded-lg font-medium text-sm xl:text-lg">
                Learn More
              </button>
              <button className="bg-[#703BF7] my-2 md:px-4 py-4 rounded-lg font-medium text-sm xl:text-lg">
                Browse Properties
              </button>
            </div>

            <div className="flex flex-wrap md:flex-nowrap px-2 py-3 w-full">
              <div className="px-2 w-1/2 md:w-1/3">
                <div className="bg-[#1A1A1A] my-2 px-4 py-8 md:py-4 border border-gray-800 rounded-lg md:text-left text-center">
                  <h4 className="font-bold text-2xl md:text-3xl xl:text-4xl">
                    200+
                  </h4>
                  <p className="pt-2 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
                    Happy Customers
                  </p>
                </div>
              </div>
              <div className="px-2 w-1/2 md:w-1/3">
                <div className="bg-[#1A1A1A] my-2 px-4 py-8 md:py-4 border border-gray-800 rounded-lg md:text-left text-center">
                  <h4 className="font-bold text-2xl md:text-3xl xl:text-4xl">
                    10k+
                  </h4>
                  <p className="pt-2 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
                    Properties For Clients
                  </p>
                </div>
              </div>
              <div className="px-2 w-full md:w-1/3">
                <div className="bg-[#1A1A1A] my-2 px-4 py-8 md:py-4 border border-gray-800 rounded-lg md:text-left text-center">
                  <h4 className="font-bold text-2xl md:text-3xl xl:text-4xl">
                    16+
                  </h4>
                  <p className="pt-2 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
                    Years of Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-6 px-4 md:px-2 py-5">
          <div className="flex flex-row flex-wrap shadow-[0_0_25px_10px_#262626] px-2 py-3 border border-gray-800 rounded-2xl md:rounded-none w-full">
            <div className="px-2 py-2 w-1/2 md:w-1/4">
              <div className="flex flex-col justify-center items-center bg-[#1A1A1A] px-2 py-4 border border-gray-800 rounded-lg w-full">
                <img src="./home-icon.png" alt="" />
                <p className="py-3">Find Your Dream Home</p>
              </div>
            </div>
            <div className="px-2 py-2 w-1/2 md:w-1/4">
              <div className="flex flex-col justify-center items-center bg-[#1A1A1A] px-2 py-4 border border-gray-800 rounded-lg w-full">
                <img src="./home-icon.png" alt="" />
                <p className="py-3 text-center">Find Your Dream Home</p>
              </div>
            </div>
            <div className="px-2 py-2 w-1/2 md:w-1/4">
              <div className="flex flex-col justify-center items-center bg-[#1A1A1A] px-2 py-4 border border-gray-800 rounded-lg w-full">
                <img src="./home-icon.png" alt="" />
                <p className="py-3">Find Your Dream Home</p>
              </div>
            </div>
            <div className="px-2 py-2 w-1/2 md:w-1/4">
              <div className="flex flex-col justify-center items-center bg-[#1A1A1A] px-2 py-4 border border-gray-800 rounded-lg w-full">
                <img src="./home-icon.png" alt="" />
                <p className="py-3">Find Your Dream Home</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
    </>
  );
};

export default Home;
