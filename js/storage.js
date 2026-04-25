// ============================================================
// storage.js — Vení Nomas PWA
// Guarda idioma seleccionado y circuito activo
// ============================================================

const Storage = {

  getLang() {
    return localStorage.getItem('veni_lang') || 'es';
  },

  setLang(lang) {
    localStorage.setItem('veni_lang', lang);
  },

  getCircuito() {
    return parseInt(localStorage.getItem('veni_circuito') || '0');
  },

  setCircuito(idx) {
    localStorage.setItem('veni_circuito', idx);
  },

  getParada() {
    return parseInt(localStorage.getItem('veni_parada') || '0');
  },

  setParada(idx) {
    localStorage.setItem('veni_parada', idx);
  }

};