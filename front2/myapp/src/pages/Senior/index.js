import React, { useState, useEffect } from 'react';
import './style.css'
function SeniorPage() {
  const [data, setData] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [comment, setComment] = useState([]);
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
  const fetchComments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/comments');
      setComment(response.data);
      console.log("comments ❤️❤️❤️❤️", response.data);
    } catch (error) {
      console.log(error);
    }
  }

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

  const handleUpdateService = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/services/${id}`, {
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
     
        username: '',
        description: ''
      });
    } catch (error) {
      console.log(error);
    }
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
      fetchComments(service_id); // Fetch comments again to update comments
      setNewComment('');
    } catch (error) {
      console.log(error);
    }
  }

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
            <p className='titre'>Location: <br/> {item.location}</p>
            <p className='titre'>Price: <br/> {item.price}</p>
           
            <p className='titre'>Username: <br/> {item.username}</p>
            <p className='titre'>Description: <br/> {item.description}</p>
            <button onClick={() => handleDeleteService(item.id)}>🗑️</button>
            <button onClick={() => setUpdateService({ ...item })}>♻️</button>
            {updateService.id === item.id && (
              <form onSubmit={(e) => {
                e.preventDefault();
                handleUpdateService(item.id);
              }}>
                <input className='ghada' type="text" name="service_type" value={updateService.service_type} onChange={handleUpdateInputChange} placeholder="Service Type" />
                <input className='ghada' type="text" name="service_date" value={updateService.service_date} onChange={handleUpdateInputChange} placeholder="Service Date" />
                <input className='ghada' type="text" name="location" value={updateService.location} onChange={handleUpdateInputChange} placeholder="Location" />
                <input className='ghada' type="text" name="price" value={updateService.price} onChange={handleUpdateInputChange} placeholder="Price" />
                
                <input className='ghada' type="text" name="username" value={updateService.username} onChange={handleUpdateInputChange} placeholder="Username" />
                <input className='ghada' type="text" name="description" value={updateService.description} onChange={handleUpdateInputChange} placeholder="Description" />
                <button type="submit">✅</button>
                <button type="button" onClick={() => setUpdateService({ ...item })}>❌</button>
              </form>
            )}
            <form onSubmit={(e) => handleCommentSubmit(e, item.id)}>
              <input className='douda'  type="text" value={newComment} onChange={handleCommentInputChange} placeholder="Add a comment" />
              <button type="submit">➕</button>
            </form>
            <p>COMMENTS</p>
            {/* Display comments */}
            {comment&&comment
            .filter(e=>e.service_id===item.id)
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

export default SeniorPage;
