const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex md:flex-row flex-col justify-between md:items-center px-6 md:px-10 py-10 border border-[#262626]">
        <div className="md:w-[80%]">
          <h3 className="font-semibold text-3xl md:text-4xl xl:text-5xl">
            Start Your Real Estate Journey Today
          </h3>
          <p className="my-3 md:my-5 font-medium text-[#999999] text-sm md:text-base xl:text-lg">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>
        <div>
          <button className="bg-[#703BF7] my-2 md:px-4 py-4 rounded-lg w-full font-medium text-sm xl:text-lg">
            Explore Properties
          </button>
        </div>
      </div>

      <div className="flex md:flex-row flex-col px-6 md:px-10 py-10 w-full">
        <div className="md:w-[30%]">
          <div className="flex items-center">
            <img
              src="./Logo.png"
              alt=""
              className="w-7 sm:w-8 xl:w-10 h-7 sm:h-8 xl:h-10"
            />
            <span className="px-2 font-medium">MyProperty</span>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="my-3 px-3 py-2 border border-[#262626] rounded-lg w-full md:w-[90%]"
            />
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center my-2 w-full md:w-[70%]">
          <div className="w-1/2 md:w-1/4">
            <div className="flex flex-col mx-2 my-2 px-2 border-[#262626] border-b md:border-none">
              <h6 className="my-2 font-medium text-[#999999] md:text-lg xl:text-xl">
                Home
              </h6>
              <p className="py-1 font-medium text-sm xl:text-lg">
                Hero Section
              </p>
              <p className="py-1 font-medium text-sm xl:text-lg">Features</p>
              <p className="py-1 font-medium text-sm xl:text-lg">Properties</p>
              <p className="py-1 font-medium text-sm xl:text-lg">
                Testimonials
              </p>
              <p className="py-1 font-medium text-sm xl:text-lg">FAQ's</p>
            </div>
          </div>
          <div className="w-1/2 md:w-1/4">
            <div className="flex flex-col mx-2 my-2 px-2 border-[#262626] border-b border-l md:border-none">
              <h6 className="my-2 font-medium text-[#999999] md:text-lg xl:text-xl">
                About Us
              </h6>
              <p className="py-1 font-medium text-sm xl:text-lg">Our Story</p>
              <p className="py-1 font-medium text-sm xl:text-lg">Our Works</p>
              <p className="py-1 font-medium text-sm xl:text-lg">
                How It Works
              </p>
              <p className="py-1 font-medium text-sm xl:text-lg">Our Team</p>
              <p className="py-1 font-medium text-sm xl:text-lg">Our Clients</p>
            </div>
          </div>
          <div className="w-1/2 md:w-1/4">
            <div className="flex flex-col mx-2 my-2 px-2 border-[#262626] border-b md:border-none">
              <h6 className="my-2 font-medium text-[#999999] md:text-lg xl:text-xl">
                Properties
              </h6>
              <p className="py-1 font-medium text-sm xl:text-lg">Portfolio</p>
              <p className="py-1 font-medium text-sm xl:text-lg">Categories</p>
            </div>
          </div>
          <div className="w-1/2 md:w-1/4">
            <div className="flex flex-col mx-2 my-2 px-2 border-[#262626] border-b border-l md:border-none">
              <h6 className="my-2 font-medium text-[#999999] md:text-lg xl:text-xl">
                Services
              </h6>
              <p className="py-1 font-medium text-sm xl:text-lg">
                Valuation Mastery
              </p>
              <p className="py-1 font-medium text-sm xl:text-lg">
                Strategic Marketing
              </p>
              <p className="py-1 font-medium text-sm xl:text-lg">
                Negotiation Wizardry
              </p>
              <p className="py-1 font-medium text-sm xl:text-lg">
                Closing Success
              </p>
              <p className="py-1 font-medium text-sm xl:text-lg">
                Property Management
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center gap-2 md:gap-4 bg-[#1A1A1A] py-6 font-medium text-sm xl:text-lg">
        <p>@2023 Estatein. All Rights Reserved.</p>
        <p>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
