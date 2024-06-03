import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/authenticate`, { username, password });
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
      return response.data;
    }
    return null;
  } catch (error) {
    throw new Error('Invalid username or password');
  }
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const isAuthenticated = () => {
  const user = getCurrentUser();
  return user && user.token;
};

export default {
  login,
  logout,
  getCurrentUser,
  isAuthenticated,
};
