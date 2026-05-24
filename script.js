// script.js

/* ---- COUNTDOWN ---- */
const weddingDate = new Date("October 17, 2026 17:00:00").getTime();

const countdown = setInterval(() => {
  const now      = new Date().getTime();
  const distance = weddingDate - now;

  const days    = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML    = days;
  document.getElementById("hours").innerHTML   = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

/* ---- OUVERTURE ENVELOPPE ---- */
const openingScreen = document.getElementById("openingScreen");
const openEnvelope  = document.getElementById("openEnvelope");

openEnvelope.addEventListener("click", () => {
  openingScreen.classList.add("open");

  setTimeout(() => {
    openingScreen.classList.add("hide");
  }, 1800);
});

/* ---- POPUP RSVP ---- */
const form         = document.querySelector(".rsvp-form");
const successPopup = document.getElementById("successPopup");

form.addEventListener("submit", function () {
  successPopup.classList.add("show");

  setTimeout(() => {
    successPopup.classList.remove("show");
  }, 3000);
});
