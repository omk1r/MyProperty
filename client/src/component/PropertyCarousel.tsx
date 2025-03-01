import { useState, useEffect } from 'react';

interface Property {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  tags: string[];
}

const properties: Property[] = [
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
  {
    id: 5,
    title: 'Beachfront Paradise',
    description:
      'Wake up to the sound of waves in this stunning beachfront home...',
    image: './property-1.png',
    price: '$1,200,000',
    tags: ['6-Bedroom', '5-Bathroom', 'Beachfront'],
  },
  {
    id: 6,
    title: 'Beachfront Paradise',
    description:
      'Wake up to the sound of waves in this stunning beachfront home...',
    image: './property-1.png',
    price: '$1,200,000',
    tags: ['6-Bedroom', '5-Bathroom', 'Beachfront'],
  },
  {
    id: 7,
    title: 'Beachfront Paradise',
    description:
      'Wake up to the sound of waves in this stunning beachfront home...',
    image: './property-1.png',
    price: '$1,200,000',
    tags: ['6-Bedroom', '5-Bathroom', 'Beachfront'],
  },
  {
    id: 8,
    title: 'Beachfront Paradise',
    description:
      'Wake up to the sound of waves in this stunning beachfront home...',
    image: './property-1.png',
    price: '$1,200,000',
    tags: ['6-Bedroom', '5-Bathroom', 'Beachfront'],
  },
];

export default function PropertyCarousel() {
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
    if (currentIndex + itemsPerView < properties.length) {
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
      <div className="px-4 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(100 / itemsPerView) * currentIndex}%)`,
          }}
        >
          {properties.map((property) => (
            <div
              key={property.id}
              className="flex-shrink-0 px-2 w-full md:w-1/2 lg:w-1/3"
            >
              <div className="flex flex-col items-center px-4 md:px-6 xl:px-8 py-6 md:py-8 xl:py-10 border border-[#262626] rounded-xl">
                <img src={property.image} alt="" className="w-full" />
                <h6 className="mt-5 w-full font-semibold text-lg md:text-xl">
                  {property.title}
                </h6>
                <p className="mt-2 w-full font-medium text-[#999999] text-sm md:text-base">
                  {property.description}
                </p>

                <div className="flex flex-row flex-wrap justify-start items-center gap-2 my-6 w-full">
                  {property.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-[#1A1A1A] px-3 py-2 border border-[#262626] rounded-3xl font-medium text-sm xl:text-lg"
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                <div className="flex flex-row justify-between items-center gap-2 w-full">
                  <div className="flex flex-col items-start">
                    <p className="font-medium text-[#999999] text-sm xl:text-lg">
                      Price
                    </p>
                    <span className="font-semibold text-lg md:text-xl xl:text-2xl">
                      {property.price}
                    </span>
                  </div>
                  <button className="bg-[#703BF7] my-2 px-2 py-4 rounded-lg font-medium text-sm xl:text-lg">
                    View Property Details
                  </button>
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
