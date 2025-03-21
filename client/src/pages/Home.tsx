import { useNavigate } from 'react-router-dom';
import FAQCarousel from '../component/FAQCarousel';
import Footer from '../component/Footer';
import PropertyCarousel from '../component/PropertyCarousel';
import TestimonialCarousel from '../component/TestimonialCarousal';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* discover banner */}
      <div>
        <div className="flex md:flex-row-reverse flex-col w-full">
          <div className="mx-3 md:mx-0 my-10 md:my-0 rounded-2xl md:rounded-none md:w-1/2 overflow-hidden">
            <img
              src="./discover-banner-buiding.png"
              alt=""
              className="w-full h-full max-h-[700px] object-cover"
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
              <button className="my-2 md:px-4 py-4 border border-[#262626] rounded-lg font-medium text-sm xl:text-lg">
                Learn More
              </button>
              <button
                onClick={() => navigate('/properties')}
                className="bg-[#703BF7] my-2 md:px-4 py-4 rounded-lg font-medium text-sm xl:text-lg cursor-pointer"
              >
                Browse Properties
              </button>
            </div>

            <div className="flex flex-wrap md:flex-nowrap px-2 py-3 w-full">
              <div className="my-2 px-2 w-1/2 md:w-1/3">
                <div className="flex flex-col justify-center md:items-start bg-[#1A1A1A] px-4 py-8 md:py-4 border border-[#262626] rounded-lg h-full md:text-left text-center">
                  <h4 className="font-bold text-2xl md:text-3xl xl:text-4xl">
                    200+
                  </h4>
                  <p className="pt-2 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
                    Happy Customers
                  </p>
                </div>
              </div>
              <div className="my-2 px-2 w-1/2 md:w-1/3">
                <div className="flex flex-col justify-center md:items-start bg-[#1A1A1A] px-4 py-8 md:py-4 border border-[#262626] rounded-lg h-full md:text-left text-center">
                  <h4 className="font-bold text-2xl md:text-3xl xl:text-4xl">
                    10k+
                  </h4>
                  <p className="pt-2 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
                    Properties For Clients
                  </p>
                </div>
              </div>
              <div className="my-2 px-2 w-full md:w-1/3">
                <div className="flex flex-col justify-center md:items-start bg-[#1A1A1A] px-4 py-8 md:py-4 border border-[#262626] rounded-lg h-full md:text-left text-center">
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
          <div className="gap-4 grid grid-cols-2 md:grid-cols-4 shadow-[0_0_25px_10px_#262626] px-2 py-3 border border-[#262626] rounded-2xl md:rounded-none w-full">
            {[
              { text: 'Find Your Dream Home', icon: 'ri-home-line' },
              { text: 'Unlock Property Value', icon: 'ri-key-line' },
              { text: 'Property Management', icon: 'ri-settings-3-line' },
              { text: 'Smart Investment for you', icon: 'ri-bar-chart-line' },
            ].map((item, index) => (
              <div key={index} className="h-full">
                <div className="flex flex-col justify-between items-center bg-[#1A1A1A] px-2 py-4 border border-[#262626] rounded-lg h-full">
                  <i className={`${item.icon} text-purple-500 text-3xl`} />
                  <div>
                    <p className="py-3 font-semibold text-sm md:text-base xl:text-xl text-center">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* featured properties */}
      <div className="grid grid-cols-4 my-10 md:my-16 px-6">
        <div id="div1" className="col-span-4 md:col-span-3 md:mx-3">
          <h3 className="font-semibold text-3xl md:text-4xl xl:text-5xl">
            Featured Properties
          </h3>
          <p className="my-3 md:my-5 font-medium text-[#999999] text-sm md:text-base xl:text-lg">
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through MyProperty.
          </p>
        </div>

        <div
          id="div3"
          className="flex justify-center items-center col-span-2 md:col-span-1 my-3"
        >
          <button className="flex justify-center items-center bg-[#1A1A1A] md:px-6 py-4 border border-[#262626] rounded-xl w-full md:w-2/3 text-sm xl:text-lg">
            View All Properties
          </button>
        </div>

        <div
          id="div2"
          className="col-span-4 py-6 border-[#262626] border-b overflow-hidden"
        >
          <PropertyCarousel />
        </div>
      </div>

      {/* testimonials */}
      <div className="grid grid-cols-4 my-10 md:my-16 px-6">
        <div id="div1" className="col-span-4 md:col-span-3 md:mx-3">
          <h3 className="font-semibold text-3xl md:text-4xl xl:text-5xl">
            What Our Clients Say
          </h3>
          <p className="my-3 md:my-5 font-medium text-[#999999] text-sm md:text-base xl:text-lg">
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose MyPoperty for their real estate
            needs.
          </p>
        </div>

        <div
          id="div3"
          className="flex justify-center items-center col-span-2 md:col-span-1 my-3"
        >
          <button className="flex justify-center items-center bg-[#1A1A1A] md:px-6 py-4 border border-[#262626] rounded-xl w-full md:w-2/3 text-sm xl:text-lg">
            View All Testimonials
          </button>
        </div>

        <div
          id="div2"
          className="col-span-4 py-6 border-[#262626] border-b overflow-hidden"
        >
          <TestimonialCarousel />
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

export default Home;
