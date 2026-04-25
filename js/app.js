// ============================================================
// app.js — Vení Nomas PWA
// Audio: ElevenLabs MP3 con fallback a Text-to-Speech
// ============================================================

let currentLang = 'es';
let currentCircuitIdx = 0;

const UI = {
  es: {
    btnStart:     "EMPEZAR RECORRIDO",
    circuits:     "ELEGÍ TU CIRCUITO",
    circuitLabel: "CIRCUITO",
    guionLabel:   "Guion del Guía:",
    btnMap:       "VENÍ, TE ACOMPAÑO (VER MAPA)",
    btnExtras:    "SEGUIR EXPERIENCIA",
    btnNext:      "VOLVER A CIRCUITOS",
    btnRadios:    "RADIOS",
    btnEmerg:     "EMERGENCIAS",
    audioPlay:    "🎙️ ESCUCHAR GUÍA",
    audioPause:   "⏸️ PAUSAR GUÍA",
    audioStop:    "⏹️ DETENER GUÍA"
  },
  en: {
    btnStart:     "START TOUR",
    circuits:     "CHOOSE YOUR CIRCUIT",
    circuitLabel: "CIRCUIT",
    guionLabel:   "Guide Script:",
    btnMap:       "COME, I'LL JOIN YOU (SEE MAP)",
    btnExtras:    "CONTINUE EXPERIENCE",
    btnNext:      "BACK TO CIRCUITS",
    btnRadios:    "RADIOS",
    btnEmerg:     "EMERGENCIES",
    audioPlay:    "🎙️ LISTEN TO GUIDE",
    audioPause:   "⏸️ PAUSE GUIDE",
    audioStop:    "⏹️ STOP GUIDE"
  },
  pt: {
    btnStart:     "COMEÇAR PERCURSO",
    circuits:     "ESCOLHA SEU CIRCUITO",
    circuitLabel: "CIRCUITO",
    guionLabel:   "Roteiro do Guia:",
    btnMap:       "VAMOS JUNTOS (VER MAPA)",
    btnExtras:    "CONTINUAR EXPERIÊNCIA",
    btnNext:      "VOLTAR AOS CIRCUITOS",
    btnRadios:    "RÁDIOS",
    btnEmerg:     "EMERGÊNCIAS",
    audioPlay:    "🎙️ OUVIR GUIA",
    audioPause:   "⏸️ PAUSAR GUIA",
    audioStop:    "⏹️ PARAR GUIA"
  }
};

// ── Idioma ────────────────────────────────────────────────────
function setLang(lang) {
  currentLang = lang;
  Storage.setLang(lang);
  const t = UI[lang];

  document.querySelectorAll('.flag-btn').forEach(btn => {
    btn.classList.toggle('active',
      btn.getAttribute('onclick').includes(`'${lang}'`));
  });

  const ids = {
    'btn-start-text':     t.btnStart,
    'circuits-title':     t.circuits,
    'btn-map-text':       t.btnMap,
    'btn-extras-text':    t.btnExtras,
    'btn-next-text':      t.btnNext,
    'btn-radios-text':    t.btnRadios,
    'btn-emergency-text': t.btnEmerg
  };

  Object.entries(ids).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });

  updateAudioButton();

  if (!document.getElementById('screen-detail').classList.contains('hidden')) {
    renderDetail(currentCircuitIdx);
  }
  if (!document.getElementById('screen-circuits').classList.contains('hidden')) {
    renderCircuits();
  }
}

// ── Navegación ────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  const el = document.getElementById(id);
  if (el) el.classList.remove('hidden');
}

function goToCircuits() {
  stopAudio();
  renderCircuits();
  showScreen('screen-circuits');
}

function goToExtras() {
  stopAudio();
  showScreen('screen-extras');
}

// ── Circuitos ─────────────────────────────────────────────────
function renderCircuits() {
  const list = document.getElementById('circuits-list');
  document.getElementById('circuits-title').textContent = UI[currentLang].circuits;
  list.innerHTML = '';
  CIRCUITS.forEach((c, idx) => {
    const btn = document.createElement('button');
    btn.className = 'circuit-btn';
    btn.textContent = `${c.id}. ${c[currentLang].nombre.toUpperCase()}`;
    btn.onclick = () => openCircuit(idx);
    list.appendChild(btn);
  });
}

