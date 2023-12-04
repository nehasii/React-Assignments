import React, { useState } from 'react';

let GetUserDetailsForm = () => {
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
  let [searchName, setSearchName] = useState('');
  let [displayedUser, setDisplayedUser] = useState({});

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

  let handleDisplayUser = () => {
    let user = userDetails.find((u) => u.firstName === searchName);
    if (user) {
      setDisplayedUser(user);
    } else {
      alert(`User with the name "${searchName}" not found.`);
    }
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

      <div>
        <h2>Enter Users Name to Display Details:</h2>
        <div>
          <input
            type="text"
            placeholder="Enter user's first name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <button onClick={handleDisplayUser}>Display User</button>
        </div>
      </div>

      {Object.keys(displayedUser).length > 0 && (
        <div>
          <h2>Details Displayed:</h2>
          <ul>
            {Object.entries(displayedUser).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GetUserDetailsForm;
