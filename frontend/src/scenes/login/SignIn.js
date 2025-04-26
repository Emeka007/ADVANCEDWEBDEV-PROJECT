// SignIn.js (SignInForm)
import React, { useState } from "react";

// Fake User Login info
const database = [
  {
    email: "user1@gmail.com",
    password: "pass1",   // only 5 characters
    userType: "driver"
  },
  {
    email: "user2@gmail.com",
    password: "pass2",   // only 5 characters
    userType: "consumer"
  }
];

const SignInForm = ({ setLoggedIn }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Real-time validation
    if (name === "email") {
      if (!value) {
        setErrorMessages((prev) => ({ ...prev, email: "Email is required." }));
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setErrorMessages((prev) => ({ ...prev, email: "Invalid email format." }));
      } else {
        setErrorMessages((prev) => ({ ...prev, email: "" }));
      }
    }

    if (name === "password") {
      if (!value) {
        setErrorMessages((prev) => ({ ...prev, password: "Password is required." }));
      } else {
        setErrorMessages((prev) => ({ ...prev, password: "" }));
      }
    }
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = state;

    const userData = database.find((user) => user.email === email);

    if (userData) {
      if (userData.password !== password) {
        setErrorMessages((prev) => ({ ...prev, password: "Invalid password." }));
      } else {
        setErrorMessages({ email: "", password: "" });  // clear errors
        setLoggedIn();
      }
    } else {
      setErrorMessages((prev) => ({ ...prev, email: "Email not found." }));
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign In</h1>

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        {errorMessages.email && <div className="error">{errorMessages.email}</div>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        {errorMessages.password && <div className="error">{errorMessages.password}</div>}

        <a href="#">Forgot your password?</a>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
