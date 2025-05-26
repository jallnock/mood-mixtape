// src/utils/spotify.js

export async function fetchSpotifyPlaylistsByMood(mood, token) {
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      mood
    )}&type=playlist&limit=6`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    console.error("Failed to fetch playlists");
    return [];
  }

  const data = await response.json();
  return data.playlists.items;
}

export async function fetchSpotifyProfile(token) {
  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch profile");
  }

  return await response.json();
}
