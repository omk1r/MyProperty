import { useEffect, useState } from 'react';
import FAQCarousel from '../component/FAQCarousel';
import Footer from '../component/Footer';

const PropertyDetails = () => {
  const images = [
    './property-1.png',
    './property-2.png',
    './property-3.png',
    './property-1.png',
    './property-2.png',
    './property-3.png',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    // Update the number of visible images based on screen width
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth >= 768 ? 2 : 1);
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const next = () => {
    if (itemsPerView === 2) {
      // const maxIndex = Math.floor(images.length / 2) - 1;
      // setCurrentIndex(currentIndex < maxIndex ? currentIndex + 1 : 0);
      const maxIndex = Math.floor(images.length - 2);
      setCurrentIndex(currentIndex < maxIndex ? currentIndex + 2 : 0);
    } else {
      setCurrentIndex((currentIndex + 1) % images.length);
    }
  };

  const prev = () => {
    if (itemsPerView === 2) {
      // const maxIndex = Math.floor(images.length / 2) - 1;
      // setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : maxIndex);
      const maxIndex = Math.floor(images.length - 2);
      setCurrentIndex(currentIndex > 0 ? currentIndex - 2 : maxIndex);
    } else {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <div className="my-10 md:my-16 px-6 md:px-9">
        <div className="flex md:flex-row flex-col md:items-center py-2 w-full">
          <h3 className="md:w-1/4 font-semibold text-xl">
            Seaside Serenity Villa
          </h3>
          <div className="flex justify-between items-center my-2 md:w-3/4">
            <span className="px-2 py-1 border border-[#2a2a2a] rounded-md w-f font-medium text-sm">
              Malibu, California
            </span>
            <div className="flex md:flex-col items-center md:items-start gap-1">
              <p className="text-[#999999] text-sm">Price</p>
              <p className="font-semibold text-lg">$1,250,000</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center bg-[#1A1A1A] my-2 px-3 py-3 md:py-6 border border-[#262626] rounded-xl">
          <div className="w-full overflow-hidden">
            <div
              className="flex w-full transition-transform duration-500 ease-out"
              style={{
                transform:
                  itemsPerView == 2
                    ? `translateX(-${currentIndex * 50}%)`
                    : `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((src, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 md:px-2 rounded-xl w-full md:w-1/2 overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`Property ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center bg-[#141414] mt-4 px-1 py-1 rounded-full w-full md:w-[20%]">
            <i
              className="ri-arrow-left-line px-2 py-1 border border-[#262626] rounded-full cursor-pointer"
              onClick={prev}
            ></i>
            <i
              className="ri-arrow-right-line px-2 py-1 border border-[#262626] rounded-full cursor-pointer"
              onClick={next}
            ></i>
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-2 my-4">
          <div className="px-4 py-4 border border-[#262626] rounded-lg md:w-1/2 h-fit">
            <h4 className="font-semibold text-lg md:text-xl xl:text-2xl">
              Description
            </h4>
            <p className="my-2 font-medium text-[#999999] text-sm md:text-base xl:text-lg">
              Discover your own piece of paradise with the Seaside Serenity
              Villa. T With an open floor plan, breathtaking ocean views from
              every room, and direct access to a pristine sandy beach, this
              property is the epitome of coastal living.
            </p>
            <div className="flex md:flex-row flex-col items-center my-4 border-[#262626] border-t">
              <div className="flex flex-row flex-wrap py-2 border-[#262626] border-y md:border-y-0 divide-x divide-[#262626] w-full">
                <div className="flex flex-col items-start px-2 w-1/2">
                  <p className="font-medium text-[#999999] text-sm xl:text-lg">
                    Bedrooms
                  </p>
                  <p className="text-lg md:text-xl xl:text-2xl">04</p>
                </div>
                <div className="flex flex-col items-start px-2 w-1/2">
                  <p className="font-medium text-[#999999] text-sm xl:text-lg">
                    Bathrooms
                  </p>
                  <p className="text-lg md:text-xl xl:text-2xl">03</p>
                </div>
              </div>
              <div className="flex flex-col items-start md:px-2 py-2 border-[#262626] md:border-l w-full md:w-1/2">
                <p className="font-medium text-[#999999] text-sm xl:text-lg">
                  Area
                </p>
                <p className="text-lg md:text-xl xl:text-2xl">
                  2,500 Square Feet
                </p>
              </div>
            </div>
          </div>

          <div className="my-4 md:my-0 px-4 py-4 border border-[#262626] rounded-lg md:w-1/2">
            <h4 className="font-semibold text-lg md:text-xl xl:text-2xl">
              Key Features and Amenities
            </h4>
            {[
              'Expansive oceanfront terrace for outdoor entertaining',
              'Gourmet kitchen with top-of-the-line appliances',
              'Private beach access for morning strolls and sunset views',
              'Master suite with a spa-inspired bathroom and ocean-facing balcony',
              'Private garage and ample storage space',
            ].map((element, index) => (
              <div
                className="bg-gradient-to-r from-[#1A1A1A] from-0% my-4 md:my-6 px-2 md:px-3 py-2 border-purple-500 border-l font-medium text-[#999999] text-sm md:text-base xl:text-lg"
                key={index}
              >
                {element}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* inquire */}
      <div className="flex md:flex-row flex-col md:items-start my-10 md:my-16 px-6 md:px-9">
        <div className="md:w-[35%]">
          <h3 className="font-semibold text-3xl md:text-4xl xl:text-5xl">
            Inquire About Seaside Serenity Villa
          </h3>
          <p className="my-3 md:my-5 font-medium text-[#999999] text-sm md:text-base xl:text-lg">
            Interested in this property? Fill out the form below, and our real
            estate experts will get back to you with more details, including
            scheduling a viewing and answering any questions you may have.
          </p>
        </div>
        <div className="flex flex-wrap px-4 py-4 border border-[#262626] rounded-xl w-full md:w-[65%]">
          <label
            className="flex flex-col my-2 px-2 w-full md:w-1/2"
            htmlFor="firstName"
          >
            First Name
            <input
              type="text"
              placeholder="Enter First Name"
              className="bg-[#1A1A1A] my-2 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-[#999999] text-sm"
            />
          </label>

          <label
            className="flex flex-col my-2 px-2 w-full md:w-1/2"
            htmlFor="lastName"
          >
            Last Name
            <input
              type="text"
              placeholder="Enter Last Name"
              className="bg-[#1A1A1A] my-2 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-[#999999] text-sm"
            />
          </label>

          <label
            className="flex flex-col my-2 px-2 w-full md:w-1/2"
            htmlFor="email"
          >
            Email
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-[#1A1A1A] my-2 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-[#999999] text-sm"
            />
          </label>

          <label
            className="flex flex-col my-2 px-2 w-full md:w-1/2"
            htmlFor="phone"
          >
            Phone
            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="bg-[#1A1A1A] my-2 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-[#999999] text-sm"
            />
          </label>

          <label className="flex flex-col my-2 px-2 w-full" htmlFor="message">
            Message
            <textarea
              placeholder="Enter Your Message"
              className="bg-[#1A1A1A] my-2 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-[#999999] text-sm"
            />
          </label>

          <div className="flex md:flex-row flex-col md:justify-between items-center px-2 w-full">
            <label
              className="my-3 md:w-1/2 text-[#999999] text-sm"
              htmlFor="terms"
            >
              <input
                type="checkbox"
                className="bg-[#1A1A1A] mr-2 text-[#1A1A1A]"
              />
              I agree to the Terms of Use and Privacy Policy
            </label>

            <div className="flex flex-col my-2 w-full md:w-1/3">
              <button className="bg-[#703BF7] my-2 md:px-4 py-4 rounded-lg w-full font-medium text-sm xl:text-lg">
                Send Your Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* pricing details */}
      <div className="my-10 md:my-16 px-6 md:px-9">
        <div className="md:w-[85%]">
          <h3 className="font-semibold text-3xl md:text-4xl xl:text-5xl">
            Comprehensive Pricing Details
          </h3>
          <p className="my-3 md:my-5 font-medium text-[#999999] text-sm md:text-base xl:text-lg">
            At MyProperty, transparency is key. We want you to have a clear
            understanding of all costs associated with your property investment.
            Below, we break down the pricing for Seaside Serenity Villa to help
            you make an informed decision
          </p>
          <div className="md:flex md:items-center bg-[#1A1A1A] my-3 md:my-5 px-3 py-3 md:py-1 border border-[#262626] rounded-lg">
            <h4 className="my-2 md:px-2 border-[#262626] md:border-r font-semibold text-lg">
              Note
            </h4>
            <p className="md:px-2 py-2 border-[#262626] border-t md:border-t-0 font-medium text-[#999999] text-sm">
              The figures provided above are estimates and may vary depending on
              the property, location, and individual circumstances.
            </p>
          </div>
        </div>

        <div className="md:flex items-start gap-8">
          <div className="flex flex-col items-start">
            <span className="font-medium text-[#999999] text-sm md:text-base xl:text-xl">
              Listing Price
            </span>
            <span className="font-semibold text-lg md:text-3xl xl:text-4xl">
              $125,00,000
            </span>
          </div>

          <div className="w-full">
            <div className="my-4 md:my-0 px-3 py-3 border border-[#262626] rounded-lg">
              <div className="flex justify-between items-center my-2 md:px-3">
                <p>Additional Fees</p>
                <button className="bg-[#1a1a1a] px-2 py-2 border border-[#262626] rounded-lg">
                  Learn More
                </button>
              </div>
              <div className="flex md:flex-row flex-col flex-wrap divide-[#262626] w-full">
                {[
                  {
                    name: 'Property Transfer Tax',
                    amount: '$25000',
                    description: 'Based on sales price and local regulation',
                  },
                  {
                    name: 'Homeowners Association Fee',
                    amount: '$500',
                    description: 'Monthly fee for community maintenance',
                  },
                  {
                    name: 'Inspection Fee',
                    amount: '$300',
                    description: 'One-time fee for property inspection',
                  },
                  {
                    name: 'Title Insurance',
                    amount: '$1500',
                    description: 'Protects against title defects',
                  },
                  {
                    name: 'Legal Fees',
                    amount: '$2000',
                    description: 'Covers legal documentation and services',
                  },
                ].map((fee, index) => (
                  <div
                    className="md:px-3 py-2 border-[#262626] border-t w-full md:w-1/2"
                    key={index}
                  >
                    <span className="text-[#999999] text-sm">{fee.name}</span>
                    <div className="flex flex-row items-center gap-2 my-2">
                      <span className="font-semibold text-lg">
                        {fee.amount}
                      </span>
                      <span className="bg-[#1a1a1a] px-2 py-1 border border-[#262626] rounded-lg md:rounded-2xl text-[#999999] text-sm">
                        {fee.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-4 px-3 py-3 border border-[#262626] rounded-lg">
              <div className="flex justify-between items-center my-2 md:px-3">
                <p>Monthly Costs</p>
                <button className="bg-[#1a1a1a] px-2 py-2 border border-[#262626] rounded-lg">
                  Learn More
                </button>
              </div>
              <div className="flex flex-col divide-[#262626] w-full">
                {[
                  {
                    name: 'Home Inspection',
                    amount: '$500',
                    description: 'Recommended for due diligence',
                  },
                  {
                    name: 'Property Insurance ',
                    amount: '$500',
                    description:
                      'Annual cost for Comprehensive property insurance',
                  },
                ].map((fee, index) => (
                  <div
                    className="md:px-3 py-2 border-[#262626] border-t w-full"
                    key={index}
                  >
                    <span className="text-[#999999] text-sm">{fee.name}</span>
                    <div className="flex flex-row items-center gap-2 my-2">
                      <span className="font-semibold text-lg">
                        {fee.amount}
                      </span>
                      <span className="bg-[#1a1a1a] px-2 py-1 border border-[#262626] rounded-lg md:rounded-2xl text-[#999999] text-sm">
                        {fee.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-4 px-3 py-3 border border-[#262626] rounded-lg">
              <div className="flex justify-between items-center my-2 md:px-3">
                <p>Total Initial Costs</p>
                <button className="bg-[#1a1a1a] px-2 py-2 border border-[#262626] rounded-lg">
                  Learn More
                </button>
              </div>
              <div className="flex md:flex-row flex-col flex-wrap divide-[#262626] w-full">
                {[
                  {
                    name: 'Listing Price',
                    amount: '$125000',
                    description: 'now',
                  },
                  {
                    name: 'Additional Fees',
                    amount: '$29,700',
                    description: 'Property transfer tax,legal fees',
                  },
                  {
                    name: 'Down Payment',
                    amount: '$25000',
                    description: '20x',
                  },
                  {
                    name: 'Mortgage amount',
                    amount: '$10000',
                    description: 'If Applicable',
                  },
                ].map((fee, index) => (
                  <div
                    className="md:px-3 py-2 border-[#262626] border-t w-full md:w-1/2"
                    key={index}
                  >
                    <span className="text-[#999999] text-sm">{fee.name}</span>
                    <div className="flex flex-row items-center gap-2 my-2">
                      <span className="font-semibold text-lg">
                        {fee.amount}
                      </span>
                      <span className="bg-[#1a1a1a] px-2 py-1 border border-[#262626] rounded-lg md:rounded-2xl text-[#999999] text-sm">
                        {fee.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ's */}
      <div className="grid grid-cols-4 my-10 md:my-16 px-6">
        <div id="div1" className="col-span-4 md:col-span-3 md:mx-3">
          <h3 className="font-semibold text-3xl md:text-4xl xl:text-5xl">
            Frequently Asked Questions
          </h3>
          <p className="my-3 md:my-5 font-medium text-[#999999] text-sm md:text-base xl:text-lg">
            Find answers to common questions about MyPoperty's services,
            property listings, and the real estate process. We're here to
            provide clarity and assist you every step of the way.
          </p>
        </div>

        <div
          id="div3"
          className="flex justify-center items-center col-span-2 md:col-span-1 my-3"
        >
          <button className="flex justify-center items-center bg-[#1A1A1A] md:px-6 py-4 border border-[#262626] rounded-xl w-full md:w-2/3 text-sm xl:text-lg">
            View All FAQ's
          </button>
        </div>

        <div
          id="div2"
          className="col-span-4 py-6 border-[#262626] border-b overflow-hidden"
        >
          <FAQCarousel />
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default PropertyDetails;
