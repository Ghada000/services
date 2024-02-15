import React from 'react';
import NavbarHome from '../../components/navbarhome'; 
import './home.css';

const Home = () => {
  return (
    <div>
      <NavbarHome />
      <header>
        <div className="container">
          <h1>Welcome to TradeHub!</h1>
          <p>TradeHub is your go-to platform for exchanging goods and services temporarily. Whether you have something you no longer need or require a service for a short period, TradeHub connects you with others in your community for mutually beneficial trades.</p>
          <button>Get Started</button>
        </div>
      </header>
      <section className="about-details">
        <div className="container">
          <div className="text-content">
            <h2>What We Offer</h2>
            <p>TradeHub offers a diverse range of goods and services for you to explore. From graphic design to tutoring, housekeeping to gardening, there's something for everyone.</p>
          </div>
          <div className="image-content"></div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <h2>Explore Our Services</h2>
          <div className="service-content">
         
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>Join TradeHub today and discover a new way to exchange goods and services in your community!</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
