import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Select from 'react-select';
import '../css/BookingScreen.css';

const services = [
  { value: 'haircut', label: 'Haircut' },
  { value: 'beard_trim', label: 'Beard Trim' },
  { value: 'hair_color', label: 'Hair Color' },
];

const BookingScreen = () => {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState('');

  return (
    <div className="booking-container">
      <h2>🗓️ Book Your Service</h2>
      <Select options={services} placeholder="Select a service" />
      <h3>Select a Date</h3>
      <Calendar onChange={setDate} value={date} />
      <h3>Pick a Time</h3>
      <input
        type="time"
        value={timeSlot}
        onChange={(e) => setTimeSlot(e.target.value)}
      />
      <button className="confirm-btn">Confirm Booking 🚀</button>
    </div>
  );
};

export default BookingScreen;
