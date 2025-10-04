const burger = document.querySelector('#burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
});

const toggle = document.getElementById('theme-toggle');

let savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  toggle.checked = savedTheme === 'dark';
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute(
    'data-theme',
    prefersDark ? 'dark' : 'light'
  );
  toggle.checked = prefersDark;
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});
