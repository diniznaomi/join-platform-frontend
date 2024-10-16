import axios from 'axios';

const API_URL = 'http://localhost:8000';

class PostService {
  async getPosts(companyId) {
    const token = localStorage.getItem('authToken');
    try {
      const response = await axios.get(`${API_URL}/posts/${companyId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      this.handleAuthError(error);
    }
  }

  async likePost(postId) {
    const token = localStorage.getItem('authToken');
    try {
      const response = await axios.post(`${API_URL}/posts/${postId}/like`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      this.handleAuthError(error);
    }
  }

  async createPost(postData) {
    const token = localStorage.getItem('authToken');
    try {
      const response = await axios.post(`${API_URL}/posts`, postData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      this.handleAuthError(error);
    }
  }

  handleAuthError(error) {
    if (error.response && error.response.status === 401) {
      window.location.href = '/login'; 
      localStorage.removeItem('authToken');
    } else {
      console.error('Error post data:', error.response ? error.response.data : error.message);
      throw error;
    }
  }
}

export default new PostService();
