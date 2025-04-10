'use client'
import { useState } from "react";
import axios from "axios";

export default function Therapy() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!userInput.trim()) return;
    setLoading(true);

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/ai/analyze`, {
        text: userInput,
      });

      setSentiment(res.data.sentiment);
      setResponse(res.data.response);
    } catch (err) {
      setResponse("Sorry, something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧠 Mental Health AI Support</h1>
      
      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring focus:border-blue-400"
        rows={5}
        placeholder="Write your feelings here..."
      />

      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="mt-4 bg-primary hover:bg-blue-500 text-white px-4 py-2 rounded transition-all"
      >
        {loading ? "Analyzing..." : "Get Support"}
      </button>

      {response && (
        <div className="mt-6 p-4 bg-gray-900 border border-gray-700 rounded-lg">
          <p className="text-sm text-gray-400 mb-1">Detected Sentiment: <strong>{sentiment}</strong></p>
          <p className="text-lg text-white">{response}</p>
        </div>
      )}
    </div>
  );
}
