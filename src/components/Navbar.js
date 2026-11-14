export function crearNavbar(onNavigate) {
  const nav = document.createElement('nav');
  nav.className = 'nav-content';
  nav.innerHTML = `
    <a href="#" class="nav-logo" data-page="home">Manual<span>De<span>Soporte</span></a>
    <div style="display: flex; gap: 1rem; align-items: center;">
      <button class="nav-link-btn" data-page="home" style="background:transparent; border:none; color:var(--text-main); font-weight:600; cursor:pointer; font-size:0.925rem;">Inicio</button>
      <button class="nav-link-btn" data-page="preventivo" style="background:transparent; border:none; color:var(--text-muted); font-weight:600; cursor:pointer; font-size:0.925rem;">Preventivo</button>
      <button class="nav-link-btn" data-page="correctivo" style="background:transparent; border:none; color:var(--text-muted); font-weight:600; cursor:pointer; font-size:0.925rem;">Correctivo</button>
    </div>
  `;

  nav.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const page = e.currentTarget.dataset.page;
      onNavigate(page);
    });
  });

  return nav;
}