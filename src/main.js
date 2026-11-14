import './styles/variables.css';
import './styles/layout.css';
import './styles/components.css';

import { crearNavbar } from './components/Navbar.js';
import { renderHomePage } from './pages/home.js';
import { renderPreventivoPage } from './pages/preventivo.js';
import { renderCorrectivoPage } from './pages/correctivo.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  // Crear e inyectar el contenedor principal de la cabecera (Header)
  const header = document.createElement('header');
  document.body.prepend(header);

  // Crear e inyectar el contenedor principal de las vistas (<main>)
  const mainContainer = document.createElement('main');
  mainContainer.style.maxWidth = '1000px';
  mainContainer.style.margin = '2.5rem auto';
  mainContainer.style.padding = '0 1.5rem';
  root.appendChild(mainContainer);

  // Función de enrutamiento dinámico entre secciones
  function cambiarVista(pagina) {
    // Renderizar la barra de navegación superior pasando la función de cambio
    header.innerHTML = '';
    header.appendChild(crearNavbar(cambiarVista));

    // Resaltar el enlace activo en la navegación superior
    const botonesNav = header.querySelectorAll('.nav-link-btn');
    botonesNav.forEach(btn => {
      if (btn.dataset.page === pagina) {
        btn.style.color = 'var(--accent)';
      } else {
        btn.style.color = 'var(--text-muted)';
      }
    });

    // Renderizar la vista correspondiente dentro del contenedor principal
    if (pagina === 'home') {
      renderHomePage(mainContainer, cambiarVista);
    } else if (pagina === 'preventivo') {
      renderPreventivoPage(mainContainer);
    } else if (pagina === 'correctivo') {
      renderCorrectivoPage(mainContainer);
    }
    
    // Desplazar suavemente hacia arriba al cambiar de vista
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Inicializar la aplicación cargando la página de inicio por defecto
  cambiarVista('home');
});