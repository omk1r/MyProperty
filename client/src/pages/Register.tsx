import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../component/Footer';

const Register = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        {
          firstname,
          lastname,
          email,
          password,
          role,
        }
      );
      console.log('Registration successful:', response.data);
      navigate('/login');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Registration error:', error.response?.data);
        setError(error.response?.data?.message || 'Registration failed');
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
            Register to MyProperty
          </h3>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form
            onSubmit={handleRegister}
            className="md:flex flex-wrap items-center mt-6"
          >
            <label
              className="flex flex-col my-2 px-2 w-full md:w-1/2"
              htmlFor="firstname"
            >
              First Name
              <input
                type="text"
                id="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Enter First Name"
                className="bg-[#1A1A1A] my-1 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-[#999999] text-sm"
                required
              />
            </label>
            <label
              className="flex flex-col my-2 px-2 w-full md:w-1/2"
              htmlFor="lastname"
            >
              Last Name
              <input
                type="text"
                id="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Enter Last Name"
                className="bg-[#1A1A1A] my-1 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-[#999999] text-sm"
                required
              />
            </label>
            <label
              className="flex flex-col my-2 px-2 w-full md:w-1/2"
              htmlFor="email"
            >
              Email
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="bg-[#1A1A1A] my-1 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-[#999999] text-sm"
              />
            </label>
            <label
              className="flex flex-col my-2 px-2 w-full md:w-1/2"
              htmlFor="password"
            >
              Password
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="bg-[#1A1A1A] my-1 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-[#999999] text-sm"
                required
              />
            </label>
            <label
              className="flex flex-col my-2 px-2 w-full md:w-1/2"
              htmlFor="role"
            >
              Role
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="bg-[#1A1A1A] my-1 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-[#999999] text-sm"
                required
              >
                <option value="customer">Customer</option>
                <option value="broker">Broker</option>
              </select>
            </label>
            <button
              type="submit"
              className="bg-[#703BF7] my-4 px-4 py-4 rounded-lg w-full font-medium text-sm xl:text-lg cursor-pointer"
            >
              Register
            </button>
          </form>
          <div className="text-[#999999] text-center">
            Already have an account{' '}
            <Link to="/login" className="text-white underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
