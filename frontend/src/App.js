// App.js
import React, { useState } from "react";
import SignInAndSignUp from "./SignInAndSignUp";  // Ensure path is correct
import "./styles.css";  // Global styles

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      {!loggedIn ? (
        <SignInAndSignUp setLoggedIn={() => setLoggedIn(true)} />
      ) : (
        <h1>Welcome to the Dashboard!</h1>
      )}
    </div>
  );
}

export default App;
