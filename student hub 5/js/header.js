// Header controls: mobile navigation and colour theme.
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelector('.nav-links');
  const navContainer = document.querySelector('.nav-container');

  if (navContainer && navLinks) {
    const menuButton = document.createElement('button');
    menuButton.className = 'nav-toggle';
    menuButton.type = 'button';
    menuButton.setAttribute('aria-label', 'Open menu');
    menuButton.textContent = '\u2630';
    menuButton.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });
    navContainer.prepend(menuButton);
  }

  const themeButton = document.querySelector('.theme-toggle');
  if (themeButton) {
    themeButton.addEventListener('click', function () {
      document.documentElement.classList.toggle('dark-mode');
    });
  }
});
