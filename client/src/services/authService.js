import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const login = (username, password) => {
    return axios
        .post(API_URL + "/authenticate", {
            username,
            password,
        })
        .then((response) => {
            const token = response.data;
            if (token) {
                const userData = { username, token };
                localStorage.setItem("user", JSON.stringify(userData));
                console.log('User data saved to local storage:', userData);
                return userData;
            } else {
                throw new Error('Token not found in response');
            }
        })
        .catch((error) => {
            console.error('Login error:', error);
            throw new Error('Invalid username or password');
        });
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
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
