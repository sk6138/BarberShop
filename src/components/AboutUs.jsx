import React from "react";
import '../css/AboutUs.css'; // Import styles

const AboutUs = () => {
  return (
    <div className="about-us">


    
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-text">
          <h1>About Us</h1>
          <p>
            Welcome to [Your Barber Shop Name], where luxury meets style. With over 10 years of experience in the grooming industry, we specialize in bringing out the best look for every individual. Our highly trained professionals ensure that you not only leave looking great but also feeling great.
          </p>
          <p>
            Our dedication to providing exceptional grooming services stems from a true passion for hair care. Whether it's a classic style or the latest trend, we offer an array of services tailored just for you.
          </p>
        </div>
        <div className="about-us-image">
          <img src="https://i.postimg.cc/wTK4Jcvh/facial.jpg" alt="Our Experience" />
        </div>
      </div>
      <div className="experience-section">
        <h2>Our Expertise</h2>
        <div className="experience-details">
          <div className="experience-card">
            <h3>10+ Years of Experience</h3>
            <p>We’ve been in the business of grooming for over a decade, perfecting our craft and providing the best haircuts in town.</p>
          </div>
          <div className="experience-card">
            <h3>Expert Barbers</h3>
            <p>Our barbers are trained professionals who specialize in both classic and modern hairstyles, always ready to offer personalized services.</p>
          </div>
          <div className="experience-card">
            <h3>High-Quality Products</h3>
            <p>We only use the best products to ensure your hair remains healthy and looks amazing after every visit.</p>
          </div>
        </div>
      </div>
    </div>
    </div> 
  );
};

export default AboutUs;
