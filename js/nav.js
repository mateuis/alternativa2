/* ============================================================
   nav.js
   Handles mobile hamburger menu toggle.
   ============================================================ */

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}
