const form = document.querySelector(".form");
const playlistSuggestion = document.querySelector(".playlist-suggestion");

const playlists = {
  "pop": [
    "Ariana Grande",
    "Ed Sheeran",
    "Shawn Mendes",
  ],
  "rock": [
    "The Beatles",
    "Led Zeppelin",
    "AC/DC",
  ],
  "rap": [
    "Kendrick Lamar",
    "J. Cole",
    "Drake",
  ],
  "jazz": [
    "Louis Armstrong",
    "Ella Fitzgerald",
    "Miles Davis",
  ],
  "classical": [
    "Beethoven",
    "Mozart",
    "Bach",
  ],
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const age = document.querySelector("#age").value;
  const interests = document.querySelector(".interests").value.split(",");

  let playlist = "";
  if (age < 20) {
    playlist = "pop";
  } else if (age >= 20 && age < 40) {
    if (interests.includes("rock")) {
      playlist = "rock";
    } else {
      playlist = "rap";
    }
  } else {
    if (interests.includes("jazz")) {
      playlist = "jazz";
    } else {
      playlist = "classical";
    }
  }

  let playlistHTML = `<h2>Playlist Suggestion: ${playlist}</h2><ul>`;
  playlists[playlist].forEach((artist) => {
    playlistHTML += `<li>${artist}</li>`;
  });
  playlistHTML += "</ul>";

  playlistSuggestion.innerHTML = playlistHTML;
});