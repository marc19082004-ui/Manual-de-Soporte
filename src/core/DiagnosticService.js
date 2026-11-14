import { ManualRepo } from '../data/ManualRepo.js';

export class DiagnosticService {
  static filtrarPorCategoria(categoria) {
    const guias = ManualRepo.obtenerTodas();
    if (categoria === 'all') return guias;
    return guias.filter(g => g.categoria === categoria);
  }

  static guardarProgreso(pasoId, estado) {
    const progreso = JSON.parse(localStorage.getItem('progreso_manual') || '{}');
    progreso[pasoId] = estado;
    localStorage.setItem('progreso_manual', JSON.stringify(progreso));
    return progreso;
  }
}