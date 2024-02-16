import React, { useState, useEffect } from 'react';
import axios from "axios"
import './style.css'

function HouseKeepingPage() {
  const [data, setData] = useState([]);
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState('');

  const [updateService, setUpdateService] = useState({
    id: null,
    service_type: '',
    service_date: '',
    location: '',
    price: '',
    username: '',
    description: ''
  });

  useEffect(() => {
    fetchData();
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/comments');
      setComment(response.data);
      console.log("comments ❤️❤️❤️❤️", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = () => {
    fetch('http://localhost:5000/api/services/Housekeeping')
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

  const handleDeleteService = (id) => {
    fetch(`http://localhost:5000/api/services/${id}`, {
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
    fetch(`http://localhost:5000/api/services/${id}`, {
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
        setUpdateService({
          id: null,
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

  const handlePostComment = async (service_id, commentText) => {
    try {
      const response = await fetch(`http://localhost:5000/api/comments/${service_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ comment_text: commentText })
      });
      if (!response.ok) {
        throw new Error('Failed to post comment');
      }
      fetchComments(service_id);
      setNewComment('');
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

  const handleCommentInputChange = (e) => {
    const { value } = e.target;
    setNewComment(value);
  };

  const handleCommentSubmit = (e, serviceId) => {
    e.preventDefault();
    handlePostComment(serviceId, newComment);
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px', width: '300px' }}>
            <h1>{item.service_date}</h1>
            <p>Location: {item.location}</p>
            <p>Price: {item.price}</p>
            <p>Username: {item.username}</p>
            <p>Description: {item.description}</p>
            <button onClick={() => handleDeleteService(item.id)}>Delete</button>
            <button onClick={() => setUpdateService({
              id: item.id,
              service_type: item.service_type,
              service_date: item.service_date,
              location: item.location,
              price: item.price,
              username: item.username,
              description: item.description
            })}>Update</button>
            {updateService.id === item.id && (
              <form onSubmit={(e) => {
                e.preventDefault();
                handleUpdateService(item.id, updateService);
              }}>
                <input className='ghada' type="text" name="service_type" value={updateService.service_type} onChange={handleUpdateInputChange} placeholder="Service Type" />
                <input  className='ghada' type="text" name="service_date" value={updateService.service_date} onChange={handleUpdateInputChange} placeholder="Service Date" />
                <input className='ghada' type="text" name="location" value={updateService.location} onChange={handleUpdateInputChange} placeholder="Location" />
                <input className='ghada' type="text" name="price" value={updateService.price} onChange={handleUpdateInputChange} placeholder="Price" />
                <input className='ghada' type="text" name="username" value={updateService.username} onChange={handleUpdateInputChange} placeholder="Username" />
                <input className='ghada' type="text" name="description" value={updateService.description} onChange={handleUpdateInputChange} placeholder="Description" />
                <button type="submit">Save</button>
                <button type="button" onClick={() => setUpdateService({
                  id: null,
                  service_type: '',
                  service_date: '',
                  location: '',
                  price: '',
                  username: '',
                  description: ''
                })}>Cancel</button>
              </form>
            )}
            <form onSubmit={(e) => handleCommentSubmit(e, item.id)}>
              <input className='douda'  type="text" value={newComment} onChange={handleCommentInputChange} placeholder="Add a comment" />
              <button type="submit">Post</button>
            </form>
            <p>COMMENTS</p>
            {comment && comment
              .filter(e => e.service_id === item.id)
              .map((comment) => (
                <div key={comment.comment_id}>
                  <p>{comment.comment_text}</p>
                  <p>{comment.timestamp}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HouseKeepingPage;
