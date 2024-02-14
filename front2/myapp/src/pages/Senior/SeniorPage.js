import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SeniorPage() {
  const [data, setData] = useState([]);
  const [newService, setNewService] = useState({
    service_type: '',
    service_date: '',
    location: '',
    price: '',
    feedbacks: '',
    rating: '',
    username: '',
    description: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:5000/Assitance%20for%20seniors')
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleAddService = () => {
    axios.post('http://localhost:5000/services', newService)
      .then(function (response) {
        console.log(response);
        fetchData();
        setNewService({
          service_type: '',
          service_date: '',
          location: '',
          price: '',
          feedbacks: '',
          rating: '',
          username: '',
          description: ''
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDeleteService = (id) => {
    axios.delete(`http://localhost:5000/services/${id}`)
      .then(function (response) {
        console.log(response);
        fetchData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleUpdateService = (id, updatedService) => {
    axios.put(`http://localhost:5000/services/${id}`, updatedService)
      .then(function (response) {
        console.log(response);
        fetchData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewService(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      {/* Render the form for adding a new service */}
      <form onSubmit={handleAddService}>
        <input type="text" name="service_type" value={newService.service_type} onChange={handleChange} placeholder="Service Type" />
        <input type="text" name="service_date" value={newService.service_date} onChange={handleChange} placeholder="Service Date" />
        <input type="text" name="location" value={newService.location} onChange={handleChange} placeholder="Location" />
        <input type="text" name="price" value={newService.price} onChange={handleChange} placeholder="Price" />
        <input type="text" name="feedbacks" value={newService.feedbacks} onChange={handleChange} placeholder="Feedbacks" />
        <input type="text" name="rating" value={newService.rating} onChange={handleChange} placeholder="Rating" />
        <input type="text" name="username" value={newService.username} onChange={handleChange} placeholder="Username" />
        <input type="text" name="description" value={newService.description} onChange={handleChange} placeholder="Description" />
        <button type="submit">Add Service</button>
      </form>

      {/* Render the list of services */}
      {data.map((item) => (
        <div key={item.id}> 
          <h1>{item.service_date}</h1>
          <h1>{item.location}</h1>
          <h1>{item.price}</h1>
          <h1>{item.service_date}</h1>
          <h1>{item.feedbacks}</h1>
          <h1>{item.rating}</h1>
          <h1>{item.username}</h1>
          <h1>{item.description}</h1>
          {/* Add buttons for update and delete */}
          <button onClick={() => handleDeleteService(item.id)}>Delete</button>
          {/* You can add a modal or another form to update the service */}
          <button onClick={() => handleUpdateService(item.id, updatedService)}>Update</button>
        </div>
      ))}
    </div>
  );
}

export default SeniorPage ;
