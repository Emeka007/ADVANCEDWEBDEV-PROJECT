// SignInAndSignUp.js
import React, { useState } from "react";
import SignInForm from "./SignIn";  // Ensure the path is correct
import SignUpForm from "./SignUp";  // Ensure the path is correct

export default function SignInAndSignUp({ setLoggedIn }) {
  const [type, setType] = useState("signIn");

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
    }
  };

  return (
    <div className="SignInAndSignUp">
      <h2>Sign In or Sign Up</h2>
      <div className="container">
        {/* Conditionally render SignIn or SignUp based on the type */}
        {type === "signUp" ? (
          <SignUpForm setLoggedIn={setLoggedIn} />
        ) : (
          <SignInForm setLoggedIn={setLoggedIn} />
        )}

        {/* Buttons to switch between SignIn and SignUp */}
        <div>
          <button onClick={() => handleOnClick(type === "signIn" ? "signUp" : "signIn")}>
            {type === "signIn" ? "Switch to Sign Up" : "Switch to Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
}
