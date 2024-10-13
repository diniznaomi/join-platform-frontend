import axios from 'axios';

const API_URL = 'http://localhost:8000';

const UserService = {
  async getUser(userId) {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDFhNjljYTA5Njk5OTJhMWVhZjQyYTRlZjBiNWY1OTpjOSIsImlhdCI6MTcyODgzMjA5NywiZXhwIjoxNzI4ODM1Njk3fQ.s1Oi7hx-_nVmZLXagrlj2a_UUyCiMzijk-Mj35ElsxI"
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
