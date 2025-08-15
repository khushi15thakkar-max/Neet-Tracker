import React, { useState, useEffect } from "react";

export default function App() {
  const examDate = new Date("2027-06-04");
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = examDate - now;
      setDaysLeft(Math.floor(diff / (1000 * 60 * 60 * 24)));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px", textAlign: "center" }}>
      <h1>📅 NEET 2027 Tracker</h1>
      <h2>Days Left: {daysLeft}</h2>
      <p>Stay focused and keep preparing!</p>
    </div>
  );
}
