let totalSeconds = 100;
const timerElement = document.querySelector('.timer');

function updateTimer() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  timerElement.textContent = `${formattedMinutes} : ${formattedSeconds}`;
}

updateTimer();

const timerId = setInterval(() => {
  if (totalSeconds <= 0) {
    clearInterval(timerId);
    return;
  }

  totalSeconds--;
  updateTimer();
}, 1000);