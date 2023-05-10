import React from 'react';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Delicious Food</h1>
        <p>Order your favorite food from the best restaurants in town.</p>
        <button>Order Now</button>
      </div>
      <div className="featured">
        <h2>Featured Items</h2>
        <div className="card">
          <img src="/images/bg.jpg" alt="Food 1" />
          <div className="info">
            <h3>Food 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Add to Cart</button>
          </div>
        </div>
        <div className="card">
          <img src="/images/bg.jpg" alt="Food 2" />
          <div className="info">
            <h3>Food 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Add to Cart</button>
          </div>
        </div>
        <div className="card">
          <img src="/images/bg.jpg" alt="Food 3" />
          <div className="info">
            <h3>Food 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
