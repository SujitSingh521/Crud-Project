import React from 'react';

const ProductList = ({ products, onDelete }) => {
    return (
        <div className="container" style={{ padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Product List</h2>
            {products.length > 0 ? (
                products.map((product) => (
                    <div
                        key={product._id}
                        style={{
                            border: '1px solid #ccc',
                            padding: '15px',
                            borderRadius: '5px',
                            marginBottom: '15px',
                            backgroundColor: '#f9f9f9'
                        }}
                    >
                        <h3 style={{ textAlign: 'center' }}>{product.title}</h3>
                        <p style={{ textAlign: 'center' }}>{product.desc}</p>
                        <img
                            src={product.image}
                            alt={product.title}
                            style={{
                                display: 'block',
                                margin: '0 auto',
                                width: '100px',
                                height: 'auto',
                            }}
                        />
                        <br />
                        <button
                            onClick={() => onDelete(product._id)}
                            style={{
                                display: 'block',
                                margin: '0 auto',
                                padding: '10px',
                                backgroundColor: '#FF6347',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            Delete
                        </button>
                    </div>
                ))
            ) : (
                <p>No products found</p>
            )}
        </div>
    );
};

export default ProductList;
