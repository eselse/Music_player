// Constants ===================================================

const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// Song titles
const covers = ["almost-vanished", "limp-bizkit", "serhat-durmus"];
const songs = [
  "Almost Vanished - Horizon",
  "Limp Bizkit - N2Gether Now",
  "Serhat Durmus - Hislerim",
];

// Keep track of song
let index = 2;

// Initially load song details into DOM
loadSong(index);

// Functions ==========================================================
// Update song details
function loadSong(index) {
  title.innerText = songs[index];
  audio.src = `music/${songs[index]}.mp3`;
  cover.src = `images/${covers[index]}.jpg`;
}

// Play song
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector(".fas").classList.remove("fa-play");
  playBtn.querySelector(".fas").classList.add("fa-pause");

  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector(".fas").classList.remove("fa-pause");
  playBtn.querySelector(".fas").classList.add("fa-play");

  audio.pause();
}

// Event listeners ===================================================
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
