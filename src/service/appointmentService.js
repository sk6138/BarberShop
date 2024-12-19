import axios from 'axios';

const API_URL = 'http://localhost:5000/api/appointments'; // Change this if your backend is hosted elsewhere

// Book appointment function
export const bookAppointment = async (service, date, time) => {
  const token = localStorage.getItem('userToken');
  const response = await axios.post(
    `${API_URL}/book`,
    { service, date, time },
    {
      headers: {
        'x-auth-token': token, // Include the JWT token in headers for authentication
      },
    }
  );
  return response.data;
};
