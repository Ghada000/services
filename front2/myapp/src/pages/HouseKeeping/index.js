import React, { useState, useEffect } from 'react';

function HouseKeepingPage() {
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
    fetch('http://localhost:5000/api/services/House%20keeping')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleAddService = () => {
    fetch('http://localhost:5000/services', {
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
      .catch(error => {
        console.log(error);
      });
  };

  const handleDeleteService = (id) => {
    fetch(`http://localhost:5000/services/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete service');
        }
        return response.json();
      })
      .then(responseData => {
        console.log(responseData);
        fetchData();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleUpdateService = (id, updatedService) => {
    fetch(`http://localhost:5000/services/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedService)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update service');
        }
        return response.json();
      })
      .then(responseData => {
        console.log(responseData);
        fetchData();
      })
      .catch(error => {
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

export default HouseKeepingPage;
