import Footer from '../component/Footer';

const Services = () => {
  return (
    <>
      {/* service banner */}
      <div>
        <div className="bg-gradient-to-r from-[#262626] from-0% md:px-8 py-4 md:py-10 border-[#262626] border-b">
          <div className="mx-4 mt-6 mb-3 md:w-[85%]">
            <h3 className="font-semibold text-3xl md:text-4xl xl:text-5xl">
              Elevate Your Real Estate Experience
            </h3>
            <p className="my-6 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
              Welcome to MyProperty, where your real estate aspirations meet
              expert guidance. Explore our comprehensive range of services, each
              designed to cater to your unique needs and dreams.
            </p>
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

      {/* property value */}
      <div className="flex flex-col md:px-8 py-4 md:py-10 w-full">
        <div className="flex items-center">
          <div className="mx-4 mt-6 mb-3 md:w-[85%]">
            <h3 className="font-semibold text-3xl md:text-4xl xl:text-5xl">
              Unlock Property Value
            </h3>
            <p className="my-6 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
              Selling your property should be a rewarding experience, and at
              Estatein, we make sure it is. Our Property Selling Service is
              designed to maximize the value of your property, ensuring you get
              the best deal possible. Explore the categories below to see how we
              can help you at every step of your selling journey
            </p>
          </div>
        </div>

        <div className="md:flex flex-wrap px-4 py-3 w-full">
          {[
            {
              title: 'Valuation Mastery',
              description:
                'Discover the true worth of your property with our expert valuation services.',
              icon: 'ri-price-tag-3-line',
            },
            {
              title: 'Strategic Marketing',
              description:
                'Selling a property requires more than just a listing; it demands a strategic marketing.',
              icon: 'ri-advertisement-line',
            },
            {
              title: 'Negotiation Wizardry',
              description:
                'Negotiating the best deal is an art, and our negotiation experts are masters of it.',
              icon: 'ri-hand-coin-line',
            },
            {
              title: 'Closing Success',
              description:
                'A successful sale is not complete until the closing. We guide you through the intricate closing process.',
              icon: 'ri-check-double-line',
            },
          ].map((item, index) => {
            return (
              <div key={index} className="md:px-2 py-2 w-full md:w-1/3 h-full">
                <div className="px-4 py-4 border border-[#262626] rounded-lg">
                  <div className="flex items-center gap-4">
                    <i className={`${item.icon} text-purple-500 text-3xl`} />
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                  </div>
                  <p className="mt-3 font-medium text-[#999999] text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="bg-gradient-to-r to-[#333333] to-100% my-3 md:my-0 px-4 py-4 border border-[#3d3d3d] rounded-lg w-full md:w-2/3">
            <div className="md:flex justify-between items-center">
              <h4 className="font-bold text-xl">
                Unlock the value of Your Property
              </h4>
              <button className="bg-[#141414] my-3 py-2 border border-[#3d3d3d] rounded-lg w-full md:w-[20%] text-sm">
                Learn More
              </button>
            </div>
            <p className="font-medium text-[#999999] text-sm">
              Ready to unlock the true value of your property? Explore our
              Property Selling Service categories and let us help you achieve
              the best deal possible for your valuable asset.
            </p>
          </div>
        </div>
      </div>

      {/* property management */}
      <div className="flex flex-col md:px-8 py-4 md:py-10 w-full">
        <div className="flex items-center">
          <div className="mx-4 mt-6 mb-3 md:w-[85%]">
            <h3 className="font-semibold text-3xl md:text-4xl xl:text-5xl">
              Effortless Property Management
            </h3>
            <p className="my-6 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
              Owning a property should be a pleasure, not a hassle. Estatein's
              Property Management Service takes the stress out of property
              ownership, offering comprehensive solutions tailored to your
              needs. Explore the categories below to see how we can make
              property management effortless for you
            </p>
          </div>
        </div>

        <div className="md:flex flex-wrap px-4 py-3 w-full">
          {[
            {
              title: 'Tenant Harmony',
              description:
                'Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.',
              icon: 'ri-user-line',
            },
            {
              title: 'Maintainance Ease',
              description:
                'Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.',
              icon: 'ri-tools-line',
            },
            {
              title: 'Financial Peace of Mind',
              description:
                'Managing property finances can be complex. Our financial experts take care of rent collection',
              icon: 'ri-money-dollar-circle-line',
            },
            {
              title: 'Legal Guardian',
              description:
                'Stay compliant with property laws and regulations effortlessly.',
              icon: 'ri-shield-check-line',
            },
          ].map((item, index) => {
            return (
              <div key={index} className="md:px-2 py-2 w-full md:w-1/3 h-full">
                <div className="px-4 py-4 border border-[#262626] rounded-lg">
                  <div className="flex items-center gap-4">
                    <i className={`${item.icon} text-purple-500 text-3xl`} />
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                  </div>
                  <p className="mt-3 font-medium text-[#999999] text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="bg-gradient-to-r to-[#333333] to-100% my-3 md:my-0 px-4 py-4 border border-[#3d3d3d] rounded-lg w-full md:w-2/3">
            <div className="md:flex justify-between items-center">
              <h4 className="font-bold text-xl">
                Experience Effortless Property Management
              </h4>
              <button className="bg-[#141414] my-3 py-2 border border-[#3d3d3d] rounded-lg w-full md:w-[20%] text-sm">
                Learn More
              </button>
            </div>
            <p className="font-medium text-[#999999] text-sm">
              Ready to experience hassle-free property management? Explore our
              Property Management Service categories and let us handle the
              complexities while you enjoy the benefits of property ownership.
            </p>
          </div>
        </div>
      </div>

      {/* informed decisions */}
      <div className="flex md:flex-row flex-col md:px-8 py-4 md:py-10 w-full">
        <div className="px-4 md:w-3/8">
          <div className="mt-6 mb-3 w-full">
            <h3 className="font-semibold text-3xl md:text-4xl xl:text-5xl">
              Smart Investments, Informed Decisions
            </h3>
            <p className="my-6 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
              Building a real estate portfolio requires a strategic approach.
              Estatein's Investment Advisory Service empowers you to make smart
              investments and informed decisions.
            </p>
          </div>
          <div className="bg-gradient-to-r to-[#333333] to-100% my-3 md:my-0 px-4 py-4 border border-[#3d3d3d] rounded-lg w-full">
            <h4 className="font-bold text-xl">
              Unlock Your Investment Potential
            </h4>
            <div className="flex flex-col md:flex-col-reverse">
              <button className="bg-[#141414] my-3 py-2 border border-[#3d3d3d] rounded-lg w-full text-sm">
                Learn More
              </button>
              <p className="md:py-2 font-medium text-[#999999] text-sm">
                Ready to experience hassle-free property management? Explore our
                Property Management Service categories and let us handle the
                complexities while you enjoy the benefits of property ownership.
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex flex-wrap bg-[#262626] px-4 py-3 w-full md:w-5/8">
          {[
            {
              title: 'Market Insight',
              description:
                'Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions',
              icon: 'ri-line-chart-line',
            },
            {
              title: 'ROI Assessment',
              description:
                'Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments',
              icon: 'ri-pie-chart-line',
            },
            {
              title: 'Customized Strategies',
              description:
                'Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs',
              icon: 'ri-lightbulb-line',
            },
            {
              title: 'Diversification Mastery',
              description:
                'Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations',
              icon: 'ri-stack-line',
            },
          ].map((item, index) => {
            return (
              <div key={index} className="md:px-1 py-1 w-full md:w-1/2">
                <div className="flex flex-col justify-center bg-[#141414] px-4 py-4 border border-[#3d3d3d] rounded-lg h-full">
                  <div className="flex items-center gap-4">
                    <i className={`${item.icon} text-purple-500 text-3xl`} />
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                  </div>
                  <p className="mt-3 font-medium text-[#999999] text-sm">
                    {item.description}
                  </p>
                </div>
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

export default Services;
