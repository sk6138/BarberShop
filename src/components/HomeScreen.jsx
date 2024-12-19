import React from 'react';
import '../css/HomeScreen.css';
import { FaScissors, FaClock, FaDollarSign } from 'react-icons/fa';

const services = [
  { id: 1, name: 'Haircut', price: '$15', duration: '30 mins' },
  { id: 2, name: 'Beard Trim', price: '$10', duration: '15 mins' },
  { id: 3, name: 'Hair Color', price: '$40', duration: '1 hr' },
  { id: 4, name: 'Shave', price: '$8', duration: '20 mins' },
];

const HomeScreen = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>✂️ Trendy Cuts, Perfect Vibes 💈</h1>
        <p>Your style, your way. Book now!</p>
      </header>

      <section className="service-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h2>{service.name}</h2>
            <p>
              <FaDollarSign /> {service.price} &nbsp; | &nbsp;
              <FaClock /> {service.duration}
            </p>
            <button className="book-btn">Book Now 🚀</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomeScreen;
