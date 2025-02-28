import { useState, useEffect } from 'react';

const properties = [
  {
    id: 1,
    title: 'Rustic Retreat Cottage',
    description:
      'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
    image: './property-1.png',
    price: '$550,000',
    tags: ['4-Bedroom', '3-Bathroom', 'Villa'],
  },
  {
    id: 2,
    title: 'Modern Luxury Villa',
    description:
      'A beautiful modern villa with scenic views and premium amenities...',
    image: './property-1.png',
    price: '$720,000',
    tags: ['5-Bedroom', '4-Bathroom', 'Luxury'],
  },
  {
    id: 3,
    title: 'Cozy Family Home',
    description:
      'Perfect for families, this spacious home has a warm and inviting feel...',
    image: './property-1.png',
    price: '$480,000',
    tags: ['3-Bedroom', '2-Bathroom', 'Home'],
  },
  {
    id: 4,
    title: 'Beachfront Paradise',
    description:
      'Wake up to the sound of waves in this stunning beachfront home...',
    image: './property-1.png',
    price: '$1,200,000',
    tags: ['6-Bedroom', '5-Bathroom', 'Beachfront'],
  },
];

export default function PropertyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 768) {
        setItemsPerView(3); // Show 3 items on md: and larger
      } else {
        setItemsPerView(1); // Show 1 item on smaller screens
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const next = () => {
    if (currentIndex + itemsPerView < properties.length) {
      setCurrentIndex(currentIndex + itemsPerView);
    }
  };

  const prev = () => {
    if (currentIndex - itemsPerView >= 0) {
      setCurrentIndex(currentIndex - itemsPerView);
    }
  };

  return (
    <div className="relative mx-auto pt-4 w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(100 / itemsPerView) * currentIndex}%)`,
          }}
        >
          {properties.map((property) => (
            <div
              key={property.id}
              className="flex-shrink-0 px-2 w-full md:w-1/3"
            >
              <div className="flex flex-col items-center p-6 border border-gray-700 rounded-xl">
                <img src={property.image} alt="" className="w-full" />
                <h6 className="mt-5 w-full font-semibold text-lg md:text-xl">
                  {property.title}
                </h6>
                <p className="mt-2 font-medium text-[#999999] text-sm md:text-base">
                  {property.description}
                </p>

                <div className="flex flex-row flex-wrap justify-evenly items-center my-6 w-full">
                  {property.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-[#1A1A1A] px-3 py-2 border border-gray-700 rounded-3xl font-medium text-sm xl:text-lg"
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-col items-start">
                    <p className="font-medium text-[#999999] text-sm xl:text-lg">
                      Price
                    </p>
                    <span className="font-semibold text-lg md:text-xl xl:text-2xl">
                      {property.price}
                    </span>
                  </div>
                  <button className="bg-[#703BF7] my-2 px-2 md:px-8 py-4 rounded-lg font-medium text-sm xl:text-lg">
                    View Property Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 flex justify-between items-center">
        <button
          onClick={prev}
          className="bg-white/80 hover:bg-white shadow p-1 rounded-full text-gray-800"
        >
          <i className="ri-arrow-left-line bg-gray-400 px-1 md:px-2 md:py-1 rounded-2xl md:text-lg"></i>
        </button>
        <button
          onClick={next}
          className="bg-white/80 hover:bg-white shadow p-1 rounded-full text-gray-800"
        >
          <i className="ri-arrow-right-line bg-gray-400 px-1 md:px-2 md:py-1 rounded-2xl md:text-lg"></i>
        </button>
      </div>
    </div>
  );
}
