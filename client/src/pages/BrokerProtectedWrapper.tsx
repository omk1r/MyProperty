import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';

const BrokerProtectedWrapper = ({ children }: { children: ReactNode }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          const role = response.data.user.role;
          if (role !== 'broker') {
            console.log('only broker can access');
          }
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem('token');
        navigate('/login');
      });
  }, [token]);

  return <div>{token ? children : null}</div>;
};

export default BrokerProtectedWrapper;
