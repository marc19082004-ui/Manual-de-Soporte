import { crearPasosGuia } from '../components/Checklist.js';
import { ManualRepo } from '../data/ManualRepo.js';

export function renderCorrectivoPage(container) {
  container.innerHTML = '';

  const headerSection = document.createElement('div');
  headerSection.innerHTML = `
    <div style="margin-bottom: 2rem;">
      <span style="color: #f43f5e; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">Módulo Correctivo · Diagnóstico Avanzado</span>
      <h2 style="font-size: 2.25rem; font-weight: 800; letter-spacing: -0.025em; color: var(--text-main); margin-top: 0.25rem;">Mantenimiento Correctivo de Equipos</h2>
      <p style="color: var(--text-muted); margin-top: 0.5rem; max-width: 800px; line-height: 1.6;">
        Protocolos rigurosos para el aislamiento de fallas críticas de hardware, resolución de pantallas azules (BSOD), fallas de memoria y sustitución segura de componentes averiados.
      </p>
    </div>

    <!-- NUEVA SECCIÓN: MECANISMOS DE PRECAUCIÓN Y ESD CON IMAGEN ALUSIVA -->
    <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius); overflow: hidden; margin-bottom: 2.5rem; box-shadow: var(--shadow);">
      <div style="height: 200px; overflow: hidden; border-bottom: 1px solid var(--border-color);">
        <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80" alt="Protocolos de precaución y seguridad antiestática" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.85);">
      </div>
      <div style="padding: 2rem;">
        <h3 style="font-size: 1.35rem; font-weight: 700; color: #f43f5e; margin-bottom: 1rem;">⚠️ Mecanismos de Precaución y Seguridad Electrostática (ESD)</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">
          <div style="background: var(--bg-card-hover); padding: 1.25rem; border-radius: 10px; border: 1px solid var(--border-color);">
            <strong style="color: var(--text-main); display: block; margin-bottom: 0.5rem;">🔌 Descarga Electrostática (ESD)</strong>
            Uso obligatorio de pulsera antiestática conectada a tierra o descarga previa en partes metálicas del chasis para evitar daños irreversibles por estática en los circuitos integrados y bancos de RAM.
          </div>
          <div style="background: var(--bg-card-hover); padding: 1.25rem; border-radius: 10px; border: 1px solid var(--border-color);">
            <strong style="color: var(--text-main); display: block; margin-bottom: 0.5rem;">🔋 Protocolo de Desconexión Segura</strong>
            En laptops, la separación del conector de la batería interna debe ser siempre el primer paso lógico tras retirar la tapa inferior, evitando cortocircuito accidental en los buses de datos.
          </div>
          <div style="background: var(--bg-card-hover); padding: 1.25rem; border-radius: 10px; border: 1px solid var(--border-color);">
            <strong style="color: var(--text-main); display: block; margin-bottom: 0.5rem;">🔍 Sugerencia de Diagnóstico Aislado</strong>
            Nunca sustituya componentes al azar. Siga pruebas de exclusión metódicas para identificar la pieza exacta con fallas lógicas o físicas antes de adquirir repuestos.
          </div>
        </div>
      </div>
    </div>

    <!-- Filtros de categoría -->
    <div class="filter-buttons" style="display: flex; gap: 0.75rem; background: var(--bg-card); padding: 0.85rem 1rem; border-radius: var(--radius); border: 1px solid var(--border-color); align-items: center; margin-bottom: 2rem;">
      <span style="font-size: 0.875rem; font-weight: 600; color: var(--text-muted); margin-right: 0.5rem;">Filtrar correctivo:</span>
      <button class="filter-cat active" data-categoria="all" style="padding: 0.45rem 1.15rem; border-radius: 8px; border: 1px solid var(--border-color); background: #f43f5e; color: white; cursor: pointer; font-size: 0.875rem; font-weight: 600;">Todos</button>
      <button class="filter-cat" data-categoria="laptop" style="padding: 0.45rem 1.15rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-card); color: var(--text-main); cursor: pointer; font-size: 0.875rem; font-weight: 600;">Laptops</button>
      <button class="filter-cat" data-categoria="escritorio" style="padding: 0.45rem 1.15rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-card); color: var(--text-main); cursor: pointer; font-size: 0.875rem; font-weight: 600;">PCs de Escritorio</button>
    </div>
  `;
  container.appendChild(headerSection);

  const guidesContainer = document.createElement('div');
  container.appendChild(guidesContainer);

  let categoriaActual = 'all';

  function actualizarLista() {
    guidesContainer.innerHTML = '';
    const guiasFiltradas = ManualRepo.obtenerPorTipoYCategoria('correctivo', categoriaActual);

    if (guiasFiltradas.length === 0) {
      guidesContainer.innerHTML = `
        <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 3rem; text-align: center; border-radius: var(--radius);">
          <p style="color: var(--text-muted);">No hay guías correctivas registradas para esta categoría.</p>
        </div>`;
      return;
    }

    guiasFiltradas.forEach(guia => {
      const card = document.createElement('div');
      card.className = 'guide-card';
      card.style.cssText = `
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: var(--radius);
        overflow: hidden;
        margin-bottom: 2rem;
        box-shadow: var(--shadow);
      `;

      const imagenPrincipalUrl = guia.categoria === 'laptop' 
        ? 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80' 
        : 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80';

      const imagenHTML = `
        <div style="width: 100%; height: 220px; overflow: hidden; border-bottom: 1px solid var(--border-color);">
          <img src="${imagenPrincipalUrl}" alt="${guia.titulo}" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.9);">
        </div>
      `;

      let herramientasHTML = '';
      if (guia.herramientas && guia.herramientas.length > 0) {
        herramientasHTML = `
          <div style="background: rgba(244, 63, 94, 0.05); border: 1px solid rgba(244, 63, 94, 0.15); border-radius: 10px; padding: 1rem; margin-bottom: 1.25rem;">
            <strong style="font-size: 0.85rem; color: #f43f5e; display: block; margin-bottom: 0.4rem; text-transform: uppercase; letter-spacing: 0.025em;">🛠️ Herramientas de Diagnóstico y Reparación:</strong>
            <ul style="margin: 0; padding-left: 1.25rem; font-size: 0.875rem; color: var(--text-muted);">
              ${guia.herramientas.map(h => `<li style="margin-bottom: 0.2rem;">${h}</li>`).join('')}
            </ul>
          </div>
        `;
      }

      card.innerHTML = `
        ${imagenHTML}
        <div style="padding: 2rem;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span style="display: inline-block; padding: 0.25rem 0.65rem; background: rgba(244, 63, 94, 0.1); color: #f43f5e; font-size: 0.75rem; font-weight: 700; border-radius: 6px; text-transform: uppercase; margin-bottom: 0.5rem; border: 1px solid rgba(244, 63, 94, 0.2);">${guia.categoria}</span>
              <h3 style="font-size: 1.35rem; font-weight: 700; color: var(--text-main);">${guia.titulo}</h3>
            </div>
            <span style="font-size: 0.85rem; background: var(--bg-card-hover); color: var(--text-muted); padding: 0.35rem 0.85rem; border-radius: 20px; border: 1px solid var(--border-color); font-weight: 500;">⚠️ ${guia.frecuencia}</span>
          </div>

          <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.25rem;">
            ${guia.descripcion}
          </p>

          ${herramientasHTML}
          <p style="font-size: 0.9rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.5rem;">Protocolo de solución paso a paso:</p>
        </div>
      `;

      const contenidoCard = card.querySelector('div:last-child');
      const pasosElement = crearPasosGuia(guia.pasos);
      contenidoCard.appendChild(pasosElement);
      guidesContainer.appendChild(card);
    });
  }

  const catBtns = headerSection.querySelectorAll('.filter-cat');
  catBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      catBtns.forEach(b => {
        b.style.background = 'var(--bg-card)';
        b.style.color = 'var(--text-main)';
      });
      e.target.style.background = '#f43f5e';
      e.target.style.color = '#ffffff';
      categoriaActual = e.target.dataset.categoria;
      actualizarLista();
    });
  });

  actualizarLista();
}