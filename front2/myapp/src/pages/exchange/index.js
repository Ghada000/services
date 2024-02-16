import React, { useState, useEffect } from 'react';
import NavbarGoods from '@/components/navbarGoods';
import axios from 'axios';
import './exchange.css';  // Import the CSS file
import StarRating from '../starRating';
const Exchange = () => {
  const [data, setData] = useState([]);
  const [updateFormVisible, setUpdateFormVisible] = useState(false);
  const [updatedInfo, setUpdatedInfo] = useState({
    username: '',
    price: '',
    description: '',
    image_url: '', // Add image_url to hold updated image URL
  });
  const [selectedItemId, setSelectedItemId] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/goods/exchange');

      if (response.status === 200) {
        setData(response.data);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  fetchData();
}, []);
// ... existing code

const deleteReview = (id) => {
  console.log('Deleting item with ID:', id);

  if (!id) {
    console.error('ID is undefined');
    return;
  }

  axios.delete(`http://localhost:5000/api/goods/${id}`)
    .then((result) => {
      window.location.reload();
      setData(data.filter(item => item.good_id !== id));  // Assuming 'good_id' is the correct property
    })
    .catch((error) => {
      console.error('Error deleting review:', error);
    });
};

// ... existing code
const handleUpdateClick = (item) => {
  const itemId = item.id || item.good_id; // Use a different property if item.id is undefined
  if (!itemId) {
    console.error('Item ID is undefined');
    return;
  }

  setUpdateFormVisible(true);
  setSelectedItemId(itemId);
  setUpdatedInfo({
    username: item.username,
    price: item.price,
    description: item.description,
    image_url: item.image_url,
  });
};


const handleUpdate = () => {
  if (!selectedItemId) {
    console.error('Selected item ID is undefined');
    return;
  }

  // FormData for handling file uploads
  const formData = new FormData();
  formData.append('username', updatedInfo.username);
  formData.append('price', updatedInfo.price);
  formData.append('description', updatedInfo.description);
  formData.append('image', updatedInfo.image_url);

  axios.put(`http://localhost:5000/api/goods/${selectedItemId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then((response) => {
      console.log('Item updated successfully:', response.data);
      window.location.reload();
    })
    .catch((error) => {
      console.error('Error updating item:', error);
    })
    .finally(() => {
      setUpdateFormVisible(false);
    });
};

  return (
    <div>
      <NavbarGoods />
      {data.map((item) => (
        <div key={item.good_id} className="item">
          <img src={item.image_url} alt="Item Image" />
        
          <p>Username: {item.username}</p>
          <p>Price: {item.price}</p>
          <p>Description: {item.description}</p>
          <button onClick={() => deleteReview(item.good_id)}>Delete</button>

          <button onClick={() => handleUpdateClick(item)}>Update</button>
        </div>
      ))}

      {updateFormVisible && (
        <div className="update-form">
          <label>Username:</label>
          <input
            type="text"
            value={updatedInfo.username}
            onChange={(e) => setUpdatedInfo({ ...updatedInfo, username: e.target.value })}
          />
          <label>Price:</label>
          <input
            type="text"
            value={updatedInfo.price}
            onChange={(e) => setUpdatedInfo({ ...updatedInfo, price: e.target.value })}
          />
          <label>Description:</label>
          <input
            type="text"
            value={updatedInfo.description}
            onChange={(e) => setUpdatedInfo({ ...updatedInfo, description: e.target.value })}
          />
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setUpdatedInfo({ ...updatedInfo, image_url: e.target.files[0] })}
          />
          
          
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setUpdateFormVisible(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Exchange;
