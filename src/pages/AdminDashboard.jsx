import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/bookings", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setBookings(res.data));
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Admin Dashboard</h2>
      {bookings.map((booking) => (
        <div key={booking.id}>
          <p>
            {booking.service_name} - {booking.date}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
