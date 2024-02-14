import React from 'react';
import NavbarHome from '../../components/navbarhome';

const Home = ({ user, signOut }) => {
  return (
    <div>
      <NavbarHome user={user} signOut={signOut} />
      <div>
        <h1>Welcome to TradeHub!</h1>
        <p>Explore our goods and services to find what you need.</p>
        <div>
          <div>
            <h2>Services</h2>
            <p>Description of services...</p>
            <img src="/services.jpg" alt="Services" />
          </div>
          <div>
            <h2>Goods</h2>
            <p>Description of goods...</p>
            <img src="/goods.jpg" alt="Goods" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
