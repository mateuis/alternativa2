/* ============================================================
   particles.js
   Draws animated neon particles + connection lines on a canvas.
   ============================================================ */

(function () {
  const canvas = document.getElementById('particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H;
  const PARTICLE_COUNT = 60;
  const MAX_DISTANCE   = 120;
  const particles      = [];

  /* ── resize ── */
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  /* ── initialise ── */
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x  : Math.random() * window.innerWidth,
      y  : Math.random() * window.innerHeight,
      vx : (Math.random() - 0.5) * 0.4,
      vy : (Math.random() - 0.5) * 0.4,
      r  : Math.random() * 2 + 0.5,
      a  : Math.random(),
    });
  }

  /* ── draw loop ── */
  function draw() {
    ctx.clearRect(0, 0, W, H);

    /* dots */
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,198,255,${p.a * 0.6})`;
      ctx.fill();
    });

    /* connection lines */
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);

        if (d < MAX_DISTANCE) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,198,255,${0.08 * (1 - d / MAX_DISTANCE)})`;
          ctx.lineWidth   = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
})();
