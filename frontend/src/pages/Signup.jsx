import React from 'react';
import AuthForm from '../components/AuthForm';
import { signup } from '../services/auth';

const Signup = () => {
    const handleSignup = async (data) => {
        try {
            const response = await signup(data);
            localStorage.setItem('token', response.data.token);
            alert('Sign-up successful');
        } catch (error) {
            alert('Error: ' + error.response.data.error);
        }
    };

    return <AuthForm onSubmit={handleSignup} buttonText="Sign Up" />;
};

export default Signup;
