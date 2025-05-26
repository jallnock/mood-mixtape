// src/components/MoodSelector.jsx
import { useState } from "react";

const moods = [
  "bittersweet",
  "rainy nights",
  "chaotic good",
  "sunset drive",
  "soft rage",
  "late night thoughts",
];

export default function MoodSelector({ onMoodSelect }) {
  const [selected, setSelected] = useState(null);

  const handleClick = (mood) => {
    setSelected(mood);
    onMoodSelect(mood);
  };

  return (
    <div>
      <h2>Select Your Mood 🎧</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => handleClick(mood)}
            style={{
              padding: "10px 20px",
              backgroundColor: selected === mood ? "#1db954" : "#222",
              color: "white",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
}
