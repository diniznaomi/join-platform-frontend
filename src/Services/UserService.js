import axios from 'axios';

const API_URL = 'http://localhost:8000';
const token = localStorage.getItem('authToken');

class UserService {
  async getUser(userId) {
    try {
      const response = await axios.get(`${API_URL}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      this.handleAuthError(error);
      throw error;
    }
  }

  async authentication(email, password) {
    try {
      const response = await axios.post(`${API_URL}/auth`, {
        email,
        password
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao autenticar o usuário:', error.response ? error.response.data : error.message);
      throw error;
    }
  }

  handleAuthError(error) {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';  
      console.error('Unauthorized! Token removed and user redirected to login.');
    }
  }
}

export default new UserService(); 
