import guiasData from './guias.json';

export const ManualRepo = {
  obtenerTodas: () => {
    return guiasData;
  },
  
  obtenerPorTipoYCategoria: (tipo, categoria) => {
    return guiasData.filter(guia => {
      const matchTipo = tipo ? guia.tipo === tipo : true;
      const matchCat = categoria === 'all' || !categoria ? true : guia.categoria === categoria;
      return matchTipo && matchCat;
    });
  }
};