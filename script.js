document.addEventListener('DOMContentLoaded', () => {
  const saveBtn = document.getElementById('saveBtn');
  const usernameInput = document.getElementById('username');
  const greeting = document.getElementById('greeting');
  const box = document.getElementById('box');
  const animateBtn = document.getElementById('triggerAnimation');

  // Load username from localStorage
  const savedName = localStorage.getItem('username');
  if (savedName) {
    greeting.textContent = `Welcome back, ${savedName}! 👋`;
    usernameInput.value = savedName;
  }

  // Save username to localStorage
  saveBtn.addEventListener('click', () => {
    const name = usernameInput.value.trim();
    if (name.length >= 2) {
      localStorage.setItem('username', name);
      greeting.textContent = `Hello, ${name}! Your name has been saved. ✅`;
    } else {
      greeting.textContent = '⚠️ Please enter at least 2 characters.';
    }
  });

  // Trigger animation on box
  animateBtn.addEventListener('click', () => {
    box.classList.remove('animate');
    void box.offsetWidth;
    box.classList.add('animate');
  });
});
