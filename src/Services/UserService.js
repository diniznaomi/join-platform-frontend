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
      this.handleAuthError(error);
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
      window.location.href = '/login'; 
      localStorage.removeItem('authToken');
    } else {
      console.error('Error users data:', error.response ? error.response.data : error.message);
      throw error;
    }
  }
}

export default new UserService(); 
