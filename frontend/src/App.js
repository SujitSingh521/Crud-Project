import React, {useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import Home from './pages/Home';
import API from './services/api';

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const { data } = await API.get('/product/get');
            console.log(data); 
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await API.delete(`/product/delete/${id}`);
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
           <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/products"
                    element={
                        <>
                            <ProductForm
                                onSubmit={async (data) => {
                                    await API.post('/product/post', data);
                                    fetchProducts();
                                }}
                            />
                            <ProductList products={products} onDelete={handleDelete} />
                        </>
                    }
                />
            </Routes>
       </>
    );
};

export default App;
