// src/scenes/login/SignInAndSignUp.js
import React, { useState } from "react";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";

export default function SignInAndSignUp({ setLoggedIn }) {
  const [type, setType] = useState("signIn");

  return (
    <div className="SignInAndSignUp">
      <div className={`container ${type === "signUp" ? "right-panel-active" : ""}`}>
        <SignInForm setLoggedIn={setLoggedIn} />
        <SignUpForm setLoggedIn={setLoggedIn} />
        
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected please login with your personal info</p>
              <button 
                className="ghost" 
                onClick={() => setType("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button 
                className="ghost" 
                onClick={() => setType("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}