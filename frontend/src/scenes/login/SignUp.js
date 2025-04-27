// src/scenes/login/SignUp.js
import React, { useState } from "react";

const SignUpForm = ({ setLoggedIn }) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phoneNumber: "",
    address: "",
  });

  const [errorMessages, setErrorMessages] = useState({});

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("Signing up with:", state);
    setLoggedIn();
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={state.name}
          onChange={handleChange}
          required
        />
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
          required
        />
        
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          required
          minLength="6"
        />
        
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={state.age}
          onChange={handleChange}
          min="18"
          max="100"
        />
        
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={state.phoneNumber}
          onChange={handleChange}
          pattern="[0-9]{10}"
          title="10 digit phone number"
        />
        
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={state.address}
          onChange={handleChange}
        />
        
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;