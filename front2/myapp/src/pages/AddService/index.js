import React, { useState } from 'react';
import './style.css'

function AddPage() {
  const [newService, setNewService] = useState({
    service_type: '',
    service_date: '',
    location: '',
    price: '',
  
    username: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewService(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddService = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    fetch('http://localhost:5000/api/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newService)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add service');
        }
        return response.json();
      })
      .then(responseData => {
        console.log(responseData);
        // Clear the form fields after successful submission
        setNewService({
          service_type: '',
          service_date: '',
          location: '',
          price: '',
         
          username: '',
          description: ''
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleAddService}>
        <input type="text" name="service_type" value={newService.service_type} onChange={handleChange} placeholder="Service Type" />
        <input type="text" name="service_date" value={newService.service_date} onChange={handleChange} placeholder="Service Date" />
        <input type="text" name="location" value={newService.location} onChange={handleChange} placeholder="Location" />
        <input type="text" name="price" value={newService.price} onChange={handleChange} placeholder="Price" />
        <input type="text" name="username" value={newService.username} onChange={handleChange} placeholder="Username" />
        <input type="text" name="description" value={newService.description} onChange={handleChange} placeholder="Description" />
        <button type="submit">Add Service</button>
      </form>
    </div>
  );
}

export default AddPage;
