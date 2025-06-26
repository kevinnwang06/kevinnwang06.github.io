// Highlight active nav link
function updateNav() {
  document.querySelectorAll('nav a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === location.hash);
  });
}

// Setup essay expand/collapse
function setupEssayToggles() {
  document.querySelectorAll('.essay-title').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = document.getElementById(btn.getAttribute('aria-controls'));
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      content.hidden = expanded;
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  updateNav();
  setupEssayToggles();
});
window.addEventListener('hashchange', updateNav);
