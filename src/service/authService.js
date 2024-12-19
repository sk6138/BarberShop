import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

const authService = {
  register: async (userData) => {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  },
};

export default authService;
