import React, { useState, useEffect } from 'react';

function BabySittingPage() {
  const [data, setData] = useState([]);
;
  const [updateService, setUpdateService] = useState({
    id: null,
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

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/services/Babysitting');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

 

  const handleDeleteService = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/services/${id}`, {
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

  const handleUpdateService = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/services/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateService)
      });
      if (!response.ok) {
        throw new Error('Failed to update service');
      }
      console.log(response);
      fetchData();
      setUpdateService({
        id: null,
        service_type: '',
        service_date: '',
        location: '',
        price: '',
        feedbacks: '',
        rating: '',
        username: '',
        description: ''
      });
    } catch (error) {
      console.log(error);
    }
  };

 

  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateService(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
   

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
            {/* Update button triggers the openUpdateForm function */}
            <button onClick={() => setUpdateService({ ...item })}>Update</button>
            {/* Conditional rendering of update form */}
            {updateService.id === item.id && (
              <form onSubmit={(e) => {
                e.preventDefault();
                handleUpdateService(item.id);
              }}>
                <input type="text" name="service_type" value={updateService.service_type} onChange={handleUpdateInputChange} placeholder="Service Type" />
                <input type="text" name="service_date" value={updateService.service_date} onChange={handleUpdateInputChange} placeholder="Service Date" />
                <input type="text" name="location" value={updateService.location} onChange={handleUpdateInputChange} placeholder="Location" />
                <input type="text" name="price" value={updateService.price} onChange={handleUpdateInputChange} placeholder="Price" />
                <input type="text" name="feedbacks" value={updateService.feedbacks} onChange={handleUpdateInputChange} placeholder="Feedbacks" />
                <input type="text" name="rating" value={updateService.rating} onChange={handleUpdateInputChange} placeholder="Rating" />
                <input type="text" name="username" value={updateService.username} onChange={handleUpdateInputChange} placeholder="Username" />
                <input type="text" name="description" value={updateService.description} onChange={handleUpdateInputChange} placeholder="Description" />
                <button type="submit">Save</button>
                <button type="button" onClick={() => setUpdateService({ ...item })}>Cancel</button>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BabySittingPage;
