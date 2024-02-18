import React from 'react';
import './style.css'; // Assuming you have a CSS module file for styles

const About = () => {
  return (
    <div className="container">
      <header>
        <h1>About Our  Services/Goods Platform</h1>
        <p>
Welcome to an unparalleled platform for expedited and optimal Borrowing/Exchanging and Services provision.</p>
     
      </header>

      <section className="about-details">
        <div className="text-content">
          <h2>Who We Are?</h2>
          <p>We are the epitome of refinement and exclusivity. Our platform connects individuals and businesses seeking the epitome of service excellence with those offering it, ensuring an unparalleled level of sophistication.</p>
        </div>
        <div className="image-content">
          <img className src="https://imgs.search.brave.com/bJk6-3Z4sjcQy39cc9FPLSjr7mmo50bkxOml6kJEGls/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vMzg5MDk1/OTAvNjY2OTMvaS80/NTAvZGVwb3NpdHBo/b3Rvc182NjY5MzIw/Njgtc3RvY2stcGhv/dG8taW5zaWRlci10/cmFkaW5nLXRleHQt/d3JpdHRlbi1ub3Rl/Ym9vay5qcGc"  alt="Our Team" />
        </div>
      </section>

      <section className="services">
      <div className="container">
     
      <section className="services">
        <h2 className='x'>Our Services</h2>
        <div className="service-content">
          <div className="service">
            <img  className='img1'  src="https://imgs.search.brave.com/bJk6-3Z4sjcQy39cc9FPLSjr7mmo50bkxOml6kJEGls/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vMzg5MDk1/OTAvNjY2OTMvaS80/NTAvZGVwb3NpdHBo/b3Rvc182NjY5MzIw/Njgtc3RvY2stcGhv/dG8taW5zaWRlci10/cmFkaW5nLXRleHQt/d3JpdHRlbi1ub3Rl/Ym9vay5qcGc" alt="Service 1" />
          </div>
          <div className="service">
            <img className='img2' src="https://imgs.search.brave.com/L2wk5RCzWSE6QCiWKZ9gqrfXew1n_qzmWnqvU-gGIBw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/My8xMy8xNy8yNi9l/Y29tbWVyY2UtMjE0/MDYwM182NDAuanBn" alt="Service 2" />
          </div>
        </div>
      </section>

      <footer>
  <div class="footer-container">
    <a href="#" class="footer-icon">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="#" class="footer-icon">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="#" class="footer-icon">
      <i class="fab fa-linkedin"></i>
    </a>
  </div>
  <p>Contact us: +216 55.789.123</p>
 
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="social-media-button">Follow us on Facebook</a>
</footer>

    </div>
      </section>
    </div>
  );
};

export default About;