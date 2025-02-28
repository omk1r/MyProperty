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
              <button className="my-2 md:px-4 py-4 border border-gray-700 rounded-lg font-medium text-sm xl:text-lg">
                Learn More
              </button>
              <button className="bg-[#703BF7] my-2 md:px-4 py-4 rounded-lg font-medium text-sm xl:text-lg">
                Browse Properties
              </button>
            </div>

            <div className="flex flex-wrap md:flex-nowrap px-2 py-3 w-full">
              <div className="px-2 w-1/2 md:w-1/3">
                <div className="bg-[#1A1A1A] my-2 px-4 py-8 md:py-4 border border-gray-700 rounded-lg md:text-left text-center">
                  <h4 className="font-bold text-2xl md:text-3xl xl:text-4xl">
                    200+
                  </h4>
                  <p className="pt-2 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
                    Happy Customers
                  </p>
                </div>
              </div>
              <div className="px-2 w-1/2 md:w-1/3">
                <div className="bg-[#1A1A1A] my-2 px-4 py-8 md:py-4 border border-gray-700 rounded-lg md:text-left text-center">
                  <h4 className="font-bold text-2xl md:text-3xl xl:text-4xl">
                    10k+
                  </h4>
                  <p className="pt-2 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
                    Properties For Clients
                  </p>
                </div>
              </div>
              <div className="px-2 w-full md:w-1/3">
                <div className="bg-[#1A1A1A] my-2 px-4 py-8 md:py-4 border border-gray-700 rounded-lg md:text-left text-center">
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
          <div className="flex flex-row flex-wrap shadow-[0_0_25px_10px_#262626] px-2 py-3 border border-gray-700 rounded-2xl md:rounded-none w-full">
            <div className="px-2 py-2 w-1/2 md:w-1/4">
              <div className="flex flex-col justify-center items-center bg-[#1A1A1A] px-2 py-4 border border-gray-700 rounded-lg w-full">
                <img src="./home-icon.png" alt="" />
                <p className="py-3 font-semibold text-sm md:text-base xl:text-xl text-center">
                  Find Your Dream Home
                </p>
              </div>
            </div>
            <div className="px-2 py-2 w-1/2 md:w-1/4">
              <div className="flex flex-col justify-center items-center bg-[#1A1A1A] px-2 py-4 border border-gray-700 rounded-lg w-full">
                <img src="./home-icon.png" alt="" />
                <p className="py-3 font-semibold text-sm md:text-base xl:text-xl text-center">
                  Unlock Property Value
                </p>
              </div>
            </div>
            <div className="px-2 py-2 w-1/2 md:w-1/4">
              <div className="flex flex-col justify-center items-center bg-[#1A1A1A] px-2 py-4 border border-gray-700 rounded-lg w-full">
                <img src="./home-icon.png" alt="" />
                <p className="py-3 font-semibold text-sm md:text-base xl:text-xl text-center">
                  Property Management
                </p>
              </div>
            </div>
            <div className="px-2 py-2 w-1/2 md:w-1/4">
              <div className="flex flex-col justify-center items-center bg-[#1A1A1A] px-2 py-4 border border-gray-700 rounded-lg w-full">
                <img src="./home-icon.png" alt="" />
                <p className="py-3 font-semibold text-sm md:text-base xl:text-xl text-center">
                  Smart Investments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* featured properties */}
      <div className="grid grid-cols-4 my-10 px-6">
        <div id="div1" className="col-span-4 md:col-span-3">
          <h3 className="font-semibold text-3xl md:text-4xl xl:text-5xl">
            Featured Properties
          </h3>
          <p className="my-3 font-medium text-[#999999] text-sm md:text-base xl:text-lg">
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through MyProperty.
          </p>
        </div>

        <div id="div2" className="col-span-4 py-6 border-gray-700 border-b">
          <div className="flex flex-col items-center px-6 py-6 border border-gray-700 rounded-xl">
            <img src="./property-1.png" alt="" className="w-full" />
            <h6 className="mt-5 w-full font-semibold text-lg md:text-xl">
              Rustic Retreat Cottage
            </h6>
            <p className="mt-2 font-medium text-[#999999] text-sm md:text-base">
              An elegant 3-bedroom, 2.5-bathroom townhouse in a gated
              community...
            </p>

            <div className="flex flex-row flex-wrap justify-evenly items-center my-6 w-full">
              <div className="flex items-center bg-[#1A1A1A] px-3 py-2 border border-gray-700 rounded-3xl font-medium text-sm xl:text-lg">
                4-Bedroom
              </div>
              <div className="flex items-center bg-[#1A1A1A] px-3 py-2 border border-gray-700 rounded-3xl font-medium text-sm xl:text-lg">
                3-Bathroom
              </div>
              <div className="flex items-center bg-[#1A1A1A] px-3 py-2 border border-gray-700 rounded-3xl font-medium text-sm xl:text-lg">
                Villa
              </div>
            </div>

            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-col items-start">
                <p className="font-medium text-[#999999] text-sm xl:text-lg">
                  Price
                </p>
                <span className="font-semibold text-lg md:text-xl xl:text-2xl">
                  $550,000
                </span>
              </div>
              <button className="bg-[#703BF7] my-2 px-8 py-4 rounded-lg font-medium text-sm xl:text-lg">
                View Property Details
              </button>
            </div>
          </div>
        </div>

        <div
          id="div3"
          className="flex justify-center items-center col-span-2 md:col-span-1 md:col-start-4 md:row-start-1 my-6"
        >
          <button className="flex justify-center items-center bg-[#1A1A1A] md:px-6 py-4 border border-gray-700 rounded-xl w-full md:w-2/3 text-sm xl:text-lg">
            View All Properties
          </button>
        </div>
        <div
          id="div4"
          className="flex justify-center items-center gap-1 md:gap-4 col-span-2 md:col-span-4 my-6"
        >
          <i className="ri-arrow-left-line bg-gray-400 px-1 md:px-2 md:py-1 rounded-2xl md:text-lg"></i>
          <p className="font-medium text-sm md:text-base xl:text-lg">
            01 of 60
          </p>
          <i className="ri-arrow-right-line bg-gray-400 px-1 md:px-2 md:py-1 rounded-2xl md:text-lg"></i>
        </div>
      </div>
    </>
  );
};

export default Home;
