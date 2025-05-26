// src/components/Home.jsx
import { useEffect, useState } from "react";
import MoodSelector from "./MoodSelector";
import {
  fetchSpotifyPlaylistsByMood,
  fetchSpotifyProfile,
} from "../utils/spotify";

export default function Home() {
  const [user, setUser] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const token = localStorage.getItem("spotify_access_token");

  // Get user info on mount (optional, for personalization)
  useEffect(() => {
    if (token) {
      fetchSpotifyProfile(token)
        .then((data) => setUser(data))
        .catch((err) => console.error(err));
    }
  }, [token]);

  // Handle mood selection
  const handleMoodSelect = async (mood) => {
    const results = await fetchSpotifyPlaylistsByMood(mood, token);
    setPlaylists(results);
  };

  // Not logged in
  if (!token) {
    return (
      <div>
        <h1>Mood Mixtape 🎧</h1>
        <a href="https://mood-mixtape-backend.onrender.com/login">
          <button>Log in with Spotify</button>
        </a>
      </div>
    );
  }

  // Logged in view
  return (
    <div>
      <h1>Mood Mixtape 🎶</h1>
      {user && <p>Welcome, {user.display_name}!</p>}

      <MoodSelector onMoodSelect={handleMoodSelect} />

      <div style={{ marginTop: "30px" }}>
        {playlists.length > 0 && <h2>Playlists matching your mood:</h2>}
        {playlists.map((playlist) => (
          <div key={playlist.id} style={{ marginBottom: "20px" }}>
            <img
              src={playlist.images[0]?.url}
              alt={playlist.name}
              style={{ width: "200px", borderRadius: "10px" }}
            />
            <h3>{playlist.name}</h3>
            <a
              href={playlist.external_urls.spotify}
              target="_blank"
              rel="noreferrer"
            >
              Open in Spotify
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
