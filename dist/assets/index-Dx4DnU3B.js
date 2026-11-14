(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();function b(t){const e=document.createElement("nav");return e.className="nav-content",e.innerHTML=`
    <a href="#" class="nav-logo" data-page="home">Manual<span>Tech</span></a>
    <div style="display: flex; gap: 1rem; align-items: center;">
      <button class="nav-link-btn" data-page="home" style="background:transparent; border:none; color:var(--text-main); font-weight:600; cursor:pointer; font-size:0.925rem;">Inicio</button>
      <button class="nav-link-btn" data-page="preventivo" style="background:transparent; border:none; color:var(--text-muted); font-weight:600; cursor:pointer; font-size:0.925rem;">Preventivo</button>
      <button class="nav-link-btn" data-page="correctivo" style="background:transparent; border:none; color:var(--text-muted); font-weight:600; cursor:pointer; font-size:0.925rem;">Correctivo</button>
    </div>
  `,e.querySelectorAll("[data-page]").forEach(o=>{o.addEventListener("click",i=>{i.preventDefault();const r=i.currentTarget.dataset.page;t(r)})}),e}function h(t,e){t.innerHTML=`
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

    <!-- SECCIÓN: ¿POR QUÉ IMPORTA EL MANTENIMIENTO? -->
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

    <!-- ACCESOS RÁPIDOS A MÓDULOS -->
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
          <img src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80" alt="Correctivo" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.8);">
        </div>
        <div style="padding: 1.75rem;">
          <h3 style="font-size: 1.25rem; font-weight: 700; color: #f43f5e; margin-bottom: 0.5rem;">Mantenimiento Correctivo</h3>
          <p style="color: var(--text-muted); font-size: 0.925rem; margin-bottom: 1rem;">Protocolos de diagnóstico avanzado para BSOD, fallos de RAM y sustitución de almacenamiento.</p>
          <span style="font-size: 0.85rem; font-weight: 600; color: #f43f5e;">Ver protocolos correctivos →</span>
        </div>
      </div>
    </div>
  `,t.querySelector("#btn-comenzar").addEventListener("click",()=>e("preventivo")),t.querySelector("#card-prev").addEventListener("click",()=>e("preventivo")),t.querySelector("#card-corr").addEventListener("click",()=>e("correctivo"))}function f(t){const e=document.createElement("div");return e.className="steps-container",e.style.cssText=`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1rem;
  `,t.forEach((o,i)=>{const r=document.createElement("div");r.className="step-item",r.style.cssText=`
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 0.85rem 1rem;
      border-radius: 10px;
      background-color: var(--bg-card);
      border: 1px solid var(--border-color);
      font-size: 0.95rem;
    `,r.innerHTML=`
      <span style="background: var(--accent); color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; flex-shrink: 0; margin-top: 2px;">${i+1}</span>
      <span style="color: var(--text-main); line-height: 1.5;">${o}</span>
    `,e.appendChild(r)}),e}const g=[{id:"prev-laptop-01",tipo:"preventivo",categoria:"laptop",titulo:"Mantenimiento Preventivo Integral de Laptops (Hardware y Térmica)",frecuencia:"Cada 6 meses",imagen:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",herramientas:["Destornillador de precisión Phillips #0","Espátula de plástico antiestática (Spudger)","Pasta térmica de alta conductividad","Lata de aire comprimido","Alcohol isopropílico al 99% e hisopos"],pasos:["Apagar el equipo por completo, desconectar el adaptador de corriente y extraer la batería externa (si el modelo lo permite).","Presionar y mantener el botón de encendido durante 15 segundos para disipar la energía residual almacenada en los condensadores de la placa base.","Retirar con cuidado todos los tornillos de la carcasa inferior, organizándolos en una bandeja magnética para evitar confusiones de longitud.","Desconectar inmediatamente el conector flex de la batería interna antes de manipular cualquier otro componente eléctrico para prevenir cortocircuitos accidentales.","Desconectar los cables de alimentación del ventilador y desatornilar el módulo de disipación de calor siguiendo el orden numérico inverso indicado en el metal.","Limpiar con hisopos empapados en alcohol isopropílico los restos de pasta térmica seca sobre el chip del procesador (CPU) y la tarjeta gráfica dedicada (GPU).","Aplicar aire comprimido en ráfagas cortas sobre las aspas del ventilador y el radiador de cobre para expulsar la pelusa y el polvo acumulado que bloquean el flujo de aire.","Dosificar una cantidad precisa de pasta térmica nueva sobre el centro de los dies del procesador y GPU.","Reinstalar el disipador apretando los tornillos en diagonal, conectar la batería interna y ensamblar la carcasa inferior."]},{id:"prev-desktop-01",tipo:"preventivo",categoria:"escritorio",titulo:"Limpieza Profunda, Gestión de Cableado y Mantenimiento de Gabinete",frecuencia:"Cada 4 meses",imagen:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",herramientas:["Destornillador plano y estrella","Brocha de cerdas suaves antiestática","Precintos plásticos (amarras de cable)","Borrador de nata limpio","Aire comprimido"],pasos:["Apagar el equipo, apagar el interruptor trasero de la fuente de poder (PSU) y desconectar todos los cables de corriente y periféricos.","Retirar ambos paneles laterales del gabinete para exponer los componentes internos y el sistema de cableado.","Inmovilizar las aspas de los ventiladores del chasis y del cooler de la CPU con un palillo o dedo antes de aplicar aire comprimido, evitando inducir voltajes dañinos en la placa madre.","Extraer cuidadosamente los módulos de memoria RAM de sus zancadas, limpiar los contactos dorados con un borrador blanco y retirar los residuos con la brocha.","Desconectar temporalmente los discos y cables frontales para reencaminar el cableado por la parte posterior de la bandeja de la placa madre, maximizando el flujo de aire.","Inspeccionar visualmente los condensadores electrolíticos de la placa base para descartar abombamientos o fugas de electrolito.","Cerrar el gabinete, ajustar los paneles laterales y reconectar el equipo a la red eléctrica para verificar su correcto funcionamiento."]},{id:"corr-desktop-01",tipo:"correctivo",categoria:"escritorio",titulo:"Diagnóstico y Resolución de Pantallas Azules (BSOD) y Fallas de Memoria RAM",frecuencia:"Evento Correctivo Crítico",imagen:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",herramientas:["Memoria USB con MemTest86","Borrador de nata limpio","Linterna de alta potencia"],pasos:["Anotar el código de error exacto (Stop Code) o el nombre del archivo implicado en la pantalla azul (ej. MEMORY_MANAGEMENT o CRITICAL_PROCESS_DIED).","Desenergizar por completo la computadora y abrir el panel lateral del gabinete.","Extraer todos los módulos de memoria RAM presentes en las ranuras DIMM de la placa base.","Inspeccionar visualmente las ranuras con una linterna para asegurarse de que no existan partículas de polvo u objetos extraños en los pines.","Probar el encendido utilizando un solo módulo de RAM en el slot principal recomendado por el fabricante del motherboard.","Si el equipo arranca estable con un módulo pero falla con otro, limpiar los pines de contacto del módulo defectuoso o proceder a su reemplazo.","Ejecutar un test de memoria con MemTest86 desde una unidad USB para verificar la estabilidad de las celdas a nivel de hardware."]},{id:"corr-laptop-02",tipo:"correctivo",categoria:"laptop",titulo:"Sustitución de Disco Duro Mecánico Dañado por Unidad de Estado Sólido (SSD)",frecuencia:"Evento Correctivo de Rendimiento",imagen:"https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",herramientas:["Destornillador de precisión Phillips","Caja o adaptador externo USB para discos de 2.5 pulgadas","Unidad SSD SATA o NVMe M.2 compatible","Medio USB de instalación de sistema operativo"],pasos:["Realizar un diagnóstico del almacenamiento usando software SMART para confirmar sectores defectuosos irreversibles o lentitud extrema.","Respaldar toda la información crítica del usuario conectando el disco actual a otro equipo mediante un adaptador USB (siempre que la lectura sea posible).","Desarmar la cubierta inferior de la laptop siguiendo el manual de servicio del fabricante.","Desconectar la batería interna, desatornilar y retirar el disco duro mecánico antiguo o la unidad averiada.","Instalar la nueva unidad SSD en la ranura correspondiente, asegurándola con sus tornillos o fijaciones originales.","Conectar el medio USB booteable con el sistema operativo y configurar las particiones de la nueva unidad en formato GPT.","Instalar el sistema operativo limpio, configurar los controladores oficiales y restaurar los respaldos de archivos del usuario."]}];class v{static obtenerTodas(){return g}static obtenerPorTipo(e){return g.filter(o=>o.tipo===e)}static obtenerPorTipoYCategoria(e,o){return g.filter(i=>i.tipo===e&&(o==="all"||i.categoria===o))}}function y(t){t.innerHTML="";const e=document.createElement("div");e.innerHTML=`
    <div style="margin-bottom: 2rem;">
      <span style="color: var(--accent); font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">Módulo Preventivo</span>
      <h2 style="font-size: 2rem; font-weight: 800; letter-spacing: -0.025em; color: var(--text-main); margin-top: 0.25rem;">Guías de Mantenimiento Preventivo</h2>
      <p style="color: var(--text-muted); margin-top: 0.5rem; max-width: 700px;">Procedimientos detallados y planificados para anticiparse a las fallas, optimizar el rendimiento térmico y prolongar la vida útil de laptops y PCs de escritorio.</p>
    </div>

    <!-- Filtros de categoría -->
    <div class="filter-buttons" style="display: flex; gap: 0.75rem; background: var(--bg-card); padding: 0.85rem 1rem; border-radius: var(--radius); border: 1px solid var(--border-color); align-items: center; margin-bottom: 2rem;">
      <span style="font-size: 0.875rem; font-weight: 600; color: var(--text-muted); margin-right: 0.5rem;">Filtrar equipo:</span>
      <button class="filter-cat active" data-categoria="all" style="padding: 0.45rem 1.15rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--accent); color: white; cursor: pointer; font-size: 0.875rem; font-weight: 600;">Todos</button>
      <button class="filter-cat" data-categoria="laptop" style="padding: 0.45rem 1.15rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-card); color: var(--text-main); cursor: pointer; font-size: 0.875rem; font-weight: 600;">Laptops</button>
      <button class="filter-cat" data-categoria="escritorio" style="padding: 0.45rem 1.15rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-card); color: var(--text-main); cursor: pointer; font-size: 0.875rem; font-weight: 600;">PCs de Escritorio</button>
    </div>
  `,t.appendChild(e);const o=document.createElement("div");t.appendChild(o);let i="all";function r(){o.innerHTML="";const s=v.obtenerPorTipoYCategoria("preventivo",i);if(s.length===0){o.innerHTML=`
        <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 3rem; text-align: center; border-radius: var(--radius);">
          <p style="color: var(--text-muted);">No hay guías preventivas registradas para esta categoría.</p>
        </div>`;return}s.forEach(a=>{const d=document.createElement("div");d.className="guide-card",d.style.cssText=`
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: var(--radius);
        overflow: hidden;
        margin-bottom: 2rem;
        box-shadow: var(--shadow);
      `;let l="";a.imagen&&(l=`
          <div style="width: 100%; height: 220px; overflow: hidden; border-bottom: 1px solid var(--border-color);">
            <img src="${a.imagen}" alt="${a.titulo}" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.9); transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
          </div>
        `);let c="";a.herramientas&&a.herramientas.length>0&&(c=`
          <div style="background: rgba(56, 189, 248, 0.05); border: 1px solid rgba(56, 189, 248, 0.15); border-radius: 10px; padding: 1rem; margin-bottom: 1.25rem;">
            <strong style="font-size: 0.85rem; color: var(--accent); display: block; margin-bottom: 0.4rem; text-transform: uppercase; letter-spacing: 0.025em;">🛠️ Herramientas y Materiales Necesarios:</strong>
            <ul style="margin: 0; padding-left: 1.25rem; font-size: 0.875rem; color: var(--text-muted);">
              ${a.herramientas.map(u=>`<li style="margin-bottom: 0.2rem;">${u}</li>`).join("")}
            </ul>
          </div>
        `),d.innerHTML=`
        ${l}
        <div style="padding: 2rem;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span style="display: inline-block; padding: 0.25rem 0.65rem; background: rgba(56, 189, 248, 0.1); color: var(--accent); font-size: 0.75rem; font-weight: 700; border-radius: 6px; text-transform: uppercase; margin-bottom: 0.5rem; border: 1px solid rgba(56, 189, 248, 0.2);">${a.categoria}</span>
              <h3 style="font-size: 1.35rem; font-weight: 700; color: var(--text-main);">${a.titulo}</h3>
            </div>
            <span style="font-size: 0.85rem; background: var(--bg-card-hover); color: var(--text-muted); padding: 0.35rem 0.85rem; border-radius: 20px; border: 1px solid var(--border-color); font-weight: 500;">⏱️ ${a.frecuencia}</span>
          </div>
          ${c}
          <p style="font-size: 0.9rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.5rem;">Procedimiento técnico:</p>
        </div>
      `;const m=d.querySelector("div:last-child"),p=f(a.pasos);m.appendChild(p),o.appendChild(d)})}const n=e.querySelectorAll(".filter-cat");n.forEach(s=>{s.addEventListener("click",a=>{n.forEach(d=>{d.style.background="var(--bg-card)",d.style.color="var(--text-main)"}),a.target.style.background="var(--accent)",a.target.style.color="#ffffff",i=a.target.dataset.categoria,r()})}),r()}function x(t){t.innerHTML="";const e=document.createElement("div");e.innerHTML=`
    <div style="margin-bottom: 2rem;">
      <span style="color: #f43f5e; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">Módulo Correctivo</span>
      <h2 style="font-size: 2rem; font-weight: 800; letter-spacing: -0.025em; color: var(--text-main); margin-top: 0.25rem;">Guías de Mantenimiento Correctivo</h2>
      <p style="color: var(--text-muted); margin-top: 0.5rem; max-width: 700px;">Protocolos rigurosos de diagnóstico de síntomas, aislamiento de errores críticos y sustitución de piezas de hardware averiadas.</p>
    </div>

    <!-- Filtros de categoría -->
    <div class="filter-buttons" style="display: flex; gap: 0.75rem; background: var(--bg-card); padding: 0.85rem 1rem; border-radius: var(--radius); border: 1px solid var(--border-color); align-items: center; margin-bottom: 2rem;">
      <span style="font-size: 0.875rem; font-weight: 600; color: var(--text-muted); margin-right: 0.5rem;">Filtrar equipo:</span>
      <button class="filter-cat active" data-categoria="all" style="padding: 0.45rem 1.15rem; border-radius: 8px; border: 1px solid var(--border-color); background: #f43f5e; color: white; cursor: pointer; font-size: 0.875rem; font-weight: 600;">Todos</button>
      <button class="filter-cat" data-categoria="laptop" style="padding: 0.45rem 1.15rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-card); color: var(--text-main); cursor: pointer; font-size: 0.875rem; font-weight: 600;">Laptops</button>
      <button class="filter-cat" data-categoria="escritorio" style="padding: 0.45rem 1.15rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-card); color: var(--text-main); cursor: pointer; font-size: 0.875rem; font-weight: 600;">PCs de Escritorio</button>
    </div>
  `,t.appendChild(e);const o=document.createElement("div");t.appendChild(o);let i="all";function r(){o.innerHTML="";const s=v.obtenerPorTipoYCategoria("correctivo",i);if(s.length===0){o.innerHTML=`
        <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 3rem; text-align: center; border-radius: var(--radius);">
          <p style="color: var(--text-muted);">No hay guías correctivas registradas para esta categoría.</p>
        </div>`;return}s.forEach(a=>{const d=document.createElement("div");d.className="guide-card",d.style.cssText=`
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: var(--radius);
        overflow: hidden;
        margin-bottom: 2rem;
        box-shadow: var(--shadow);
      `;let l="";a.imagen&&(l=`
          <div style="width: 100%; height: 220px; overflow: hidden; border-bottom: 1px solid var(--border-color);">
            <img src="${a.imagen}" alt="${a.titulo}" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.9); transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
          </div>
        `);let c="";a.herramientas&&a.herramientas.length>0&&(c=`
          <div style="background: rgba(244, 63, 94, 0.05); border: 1px solid rgba(244, 63, 94, 0.15); border-radius: 10px; padding: 1rem; margin-bottom: 1.25rem;">
            <strong style="font-size: 0.85rem; color: #f43f5e; display: block; margin-bottom: 0.4rem; text-transform: uppercase; letter-spacing: 0.025em;">🛠️ Herramientas de Diagnóstico y Reparación:</strong>
            <ul style="margin: 0; padding-left: 1.25rem; font-size: 0.875rem; color: var(--text-muted);">
              ${a.herramientas.map(u=>`<li style="margin-bottom: 0.2rem;">${u}</li>`).join("")}
            </ul>
          </div>
        `),d.innerHTML=`
        ${l}
        <div style="padding: 2rem;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span style="display: inline-block; padding: 0.25rem 0.65rem; background: rgba(244, 63, 94, 0.1); color: #f43f5e; font-size: 0.75rem; font-weight: 700; border-radius: 6px; text-transform: uppercase; margin-bottom: 0.5rem; border: 1px solid rgba(244, 63, 94, 0.2);">${a.categoria}</span>
              <h3 style="font-size: 1.35rem; font-weight: 700; color: var(--text-main);">${a.titulo}</h3>
            </div>
            <span style="font-size: 0.85rem; background: var(--bg-card-hover); color: var(--text-muted); padding: 0.35rem 0.85rem; border-radius: 20px; border: 1px solid var(--border-color); font-weight: 500;">⚠️ ${a.frecuencia}</span>
          </div>
          ${c}
          <p style="font-size: 0.9rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.5rem;">Protocolo de solución paso a paso:</p>
        </div>
      `;const m=d.querySelector("div:last-child"),p=f(a.pasos);m.appendChild(p),o.appendChild(d)})}const n=e.querySelectorAll(".filter-cat");n.forEach(s=>{s.addEventListener("click",a=>{n.forEach(d=>{d.style.background="var(--bg-card)",d.style.color="var(--text-main)"}),a.target.style.background="#f43f5e",a.target.style.color="#ffffff",i=a.target.dataset.categoria,r()})}),r()}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("app"),e=document.createElement("header");document.body.prepend(e);const o=document.createElement("main");o.style.maxWidth="1000px",o.style.margin="2.5rem auto",o.style.padding="0 1.5rem",t.appendChild(o);function i(r){e.innerHTML="",e.appendChild(b(i)),e.querySelectorAll(".nav-link-btn").forEach(s=>{s.dataset.page===r?s.style.color="var(--accent)":s.style.color="var(--text-muted)"}),r==="home"?h(o,i):r==="preventivo"?y(o):r==="correctivo"&&x(o),window.scrollTo({top:0,behavior:"smooth"})}i("home")});
