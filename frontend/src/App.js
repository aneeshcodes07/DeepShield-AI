import React, { useState } from "react";
import axios from "axios";

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
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1>DeepShield AI</h1>

      <p>AI Powered Deepfake Detection System</p>

      <input type="file" />

      <br /><br />

      <button onClick={handleDetect}>
        Detect Deepfake
      </button>

      <h2>{result}</h2>
    </div>
  );
}

export default App;