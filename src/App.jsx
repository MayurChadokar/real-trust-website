import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Pages/Hero";
import WhyChoose from "./Pages/WhyChoose";
import AboutUs from "./Pages/AboutUs";
import OurProjects from "./Pages/OurProjects";
import HappyClients from "./Pages/HappyClents";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Hero/>
        <WhyChoose/>
        <AboutUs/>
        <OurProjects/>
        <HappyClients/>
        <Footer/>
        {/* <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes> */}
      </div>
    </Router>
  );
}


export default App;
