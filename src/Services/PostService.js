import axios from 'axios';

const API_URL = 'http://localhost:8000';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4NDdjMzdiYTJlMTA2ZWViNzViODJlYTBmMjE3ZWEwYzpkNCIsImlhdCI6MTcyODk1NjU2NSwiZXhwIjoxNzI4OTYwMTY1fQ.T7mu8BJaxJy0gqt0yO9Brsx7VjFep7iRsrDda_bwBFo"

class PostService {
  async getPosts(companyId) {
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
  }

  async likePost(postId) {
    try {
      const response = await axios.post(`${API_URL}/post/${postId}/like`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error liking the post:', error);
      throw error;
    }
  }
};

export default new PostService(); 