function openCircuit(idx) {
  stopAudio();
  currentCircuitIdx = idx;
  Storage.setCircuito(idx);
  renderDetail(idx);
  showScreen('screen-detail');
}

// ── Detalle — todas las paradas en scroll ─────────────────────
function renderDetail(circuitIdx) {
  const circuit = CIRCUITS[circuitIdx];
  const lang = currentLang;
  const t = UI[lang];
  const content = document.getElementById('detail-content');

  let html = `
    <h1 class="detail-circuit-title">${circuit.id}. ${circuit[lang].nombre}</h1>
    <p class="detail-circuit-label">🧭 ${t.circuitLabel} ${circuit.id}: ${circuit[lang].nombre.toUpperCase()}</p>
  `;

  circuit.paradas.forEach((stop, idx) => {
    const parrafos = stop[lang].guion
      .split('\n\n')
      .filter(p => p.trim())
      .map(p => `<p>${p.trim()}</p>`)
      .join('');

    html += `
      <div class="detail-stop">
        <p class="detail-stop-title">📍 ${stop[lang].titulo}</p>
        <p class="detail-guide-label">${t.guionLabel}</p>
        <div class="detail-guide-text">${parrafos}</div>
      </div>
    `;

    if (idx < circuit.paradas.length - 1) {
      html += `<div class="detail-separator"></div>`;
    }
  });

  content.innerHTML = html;
  document.querySelector('.detail-scroll').scrollTop = 0;

  document.getElementById('btn-map-text').textContent    = t.btnMap;
  document.getElementById('btn-extras-text').textContent = t.btnExtras;
  document.getElementById('btn-next-text').textContent   = t.btnNext;
  updateAudioButton();
  updatePlayerControls();
}

function nextStop() {
  stopAudio();
  goToCircuits();
}

// ── Mapa ──────────────────────────────────────────────────────
function openMap() {
  const circuit = CIRCUITS[currentCircuitIdx];
  const url = `https://www.google.com/maps/dir/?api=1`
            + `&origin=${circuit.origen}`
            + `&destination=${circuit.destino}`
            + `&waypoints=${encodeURIComponent(circuit.waypoints)}`
            + `&travelmode=walking`;
  window.open(url, '_blank');
}

// ── Popups ────────────────────────────────────────────────────
function showRadios()    { document.getElementById('popup-radios').classList.remove('hidden'); }
function showInstagram() { document.getElementById('popup-instagram').classList.remove('hidden'); }
function closePopup(id)  { document.getElementById(id).classList.add('hidden'); }
function callEmergency() { window.location.href = 'tel:911'; }

// ══════════════════════════════════════════════════════════════
// SISTEMA DE AUDIO — ElevenLabs MP3 + fallback TTS
// ══════════════════════════════════════════════════════════════

let audioElement  = null;
let isPlaying     = false;
let isPaused      = false;
let currentParada = 0;
let totalParadas  = 0;
let usandoMP3     = false;

// TTS fallback
let speechSynth   = window.speechSynthesis;
let fragmentos    = [];
let fragIdx       = 0;
let selectedVoice = null;
const WORDS_PER_SEC = 2.2;
const SKIP_SECS     = 10;

// ── Construir ruta del MP3 ────────────────────────────────────
function getMP3Path(circuitIdx, paradaIdx) {
  const c = circuitIdx + 1;
  const p = paradaIdx + 1;
  return `assets/audio/c${c}-p${p}.mp3`;
}

// ── Verificar si existe el MP3 ────────────────────────────────
async function mp3Exists(path) {
  try {
    const res = await fetch(path, { method: 'HEAD' });
    return res.ok;
  } catch {
    return false;
  }
}

// ── Toggle audio ──────────────────────────────────────────────
function toggleAudio() {
  if (!isPlaying && !isPaused) {
    startAudio();
  } else if (isPlaying && !isPaused) {
    pauseAudio();
  } else if (isPaused) {
    resumeAudio();
  }
}

// ── Iniciar audio ─────────────────────────────────────────────
async function startAudio() {
  stopAudio();

  const circuit = CIRCUITS[currentCircuitIdx];
  totalParadas  = circuit.paradas.length;
  currentParada = 0;

  isPlaying = true;
  isPaused  = false;
  updateAudioButton();
  updatePlayerControls();

  await playParada(0);
}

