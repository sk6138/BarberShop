import React from "react";
import '../css/HomeScreen.css';
// import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroPage from "./HeroPage";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Requestsection from "./Requestsection";



const Home = () => {
  // const navigate = useNavigate();

  // const services = [
  //   { name: "Haircut", price: "$15", duration: "30 mins" },
  //   { name: "Shave", price: "$10", duration: "20 mins" },
  //   { name: "Facial", price: "$25", duration: "45 mins" },
  // ];

  return (
    <>
    <nav> <Navbar/></nav>
    
   <main>
    <section>
      <HeroPage/>
    <Services/>
    <AboutUs/>
    <Requestsection/>
    
   </section>
   
    </main>
    <footer> <Footer/>
    </footer>
    </>
  );
};

export default Home;
