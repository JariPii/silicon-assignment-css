const burger = document.getElementById('burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
});

const theme_switch = document.getElementById('switch');

theme_switch.addEventListener('click', () => {
  theme_switch.classList.toggle('dark-mode');
});
