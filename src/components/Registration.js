import React, { useState } from 'react';
import './Registration.css';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    city: '',
    category: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Data:', formData);
    alert('Registered Successfully!');
  };

  return (
    <div className="registration-container">
      <h2>Partner with Zyroo</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="text" name="businessName" placeholder="Business Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <input type="text" name="city" placeholder="City" onChange={handleChange} required />
        <select name="category" onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="fashion">Fashion</option>
          <option value="home_decor">Home Decor</option>
          <option value="electronics">Electronics</option>
          <option value="handmade">Handmade</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
