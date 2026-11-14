import './styles/variables.css';
import './styles/layout.css';
import './styles/components.css';

import { crearNavbar } from './components/Navbar.js';
import { renderHomePage } from './pages/home.js';
import { renderPreventivoPage } from './pages/preventivo.js';
import { renderCorrectivoPage } from './pages/correctivo.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  
  const header = document.createElement('header');
  document.body.prepend(header);

  
  const mainContainer = document.createElement('main');
  mainContainer.style.maxWidth = '1000px';
  mainContainer.style.margin = '2.5rem auto';
  mainContainer.style.padding = '0 1.5rem';
  root.appendChild(mainContainer);

 
  function cambiarVista(pagina) {
    
    header.innerHTML = '';
    header.appendChild(crearNavbar(cambiarVista));

    
    const botonesNav = header.querySelectorAll('.nav-link-btn');
    botonesNav.forEach(btn => {
      if (btn.dataset.page === pagina) {
        btn.style.color = 'var(--accent)';
      } else {
        btn.style.color = 'var(--text-muted)';
      }
    });

    
    if (pagina === 'home') {
      renderHomePage(mainContainer, cambiarVista);
    } else if (pagina === 'preventivo') {
      renderPreventivoPage(mainContainer);
    } else if (pagina === 'correctivo') {
      renderCorrectivoPage(mainContainer);
    }
    
   
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  
  cambiarVista('home');
});