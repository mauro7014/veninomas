// ============================================================
// routes.js — Vení Nomas PWA
// Botón atrás del celular
// ============================================================

const screenStack = ['screen-welcome'];

// Sobreescribir showScreen para registrar historial
const _originalShowScreen = window.showScreen;

window.showScreen = function(id) {
  // Agregar al historial del navegador
  history.pushState({ screen: id }, '', '');
  screenStack.push(id);

  // Mostrar pantalla
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  const target = document.getElementById(id);
  if (target) target.classList.remove('hidden');
};

// Botón atrás físico del celular
window.addEventListener('popstate', function(event) {
  // Detener audio si está reproduciendo
  if (typeof stopAudio === 'function') stopAudio();

  // Sacar pantalla actual del stack
  screenStack.pop();

  // Ir a la pantalla anterior
  if (screenStack.length > 0) {
    const prev = screenStack[screenStack.length - 1];
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    const target = document.getElementById(prev);
    if (target) target.classList.remove('hidden');
  } else {
    // Si no hay más historial, ir a bienvenida
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById('screen-welcome').classList.remove('hidden');
    screenStack.push('screen-welcome');
  }
});

// Agregar estado inicial al historial
window.addEventListener('DOMContentLoaded', () => {
  history.replaceState({ screen: 'screen-welcome' }, '', '');
});