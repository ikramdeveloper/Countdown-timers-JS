const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const newYear = "1 Jan 2023";

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 24 / 3600);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  daysEl.textContent = formatTime(days);
  hoursEl.textContent = formatTime(hours);
  minsEl.textContent = formatTime(mins);
  secondsEl.textContent = formatTime(seconds);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
}

countdown();
setInterval(countdown, 1000);
