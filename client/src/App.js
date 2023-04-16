import React from 'react';
import './App.css';

function HomePage() {
  return (
    <div className="container">
      <header className="header">
        <div className="header__logo">
          <a href="/">Shopwise</a>
        </div>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <a href="/shop">Shop</a>
            </li>
            <li className="header__item">
              <a href="/explore">Explore</a>
            </li>
            <li className="header__item">
              <a href="/login">Login/Signup</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <p className="main__subtitle">Check out our latest products:</p>
        <ul className="product-list">
          <li className="product-list__item">
            <a href="/product/1" className="product">
              <img src="/product1.jpg" alt="Product 1" className="product__image" />
              <h2 className="product__title">Product 1</h2>
              <p className="product__price">$19.99</p>
            </a>
          </li>
          <li className="product-list__item">
            <a href="/product/2" className="product">
              <img src="/product2.jpg" alt="Product 2" className="product__image" />
              <h2 className="product__title">Product 2</h2>
              <p className="product__price">$29.99</p>
            </a>
          </li>
          <li className="product-list__item">
            <a href="/product/3" className="product">
              <img src="/product3.jpg" alt="Product 3" className="product__image" />
              <h2 className="product__title">Product 3</h2>
              <p className="product__price">$39.99</p>
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default HomePage;
