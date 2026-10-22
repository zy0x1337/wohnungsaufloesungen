/*
 * Ablauf-Grundriss: Die Scrollposition der Schritte bestimmt den Zustand.
 * Ohne JS bleibt der Grundriss voll möbliert, die Schritte sind normaler Text.
 */
(() => {
  const section = document.getElementById('ablauf');
  if (!section) return;
  const plan  = section.querySelector('.ablauf-plan');
  const steps = [...section.querySelectorAll('.ablauf-step')];
  const rooms = [...plan.querySelectorAll('.plan-room')]
    .sort((a, b) => a.dataset.clearOrder - b.dataset.clearOrder);
  const floors = Object.fromEntries(
    [...plan.querySelectorAll('.plan-floor')].map(f => [f.dataset.floor, f]));
  const stacked = window.matchMedia('(max-width: 760px)');

  section.classList.add('is-enhanced');

  let ticking = false;
  function update() {
    ticking = false;
    const vh = window.innerHeight;
    // Auf dem Handy liegt der Grundriss über dem Text: Auslöselinie im freien Bereich darunter
    const planBottom = plan.getBoundingClientRect().bottom;
    const line = stacked.matches ? planBottom + (vh - planBottom) * 0.35 : vh * 0.5;

    let stage = 1;
    steps.forEach((el, i) => { if (el.getBoundingClientRect().top <= line) stage = i + 1; });

    // Schritt 3 räumt Raum für Raum, proportional zum Scrollweg durch diesen Schritt
    const r3 = steps[2].getBoundingClientRect();
    const cleared = stage > 3 ? 1 : stage < 3 ? 0
      : Math.min(1, Math.max(0, (line - r3.top) / r3.height));

    plan.dataset.stage = stage;
    rooms.forEach((room, i) => {
      const done = cleared > (i + 0.5) / rooms.length;
      room.classList.toggle('is-cleared', done);
      floors[room.dataset.room].style.fill = done ? 'var(--surface-2)' : '';
    });
    steps.forEach((el, i) => el.classList.toggle('is-active', i + 1 === stage));
  }

  const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request, { passive: true });
  update();
})();
