import Footer from '../component/Footer';
import FilteredPropertyCarousel from '../component/FilteredPropertiesCarousel';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface Property {
  _id: string;
  name: string;
  description: string;
  images: string[];
  price: string;
  location: string;
  bedroom: number;
  bathroom: number;
}

const Properties = () => {
  const [allProperties, setAllProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useState({
    searchTerm: '',
    location: '',
    propertyType: '',
    priceRange: '',
    bedrooms: '',
    bathrooms: '',
  });

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/property/all`
        );
        setAllProperties(response.data.properties);
        setFilteredProperties(response.data.properties);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleSearch = () => {
    const filtered = allProperties.filter((property) => {
      const matchLocation =
        !searchParams.location ||
        property.location.toLowerCase() === searchParams.location.toLowerCase();

      const matchPriceRange =
        !searchParams.priceRange ||
        (searchParams.priceRange === '0-50' &&
          parseFloat(property.price) < 500000) ||
        (searchParams.priceRange === '50-100' &&
          parseFloat(property.price) >= 500000 &&
          parseFloat(property.price) < 1000000) ||
        (searchParams.priceRange === '100-200' &&
          parseFloat(property.price) >= 1000000 &&
          parseFloat(property.price) < 2000000) ||
        (searchParams.priceRange === '200+' &&
          parseFloat(property.price) >= 2000000);

      const matchSearchTerm =
        !searchParams.searchTerm ||
        property.name
          .toLowerCase()
          .includes(searchParams.searchTerm.toLowerCase());

      const matchBedrooms =
        !searchParams.bedrooms ||
        (searchParams.bedrooms === '1' && Number(property.bedroom) === 1) ||
        (searchParams.bedrooms === '2' && Number(property.bedroom) === 2) ||
        (searchParams.bedrooms === '3' && Number(property.bedroom) === 3) ||
        (searchParams.bedrooms === '4+' && Number(property.bedroom) >= 4);

      const matchBathrooms =
        !searchParams.bathrooms ||
        (searchParams.bathrooms === '1' && Number(property.bathroom) === 1) ||
        (searchParams.bathrooms === '2' && Number(property.bathroom) === 2) ||
        (searchParams.bathrooms === '3' && Number(property.bathroom) === 3) ||
        (searchParams.bathrooms === '4+' && Number(property.bathroom) >= 4);

      return (
        matchLocation &&
        matchPriceRange &&
        matchSearchTerm &&
        matchBedrooms &&
        matchBathrooms
      );
    });

    setFilteredProperties(filtered);
    console.log(filtered);
  };

  return (
    <>
      {/* find property banner */}
      <div className="flex flex-col w-full">
        <div className="bg-gradient-to-r from-[#262626] from-0% md:px-8 py-4 md:py-10 border-[#262626] border-b">
          <div className="mx-4 mt-6 mb-3 md:w-[85%]">
            <h3 className="font-semibold text-3xl md:text-4xl xl:text-5xl">
              Find Your Dream Property
            </h3>
            <p className="my-6 font-medium text-gray-400 text-sm md:text-base xl:text-lg">
              Welcome to MyProperty, where your dream property awaits in every
              corner of our beautiful world. Explore our curated selection of
              properties, each offering a unique story and a chance to redefine
              your life. With categories to suit every dreamer, your journey
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center px-4 py-3 w-full md:-translate-y-1/3">
          <div className="flex justify-between items-center bg-[#141414] shadow-[0_0_10px_5px_#262626] md:shadow-[0_0_1px_10px_#1A1A1A] mt-4 px-2 py-3 border border-[#262626] rounded-xl md:rounded-none md:rounded-t-xl w-full md:w-[70%]">
            <input
              type="text"
              className="px-2 py-2 focus:outline-none w-2/3 h-full text-sm"
              placeholder="Search For A Property"
              value={searchParams.searchTerm}
              onChange={(e) =>
                setSearchParams((prev) => ({
                  ...prev,
                  searchTerm: e.target.value,
                }))
              }
            />{' '}
            <div>
              <img
                src="./message-button.png"
                alt=""
                className="w-12 md:w-8 h-12 md:h-8"
              />
            </div>
          </div>

          <div className="bg-[#1A1A1A] my-6 md:my-0 px-4 py-4 rounded-xl w-full md:w-[80%]">
            <div className="flex md:flex-row flex-col md:space-x-4 space-y-4 md:space-y-0">
              <select
                className="bg-[#141414] px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full md:w-1/4 text-[#999999] text-sm"
                value={searchParams.location}
                onChange={(e) =>
                  setSearchParams((prev) => ({
                    ...prev,
                    location: e.target.value,
                  }))
                }
              >
                <option value="">Location</option>
                <option value="mumbai">Mumbai</option>
                <option value="pune">Pune</option>
                <option value="chennai">Chennai</option>
                <option value="delhi">Delhi</option>
              </select>

              <select
                className="bg-[#141414] px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full md:w-1/4 text-[#999999] text-sm"
                value={searchParams.priceRange}
                onChange={(e) =>
                  setSearchParams((prev) => ({
                    ...prev,
                    priceRange: e.target.value,
                  }))
                }
              >
                <option value="">Price Range</option>
                <option value="0-50">0 - 50 Lakhs</option>
                <option value="50-100">50 - 100 Lakhs</option>
                <option value="100-200">100 - 200 Lakhs</option>
                <option value="200+">200+ Lakhs</option>
              </select>

              <select
                className="bg-[#141414] px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full md:w-1/4 text-[#999999] text-sm"
                value={searchParams.bedrooms}
                onChange={(e) =>
                  setSearchParams((prev) => ({
                    ...prev,
                    bedrooms: e.target.value,
                  }))
                }
              >
                <option value="">Bedrooms</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4+">4+ Bedrooms</option>
              </select>

              <select
                className="bg-[#141414] px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full md:w-1/4 text-[#999999] text-sm"
                value={searchParams.bathrooms}
                onChange={(e) =>
                  setSearchParams((prev) => ({
                    ...prev,
                    bathrooms: e.target.value,
                  }))
                }
              >
                <option value="">Bathrooms</option>
                <option value="1">1 Bathroom</option>
                <option value="2">2 Bathrooms</option>
                <option value="3">3 Bathrooms</option>
                <option value="4+">4+ Bathrooms</option>
              </select>
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleSearch}
                className="bg-[#703BF7] px-6 py-3 rounded-lg text-white"
              >
                Search Properties
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Possibilities section */}
      <div className="grid grid-cols-4 my-10 px-6">
        <div id="div1" className="col-span-4 md:col-span-3 md:mx-3">
          <h3 className="font-semibold text-3xl md:text-4xl xl:text-5xl">
            Discover a World of Possibilities
          </h3>
          <p className="my-3 md:my-5 font-medium text-[#999999] text-sm md:text-base xl:text-lg">
            Our portfolio of properties is as diverse as your dreams. Explore
            the following categories to find the perfect property that resonates
            with your vision of home
          </p>
        </div>

        <div
          id="div2"
          className="col-span-4 py-6 border-[#262626] border-b overflow-hidden"
        >
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <FilteredPropertyCarousel properties={filteredProperties} />
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Properties;
