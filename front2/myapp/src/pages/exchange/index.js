// Exchange.js

import React, { useState, useEffect } from 'react';
import NavbarGoods from '@/components/navbarGoods';
import axios from 'axios';
import './exchange.css';  // Import the updated CSS file

const Exchange = () => {
  const [data, setData] = useState([]);
  const [updateFormVisible, setUpdateFormVisible] = useState(false);
  const [updatedInfo, setUpdatedInfo] = useState({
    username: '',
    price: '',
    description: '',
    image_url: '',
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

  const deleteReview = (id) => {
    console.log('Deleting item with ID:', id);

    if (!id) {
      console.error('ID is undefined');
      return;
    }

    axios.delete(`http://localhost:5000/api/goods/${id}`)
      .then((result) => {
        window.location.reload();
        setData(data.filter(item => item.good_id !== id));
      })
      .catch((error) => {
        console.error('Error deleting review:', error);
      });
  };

  const handleUpdateClick = (item) => {
    const itemId = item.id || item.good_id;
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
    <div className="container-goods">
      <NavbarGoods />
      {data.map((item) => (
        <div key={item.good_id} className="item-goods">
          <img src={item.image_url} alt="Item Image" />
          <p>Username: {item.username}</p>
          <p>Price: {item.price}</p>
          <p>Description: {item.description}</p>
          <p>location: {item.location}</p>

          <button className="button"  onClick={() => deleteReview(item.good_id)}>Delete</button>
          <button  className="button"  onClick={() => handleUpdateClick(item)}>Update</button>
        </div>
      ))}

      {updateFormVisible && (
        <div className="update-form-goods">
          <label>Username:</label>
          <input
            className="ghada"
            type="text"
            value={updatedInfo.username}
            onChange={(e) => setUpdatedInfo({ ...updatedInfo, username: e.target.value })}
          />
          <label>Price:</label>
          <input
            className="douda"
            type="text"
            value={updatedInfo.price}
            onChange={(e) => setUpdatedInfo({ ...updatedInfo, price: e.target.value })}
          />
          <label>Description:</label>
          <input
            className="douda"
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
          <button className="button" onClick={handleUpdate}>Update</button>
          <button className="button" onClick={() => setUpdateFormVisible(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Exchange;
