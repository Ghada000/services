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
        <h2>Our Services</h2>
        <div className="service-content">
          <div className="service">
            <div className="service-details">
              <img src="https://img.lovepik.com/element/45007/4787.png_860.png" alt="Service 1" />
              <div className="description">
              </div>
            </div>
                <h3>HandiWork</h3>
                <p>Discover the artistry of craftsmanship with our meticulously curated DIY tutorials, designed to elevate your home projects to a level of unmatched sophistication.</p>
          </div>
          <div className="service">
            <div className="service-details">
              <img src="/images/service2.jpg" alt="Service 2" />
              <div className="description">
                <h3>HandMade</h3>
                <p>Indulge in opulence with our collection of handcrafted masterpieces, meticulously created to adorn your living space with unparalleled elegance and style.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>Contact us: info@example.com</p>
        <p>Follow us on social media: @example</p>
      </footer>
    </div>
  );
};

export default About; 