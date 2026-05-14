import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const handleDetect = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict"
      );

      setResult(
        `${response.data.prediction} (${response.data.confidence})`
      );
    } catch (error) {
      console.error(error);
      setResult("Backend connection failed");
    }
  };

  return (
    <div className="container">
      <h1 className="title">DeepShield AI</h1>

      <p className="subtitle">
        AI Powered Deepfake Detection System
      </p>

      <div className="upload-box">
        <input type="file" />
      </div>

      <button
        className="detect-btn"
        onClick={handleDetect}
      >
        Detect Deepfake
      </button>

      <div className="result">
        {result}
      </div>
    </div>
  );
}

export default App;
