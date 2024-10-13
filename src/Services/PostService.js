import axios from 'axios';

const API_URL = 'http://localhost:8000';

const PostService = {
  async getPosts(companyId) {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxYzhlNTM2OTBkYzhhODMzOTkyNGMzYmIyMjM1MGQ1MTowNyIsImlhdCI6MTcyODc4ODQ2NiwiZXhwIjoxNzI4NzkyMDY2fQ.UWCooZuSAZKfQymSy2PGIp7ZVeimGFirqRsNIpfI7Q0"
    try {
      const response = await axios.get(`${API_URL}/post/${companyId}`, {
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

export default PostService;
