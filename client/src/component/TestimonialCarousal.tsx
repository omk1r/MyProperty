import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  title: string;
  description: string;
  image: string;
  name: string;
  address: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    title: 'Exceptional Service!',
    description:
      "Our experience with MyPoperty was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    image: './user.png',
    name: 'Wade Warren',
    address: 'USA, California',
    rating: 5,
  },
  {
    id: 2,
    title: 'Smooth and Hassle-Free!',
    description:
      "MyPoperty made the entire home-buying process effortless. From property selection to paperwork, everything was handled professionally. Couldn't be happier!",
    image: './user.png',
    name: 'Jane Cooper',
    address: 'Canada, Toronto',
    rating: 4.8,
  },
  {
    id: 3,
    title: 'Highly Professional Team!',
    description:
      'I was impressed by the expertise and dedication of the MyPoperty team. They truly understood my needs and found me the perfect property within my budget.',
    image: './user.png',
    name: 'Robert Fox',
    address: 'UK, London',
    rating: 4.9,
  },
  {
    id: 4,
    title: 'Great Experience from Start to Finish!',
    description:
      'From the first consultation to the final deal, the experience was seamless. Their market knowledge and customer-first approach were impressive!',
    image: './user.png',
    name: 'Emily Johnson',
    address: 'Australia, Sydney',
    rating: 5,
  },
];

export default function TestimonialCarousel() {
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
    if (currentIndex + itemsPerView < testimonials.length) {
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
      <div className="px-4 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(100 / itemsPerView) * currentIndex}%)`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 px-2 w-full md:w-1/2 lg:w-1/3"
            >
              <div className="flex flex-col items-start px-4 md:px-6 xl:px-8 py-6 md:py-8 xl:py-10 border border-[#262626] rounded-xl h-full">
                <div className="flex items-center">
                  {Array.from(
                    { length: Math.floor(testimonial.rating) },
                    (_, index) => (
                      <i
                        key={index}
                        className="bg-gray-700 mx-1 px-2 py-1 rounded-2xl text-yellow-500 ri-star-line"
                      ></i>
                    )
                  )}
                </div>
                <h5 className="mt-5 font-semibold text-lg md:text-xl xl:text-2xl">
                  {testimonial.title}
                </h5>
                <p className="my-3 font-medium text-sm md:text-base xl:text-lg">
                  {testimonial.description}
                </p>
                <div className="flex flex-row items-center gap-3 my-2">
                  <div className="rounded-full w-12 xl:w-14 h-12 xl:h-14">
                    <img src={testimonial.image} alt="" />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="font-medium md:text-lg xl:text-xl">
                      {testimonial.name}
                    </p>
                    <p className="font-medium text-[#999999] text-sm md:text-base xl:text-lg">
                      {testimonial.address}
                    </p>
                  </div>
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
