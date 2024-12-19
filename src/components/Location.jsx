import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; // For icons
import '../css/Location.css';

const Location = () => {
  return (
    <div className="location-container">
      <h2>Visit Us & Contact</h2>
      <div className="location-details">
        {/* Address Section */}
        <div className="location-card">
          <div className="location-icon">
            <FaMapMarkerAlt size={30} color="#ff7e5f" />
          </div>
          <div className="location-info">
            <h3>Our Location</h3>
            <p>
              [Your Barber Shop Name]<br />
              123 Main Street,<br />
              City, State, 12345
            </p>
          </div>
        </div>

        {/* Phone Number Section */}
        <div className="location-card">
          <div className="location-icon">
            <FaPhoneAlt size={30} color="#ff7e5f" />
          </div>
          <div className="location-info">
            <h3>Call Us</h3>
            <p>
              <a href="tel:+11234567890" className="phone-link">+1 (123) 456-7890</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
