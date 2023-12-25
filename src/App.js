
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Dashboard from './component/Dashboard/Dashboard';
import AboutUS from './component/About-us/AboutUS';
import ContactUs from './component/Contact-us/ContactUs';


function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="About-us" element={<AboutUS />} />
            <Route path="Contact-us" element={<ContactUs />} />
        </Routes>
      <Footer />
  </BrowserRouter>

  );
}

export default App;
