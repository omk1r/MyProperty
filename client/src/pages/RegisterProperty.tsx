import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../component/Footer';

const RegisterProperty = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [bedroom, setBedroom] = useState('');
  const [bathroom, setBathroom] = useState('');
  const [area, setArea] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleRegisterProperty = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('location', location);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('bedroom', bedroom);
    formData.append('bathroom', bathroom);
    formData.append('area', area);
    images.forEach((image) => formData.append('images', image));

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/property/create`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      console.log('Property registered successfully:', response.data);
      navigate('/properties');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Property registration error:', error.response?.data);
        setError(
          error.response?.data?.message || 'Property registration failed'
        );
      } else {
        console.error('Unexpected error:', error);
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[#141414] px-4 py-8 text-white">
        <div className="bg-[#1A1A1A] px-6 py-8 border border-[#262626] rounded-xl w-full max-w-4xl">
          <h3 className="font-semibold text-3xl md:text-4xl xl:text-5xl text-center">
            Register Property
          </h3>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleRegisterProperty} className="mt-6">
            <label className="flex flex-col my-2 px-2 w-full" htmlFor="name">
              Property Name
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Property Name"
                className="bg-[#1A1A1A] my-2 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-[#999999] text-sm"
                required
              />
            </label>
            <label
              className="flex flex-col my-2 px-2 w-full"
              htmlFor="location"
            >
              Location
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter Location"
                className="bg-[#1A1A1A] my-2 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-[#999999] text-sm"
                required
              />
            </label>
            <label className="flex flex-col my-2 px-2 w-full" htmlFor="price">
              Price
              <input
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter Price"
                className="bg-[#1A1A1A] my-2 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-[#999999] text-sm"
                required
              />
            </label>
            <label
              className="flex flex-col my-2 px-2 w-full"
              htmlFor="description"
            >
              Description
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Description"
                className="bg-[#1A1A1A] my-2 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-[#999999] text-sm"
                required
              />
            </label>
            <label className="flex flex-col my-2 px-2 w-full" htmlFor="bedroom">
              Bedroom
              <input
                type="text"
                id="bedroom"
                value={bedroom}
                onChange={(e) => setBedroom(e.target.value)}
                placeholder="Enter Bedroom Count"
                className="bg-[#1A1A1A] my-2 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-[#999999] text-sm"
                required
              />
            </label>
            <label
              className="flex flex-col my-2 px-2 w-full"
              htmlFor="bathroom"
            >
              Bathroom
              <input
                type="text"
                id="bathroom"
                value={bathroom}
                onChange={(e) => setBathroom(e.target.value)}
                placeholder="Enter Bathroom Count"
                className="bg-[#1A1A1A] my-2 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-[#999999] text-sm"
                required
              />
            </label>
            <label className="flex flex-col my-2 px-2 w-full" htmlFor="area">
              Area
              <input
                type="text"
                id="area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="Enter Area"
                className="bg-[#1A1A1A] my-2 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-[#999999] text-sm"
                required
              />
            </label>
            <label className="flex flex-col my-2 px-2 w-full" htmlFor="images">
              Images
              <input
                type="file"
                id="images"
                multiple
                onChange={handleImageChange}
                className="bg-[#1A1A1A] my-2 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-violet-500 text-sm cursor-pointer"
                required
              />
            </label>
            <button
              type="submit"
              className="bg-[#703BF7] my-4 px-4 py-4 rounded-lg w-full font-medium text-sm xl:text-lg cursor-pointer"
            >
              Register Property
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterProperty;
