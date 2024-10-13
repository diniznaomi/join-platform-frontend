import axios from 'axios';

const API_URL = 'http://localhost:8000';

const UserService = {
  async getUser(userId) {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyYThjMTY0NDEzOGI2NzU5YTc4NzVjMjI5NTk1MWU0MDpiZCIsImlhdCI6MTcyODc3NDMzNywiZXhwIjoxNzI4Nzc3OTM3fQ.CLJhpVyrlLmYLPBpDntjXZFvnHOPUjKwgaiU_FYabiU"
    try {
      const response = await axios.get(`${API_URL}/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  },
};

export default UserService;
