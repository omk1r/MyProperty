import { useEffect, useState } from 'react';

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
                className="bg-gradient-to-r from-[#1A1A1A] from-0% my-4 md:my-6 md:my-4 px-2 md:px-3 py-2 border-purple-500 border-l font-medium text-[#999999] text-sm md:text-base xl:text-lg"
                key={index}
              >
                {element}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;
