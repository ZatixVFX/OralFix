import { useEffect } from "react";
import Header from "./components/layouts/Header";
import Home from "./components/sections/Home";
import AboutUs from "./components/sections/AboutUs";
import Services from "./components/sections/Services";
import ContactUs from "./components/sections/ContactUs";
import Footer from "./components/layouts/Footer";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <>
      <Header />
      <Home />
      <AboutUs />
      <Services />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
