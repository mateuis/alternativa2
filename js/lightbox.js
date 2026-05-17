/* ============================================================
   lightbox.js
   Opens a full-screen image viewer with prev/next navigation
   and keyboard support.
   ============================================================ */

const galleryImages = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=90',
  'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=1000&q=90',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1000&q=90',
  'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1000&q=90',
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1400&q=90',
  'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=1000&q=90',
];

let currentIndex = 0;

/* ── helpers ── */
function setImage(index) {
  currentIndex = (index + galleryImages.length) % galleryImages.length;
  const img = document.getElementById('lb-img');
  if (img) img.src = galleryImages[currentIndex];
}

function openLightbox(index) {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  setImage(index);
  lb.classList.add('active');
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('active');
}

function changeLb(direction) {
  setImage(currentIndex + direction);
}

/* ── click outside to close ── */
document.addEventListener('DOMContentLoaded', () => {
  const lb = document.getElementById('lightbox');
  if (lb) {
    lb.addEventListener('click', (e) => {
      if (e.target === lb) closeLightbox();
    });
  }
});

/* ── keyboard navigation ── */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  changeLb(-1);
  if (e.key === 'ArrowRight') changeLb(1);
});
