import axios from 'axios';

const API_URL = 'http://localhost:8000';

const UserService = {
  async getUser(userId) {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjOGI0MjRkY2MwYTU5MzE4NDdmNmQ0ZGQ5NDJiOGU0Mzo5NyIsImlhdCI6MTcyODc0NTI0NywiZXhwIjoxNzI4NzQ4ODQ3fQ.7YFRTaHj67jdSDFhaK7cw9HOnzdjX0aV_hwqLvXnFCo"
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
