const tulips = document.querySelectorAll('.tulip');

tulips.forEach((tulip) => {
const glow = tulip.querySelector('.glow');
glow.style.animation = 'glow 1s infinite alternate';
});

const audio = document.getElementById('myAudio');

// Example: Play audio on hover of tulip
const tulip = document.querySelector('.tulip');
tulip.addEventListener('mouseover', () => {
  audio.play();
});

// Example: Pause audio on mouse leave
tulip.addEventListener('mouseleave', () => {
  audio.pause();
});


