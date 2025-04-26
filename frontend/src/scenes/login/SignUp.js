// SignUp.js (SignUpForm)
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
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const renderError = (field) => {
    if (errorMessages[field]) {
      return <div className="error">{errorMessages[field]}</div>;
    }
    return null;
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    const { name, email, password, age, phoneNumber, address } = state;

    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email || !emailRegex.test(email)) newErrors.email = "Invalid email format.";
    if (!password || password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    if (!age) newErrors.age = "Age is required.";
    if (!phoneNumber) newErrors.phoneNumber = "Phone number is required.";
    if (!address.trim()) newErrors.address = "Address is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrorMessages(newErrors);
    } else {
      setErrorMessages({});
      setLoggedIn();

      // Clear form after success
      setState({
        name: "",
        email: "",
        password: "",
        age: "",
        phoneNumber: "",
        address: "",
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>

        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {renderError("name")}

        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {renderError("email")}

        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {renderError("password")}

        <input
          type="number"
          name="age"
          value={state.age}
          onChange={handleChange}
          placeholder="Age"
        />
        {renderError("age")}

        <input
          type="tel"
          name="phoneNumber"
          value={state.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        {renderError("phoneNumber")}

        <input
          type="text"
          name="address"
          value={state.address}
          onChange={handleChange}
          placeholder="Address"
        />
        {renderError("address")}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
