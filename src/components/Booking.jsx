// src/components/BookAppointment.js
import React, { useState } from 'react';

const Booking = () => {
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleBooking = () => {
    if (service && date && time) {
      // Here you would send this data to the backend
      setSuccessMessage('Appointment booked successfully!');
    } else {
      setSuccessMessage('Please fill all the fields.');
    }
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <form>
        <div>
          <label>Service:</label>
          <select onChange={(e) => setService(e.target.value)} required>
            <option value="">Select Service</option>
            <option value="Haircut">Haircut</option>
            <option value="Shaving">Shaving</option>
          </select>
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="button" onClick={handleBooking}>
          Book Appointment
        </button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Booking;