// ── Reproducir parada específica ──────────────────────────────
async function playParada(idx) {
  if (!isPlaying || idx >= totalParadas) {
    isPlaying = false;
    isPaused  = false;
    updateAudioButton();
    updatePlayerControls();
    return;
  }

  currentParada = idx;
  updatePlayerControls();

  const mp3Path = getMP3Path(currentCircuitIdx, idx);
  const existe  = await mp3Exists(mp3Path);

  if (existe) {
    // ── Reproducir MP3 de ElevenLabs
    usandoMP3    = true;
    audioElement = new Audio(mp3Path);
    audioElement.play();

    audioElement.onended = () => {
      if (isPlaying) playParada(idx + 1);
    };

    audioElement.onerror = () => {
      // Fallback a TTS si falla el MP3
      usandoMP3 = false;
      playTTSParada(idx);
    };

  } else {
    // ── Fallback: Text to Speech
    usandoMP3 = false;
    playTTSParada(idx);
  }
}

// ── Pausar ────────────────────────────────────────────────────
function pauseAudio() {
  isPaused  = true;
  isPlaying = false;

  if (usandoMP3 && audioElement) {
    audioElement.pause();
  } else {
    speechSynth.cancel();
  }

  updateAudioButton();
  updatePlayerControls();
}

// ── Reanudar ──────────────────────────────────────────────────
function resumeAudio() {
  isPaused  = false;
  isPlaying = true;
  updateAudioButton();
  updatePlayerControls();

  if (usandoMP3 && audioElement) {
    audioElement.play();
  } else {
    playTTSParada(currentParada);
  }
}

// ── Detener ───────────────────────────────────────────────────
function stopAudio() {
  isPlaying = false;
  isPaused  = false;

  if (audioElement) {
    audioElement.pause();
    audioElement.src = '';
    audioElement = null;
  }

  speechSynth.cancel();
  fragmentos    = [];
  fragIdx       = 0;
  currentParada = 0;

  updateAudioButton();
  updatePlayerControls();
}

// ── Skip +10 segundos ─────────────────────────────────────────
function skipForward() {
  if (!isPlaying && !isPaused) return;

  if (usandoMP3 && audioElement) {
    audioElement.currentTime = Math.min(
      audioElement.currentTime + SKIP_SECS,
      audioElement.duration || 0
    );
  } else {
    // En TTS saltamos a la siguiente parada
    if (currentParada < totalParadas - 1) {
      speechSynth.cancel();
      if (isPlaying) playParada(currentParada + 1);
    }
  }
  updatePlayerControls();
}

// ── Skip -10 segundos ─────────────────────────────────────────
function skipBackward() {
  if (!isPlaying && !isPaused) return;

  if (usandoMP3 && audioElement) {
    audioElement.currentTime = Math.max(
      audioElement.currentTime - SKIP_SECS,
      0
    );
  } else {
    // En TTS volvemos a la parada anterior
    if (currentParada > 0) {
      speechSynth.cancel();
      if (isPlaying) playParada(currentParada - 1);
    }
  }
  updatePlayerControls();
}

// ══════════════════════════════════════════════════════════════
// TEXT TO SPEECH — fallback cuando no hay MP3
// ══════════════════════════════════════════════════════════════

function loadVoices() {
  const voices = speechSynth.getVoices();
  if (voices.length === 0) return;

  const langCodes = {
    es: ['es-AR', 'es-MX', 'es-US', 'es-ES', 'es'],
    en: ['en-US', 'en-GB', 'en'],
    pt: ['pt-BR', 'pt-PT', 'pt']
  };

  const maleKeywords = [
    'jorge', 'diego', 'carlos', 'miguel', 'pablo',
    'male', 'david', 'daniel', 'james',
    'google español', 'google us english male'
  ];

  const codes = langCodes[currentLang] || ['es'];

  for (const code of codes) {
    const v = voices.find(v =>
      v.lang.toLowerCase().startsWith(code.toLowerCase()) &&
      maleKeywords.some(k => v.name.toLowerCase().includes(k))
    );
    if (v) { selectedVoice = v; return; }
  }

  for (const code of codes) {
    const v = voices.find(v =>
      v.lang.toLowerCase().startsWith(code.toLowerCase()) &&
      v.name.toLowerCase().includes('google')
    );
    if (v) { selectedVoice = v; return; }
  }

  for (const code of codes) {
    const v = voices.find(v =>
      v.lang.toLowerCase().startsWith(code.toLowerCase())
    );
    if (v) { selectedVoice = v; return; }
  }

  selectedVoice = voices[0];
}

loadVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = loadVoices;
}

function dividirEnFragmentos(texto) {
  const MAX = 180;
  const partes = [];
  const oraciones = texto.match(/[^.!?]+[.!?]*/g) || [texto];
  let actual = '';

  for (const oracion of oraciones) {
    const limpia = oracion.trim();
    if (!limpia) continue;
    if ((actual + ' ' + limpia).trim().length <= MAX) {
      actual = (actual + ' ' + limpia).trim();
    } else {
      if (actual) partes.push(actual);
      actual = limpia;
    }
  }
  if (actual) partes.push(actual);
  return partes.filter(p => p.trim().length > 3);
}

function playTTSParada(idx) {
  if (!isPlaying || idx >= totalParadas) {
    isPlaying = false;
    isPaused  = false;
    updateAudioButton();
    updatePlayerControls();
    return;
  }

  currentParada = idx;
  const circuit = CIRCUITS[currentCircuitIdx];
  const stop    = circuit.paradas[idx];
  const texto   = (stop[currentLang].guion || '')
    .replace(/\n\n/g, '. ')
    .replace(/\n/g, ' ')
    .trim();

  fragmentos = dividirEnFragmentos(texto);
  fragIdx    = 0;

  hablarFragmento(0, idx);
}

function hablarFragmento(fIdx, paradaIdx) {
  if (!isPlaying || fIdx >= fragmentos.length) {
    if (isPlaying) playTTSParada(paradaIdx + 1);
    return;
  }

  fragIdx = fIdx;
  loadVoices();

  const utt = new SpeechSynthesisUtterance(fragmentos[fIdx]);
  utt.rate   = 0.88;
  utt.pitch  = 0.75;
  utt.volume = 1;

  if (selectedVoice) {
    utt.voice = selectedVoice;
    utt.lang  = selectedVoice.lang;
  } else {
    utt.lang = { es: 'es-AR', en: 'en-US', pt: 'pt-BR' }[currentLang];
  }

  utt.onend   = () => { if (isPlaying) hablarFragmento(fIdx + 1, paradaIdx); };
  utt.onerror = () => { if (isPlaying) hablarFragmento(fIdx + 1, paradaIdx); };

  speechSynth.speak(utt);
}

// ── UI del reproductor ────────────────────────────────────────
function updateAudioButton() {
  const btn   = document.getElementById('btn-audio');
  const label = document.getElementById('btn-audio-text');
  if (!btn || !label) return;
  const t = UI[currentLang];

  btn.classList.remove('playing', 'paused');

  if (isPlaying && !isPaused) {
    label.textContent = t.audioPause;
    btn.classList.add('playing');
  } else if (isPaused) {
    label.textContent = t.audioPlay;
    btn.classList.add('paused');
  } else {
    label.textContent = t.audioPlay;
  }
}

function updatePlayerControls() {
  const controls = document.getElementById('player-controls');
  if (!controls) return;

  const active = isPlaying || isPaused;
  controls.style.display = active ? 'flex' : 'none';

  if (totalParadas > 0) {
    const pct = Math.round((currentParada / totalParadas) * 100);
    const bar = document.getElementById('progress-bar-fill');
    if (bar) bar.style.width = pct + '%';

    const label = document.getElementById('progress-label');
    if (label) {
      label.textContent = `Parada ${currentParada + 1} de ${totalParadas}`;
    }
  }
}

// ── Init ──────────────────────────────────────────────────────
function initApp() {
  currentLang = Storage.getLang();
  setTimeout(() => {
    document.getElementById('screen-splash').style.display = 'none';
    document.getElementById('screen-welcome').classList.remove('hidden');
    setLang(currentLang);
  }, 2500);
}

document.addEventListener('DOMContentLoaded', initApp);