// SignIn.js (SignInForm)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Added for navigation

// Fake User Login info
const database = [
  {
    email: "user1@gmail.com",
    password: "pass1",
    userType: "driver"
  },
  {
    email: "user2@gmail.com",
    password: "pass2",
    userType: "consumer"
  }
];

const SignInForm = ({ setLoggedIn }) => {
  const navigate = useNavigate(); // Initialize navigate
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
      } else if (value.length < 6) { // Added minimum password length check
        setErrorMessages((prev) => ({ ...prev, password: "Password must be at least 6 characters." }));
      } else {
        setErrorMessages((prev) => ({ ...prev, password: "" }));
      }
    }
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = state;

    // Additional validation before submission
    if (!email || !password) {
      setErrorMessages({
        email: !email ? "Email is required." : "",
        password: !password ? "Password is required." : ""
      });
      return;
    }

    const userData = database.find((user) => user.email === email);

    if (userData) {
      if (userData.password !== password) {
        setErrorMessages((prev) => ({ ...prev, password: "Invalid password." }));
      } else {
        setErrorMessages({ email: "", password: "" });
        setLoggedIn();
        navigate("/dashboard"); // Redirect to dashboard after successful login
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
          required
        />
        {errorMessages.email && <div className="error">{errorMessages.email}</div>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          required
          minLength="6"
        />
        {errorMessages.password && <div className="error">{errorMessages.password}</div>}

        <a href="#">Forgot your password?</a>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;