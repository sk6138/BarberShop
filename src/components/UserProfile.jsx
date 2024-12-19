// // UserProfile.jsx
// import React from 'react';
// import './UserProfile.css';

// const bookings = [
//   { id: 1, service: 'Haircut', date: '2024-06-15', time: '2:00 PM' },
//   { id: 2, service: 'Beard Trim', date: '2024-05-28', time: '3:00 PM' },
// ];

// const UserProfile = () => (
//   <div className="profile-container">
//     <h2>👤 My Profile</h2>
//     <div className="booking-history">
//       <h3>📅 Booking History</h3>
//       {bookings.map((booking) => (
//         <div key={booking.id} className="booking-item">
//           <p><b>Service:</b> {booking.service}</p>
//           <p><b>Date:</b> {booking.date} | <b>Time:</b> {booking.time}</p>
//         </div>
//       ))}
//     </div>
//     <div className="edit-details">
//       <h3>✏️ Edit Personal Details</h3>
//       <input type="text" placeholder="Name" />
//       <input type="email" placeholder="Email" />
//       <button className="save-btn">Save Changes</button>
//     </div>
//   </div>
// );

// export default UserProfile;
import React from "react";
import '../css/UserProfile.css';
import Navbar from "./Navbar";

const UserProfile = () => {
  const bookings = [
    { service: "Haircut", date: "2024-09-01", time: "10:00 AM" },
    { service: "Shave", date: "2024-09-05", time: "11:00 AM" },
  ];

  return (
    <>
    <Navbar/>
   
    <div className="profile-container">
      <h2>User Profile</h2>
      <h3>Booking History</h3>
      <div className="booking-history">
        {bookings.map((booking, index) => (
          <div key={index} className="booking-item">
            <p>
              {booking.service} - {booking.date} at {booking.time}
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default UserProfile;
