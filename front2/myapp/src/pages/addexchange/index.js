import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

function Addproduct() {
  const [formData, setFormData] = useState({
    location: '',
    price: '',
    username: '',
    description: '',
    image_url: ''
  });
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const mapContainerRef = useRef(null);
  let map;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const initMap = () => {
    map = new window.google.maps.Map(mapContainerRef.current, {
      center: { lat: 0, lng: 0 }, // Default to center of the world
      zoom: 8, // Adjust as needed
    });

    // Add click event listener to get the coordinates
    map.addListener('click', (event) => {
      const { lat, lng } = event.latLng.toJSON();
      setFormData({ ...formData, location: `${lat}, ${lng}` });
    });
  };

  useEffect(() => {
    // Load the Google Maps API script asynchronously
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

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
        location: formData.location,
        price: formData.price,
        username: formData.username,
        description: formData.description,
        image_url: imageUrl
      };

      const response = await axios.post('http://localhost:5000/api/goods', postData);

      console.log('Product added successfully:', response.data);
      setFormData({
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
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="dd"
            placeholder="Enter location"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="dd"
            placeholder="Enter price"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="dd"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="dd"
            placeholder="Enter description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            className="dd"
          />
        </div>
        <button type="submit" className="button-55">
          Submit
        </button>
      </form>
      <div ref={mapContainerRef} style={{ height: '400px', width: '100%' }} />
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
  );
}

export default Addproduct;
