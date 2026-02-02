// Create floating hearts in background
function createHeart() {
  const heart = document.createElement('div');
  heart.innerHTML = '💕';
  heart.style.position = 'absolute';
  heart.style.fontSize = Math.random() * 1.5 + 1 + 'rem';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 8 + 8 + 's';
  heart.style.opacity = Math.random() * 0.5 + 0.4;
  heart.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
  document.querySelector('.floating-hearts').appendChild(heart);

  setTimeout(() => heart.remove(), 15000);
}

setInterval(createHeart, 800);

// Yes button
function sayYes() {
  const message = document.getElementById('message');
  const gif = document.getElementById('successGif');
  const noBtn = document.getElementById('noBtn');

  noBtn.style.display = 'none';

  message.textContent = "Oh yeahhh! You said YES! 🥰💖";
  message.classList.add('show');

  gif.style.display = 'block';

  // Extra hearts burst
  for(let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 80);
  }
}

// No button runaway (classic :D)
const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
  const randomX = Math.random() * 200 - 100;
  const randomY = Math.random() * 200 - 100;
  
  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

noBtn.addEventListener('click', (e) => {
  e.preventDefault();
  noBtn.textContent = "Please? 🥺";
});
