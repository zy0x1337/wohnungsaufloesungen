/*
 * Navigation: Linie unter dem Header beim Scrollen, mobiles Menü.
 */
(() => {
  const nav = document.getElementById('siteNav');
  const ham = document.getElementById('navHamburger');
  const drawer = document.getElementById('navDrawer');
  if (!nav || !ham || !drawer) return;

  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const setOpen = (open) => {
    drawer.classList.toggle('open', open);
    ham.classList.toggle('open', open);
    ham.setAttribute('aria-expanded', open);
    ham.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  };
  ham.addEventListener('click', () => setOpen(!drawer.classList.contains('open')));
  drawer.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) { setOpen(false); ham.focus(); }
  });
})();
