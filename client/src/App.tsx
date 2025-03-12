import Navbar from './component/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterProperty from './pages/RegisterProperty';

function App() {
  return (
    <div className="bg-[#141414] text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-property" element={<RegisterProperty />} />{' '}
      </Routes>
    </div>
  );
}

export default App;
