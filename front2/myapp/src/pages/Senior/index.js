import React, { useState, useEffect } from 'react';

function SeniorPage() {
  const [data, setData] = useState([]);
 ;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/services/Assistance%20for%20seniors');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

;

  const handleDeleteService = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/services/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete service');
      }
      console.log(response);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateService = async (id, updatedService) => {
    try {
      const response = await fetch(`http://localhost:5000/api/services/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedService)
      });
      if (!response.ok) {
        throw new Error('Failed to update service');
      }
      console.log(response);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

;

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px', width: '300px' }}>
            <h1>{item.service_date}</h1>
            <p>Location: {item.location}</p>
            <p>Price: {item.price}</p>
            <p>Feedbacks: {item.feedbacks}</p>
            <p>Rating: {item.rating}</p>
            <p>Username: {item.username}</p>
            <p>Description: {item.description}</p>
            {/* Add buttons for update and delete */}
            <button onClick={() => handleDeleteService(item.id)}>Delete</button>
            {/* You can add a modal or another form to update the service */}
            <button onClick={() => handleUpdateService(item.id, updatedService)}>Update</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeniorPage;
