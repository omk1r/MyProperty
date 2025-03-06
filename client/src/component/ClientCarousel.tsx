import { useState, useEffect } from 'react';

interface Client {
  time: string;
  name: string;
  domain: string;
  category: string;
  feedback: string;
}

const clients: Client[] = [
  {
    time: 'Since 2019',
    name: 'ABC Corporation',
    domain: 'Commercial Real Estate',
    category: 'Luxury Home Development',
    feedback:
      "MyPoperty's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    time: 'Since 2020',
    name: 'XYZ Enterprises',
    domain: 'Residential Real Estate',
    category: 'Affordable Housing',
    feedback:
      'The team at MyPoperty helped us secure a great location for our new housing project. Their market knowledge is top-notch.',
  },
  {
    time: 'Since 2018',
    name: 'LMN Holdings',
    domain: 'Industrial Real Estate',
    category: 'Warehouse Development',
    feedback:
      "MyPoperty's dedication and attention to detail made our warehouse development project a success. We couldn't have done it without them.",
  },
  {
    time: 'Since 2021',
    name: 'OPQ Group',
    domain: 'Retail Real Estate',
    category: 'Shopping Mall Development',
    feedback:
      'Thanks to MyPoperty, we found the perfect spot for our new shopping mall. Their team is professional and highly skilled.',
  },
  {
    time: 'Since 2017',
    name: 'RST Ventures',
    domain: 'Mixed-Use Real Estate',
    category: 'Urban Development',
    feedback:
      "MyPoperty's innovative approach to urban development helped us create a vibrant mixed-use community. Highly recommended!",
  },
];

export default function ClientCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [itemsPerView, setItemsPerView] = useState<number>(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // Show 3 items on md: and larger
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1); // Show 1 item on smaller screens
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const next = () => {
    if (currentIndex + itemsPerView < clients.length) {
      setCurrentIndex(currentIndex + itemsPerView);
      console.log(currentIndex);
    }
  };

  const prev = () => {
    if (currentIndex - itemsPerView >= 0) {
      setCurrentIndex(currentIndex - itemsPerView);
    }
  };

  return (
    <div className="relative mx-auto pt-4 w-full">
      <div className="px-4 py-4 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(100 / itemsPerView) * currentIndex}%)`,
          }}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2 w-full md:w-1/2 lg:w-1/3"
            >
              <div className="flex flex-col items-start shadow-[0_0_10px_5px_#262626] px-4 md:px-6 xl:px-8 py-6 md:py-8 xl:py-10 border border-[#262626] rounded-xl h-full">
                <p className="font-medium text-[#999999] text-sm md:text-base xl:text-lg">
                  {client.time}
                </p>
                <h3 className="my-3 font-semibold text-xl md:text-2xl xl:text-3xl">
                  {client.name}
                </h3>

                <div className="flex justify-center items-center bg-[#1A1A1A] px-2 py-3 ps-6 border border-[#262626] rounded-2xl w-full">
                  Visit Website
                </div>

                <div className="flex items-center my-5 divide-x divide-[#262626]">
                  <div className="px-2 py-2 w-1/2">
                    <p className="font-medium text-[#999999] text-xs xl:text-lg">
                      Domain
                    </p>
                    <p className="font-medium text-sm md:text-base xl:text-xl">
                      {client.domain}
                    </p>
                  </div>
                  <div className="px-2 py-2 w-1/2">
                    <p className="font-medium text-[#999999] text-xs xl:text-lg">
                      Category
                    </p>
                    <p className="font-medium text-sm md:text-base xl:text-xl">
                      {client.category}
                    </p>
                  </div>
                </div>

                <div className="px-4 py-3 border border-[#262626] rounded-xl">
                  <p className="font-medium text-[#999999] text-sm md:text-base xl:text-lg">
                    What They Said 🤗
                  </p>
                  <p className="mt-3 font-medium text-sm md:text-base xl:text-lg">
                    {client.feedback}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 flex justify-between items-center">
        <button onClick={prev} className="shadow rounded-full text-gray-800">
          <i className="ri-arrow-left-line bg-gray-400 px-1 md:px-2 py-1 md:py-2 rounded-2xl md:text-lg"></i>
        </button>
        <button onClick={next} className="shadow rounded-full text-gray-800">
          <i className="ri-arrow-right-line bg-gray-400 px-1 md:px-2 py-1 md:py-2 rounded-2xl md:text-lg"></i>
        </button>
      </div>
    </div>
  );
}
