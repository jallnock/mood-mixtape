// src/utils/auth.js

const CLIENT_ID = "b9a34364a3f1404199ff9f3c200fdf91";
const REDIRECT_URI = "https://mood-mixtape-ex99.vercel.app/callback";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const SCOPES = [
  "user-read-private",
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
];

export const SPOTIFY_LOGIN_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
  REDIRECT_URI
)}&response_type=${RESPONSE_TYPE}&scope=${SCOPES.join("%20")}`;
