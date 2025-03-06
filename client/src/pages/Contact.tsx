import Footer from '../component/Footer';

const Contact = () => {
  return (
    <>
      <div>
        <div className="bg-gradient-to-r from-[#262626] from-0% md:px-8 py-4 md:py-10 border-[#262626] border-b">
          <div className="mx-4 mt-6 mb-3 md:w-[85%]">
            <h3 className="font-semibold text-3xl md:text-4xl xl:text-5xl">
              Get in Touch with Estatein
            </h3>
            <p className="my-6 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
              Welcome to MyProperty's Contact Us page. We're here to assist you
              with any inquiries, requests, or feedback you may have. Whether
              you're looking to buy or sell a property, explore investment
              opportunities, or simply want to connect, we're just a message
              away. Reach out to us, and let's start a conversation.
            </p>
          </div>
        </div>
        <div className="my-6 px-4 md:px-2 py-5">
          <div className="gap-4 grid grid-cols-2 md:grid-cols-4 shadow-[0_0_25px_10px_#262626] px-2 py-3 border border-[#262626] rounded-2xl md:rounded-none w-full">
            {[
              { text: 'info@myproperty.com', icon: 'ri-mail-line' },
              { text: '+1(123) 456-7890', icon: 'ri-phone-line' },
              { text: 'Main Headquareters', icon: 'ri-map-pin-line' },
              { text: 'LinkedIn', icon: 'ri-links-line' },
            ].map((item, index) => (
              <div key={index} className="h-full">
                <div className="flex flex-col justify-between items-center bg-[#1A1A1A] px-2 py-4 border border-[#262626] rounded-lg h-full">
                  <i className={`text-purple-500 text-3xl ${item.icon}`}></i>
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

      {/* let's connect */}
      <div className="my-10 md:my-16 px-6 md:px-9">
        <div className="">
          <h3 className="font-semibold text-3xl md:text-4xl xl:text-5xl">
            Let's Connect
          </h3>
          <p className="my-3 md:my-5 font-medium text-[#999999] text-sm md:text-base xl:text-lg">
            We're excited to connect with you and learn more about your real
            estate goals. Use the form below to get in touch with MyProperty.
            Whether you're a prospective client, partner, or simply curious
            about our services, we're here to answer your questions and provide
            the assistance you need.
          </p>
        </div>
        <div className="flex flex-wrap px-4 py-4 border border-[#262626] rounded-xl w-full">
          <label
            className="flex flex-col my-2 px-2 w-full md:w-1/3"
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
            className="flex flex-col my-2 px-2 w-full md:w-1/3"
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
            className="flex flex-col my-2 px-2 w-full md:w-1/3"
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
            className="flex flex-col my-2 px-2 w-full md:w-1/3"
            htmlFor="phone"
          >
            Phone
            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="bg-[#1A1A1A] my-2 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-[#999999] text-sm"
            />
          </label>

          <label
            className="flex flex-col my-2 px-2 w-full md:w-1/3"
            htmlFor="inquiryType"
          >
            Inquiry Type
            <select
              className="bg-[#1A1A1A] my-2 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-[#999999] text-sm"
              id="inquiryType"
            >
              <option value="">Select Inquiry Type</option>
              <option value="buying">Buying</option>
              <option value="selling">Selling</option>
              <option value="investment">Investment</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label
            className="flex flex-col my-2 px-2 w-full md:w-1/3"
            htmlFor="hearAboutUs"
          >
            How did you hear about us?
            <select
              className="bg-[#1A1A1A] my-2 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-[#999999] text-sm"
              id="hearAboutUs"
            >
              <option value="">Select an Option</option>
              <option value="socialMedia">Social Media</option>
              <option value="searchEngine">Search Engine</option>
              <option value="friend">Friend</option>
              <option value="advertisement">Advertisement</option>
              <option value="other">Other</option>
            </select>
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

      {/* discover locations */}
      <div className="my-10 md:my-16 px-6 md:px-9">
        <div className="">
          <h3 className="font-semibold text-3xl md:text-4xl xl:text-5xl">
            Discover Our Office Locations
          </h3>
          <p className="my-3 md:my-5 font-medium text-[#999999] text-sm md:text-base xl:text-lg">
            Estatein is here to serve you across multiple locations. Whether
            you're looking to meet our team, discuss real estate opportunities,
            or simply drop by for a chat, we have offices conveniently located
            to serve your needs. Explore the categories below to find the
            Estatein office nearest to you
          </p>
        </div>

        <div className="flex md:flex-row flex-col gap-4 my-2">
          {[
            {
              type: 'Main Headquareters',
              location: '123 MyProperty Plaza, City Center,Metropolis',
              description:
                'Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.',
            },
            {
              type: 'Regional Offices',
              location: '456 Urban Avenue, Downtown District, Metropolis',
              description:
                "MyPoperty's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
            },
          ].map((item, index) => {
            return (
              <div
                className="px-3 py-3 border border-[#262626] rounded-lg"
                key={index}
              >
                <span className="font-medium text-sm xl:text-lg">
                  {item.type}
                </span>
                <h4 className="my-2 font-semibold text-xl md:text-2xl xl:text-3xl">
                  {' '}
                  {item.location}
                </h4>
                <p className="my-2 text-[#999999] text-sm md:text-base xl:text-lg">
                  {item.description}
                </p>
                <div className="flex flex-row flex-wrap items-center gap-2 my-2">
                  <span className="bg-[#1A1A1A] px-2 py-1 border border-[#262626] rounded-2xl text-sm xl:text-lg">
                    info@myproperty.com
                  </span>
                  <span className="bg-[#1A1A1A] px-3 py-1 border border-[#262626] rounded-2xl text-sm xl:text-lg">
                    +123 456 7890
                  </span>
                  <span className="bg-[#1A1A1A] px-3 py-1 border border-[#262626] rounded-2xl text-sm xl:text-lg">
                    Metropolis
                  </span>
                </div>
                <button className="bg-[#703BF7] my-3 py-2 rounded-lg w-full text-sm xl:text-lg">
                  Get Direction
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Contact;
