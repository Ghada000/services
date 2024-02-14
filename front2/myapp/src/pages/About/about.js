import React from 'react';
import './style.css'; // Assuming you have a CSS module file for styles
// pages/about.jsx
const About = () => {
  return (
    <div className="container">
      <header>
        <h1>About Our Luxurious Service Exchange Platform</h1>
        <p>Welcome to the pinnacle of elegance and sophistication! Experience unmatched service exchange tailored to the discerning connoisseur.</p>
        <button>Embark on Luxury</button>
      </header>

      <section className="about-details">
        <div className="text-content">
          <h2>Who We Are?</h2>
          <p>We are the epitome of refinement and exclusivity. Our platform connects individuals and businesses seeking the epitome of service excellence with those offering it, ensuring an unparalleled level of sophistication and luxury.</p>
        </div>
        <div className="image-content">
          <img src="https://c1.wallpaperflare.com/preview/200/369/276/technology-developer-continents-touch.jpg" alt="Our Team" />
        </div>
      </section>

      <section className="services">
      <div className="container">
     
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-content">
          <div className="service">
            <img src="https://e7.pngegg.com/pngimages/862/830/png-clipart-computer-icons-clothing-swap-arrow-art-angle-triangle.png" alt="Service 1" />
          </div>
          <div className="service">
            <img src="/images/service2.jpg" alt="Service 2" />
          </div>
        </div>
      </section>

      <footer>
        <p>Contact us: info@example.com</p>
        <p>Follow us on social media: @example</p>
      </footer>
    </div>
      </section>
    </div>
  );
};

export default About;