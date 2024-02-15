// exchange.js

import React, { useState, useEffect } from 'react';
import NavbarGoods from '@/components/navbarGoods';
import './exchange.css';  // Import the CSS file

const Exchange = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/get?good_type=exchange');
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavbarGoods />
      {data.map((item) => (
        <div key={item.good_id} className="item">
          <img src={item.image_url} alt="Item Image" />
          <p>Date: {item.date}</p>
          <p>Username: {item.username}</p>
          <p>Price: {item.price}</p>
          <p>Description: {item.description}</p>
          <p>Good Type: {item.good_type}</p> {/* Use the correct field name */}
        </div>
      ))}
    </div>
  );
};

export default Exchange;
