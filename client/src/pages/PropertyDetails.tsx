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
      const maxIndex = Math.floor(images.length / 2) - 1;
      setCurrentIndex(currentIndex < maxIndex ? currentIndex + 1 : 0);
    } else {
      setCurrentIndex((currentIndex + 1) % images.length);
    }
  };

  const prev = () => {
    if (itemsPerView === 2) {
      const maxIndex = Math.floor(images.length / 2) - 1;
      setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : maxIndex);
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
        <div className="flex flex-col items-center bg-[#1A1A1A] px-3 py-3 border border-[#262626] rounded-xl">
          <div className="w-full overflow-hidden">
            <div
              className="flex w-full transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
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
          <div className="flex justify-between items-center bg-[#141414] mt-2 px-1 py-1 rounded-full w-full md:w-[20%]">
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
      </div>
    </>
  );
};

export default PropertyDetails;
