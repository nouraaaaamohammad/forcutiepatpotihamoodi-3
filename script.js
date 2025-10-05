// Elements
const welcomeScreen = document.getElementById("welcome");
const mainMenu = document.getElementById("mainMenu");
const passcodeInput = document.getElementById("passcodeInput");
const passcodeMessage = document.getElementById("passcodeMessage");
const menuBoxes = document.getElementById("menuBoxes");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");

// Passcodes
const firstPasscode = "162009";
const albumPasscode = "i wanna see my sexy girlfriend";

// First Passcode Check
function checkPasscode() {
  const input = passcodeInput.value.trim();
  if(input === firstPasscode){
    welcomeScreen.style.display = "none";
    mainMenu.style.display = "block";
    loadMainMenu();
  } else {
    passcodeMessage.innerText = "Oppsie that's wrong dummy head, guess again (hint: it's a date)";
    setTimeout(() => { passcodeMessage.innerText = ""; }, 5000);
    passcodeInput.value = "";
  }
}

// Main Menu Boxes
function loadMainMenu() {
  const boxes = [
    { text: "A small letter for you my love", action: () => showModal("<p>My dearest love 💖, every day with you is magical 💌</p>") },
    { text: "Songs reminds me of you", action: () => showModal("<p>- Song 1 🎵<br>- Song 2 🎵<br>- Song 3 🎵</p>") },
    { text: "Letters for you my sweet love", action: () => showModal("<p>Letter 1: You make my heart smile 🥰<br>Letter 2: Forever together 💕</p>") },
    { text: "Countdown", action: () => showModal("<p>Countdown to next anniversary: 100 days 🥰</p>") },
    { text: "Small album of your hot gf", action: showAlbum },
    { text: "Extra Box", action: () => showModal("<p>Customize this box 💖</p>") }
  ];

  boxes.forEach(b => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerText = b.text;
    box.addEventListener("click", b.action);
    menuBoxes.appendChild(box);
  });
}

// Modal
function showModal(content){ modalBody.innerHTML = content; modal.style.display = "block"; }
function closeModal(){ modal.style.display = "none"; }

// Album Box (Second Passcode)
function showAlbum(){
  showModal(`
    <p>Enter passcode to unlock album:</p>
    <input type="text" id="albumInput" placeholder="Enter passcode">
    <button onclick="checkAlbumPass()">Enter</button>
    <p id="albumMessage" class="message"></p>
  `);
}

function checkAlbumPass(){
  const input = document.getElementById("albumInput").value.trim().toLowerCase();
  const albumMessage = document.getElementById("albumMessage");
  if(input === albumPasscode){
    albumMessage.innerText = "";
    modalBody.innerHTML = `<p> here's your special album <br>
      <img src="https://via.placeholder.com/150/ff99cc/fff?text=Photo1">
      <img src="https://via.placeholder.com/150/ff99cc/fff?text=Photo2">
      <img src="https://via.placeholder.com/150/ff99cc/fff?text=Photo3">
    </p>`;
  } else {
    albumMessage.innerText = `Oppsie that's wrong dummy head, guess again (hint: you should say "i wanna see.........")`;
    setTimeout(()=>{albumMessage.innerText="";},5000);
  }
}

// Close modal if click outside
window.onclick = function(event){ if(event.target === modal) closeModal(); }
