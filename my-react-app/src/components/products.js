import React from 'react';
import './products.css';

const products = [
  {
    name: 'Classic White Wedding Cake',
    image: '/assets/Classic White Wedding Cake.jpg',
    price: '$300',
  },
  {
    name: 'Chocolate Raspberry Cake',
    image: '/assets/Chocolate Raspberry Cake.jpg',
    price: '$350',
  },
  {
    name: 'Vintage Lace Cake',
    image: '/assets/Vintage Lace Cake.jpg',
    price: '$400',
  },
  {
    name: 'Rustic Naked Cake',
    image: '/assets/Rustic Naked Cake.jpg',
    price: '$320',
  },
  {
    name: 'Floral Buttercream Cake',
    image: '/assets/Floral Buttercream Cake.jpg',
    price: '$375',
  },
];

const Products = () => (
  <div className="products-container">
    <h1>Our Products</h1>
    <div className="products-list">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Products;
