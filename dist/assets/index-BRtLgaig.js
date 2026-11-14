(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();function h(t){const a=document.createElement("nav");return a.className="nav-content",a.innerHTML=`
    <a href="#" class="nav-logo" data-page="home">Manual<span>De<span>Soporte</span></a>
    <div style="display: flex; gap: 1rem; align-items: center;">
      <button class="nav-link-btn" data-page="home" style="background:transparent; border:none; color:var(--text-main); font-weight:600; cursor:pointer; font-size:0.925rem;">Inicio</button>
      <button class="nav-link-btn" data-page="preventivo" style="background:transparent; border:none; color:var(--text-muted); font-weight:600; cursor:pointer; font-size:0.925rem;">Preventivo</button>
      <button class="nav-link-btn" data-page="correctivo" style="background:transparent; border:none; color:var(--text-muted); font-weight:600; cursor:pointer; font-size:0.925rem;">Correctivo</button>
    </div>
  `,a.querySelectorAll("[data-page]").forEach(o=>{o.addEventListener("click",i=>{i.preventDefault();const e=i.currentTarget.dataset.page;t(e)})}),a}function y(t,a){t.innerHTML=`
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
          <img src="https://ogisa.es/wp-content/uploads/2023/05/Publicidad-Programatica-2023-05-24T100229.341.jpg" alt="Correctivo" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.8);">
        </div>
        <div style="padding: 1.75rem;">
          <h3 style="font-size: 1.25rem; font-weight: 700; color: #f43f5e; margin-bottom: 0.5rem;">Mantenimiento Correctivo</h3>
          <p style="color: var(--text-muted); font-size: 0.925rem; margin-bottom: 1rem;">Protocolos de diagnóstico avanzado para BSOD, fallos de RAM y sustitución de almacenamiento.</p>
          <span style="font-size: 0.85rem; font-weight: 600; color: #f43f5e;">Ver protocolos correctivos →</span>
        </div>
      </div>
    </div>
  `,t.querySelector("#btn-comenzar").addEventListener("click",()=>a("preventivo")),t.querySelector("#card-prev").addEventListener("click",()=>a("preventivo")),t.querySelector("#card-corr").addEventListener("click",()=>a("correctivo"))}function v(t){const a=document.createElement("div");return a.className="steps-container",a.style.cssText=`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1rem;
  `,t.forEach((o,i)=>{const e=document.createElement("div");e.className="step-item",e.style.cssText=`
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 0.85rem 1rem;
      border-radius: 10px;
      background-color: var(--bg-card);
      border: 1px solid var(--border-color);
      font-size: 0.95rem;
    `,e.innerHTML=`
      <span style="background: var(--accent); color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; flex-shrink: 0; margin-top: 2px;">${i+1}</span>
      <span style="color: var(--text-main); line-height: 1.5;">${o}</span>
    `,a.appendChild(e)}),a}const g=[{id:"prev-laptop-01",tipo:"preventivo",categoria:"laptop",titulo:"Mantenimiento Preventivo Integral de Laptops: Gestión Térmica y Conservación de Circuitos",frecuencia:"Cada 6 meses",descripcion:"Protocolo avanzado de ingeniería para mitigar el estrangulamiento térmico (thermal throttling), limpieza de microfiltros de aire, renovación de compuestos de transferencia y preservación de celdas de polímero de litio. Diseñado para garantizar la máxima estabilidad operativa bajo cargas de trabajo prolongadas en entornos académicos y profesionales.",herramientas:["Destornillador de precisión Phillips #0 e imantador de puntas","Espátula de plástico antiestática (Spudger de polímero de alta resistencia)","Pasta térmica de alto rendimiento (conductividad térmica > 8.5 W/mK)","Lata de aire comprimido de grado electrónico con tubo de extensión","Alcohol isopropílico al 99% e hisopos de algodón libres de pelusa","Pulsera antiestática de conexión a tierra con pinza de cocodrilo"],pasos:["Apagado total del equipo: Desconectar el adaptador de corriente alterna y extraer la batería externa si el diseño del chasis cuenta con este mecanismo de liberación rápida.","Disipación de energía residual: Mantener presionado el botón de encendido físico durante 15 a 20 segundos para vaciar por completo la capacitancia remanente en los circuitos de la placa base.","Desarmado de la cubierta inferior: Retirar sistemáticamente los tornillos de la carcasa, organizándolos en una bandeja magnética respetando su longitud y métrica original para evitar perforaciones en el rearmado.","Aislamiento eléctrico prioritario: Desconectar inmediatamente el cable flex de la batería interna antes de tocar o manipular cualquier otro circuito integrado o conector de datos de la placa.","Extracción del sistema de enfriamiento: Desconectar el conector de alimentación del ventilador (blower) y desatornilar los anclajes del disipador de cobre siguiendo estrictamente el orden numérico inverso indicado en el metal.","Limpieza de los dies del procesador y GPU: Utilizar hisopos empapados en alcohol isopropílico al 99% para disolver y retirar por completo los residuos de pasta térmica seca y reseca en las matrices de silicio.","Desobstrucción de ductos de ventilación: Aplicar aire comprimido en ráfagas cortas y controladas sobre el radiador de aletas y las aspas del ventilador, asegurándose de inmovilizar el eje para evitar generar voltajes inversos en el motor.","Dosificación del nuevo compuesto térmico: Aplicar una cantidad precisa (patrón de equis o línea central milimétrica) de pasta térmica de alta conductividad sobre el dado del procesador y el chip gráfico dedicado.","Ensamblaje final y torque de tornillos: Colocar el disipador ajustando los tornillos en diagonal y cruzados para garantizar una presión uniforme, reconectar la batería interna y cerrar el chasis ajustando los pernos perimetrales."]},{id:"prev-desktop-01",tipo:"preventivo",categoria:"escritorio",titulo:"Mantenimiento Preventivo de Torres y PCs de Escritorio: Flujo de Aire y Estabilidad de Gabinete",frecuencia:"Cada 4 meses",descripcion:"Optimización aerodinámica interna, limpieza de disipadores masivos de CPU, mantenimiento de slots DIMM y revisión preventiva de la fuente de poder (PSU). Evita acumulaciones de polvo estático y caídas de rendimiento por acumulación calórica en placas base de alto rendimiento.",herramientas:["Destornillador de estrella magnético de punta intercambiable","Brocha de cerdas suaves antiestática para disipación de cargas","Precintos plásticos (amarras) para gestión y canalización de cableado","Borrador de nata blanco libre de abrasivos químicos","Multímetro digital de precisión para verificación de voltajes en carriles"],pasos:["Desenergización y desconexión: Apagar el sistema operativo, apagar el interruptor trasero de la fuente de poder (PSU) y retirar todos los cables de alimentación eléctrica y periféricos.","Apertura del chasis: Trasladar el gabinete a una mesa de trabajo limpia, despejada y libre de humedad; retirar ambos paneles laterales para exponer los componentes internos.","Limpieza preventiva de slots de memoria RAM: Extraer cuidadosamente los módulos de memoria, frotar con suavidad los contactos dorados con el borrador blanco y retirar los residuos con la brocha antiestática.","Reorganización y gestión de cables (Cable Management): Desconectar temporalmente los cables frontales y de datos SATA para pasarlos por la parte posterior de la bandeja de la placa madre, liberando los canales de flujo de aire frontal.","Inspección visual de capacitores: Examinar detalladamente la superficie de la placa base buscando indicios de condensadores electrolíticos abombados, fugas de electrolito o corrosión en pistas.","Limpieza de ventiladores de chasis: Limpiar las aspas de los ventiladores de entrada y salida utilizando la brocha y aire comprimido, manteniendo bloqueado el giro de las aspas con un objeto delgado.","Prueba de encendido y monitoreo: Volver a colocar los paneles del gabinete, conectar los cables y encender el equipo para verificar el funcionamiento de los ventiladores y las temperaturas en reposo mediante software."]},{id:"corr-desktop-01",tipo:"correctivo",categoria:"escritorio",titulo:"Protocolo Correctivo Avanzado: Diagnóstico de Pantallas Azules (BSOD) y Fallas de Memoria RAM",frecuencia:"Evento Correctivo Crítico",descripcion:"Procedimiento técnico de aislamiento de fallas lógicas y físicas asociadas a errores fatales del kernel de Windows, fallas de paginación y celdas de memoria RAM dañadas que comprometen la estabilidad general del sistema.",herramientas:["Memoria USB booteable con utilidad avanzada MemTest86","Borrador de nata blanco para limpieza de contactos","Linterna LED de alta potencia para inspección de zócalos","Medio de instalación de sistema operativo de rescate y diagnóstico"],pasos:["Registro y análisis del código de parada (Stop Code): Anotar el código hexadecimal exacto y el nombre del archivo de error emitido en la pantalla azul (ej. MEMORY_MANAGEMENT o IRQL_NOT_LESS_OR_EQUAL).","Aislamiento eléctrico del gabinete: Desconectar el equipo de la red eléctrica, pulsar el botón de encendido para vaciar la energía residual y retirar el panel lateral del chasis.","Extracción y revisión de bancos de memoria: Desconectar todos los módulos de RAM instalados en las ranuras DIMM de la placa base aplicando presión uniforme en los pestillos laterales.","Inspección física de zócalos: Utilizar una linterna de alta potencia para verificar que las ranuras de la placa base no contengan residuos de polvo, hilachas o pines doblados que impidan la conexión.","Prueba de arranque cruzado: Insertar un único módulo de memoria RAM en el slot principal especificado por el manual del fabricante (usualmente DIMM A2) y encender el equipo para comprobar estabilidad.","Sustitución de componente defectuoso: Si el equipo arranca de forma estable con un módulo y falla con otro, limpiar los pines de contacto del componente afectado o proceder a su reemplazo definitivo.","Verificación de celdas lógicas: Ejecutar una prueba diagnóstica exhaustiva utilizando MemTest86 desde una unidad USB booteable para descartar errores lógicos en las celdas de almacenamiento temporal."]},{id:"corr-laptop-02",tipo:"correctivo",categoria:"laptop",titulo:"Protocolo Correctivo de Almacenamiento: Sustitución y Migración a Unidades SSD NVMe/SATA",frecuencia:"Evento Correctivo de Rendimiento",descripcion:"Metodología de diagnóstico de unidades de almacenamiento con sectores defectuosos avanzados y sustitución por tecnología de estado sólido de alta velocidad para revivir equipos lentos o con fallas críticas de lectura de sistema.",herramientas:["Destornillador de precisión Phillips #0",'Carcasa o adaptador externo USB para discos de 2.5" o M.2',"Unidad de Estado Sólido (SSD) de alta velocidad compatible con el bus","Unidad flash USB con instalador oficial de sistema operativo"],pasos:["Diagnóstico de salud SMART: Ejecutar software de diagnóstico (como CrystalDiskInfo) para evaluar los parámetros de salud, sectores reasignados y tiempo de encendido del disco actual.","Respaldo de información crítica: Conectar el disco actual a un equipo externo mediante un adaptador USB para extraer los documentos del usuario (en caso de que el soporte aún sea legible).","Desconexión de seguridad: Apagar completamente la laptop, desconectar el cargador de corriente y desatornilar la tapa inferior de servicio del equipo siguiendo el mapa de pernos.","Extracción del almacenamiento averiado: Desconectar el cable flex de la batería interna, desatornilar y extraer con cuidado el disco duro mecánico antiguo o la unidad de estado sólido dañada.","Instalación de la nueva unidad SSD: Insertar firmemente el nuevo SSD (en formato SATA de 2.5 pulgadas o M.2 NVMe según la arquitectura de la placa base) y fijarlo con su respectivo tornillo de retención.","Configuración de particiones y arranque: Conectar el medio USB booteable con el sistema operativo y configurar las particiones de la nueva unidad en esquema de tabla de particiones GUID (GPT).","Instalación limpia y controladores: Proceder con la instalación limpia del sistema operativo, instalar los controladores oficiales del fabricante y restaurar la información respaldada previamente."]}],b={obtenerTodas:()=>g,obtenerPorTipoYCategoria:(t,a)=>g.filter(o=>{const i=t?o.tipo===t:!0,e=a==="all"||!a?!0:o.categoria===a;return i&&e})};function x(t){t.innerHTML="";const a=document.createElement("div");a.innerHTML=`
    <div style="margin-bottom: 2rem;">
      <span style="color: var(--accent); font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">Módulo Preventivo · Ingeniería de Hardware</span>
      <h2 style="font-size: 2.25rem; font-weight: 800; letter-spacing: -0.025em; color: var(--text-main); margin-top: 0.25rem;">Mantenimiento Preventivo de Equipos</h2>
      <p style="color: var(--text-muted); margin-top: 0.5rem; max-width: 800px; line-height: 1.6;">
        Protocolos sistemáticos orientados a la conservación física del hardware, mitigación de riesgos térmicos y optimización de la vida útil operativa en laptops y equipos de escritorio.
      </p>
    </div>

    <!-- NUEVA SECCIÓN: RUTINAS DE BUENAS PRÁCTICAS, CUIDADOS Y SUGERENCIAS CON IMAGEN ALUSIVA -->
    <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius); overflow: hidden; margin-bottom: 2.5rem; box-shadow: var(--shadow);">
      <div style="height: 200px; overflow: hidden; border-bottom: 1px solid var(--border-color);">
        <img src="https://timly.com/wp-content/uploads/2026/01/mantenimiento_maquinaria-1536x831.jpg" alt="Buenas prácticas de mantenimiento preventivo" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.85);">
      </div>
      <div style="padding: 2rem;">
        <h3 style="font-size: 1.35rem; font-weight: 700; color: var(--accent); margin-bottom: 1rem;">🛡️ Rutinas de Buenas Prácticas, Cuidados y Sugerencias Preventivas</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">
          <div style="background: var(--bg-card-hover); padding: 1.25rem; border-radius: 10px; border: 1px solid var(--border-color);">
            <strong style="color: var(--text-main); display: block; margin-bottom: 0.5rem;">📋 Higiene Ambiental y Superficies</strong>
            Evite operar laptops sobre textiles (camas o sofás) para prevenir la obstrucción de entradas de aire. Utilice bandejas rígidas o soportes ventilados que garanticen el flujo aerodinámico libre.
          </div>
          <div style="background: var(--bg-card-hover); padding: 1.25rem; border-radius: 10px; border: 1px solid var(--border-color);">
            <strong style="color: var(--text-main); display: block; margin-bottom: 0.5rem;">⚡ Estabilización Energética</strong>
            Conecte siempre los equipos a reguladores o UPS. Las micro-fluctuaciones eléctricas degradan progresivamente los componentes de filtrado en la fuente de poder y la placa madre.
          </div>
          <div style="background: var(--bg-card-hover); padding: 1.25rem; border-radius: 10px; border: 1px solid var(--border-color);">
            <strong style="color: var(--text-main); display: block; margin-bottom: 0.5rem;">💡 Sugerencia de Ciclo Térmico</strong>
            Realice la limpieza interna y sustitución de pasta térmica cada 6 meses en equipos de uso intensivo para evitar caídas de rendimiento por estrangulamiento térmico (thermal throttling).
          </div>
        </div>
      </div>
    </div>

    <!-- Filtros de categoría -->
    <div class="filter-buttons" style="display: flex; gap: 0.75rem; background: var(--bg-card); padding: 0.85rem 1rem; border-radius: var(--radius); border: 1px solid var(--border-color); align-items: center; margin-bottom: 2rem;">
      <span style="font-size: 0.875rem; font-weight: 600; color: var(--text-muted); margin-right: 0.5rem;">Filtrar preventivo:</span>
      <button class="filter-cat active" data-categoria="all" style="padding: 0.45rem 1.15rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--accent); color: white; cursor: pointer; font-size: 0.875rem; font-weight: 600;">Todos</button>
      <button class="filter-cat" data-categoria="laptop" style="padding: 0.45rem 1.15rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-card); color: var(--text-main); cursor: pointer; font-size: 0.875rem; font-weight: 600;">Laptops</button>
      <button class="filter-cat" data-categoria="escritorio" style="padding: 0.45rem 1.15rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-card); color: var(--text-main); cursor: pointer; font-size: 0.875rem; font-weight: 600;">PCs de Escritorio</button>
    </div>
  `,t.appendChild(a);const o=document.createElement("div");t.appendChild(o);let i="all";function e(){o.innerHTML="";const s=b.obtenerPorTipoYCategoria("preventivo",i);if(s.length===0){o.innerHTML=`
        <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 3rem; text-align: center; border-radius: var(--radius);">
          <p style="color: var(--text-muted);">No hay guías preventivas registradas para esta categoría.</p>
        </div>`;return}s.forEach(r=>{const d=document.createElement("div");d.className="guide-card",d.style.cssText=`
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: var(--radius);
        overflow: hidden;
        margin-bottom: 2rem;
        box-shadow: var(--shadow);
      `;const c=`
        <div style="width: 100%; height: 220px; overflow: hidden; border-bottom: 1px solid var(--border-color);">
          <img src="${r.categoria==="laptop"?"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80":"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80"}" alt="${r.titulo}" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.9);">
        </div>
      `;let l="";r.herramientas&&r.herramientas.length>0&&(l=`
          <div style="background: rgba(56, 189, 248, 0.05); border: 1px solid rgba(56, 189, 248, 0.15); border-radius: 10px; padding: 1rem; margin-bottom: 1.25rem;">
            <strong style="font-size: 0.85rem; color: var(--accent); display: block; margin-bottom: 0.4rem; text-transform: uppercase; letter-spacing: 0.025em;">🛠️ Herramientas y Materiales Necesarios:</strong>
            <ul style="margin: 0; padding-left: 1.25rem; font-size: 0.875rem; color: var(--text-muted);">
              ${r.herramientas.map(u=>`<li style="margin-bottom: 0.2rem;">${u}</li>`).join("")}
            </ul>
          </div>
        `),d.innerHTML=`
        ${c}
        <div style="padding: 2rem;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span style="display: inline-block; padding: 0.25rem 0.65rem; background: rgba(56, 189, 248, 0.1); color: var(--accent); font-size: 0.75rem; font-weight: 700; border-radius: 6px; text-transform: uppercase; margin-bottom: 0.5rem; border: 1px solid rgba(56, 189, 248, 0.2);">${r.categoria}</span>
              <h3 style="font-size: 1.35rem; font-weight: 700; color: var(--text-main);">${r.titulo}</h3>
            </div>
            <span style="font-size: 0.85rem; background: var(--bg-card-hover); color: var(--text-muted); padding: 0.35rem 0.85rem; border-radius: 20px; border: 1px solid var(--border-color); font-weight: 500;">⏱️ ${r.frecuencia}</span>
          </div>

          <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.25rem;">
            ${r.descripcion}
          </p>

          ${l}
          <p style="font-size: 0.9rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.5rem;">Protocolo técnico paso a paso:</p>
        </div>
      `;const m=d.querySelector("div:last-child"),p=v(r.pasos);m.appendChild(p),o.appendChild(d)})}const n=a.querySelectorAll(".filter-cat");n.forEach(s=>{s.addEventListener("click",r=>{n.forEach(d=>{d.style.background="var(--bg-card)",d.style.color="var(--text-main)"}),r.target.style.background="var(--accent)",r.target.style.color="#ffffff",i=r.target.dataset.categoria,e()})}),e()}function w(t){t.innerHTML="";const a=document.createElement("div");a.innerHTML=`
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
  `,t.appendChild(a);const o=document.createElement("div");t.appendChild(o);let i="all";function e(){o.innerHTML="";const s=b.obtenerPorTipoYCategoria("correctivo",i);if(s.length===0){o.innerHTML=`
        <div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 3rem; text-align: center; border-radius: var(--radius);">
          <p style="color: var(--text-muted);">No hay guías correctivas registradas para esta categoría.</p>
        </div>`;return}s.forEach(r=>{const d=document.createElement("div");d.className="guide-card",d.style.cssText=`
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: var(--radius);
        overflow: hidden;
        margin-bottom: 2rem;
        box-shadow: var(--shadow);
      `;const c=`
        <div style="width: 100%; height: 220px; overflow: hidden; border-bottom: 1px solid var(--border-color);">
          <img src="${r.categoria==="laptop"?"https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80":"https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"}" alt="${r.titulo}" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.9);">
        </div>
      `;let l="";r.herramientas&&r.herramientas.length>0&&(l=`
          <div style="background: rgba(244, 63, 94, 0.05); border: 1px solid rgba(244, 63, 94, 0.15); border-radius: 10px; padding: 1rem; margin-bottom: 1.25rem;">
            <strong style="font-size: 0.85rem; color: #f43f5e; display: block; margin-bottom: 0.4rem; text-transform: uppercase; letter-spacing: 0.025em;">🛠️ Herramientas de Diagnóstico y Reparación:</strong>
            <ul style="margin: 0; padding-left: 1.25rem; font-size: 0.875rem; color: var(--text-muted);">
              ${r.herramientas.map(u=>`<li style="margin-bottom: 0.2rem;">${u}</li>`).join("")}
            </ul>
          </div>
        `),d.innerHTML=`
        ${c}
        <div style="padding: 2rem;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span style="display: inline-block; padding: 0.25rem 0.65rem; background: rgba(244, 63, 94, 0.1); color: #f43f5e; font-size: 0.75rem; font-weight: 700; border-radius: 6px; text-transform: uppercase; margin-bottom: 0.5rem; border: 1px solid rgba(244, 63, 94, 0.2);">${r.categoria}</span>
              <h3 style="font-size: 1.35rem; font-weight: 700; color: var(--text-main);">${r.titulo}</h3>
            </div>
            <span style="font-size: 0.85rem; background: var(--bg-card-hover); color: var(--text-muted); padding: 0.35rem 0.85rem; border-radius: 20px; border: 1px solid var(--border-color); font-weight: 500;">⚠️ ${r.frecuencia}</span>
          </div>

          <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.25rem;">
            ${r.descripcion}
          </p>

          ${l}
          <p style="font-size: 0.9rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.5rem;">Protocolo de solución paso a paso:</p>
        </div>
      `;const m=d.querySelector("div:last-child"),p=v(r.pasos);m.appendChild(p),o.appendChild(d)})}const n=a.querySelectorAll(".filter-cat");n.forEach(s=>{s.addEventListener("click",r=>{n.forEach(d=>{d.style.background="var(--bg-card)",d.style.color="var(--text-main)"}),r.target.style.background="#f43f5e",r.target.style.color="#ffffff",i=r.target.dataset.categoria,e()})}),e()}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("app"),a=document.createElement("header");document.body.prepend(a);const o=document.createElement("main");o.style.maxWidth="1000px",o.style.margin="2.5rem auto",o.style.padding="0 1.5rem",t.appendChild(o);function i(e){a.innerHTML="",a.appendChild(h(i)),a.querySelectorAll(".nav-link-btn").forEach(s=>{s.dataset.page===e?s.style.color="var(--accent)":s.style.color="var(--text-muted)"}),e==="home"?y(o,i):e==="preventivo"?x(o):e==="correctivo"&&w(o),window.scrollTo({top:0,behavior:"smooth"})}i("home")});
