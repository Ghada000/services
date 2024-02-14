{use client}
import React ,{useState} from 'react';
import './style.css'; // Assuming you have a CSS module file for styles
// pages/about.jsx
const About = () => {
  const [showFAQ, setShowFAQ] = useState(false);
  const toggleFAQ = () => setShowFAQ(!showFAQ);

  return (
    <div className="container">
      <header>
        <h1>About Our Luxurious Service Exchange Platform</h1>
        <p>Welcome to the pinnacle of elegance and sophistication! Experience unmatched service exchange tailored to the discerning connoisseur.</p>
        <button onClick={toggleFAQ}>Embark on Luxury</button>
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
            <img src="https://e7.pngegg.com/pngimages/862/830/png-clipart-computer-icons-clothing-swap-arrow-art-angle-triangle.png" alt="Service 1" />
          </div>
          <div className="service">
            <img src="/images/service2.jpg" alt="Service 2" />
          </div>
        </div>
      </section>

      {showFAQ && (
        <div className="faq-popup">
          <div className="faq-popup-content">
            <button className="close-btn" onClick={toggleFAQ}>Close</button>
            <h2>Frequently Asked Questions</h2>
            <div className="faq-content">
              <div className="question">
                <h3>What payment methods do you accept?</h3>
                <p>We accept all major credit cards, PayPal, and bank transfers.</p>
              </div>
              <div className="question">
                <h3>Is there a refund policy?</h3>
                <p>Yes, we offer a 30-day money-back guarantee for our services.</p>
              </div>
              <div className="question">
                <h3>How do I sign up for an account?</h3>
                <p>You can sign up for an account on our website by clicking the "Sign Up" button and following the instructions.</p>
              </div>
              <div className="question">
                <h3>Do you offer customer support?</h3>
                <p>Yes, we provide 24/7 customer support via email, phone, and live chat.</p>
              </div>
              <div className="question">
                <h3>Can I upgrade or downgrade my service plan?</h3>
                <p>Yes, you can upgrade or downgrade your service plan at any time from your account settings.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer>
      <p>Contact us: info@example.com</p>
        <p>Follow us on social media: @example</p>
      </footer>
    </div>
  );
};

export default About;