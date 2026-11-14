export function crearPasosGuia(pasos) {
  const container = document.createElement('div');
  container.className = 'steps-container';
  container.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1rem;
  `;

  pasos.forEach((paso, index) => {
    const item = document.createElement('div');
    item.className = 'step-item';
    item.style.cssText = `
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 0.85rem 1rem;
      border-radius: 10px;
      background-color: var(--bg-card);
      border: 1px solid var(--border-color);
      font-size: 0.95rem;
    `;

    item.innerHTML = `
      <span style="background: var(--accent); color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; flex-shrink: 0; margin-top: 2px;">${index + 1}</span>
      <span style="color: var(--text-main); line-height: 1.5;">${paso}</span>
    `;

    container.appendChild(item);
  });

  return container;
}