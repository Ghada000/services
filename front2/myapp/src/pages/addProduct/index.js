import React, { useState } from 'react';
import axios from 'axios';
import './style.css'
function Addproduct() {
  const [formData, setFormData] = useState({
    good_type:'',
    location: '',
    price: '',
    username: '',
    description: '',
    image_url: ''
  });
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadImage = async () => {
    const formDataCloudinary = new FormData();
    formDataCloudinary.append('file', file);
    formDataCloudinary.append('upload_preset', 'hibahiba11');

    try {
      const responseCloudinary = await axios.post(
        'https://api.cloudinary.com/v1_1/dsrcopz7v/upload',
        formDataCloudinary
      );

      setImageUrl(responseCloudinary.data.secure_url);
      setFormData({ ...formData, image_url: responseCloudinary.data.secure_url });
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.location.trim()) {
      console.error('Location field is required.');
      return;
    }

    if (!file) {
      console.error('Image is required.');
      return;
    }

    try {
      const formDataCloudinary = new FormData();
      formDataCloudinary.append('file', file);
      formDataCloudinary.append('upload_preset', 'aminamina1');

      const responseCloudinary = await axios.post(
        'https://api.cloudinary.com/v1_1/do4xbungs/upload',
        formDataCloudinary
      );

      const imageUrl = responseCloudinary.data.secure_url;

      const postData = {
        good_type:formData.good_type,
        location: formData.location,
        price: formData.price,
        username: formData.username,
        description: formData.description,
        image_url: imageUrl
      };

      const response = await axios.post('http://localhost:5000/api/goods', postData);

      console.log('Product added successfully:', response.data);
      setFormData({
        good_type:'',
        location: '',
        price: '',
        username: '',
        description: '',
        image_url: ''
      });
      setImageUrl('');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="container">
      
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="good_type"></label>
            <input 
              type="text"
              id="good_type"
              name="good_type"
              value={formData.good_type}
              onChange={handleChange}
              placeholder="Enter type (exchange/borrow)"

            />
          </div>
          <div className="input-container">
            <label htmlFor="location"></label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"

            />
          </div>
          <div className="input-container">
            <label htmlFor="price"></label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"

            />
          </div>
          <div className="input-container">
            <label htmlFor="username"></label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"

            />
          </div>
          <div className="input-container">
            <label htmlFor="description"></label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"

            />
          </div>
          <div className="input-container">
            <label htmlFor="image"></label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleFileChange}
           

            />
            
          </div>
          <button type="submit">Submit</button>
        </form>
        {imageUrl && <img src={imageUrl} alt="Uploaded" />}
      </div>
    </div>
  );
}

export default Addproduct;
