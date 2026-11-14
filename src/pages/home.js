export function renderHomePage(container, onNavigate) {
  container.innerHTML = `
    <div class="hero-banner" style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 2rem; align-items: center; margin-bottom: 2.5rem;">
      <div>
        <span style="color: var(--accent); font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">Plataforma Técnica · Ingeniería de Sistemas</span>
        <h1 style="font-size: 2.5rem; font-weight: 800; line-height: 1.2; margin: 0.5rem 0 1rem; color: var(--text-main);">Ingeniería de precisión para la <em style="color: var(--accent); font-style: normal;">estabilidad y rendimiento</em> de tus equipos</h1>
        <p style="color: var(--text-muted); font-size: 1.05rem; margin-bottom: 1.5rem;">Portal especializado en protocolos de mantenimiento preventivo y correctivo para hardware informático, diseñado bajo estándares profesionales.</p>
        <button id="btn-comenzar" style="background: var(--accent); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 10px; font-weight: 600; cursor: pointer; font-size: 1rem; box-shadow: 0 4px 14px rgba(56, 189, 248, 0.4);">Explorar manuales →</button>
      </div>
      <div style="border-radius: var(--radius); overflow: hidden; border: 1px solid var(--border-color); box-shadow: var(--shadow);">
        <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80" alt="Mantenimiento de equipos" style="width: 100%; height: 100%; object-fit: cover; display: block; filter: brightness(0.85);">
      </div>
    </div>

    
    <section style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius); padding: 2.5rem; margin-bottom: 2.5rem; box-shadow: var(--shadow);">
      <h2 style="font-size: 1.75rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.5rem;">¿Por qué es vital realizar mantenimiento técnico?</h2>
      <p style="color: var(--accent); font-weight: 600; margin-bottom: 1.25rem; font-size: 0.95rem;">La prevención asegura la continuidad operativa y protege tu inversión en hardware.</p>
      
      <div style="display: flex; flex-direction: column; gap: 1rem; color: var(--text-muted); font-size: 0.975rem; line-height: 1.7;">
        <p>
          Los sistemas informáticos acumulan de manera imperceptible partículas de polvo, degradación térmica en los compuestos de transferencia y fragmentación lógica que comprometen gravemente su estabilidad. Sin un mantenimiento periódico, los componentes sufren de estrangulamiento térmico (thermal throttling), acortando su ciclo de vida útil y exponiendo al usuario a fallas críticas del sistema o pérdida de datos.
        </p>
        <p>
          Implementar rutinas preventivas y correctivas estructuradas garantiza una eficiencia energética óptima, disipación térmica adecuada y máxima confiabilidad operativa, resultando significativamente más rentable que la sustitución prematura de componentes o la recuperación forense de datos.
        </p>
      </div>
    </section>

   
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
      <div class="guide-card" style="cursor: pointer; overflow: hidden; padding: 0;" id="card-prev">
        <div style="height: 140px; overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80" alt="Preventivo" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.8);">
        </div>
        <div style="padding: 1.75rem;">
          <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--accent); margin-bottom: 0.5rem;">Mantenimiento Preventivo</h3>
          <p style="color: var(--text-muted); font-size: 0.925rem; margin-bottom: 1rem;">Rutinas programadas de limpieza térmica y optimización para anticiparse a las fallas de hardware.</p>
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--accent);">Ver guías preventivas →</span>
        </div>
      </div>

      <div class="guide-card" style="cursor: pointer; overflow: hidden; padding: 0;" id="card-corr">
        <div style="height: 140px; overflow: hidden;">
          <img src="https://ogisa.es/wp-content/uploads/2023/05/Publicidad-Programatica-2023-05-24T100229.341.jpg" alt="Correctivo" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.8);">
        </div>
        <div style="padding: 1.75rem;">
          <h3 style="font-size: 1.25rem; font-weight: 700; color: #f43f5e; margin-bottom: 0.5rem;">Mantenimiento Correctivo</h3>
          <p style="color: var(--text-muted); font-size: 0.925rem; margin-bottom: 1rem;">Protocolos de diagnóstico avanzado para BSOD, fallos de RAM y sustitución de almacenamiento.</p>
          <span style="font-size: 0.85rem; font-weight: 600; color: #f43f5e;">Ver protocolos correctivos →</span>
        </div>
      </div>
    </div>
  `;

  container.querySelector('#btn-comenzar').addEventListener('click', () => onNavigate('preventivo'));
  container.querySelector('#card-prev').addEventListener('click', () => onNavigate('preventivo'));
  container.querySelector('#card-corr').addEventListener('click', () => onNavigate('correctivo'));
}