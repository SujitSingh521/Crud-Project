import React, { useState } from 'react';

const ProductForm = ({ onSubmit, initialData = {} }) => {
    const [productData, setProductData] = useState({
        title: initialData.title || '',
        desc: initialData.desc || '',
        image: initialData.image || '',
    });

    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(productData);
    };

    return (
        <form
            className="container"
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '400px',
                margin: '0 auto',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#f9f9f9'
            }}
        >
            <h2 style={{ textAlign: 'center', marginBottom: '15px' }}>Product Form</h2>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={productData.title}
                onChange={handleChange}
                required
                style={{
                    padding: '10px',
                    marginBottom: '15px',
                    borderRadius: '5px',
                    border: '1px solid #ccc'
                }}
            />
            <textarea
                name="desc"
                placeholder="Description"
                value={productData.desc}
                onChange={handleChange}
                required
                style={{
                    padding: '10px',
                    marginBottom: '15px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    resize: 'none',
                    height: '100px'
                }}
            />
            <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={productData.image}
                onChange={handleChange}
                required
                style={{
                    padding: '10px',
                    marginBottom: '15px',
                    borderRadius: '5px',
                    border: '1px solid #ccc'
                }}
            />
            <button
                type="submit"
                style={{
                    padding: '10px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Submit
            </button>
        </form>
    );
};

export default ProductForm;
