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
    name: 'Golden Cake',
    image: '/assets/wedding.png',
    price: '$350',
  },
  {
    name: 'Floral Buttercream Cake',
    image: '/assets/Floral Buttercream Cake.jpg',
    price: '$375',
  },
  {
    name: 'Blueberry Muffins',
    image: '/assets/muffins.png',
    price: '$20',
  },
  {
    name: 'Glazed Doughnuts',
    image: '/assets/doughnuts.png',
    price: '$15',
  },
  {
    name: 'Anniversary Cake',
    image: '/assets/anniversary.png',
    price: '$250',
  },
  {
    name: 'Baby Shower Cake',
    image: '/assets/babyshower.png',
    price: '$200',
  },
  {
    name: 'Graduation Cake',
    image: '/assets/graduation.png',
    price: '$150',
  },
  {
    name: 'Birthday Cake',
    image: '/assets/birthday.png',
    price: '$250',
  },
];

const Products = () => {
  // Separate arrays for our products and other products
  const ourProducts = products.slice(0, 6);
  const otherProducts = products.slice(6);

  return (
    <div className="products-container">
      <div className="our-products">
        <h1>Our Products</h1>
        <div className="products-list">
          {ourProducts.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="other-products">
        <h1>Other Products</h1>
        <div className="products-list">
          {otherProducts.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
