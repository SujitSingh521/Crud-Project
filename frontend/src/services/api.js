import axios from 'axios';

// Use the environment variable to set the base URL
const API = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000', 
});

// Add authorization token to each request if available
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token){
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default API;
