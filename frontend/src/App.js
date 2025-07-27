import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [minLength, setMinLength] = useState(10);
  const [numbers, setNumbers] = useState(true);
  const [specialCharacters, setSpecialCharacters] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = async () => {
    try {
      const response = await axios.post("https://securepassword-1.onrender.com/generate-password", {
        minLength,
        numbers,
        specialCharacters,
      });
      setPassword(response.data.password);
    } catch (err) {
      alert("Failed to generate password.");
    }
  };

  return (
    <div className="app">
      <div className="glass-box">
        <h1 className="title">🔐 Password Generator</h1>
        <div className="form">
          <label>
            <span>📏 Minimum Length:</span>
            <input
              type="number"
              value={minLength}
              onChange={(e) => setMinLength(Number(e.target.value))}
            />
          </label>
          <label>
            <span>🔢 Include Numbers:</span>
            <input
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers(!numbers)}
            />
          </label>
          <label>
            <span>✨ Include Special Characters:</span>
            <input
              type="checkbox"
              checked={specialCharacters}
              onChange={() => setSpecialCharacters(!specialCharacters)}
            />
          </label>
          <button onClick={generatePassword}>⚡ Generate Password</button>
        </div>
        {password && (
          <div className="output">
            <h2>✅ Your Password:</h2>
            <p>{password}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
