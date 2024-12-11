import API from './api';

export const login = (credentials) => API.post('/user/signin', credentials);
export const signup = (data) => API.post('/user/signup', data);
