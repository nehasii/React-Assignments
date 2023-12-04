import React, { useState } from 'react';
import './Form.css'

let UserDetailsForm = () => {
  let [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    email: '',
    password: '',
    contact: '',
  });

  let [userDetails, setUserDetails] = useState([]); 

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let dataToDisplay = { ...formData };
    delete dataToDisplay.password;


    setUserDetails([dataToDisplay]);


    setFormData({
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      email: '',
      password: '',
      contact: '',
    });
  };

  return (
    <div className='container'>
      <h1>User Details Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contact</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {userDetails.length > 0 && (
        <div>
          <h2>Details Entered:</h2>
          <ul>
            {userDetails.map((user, index) => (
              <li key={index}>
                <h3>Entry {index + 1}:</h3>
                <ul>
                  {Object.entries(user).map(([key, value]) => (
                    <li key={key}>
                      {key}: {value}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDetailsForm;
