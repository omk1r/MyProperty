const Home = () => {
  return (
    <>
      {/* discover banner */}
      <div className="flex md:flex-row-reverse flex-col w-full">
        <div className="mx-3 md:mx-0 my-10 md:my-0 rounded-2xl md:rounded-none md:w-1/2 overflow-hidden">
          <img src="./discover-banner-buiding.png" alt="" className="" />
        </div>

        <div className="md:px-8 md:py-10 md:w-1/2">
          <div className="mx-4 my-6">
            <h3 className="font-semibold text-3xl md:text-5xl xl:text-6xl">
              Discover Your Dream Property with MyProperty
            </h3>
            <p className="my-6 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
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

          <div className="flex md:flex-row flex-col px-2 py-3 w-full">
            <div className="flex flex-row w-full">
              <div className="bg-[#1A1A1A] mx-2 my-2 py-8 md:py-4 border border-slate-600 rounded-lg w-1/2 md:w-full text-center">
                <h4 className="font-bold text-2xl">200+</h4>
                <p className="pt-2 font-medium text-gray-400">
                  Happy Customers
                </p>
              </div>
              <div className="bg-[#1A1A1A] mx-2 my-2 py-8 md:py-4 border border-slate-600 rounded-lg w-1/2 md:w-full text-center">
                <h4 className="font-bold text-2xl">10k+</h4>
                <p className="pt-2 font-medium text-gray-400">
                  Properties For Clients
                </p>
              </div>
            </div>
            <div className="px-2 w-full">
              <div className="bg-[#1A1A1A] my-2 py-8 md:py-4 border border-slate-600 rounded-lg w-full text-center">
                <h4 className="font-bold text-2xl">16+</h4>
                <p className="pt-2 font-medium text-gray-400">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
