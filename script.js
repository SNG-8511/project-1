let countdownDate;
let countdownInterval;

document.getElementById('start-btn').addEventListener('click', () => {
  const hoursInput = document.getElementById('hours');
  const minutesInput = document.getElementById('minutes');
  const secondsInput = document.getElementById('seconds');

  const hours = parseInt(hoursInput.value) || 0;
  const minutes = parseInt(minutesInput.value) || 0;
  const seconds = parseInt(secondsInput.value) || 0;

  const now = new Date().getTime();
  countdownDate = now + hours * 3600000 + minutes * 60000 + seconds * 1000;

  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  countdownInterval = setInterval(updateCountdown, 1000);
});

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate the days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Check if the countdown has ended
  if (distance < 0) {
    document.getElementById('countdown').innerHTML = 'Countdown Ended';
    clearInterval(countdownInterval);
  }
}
