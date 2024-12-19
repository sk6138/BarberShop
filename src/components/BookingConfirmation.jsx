// // BookingConfirmation.jsx
// import React from 'react';
// import '../css/BookingConfirmation.css';

// const BookingConfirmation = ({ details }) => (
//   <div className="confirmation-container">
//     <h2>✅ Booking Confirmation</h2>
//     <p><b>Service:</b> {details.service}</p>
//     <p><b>Date:</b> {details.date}</p>
//     <p><b>Time:</b> {details.time}</p>
//     <button className="edit-btn">Edit</button>
//     <button className="confirm-btn">Confirm 🚀</button>
//   </div>
// );

// export default BookingConfirmation;
import React from "react";
import '../css/BookingConfirmation.css';
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const BookingConfirmation = () => {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <div className="confirmation-container">
      <h2>Booking Confirmed!</h2>
      <p>Your appointment has been successfully booked.</p>
      <button id="home"  onClick={() => navigate("/")}>Back to Home</button>
      <button onClick={() => navigate("/profile")}>View Profile</button>
    </div>
    </>
  );
};

export default BookingConfirmation;
