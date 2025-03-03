const Properties = () => {
  return (
    <>
      {/* find property banner */}
      <div className="flex flex-col w-full">
        <div className="bg-gradient-to-r from-[#262626] from-0% md:px-8 py-4 md:py-10 border-[#262626] border-b">
          <div className="mx-4 mt-6 mb-3 md:w-[85%]">
            <h3 className="font-semibold text-3xl md:text-5xl xl:text-6xl">
              Find Your Dream Property
            </h3>
            <p className="my-6 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
              Welcome to MyProperty, where your dream property awaits in every
              corner of our beautiful world. Explore our curated selection of
              properties, each offering a unique story and a chance to redefine
              your life. With categories to suit every dreamer, your journey
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center px-4 py-3 w-full md:-translate-y-1/3">
          <div className="flex justify-between items-center bg-[#141414] shadow-[0_0_10px_5px_#262626] md:shadow-[0_0_1px_10px_#1A1A1A] mt-4 px-2 py-3 border border-[#262626] rounded-xl md:rounded-none md:rounded-t-xl w-full md:w-[70%]">
            <input
              type="text"
              className="px-2 py-2 focus:outline-none w-2/3 h-full text-sm"
              placeholder="Search For A Property"
            />{' '}
            <div>
              <img
                src="./message-button.png"
                alt=""
                className="w-12 md:w-8 h-12 md:h-8"
              />
            </div>
          </div>

          <div className="bg-[#1A1A1A] my-6 md:my-0 px-4 py-4 rounded-xl w-full md:w-[80%]">
            <div className="flex md:flex-row flex-col md:space-x-4 space-y-4 md:space-y-0">
              <select className="bg-[#141414] px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full md:w-1/4 text-[#999999] text-sm">
                <option value="">Location</option>
                <option value="mumbai">Mumbai</option>
                <option value="pune">Pune</option>
                <option value="chennai">Chennai</option>
                <option value="delhi">Delhi</option>
              </select>

              <select className="bg-[#141414] px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full md:w-1/4 text-[#999999] text-sm">
                <option value="">Property Type</option>
                <option value="commercial">Commercial</option>
                <option value="residential">Residential</option>
              </select>

              <select className="bg-[#141414] px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full md:w-1/4 text-[#999999] text-sm">
                <option value="">Price Range</option>
                <option value="0-50">0 - 50 Lakhs</option>
                <option value="50-100">50 - 100 Lakhs</option>
                <option value="100-200">100 - 200 Lakhs</option>
                <option value="200+">200+ Lakhs</option>
              </select>

              <select className="bg-[#141414] px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full md:w-1/4 text-[#999999] text-sm">
                <option value="">Build Year</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Properties;
