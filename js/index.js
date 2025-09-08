const burger = document.querySelector('#burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
});

const theme_switch = document.querySelector('#switch');
const html = document.documentElement;

theme_switch.addEventListener('click', () => {
  theme_switch.classList.toggle('dark-mode');
  html.classList.toggle('dark');
});
