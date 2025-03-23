import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Property {
  _id: string;
  name: string;
  location: string;
  description: string;
  images: string[];
  price: string;
  bedroom: string;
  bathroom: string;
  area: string;
}

const BrokerDashboard = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBrokerProperties = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/property/broker-properties`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        setProperties(response.data.properties);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setError('Failed to fetch properties');
      }
    };

    fetchBrokerProperties();
  }, []);

  const handleDeleteProperty = async (id: string) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this property?'
    );
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/property/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setMessage(response.data.message);
      setProperties(properties.filter((property) => property._id !== id));
    } catch (error) {
      console.error('Error deleting property:', error);
      setError('Failed to delete property');
    }
  };

  const handleEditProperty = (id: string) => {
    navigate(`/edit-property/${id}`);
  };

  return (
    <div className="bg-[#141414] p-6 min-h-screen text-white">
      <h1 className="my-6 mb-6 font-semibold text-xl md:text-3xl xl:text-5xl">
        Your Registered Properties
      </h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {message && <p className="text-green-500 text-center">{message}</p>}
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-4">
        {properties.map((property) => (
          <div
            key={property._id}
            className="flex flex-col justify-center items-start bg-[#1A1A1A] px-6 py-4 border border-[#262626] rounded-lg"
          >
            <img
              src={property.images[0]}
              alt={property.name}
              className="mb-4 rounded-md w-full h-40 object-cover"
            />
            <h2 className="font-semibold text-xl">{property.name}</h2>
            <p className="my-2 text-[#999999] text-sm">
              {property.description}
            </p>
            <div className="flex justify-start gap-2 mt-4">
              <button
                onClick={() => handleEditProperty(property._id)}
                className="bg-gradient-to-br hover:bg-gradient-to-bl from-purple-600 to-blue-500 me-2 mb-2 px-5 py-2.5 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-white text-sm text-center cursor-pointer"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProperty(property._id)}
                className="bg-gradient-to-br hover:bg-gradient-to-bl from-pink-500 to-orange-400 me-2 mb-2 px-5 py-2.5 rounded-lg focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium text-white text-sm text-center cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrokerDashboard;
