/* ============================================================
   carousel.js
   Auto-scrolling testimonial carousel with dot navigation.
   Pauses on hover.
   ============================================================ */

(function () {
  const track    = document.getElementById('testimonialTrack');
  const navWrap  = document.getElementById('testimonialNav');
  if (!track || !navWrap) return;

  const cards   = track.querySelectorAll('.testimonial-card');
  const CARD_W  = 380 + 24; // card width + gap
  let current   = 0;
  let autoTimer;

  /* ── build dots ── */
  cards.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 't-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    navWrap.appendChild(dot);
  });

  /* ── navigation ── */
  function goTo(index) {
    current = index;

    const maxOffset = (cards.length - 1) * CARD_W;
    const offset    = Math.min(index * CARD_W, maxOffset);
    track.style.transform = `translateX(-${offset}px)`;

    document.querySelectorAll('.t-dot').forEach((dot, j) => {
      dot.classList.toggle('active', j === index);
    });
  }

  function nextSlide() {
    goTo((current + 1) % cards.length);
  }

  /* ── auto-play ── */
  function startAuto() {
    autoTimer = setInterval(nextSlide, 4000);
  }
  function stopAuto() {
    clearInterval(autoTimer);
  }

  startAuto();
  track.addEventListener('mouseenter', stopAuto);
  track.addEventListener('mouseleave', startAuto);
})();
