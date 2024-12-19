import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/HeroPage.css';
import video from '../components/hero.mp4'


const HeroPage = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
       <video autoPlay muted loop className="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="hero-content">
        <h1>Welcome to BarberShop</h1>
        <p>Get the best haircut and grooming experience.</p>
        <button className="book-now-btn" onClick={() => navigate("/booking")}>
          Book Now
        </button>
      </div>
      <div className="scroll-hint">
        <span>↓</span>
      </div>
    </section>
  );
};

export default HeroPage;
