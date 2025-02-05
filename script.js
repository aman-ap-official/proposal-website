// Add interactivity to the buttons
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const proposalText = document.querySelector('.proposal-text');
const confetti = document.querySelector('.confetti');

yesBtn.addEventListener('click', () => {
  proposalText.textContent = "Yay! I love you! 💖";
  confetti.style.display = 'block';
  noBtn.style.display = 'none';
});

noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});