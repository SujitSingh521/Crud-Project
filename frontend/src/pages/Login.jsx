import React from 'react';
import AuthForm from '../components/AuthForm';
import { login } from '../services/auth';

const Login = () => {
    const handleLogin = async (data) => {
        try {
            const response = await login(data);
            localStorage.setItem('token', response.data.token);
            alert('Login successful');
        } catch (error) {
            alert('Error: ' + error.response.data.error);
        }
    };

    return <AuthForm onSubmit={handleLogin} buttonText="Log In" />;
};

export default Login;
