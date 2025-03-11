import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../component/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        {
          email,
          password,
        }
      );
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Login error:', error.response?.data);
        setError(error.response?.data?.message || 'Login failed');
      } else {
        console.error('Unexpected error:', error);
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[#141414] min-h-screen text-white">
        <div className="bg-[#1A1A1A] px-6 py-8 border border-[#262626] rounded-xl w-full max-w-md">
          <h3 className="font-semibold text-4xl text-center">
            Login to MyProperty
          </h3>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleLogin} className="mt-6">
            <label className="flex flex-col my-2 px-2 w-full" htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="bg-[#1A1A1A] my-2 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-[#999999] text-sm"
                required
              />
            </label>
            <label
              className="flex flex-col my-2 px-2 w-full"
              htmlFor="password"
            >
              Password
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="bg-[#1A1A1A] my-2 px-3 py-3 border border-[#262626] rounded-md focus:outline-none w-full text-[#999999] text-sm"
                required
              />
            </label>
            <button
              type="submit"
              className="bg-[#703BF7] my-4 px-4 py-4 rounded-lg w-full font-medium text-sm xl:text-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
