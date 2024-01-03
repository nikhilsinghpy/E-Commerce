
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Dashboard from './component/Dashboard/Dashboard';
import AboutUS from './component/About-us/AboutUS';
import ContactUs from './component/Contact-us/ContactUs';
import Men from './component/Mensection/Men';
import Women from './component/Womensection/Women';
import Trending from './component/trending/Trending';
import Pagenotfound from './component/pagenotfound/Pagenotfound';


function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="About-us" element={<AboutUS />} />
            <Route path="Contact-us" element={<ContactUs />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="about-us" element={<AboutUS />} />
            <Route path="*" element={<Pagenotfound />} />
        </Routes>
      <Footer />
  </BrowserRouter>

  );
}

export default App;
