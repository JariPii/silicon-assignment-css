const burger = document.querySelector('#burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
});

// const theme_switch = document.querySelector('#switch');
// const html = document.documentElement;

// theme_switch.addEventListener('click', () => {
//   theme_switch.classList.toggle('dark-mode');
//   html.classList.toggle('dark');
// });

const toggle = document.getElementById('theme-toggle');

// Check if user already saved a theme
let savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  toggle.checked = savedTheme === 'dark';
} else {
  // No saved theme → fall back to system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute(
    'data-theme',
    prefersDark ? 'dark' : 'light'
  );
  toggle.checked = prefersDark;
}

// Toggle on click
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});
