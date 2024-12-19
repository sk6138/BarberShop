// import React from "react";
// import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
// import "../css/Footer.css";

// const Footer = () => {
//   return (

//     <footer className="footer">
//       <div className="footer-content">
//         <p className="copyright">&copy; 2024 BarberShop. All Rights Reserved.</p>
//         <div className="social-icons">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//             <FaFacebook className="social-icon" />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//             <FaInstagram className="social-icon" />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//             <FaTwitter className="social-icon" />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin className="social-icon" />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState } from "react";

import { FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // For icons
import "../css/Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setEmail(""); // Reset email field
  };

  return (
    <footer className="footer-container">
      <div className="footer-content container">
        {/* Location, Phone, Social Media */}
        <div className="footer-info">
          <div className="footer-item">
            <FaMapMarkerAlt size={25}  />
            <p>[Your Barber Shop Name] <br /> 123 Main Street, City, State, 12345</p>
          </div>
          <div className="footer-item">
            <FaPhoneAlt size={25}  />
            <p><a href="tel:+11234567890" className="footer-phone">+1 (123) 456-7890</a></p>
          </div>
          <div className="footer-item">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30}  />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30}  />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30}  />
              </a>
            </div>
          </div>
        </div>

        {/* Email Subscription Form */}
        <div className="footer-form">
          <h4>Get Notified About Our Latest Updates</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
              className="email-input"
            />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
          {success && <p className="success-message">Thank you for subscribing!</p>}
        </div>
      </div>
          
    </footer>
  );
};

export default Footer;
