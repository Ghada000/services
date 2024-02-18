import React from 'react';
import NavbarHome from '../../components/navbarhome'; 
import './home.css';

const Home = () => {
  return (
    <div>
      <NavbarHome />
      <header className="home-header">
        <div className="container">
          <h1>Welcome to TradeHub!</h1>
          <p>TradeHub is your go-to platform for exchanging goods and services temporarily. Whether you have something you no longer need or require a service for a short period, TradeHub connects you with others in your community for mutually beneficial trades.</p>
          <a href="mailto:assidighada4@gmail.com" className="contact-button">
            Contact us
          </a>
        </div>
      </header>
      <section className="about-details">
        <div className="container">
          <div className="text-content">
            <h2>What We Offer</h2>
            <p>TradeHub offers a diverse range of goods and services for you to explore. From graphic design to tutoring, housekeeping to gardening, there's something for everyone. Our platform ensures secure and hassle-free transactions, making it easy for you to connect with trusted individuals in your community.</p>
          </div>
          <div className="image-content">
            <img src="https://c1.wallpaperflare.com/preview/200/369/276/technology-developer-continents-touch.jpg" alt="TradeHub Services" className="" />
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <h2>Explore Our Services</h2>
          <div className="service-content">
            <div className="service">
              <img src="https://visme.co/blog/wp-content/uploads/2021/10/what-is-graphic-design-header-1200.png" alt="Service 1" className="service-image" />
              <h3>Graphic Design</h3>
              <p>Elevate your brand with stunning visuals crafted by our talented graphic designers.</p>
            </div>
            <div className="service">
              <img src="https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces,q_auto/https://www.gcu.edu/sites/default/files/media/images/Blog/us-cities-with-the-best-tutoring-opps-v1.png" alt="Service 2" className="service-image" />
              <h3>Tutoring</h3>
              <p>Unlock your potential with personalized tutoring sessions tailored to your needs.</p>
            </div>
            <div className="service">
              <img src="https://media.istockphoto.com/id/1317163681/vector/cleaning-cart-with-tools-and-supplies-trolley-for-cleaning-service.jpg?s=612x612&w=0&k=20&c=pCXNURnHgsMtKcyAibAm0BdGR8aZckKlRF4_xRYpSkA=" alt="Service 3" className="service-image" />
              <h3>Housekeeping</h3>
              <p>Simplify your life with professional housekeeping services to keep your home pristine.</p>
            </div>
            <div className="service">
              <img src="https://img.freepik.com/free-vector/hand-drawn-texture-gardening-pattern_23-2149702331.jpg" alt="Service 4" className="service-image" />
              <h3>Gardening</h3>
              <p>Transform your outdoor space into a tranquil oasis with expert gardening services.</p>
            </div>
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
