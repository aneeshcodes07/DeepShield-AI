import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDetect = async () => {
  try {
    setLoading(true);
    setResult("");

    const response = await axios.post(
      https://deepshield-ai-k0uw.onrender.com/predict
    );

    setTimeout(() => {
      setResult(
        `${response.data.prediction} (${response.data.confidence})`
      );
      setLoading(false);
    }, 2000);

  } catch (error) {
    console.error(error);
    setResult("Backend connection failed");
    setLoading(false);
  }
};

  return (
    <div className="container">
      <h1 className="title">DeepShield AI</h1>

      <p className="subtitle">
        AI Powered Deepfake Detection System
      </p>

      <div className="upload-box">
  <label className="custom-upload">
    Upload Image or Video
    <input type="file" hidden />
  </label>
</div>

      <button
        className="detect-btn"
        onClick={handleDetect}
      >
        Detect Deepfake
      </button>

      <div className="result">
      {loading ? "Analyzing Media..." : result}
      </div>
    </div>
  );
}

export default App;
