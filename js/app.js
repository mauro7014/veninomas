// ============================================================
// app.js — Vení Nomas PWA
// ============================================================

let currentLang = 'es';
let currentCircuitIdx = 0;
let userLat = null;
let userLng = null;

const UI = {
  es: {
    btnStart:      "EMPEZAR RECORRIDO",
    circuits:      "ELEGÍ TU CIRCUITO",
    circuitLabel:  "CIRCUITO",
    guionLabel:    "Guion del Guía:",
    btnMap:        "VENÍ, TE ACOMPAÑO (VER MAPA)",
    btnExtras:     "SEGUIR EXPERIENCIA",
    btnNext:       "VOLVER A CIRCUITOS",
    btnRadios:     "RADIOS",
    btnEmerg:      "EMERGENCIAS",
    audioPlay:     "🎙️ ESCUCHAR GUÍA",
    audioPause:    "⏸️ PAUSAR GUÍA",
    audioStop:     "⏹️ DETENER GUÍA",
    btnFerias:     "FERIAS Y PASEOS",
    btnDormir:     "DÓNDE DORMIR",
    btnComer:      "DÓNDE COMER",
    headerTitulo:  "¿A dónde vamos?",
    headerSub:     "Aquí tienes algunas opciones cerca",
    distancia:     "de distancia",
    destacado:     "Destacado",
    btnIr:         "Ir",
    btnVolver:     "← VOLVER",
    btnReservar:   "🌐 VER WEB",
    dias:          "Días:",
    horario:       "Horario:"
  },
  en: {
    btnStart:      "START TOUR",
    circuits:      "CHOOSE YOUR CIRCUIT",
    circuitLabel:  "CIRCUIT",
    guionLabel:    "Guide Script:",
    btnMap:        "COME, I'LL JOIN YOU (SEE MAP)",
    btnExtras:     "CONTINUE EXPERIENCE",
    btnNext:       "BACK TO CIRCUITS",
    btnRadios:     "RADIOS",
    btnEmerg:      "EMERGENCIES",
    audioPlay:     "🎙️ LISTEN TO GUIDE",
    audioPause:    "⏸️ PAUSE GUIDE",
    audioStop:     "⏹️ STOP GUIDE",
    btnFerias:     "FAIRS & MARKETS",
    btnDormir:     "WHERE TO SLEEP",
    btnComer:      "WHERE TO EAT",
    headerTitulo:  "Where are we going?",
    headerSub:     "Here are some options nearby",
    distancia:     "away",
    destacado:     "Featured",
    btnIr:         "Go",
    btnVolver:     "← BACK",
    btnReservar:   "🌐 SEE WEB",
    dias:          "Days:",
    horario:       "Hours:"
  },
  pt: {
    btnStart:      "COMEÇAR PERCURSO",
    circuits:      "ESCOLHA SEU CIRCUITO",
    circuitLabel:  "CIRCUITO",
    guionLabel:    "Roteiro do Guia:",
    btnMap:        "VAMOS JUNTOS (VER MAPA)",
    btnExtras:     "CONTINUAR EXPERIÊNCIA",
    btnNext:       "VOLTAR AOS CIRCUITOS",
    btnRadios:     "RÁDIOS",
    btnEmerg:      "EMERGÊNCIAS",
    audioPlay:     "🎙️ OUVIR GUIA",
    audioPause:    "⏸️ PAUSAR GUIA",
    audioStop:     "⏹️ PARAR GUIA",
    btnFerias:     "FEIRAS E PASSEIOS",
    btnDormir:     "ONDE DORMIR",
    btnComer:      "ONDE COMER",
    headerTitulo:  "Onde vamos?",
    headerSub:     "Aqui estão algumas opções perto",
    distancia:     "de distância",
    destacado:     "Destaque",
    btnIr:         "Ir",
    btnVolver:     "← VOLTAR",
    btnReservar:   "🌐 VER WEB",
    dias:          "Dias:",
    horario:       "Horário:"
  }
};

// ── Geolocalización ───────────────────────────────────────────
function obtenerUbicacion() {
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(
    pos => { userLat = pos.coords.latitude; userLng = pos.coords.longitude; },
    ()  => { userLat = null; userLng = null; }
  );
}

function calcularDistancia(lat2, lng2) {
  if (userLat === null || userLng === null) return null;
  const R    = 6371000;
  const dLat = (lat2 - userLat) * Math.PI / 180;
  const dLng = (lng2 - userLng) * Math.PI / 180;
  const a    = Math.sin(dLat/2) * Math.sin(dLat/2) +
               Math.cos(userLat * Math.PI / 180) *
               Math.cos(lat2    * Math.PI / 180) *
               Math.sin(dLng/2) * Math.sin(dLng/2);
  const d    = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return d < 1000 ? Math.round(d) + 'm' : (d/1000).toFixed(1) + 'km';
}

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
    'btn-emergency-text': t.btnEmerg,
    'btn-ferias-text':    t.btnFerias,
    'btn-dormir-text':    t.btnDormir,
    'btn-donde-ir-text':  t.btnComer
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

function goToCircuits() { stopAudio(); renderCircuits(); showScreen('screen-circuits'); }
function goToExtras()   { stopAudio(); showScreen('screen-extras'); }

// ── Circuitos ─────────────────────────────────────────────────
function renderCircuits() {
  const list = document.getElementById('circuits-list');
  document.getElementById('circuits-title').textContent = UI[currentLang].circuits;
  list.innerHTML = '';
  CIRCUITS.forEach((c, idx) => {
    const btn = document.createElement('button');
    btn.className   = 'circuit-btn';
    btn.textContent = `${c.id}. ${c[currentLang].nombre.toUpperCase()}`;
    btn.onclick     = () => openCircuit(idx);
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

// ── Detalle ───────────────────────────────────────────────────
function renderDetail(circuitIdx) {
  const circuit = CIRCUITS[circuitIdx];
  const lang    = currentLang;
  const t       = UI[lang];
  const content = document.getElementById('detail-content');

  let html = `
    <h1 class="detail-circuit-title">${circuit.id}. ${circuit[lang].nombre}</h1>
    <p class="detail-circuit-label">🧭 ${t.circuitLabel} ${circuit.id}: ${circuit[lang].nombre.toUpperCase()}</p>
  `;

  circuit.paradas.forEach((stop, idx) => {
    const parrafos = stop[lang].guion
      .split('\n\n').filter(p => p.trim())
      .map(p => `<p>${p.trim()}</p>`).join('');

    html += `
      <div class="detail-stop">
        <p class="detail-stop-title">📍 ${stop[lang].titulo}</p>
        <p class="detail-guide-label">${t.guionLabel}</p>
        <div class="detail-guide-text">${parrafos}</div>
      </div>
    `;
    if (idx < circuit.paradas.length - 1) html += `<div class="detail-separator"></div>`;
  });

  content.innerHTML = html;
  document.querySelector('.detail-scroll').scrollTop = 0;
  document.getElementById('btn-map-text').textContent    = t.btnMap;
  document.getElementById('btn-extras-text').textContent = t.btnExtras;
  document.getElementById('btn-next-text').textContent   = t.btnNext;
  updateAudioButton();
  updatePlayerControls();
}

function nextStop() { stopAudio(); goToCircuits(); }

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
// PANTALLAS DE PUBLICIDAD
// ══════════════════════════════════════════════════════════════

function abrirFerias() { renderListado('ferias'); showScreen('screen-listado'); }
function abrirDormir() { renderListado('dormir'); showScreen('screen-listado'); }
function abrirComer()  { renderListado('comer');  showScreen('screen-listado'); }

function renderListado(tipo) {
  const items = DATA[tipo];
  const t     = UI[currentLang];
  const esFeria = tipo === 'ferias';

  let html = `
    <div class="listado-header">
      <p class="listado-titulo-italic">${t.headerTitulo}</p>
      <p class="listado-subtitulo">${t.headerSub}</p>
    </div>
    <div class="listado-items">
  `;

  const itemsOrdenados = [...items].map((item, idx) => ({
    ...item, _idx: idx,
    _dist: item.lat ? calcularDistancia(item.lat, item.lng) : null
  })).sort((a, b) => {
    if (!a._dist || !b._dist) return 0;
    return parseFloat(a._dist) - parseFloat(b._dist);
  });

  itemsOrdenados.forEach(item => {
    const badgeHTML = item.destacado
      ? `<span class="badge-destacado">${t.destacado}</span>` : '';

    const distHTML = item._dist
      ? `<div class="listado-distancia">📍 ${item._dist} ${t.distancia}</div>` : '';

    const diasHTML = esFeria
      ? `<div class="listado-dias">📅 ${item.dias[currentLang]} · ⏰ ${item.horario}</div>` : '';

    const ubicHTML = !esFeria && !item._dist
      ? `<div class="listado-distancia">📍 Rosario</div>` : '';

    const accion = esFeria
      ? `onclick="window.open('${item.maps}','_blank')"`
      : `onclick="abrirWeb(${item._idx},'${tipo}')"`;

    html += `
      <div class="listado-card" ${accion}>
        <div class="listado-card-top">
          <div class="listado-logo">${item.icono}</div>
          <div class="listado-info">
            <div class="listado-nombre">${item.nombre} ${badgeHTML}</div>
            <div class="listado-tipo">🍴 ${item.tipo}</div>
            ${distHTML}
            ${diasHTML}
            ${ubicHTML}
          </div>
          <a href="${item.maps}" target="_blank" class="btn-ir" onclick="event.stopPropagation()">
            <span>🗺️</span>
            <span>${t.btnIr}</span>
          </a>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  document.getElementById('listado-content').innerHTML = html;
  document.getElementById('listado-back-text').textContent = t.btnVolver;
}

function abrirWeb(idx, tipo) {
  const item = DATA[tipo][idx];
  if (item.web) window.open(item.web, '_blank');
}

// ══════════════════════════════════════════════════════════════
// AUDIO — ElevenLabs MP3 (ES) + TTS (EN/PT)
// ══════════════════════════════════════════════════════════════

let audioElement  = null;
let isPlaying     = false;
let isPaused      = false;
let currentParada = 0;
let totalParadas  = 0;
let usandoMP3     = false;
let speechSynth   = window.speechSynthesis;
let fragmentos    = [];
let fragIdx       = 0;
let selectedVoice = null;
const SKIP_SECS   = 10;

function getMP3Path(c, p) { return `assets/audio/c${c+1}-p${p+1}.mp3`; }

async function mp3Exists(path) {
  try { const r = await fetch(path,{method:'HEAD'}); return r.ok; }
  catch { return false; }
}

function toggleAudio() {
  if (!isPlaying && !isPaused) startAudio();
  else if (isPlaying)          pauseAudio();
  else                         resumeAudio();
}

async function startAudio() {
  stopAudio();
  totalParadas = CIRCUITS[currentCircuitIdx].paradas.length;
  currentParada = 0;
  isPlaying = true; isPaused = false;
  updateAudioButton(); updatePlayerControls();
  await playParada(0);
}

async function playParada(idx) {
  if (!isPlaying || idx >= totalParadas) {
    isPlaying = false; isPaused = false;
    updateAudioButton(); updatePlayerControls(); return;
  }
  currentParada = idx;
  updatePlayerControls();

  if (currentLang === 'es') {
    const path   = getMP3Path(currentCircuitIdx, idx);
    const existe = await mp3Exists(path);
    if (existe) {
      usandoMP3    = true;
      audioElement = new Audio(path);
      audioElement.play();
      audioElement.onended = () => { if (isPlaying) playParada(idx+1); };
      audioElement.onerror = () => { usandoMP3 = false; playTTSParada(idx); };
      return;
    }
  }
  usandoMP3 = false;
  playTTSParada(idx);
}

function pauseAudio() {
  isPaused = true; isPlaying = false;
  if (usandoMP3 && audioElement) audioElement.pause();
  else speechSynth.cancel();
  updateAudioButton(); updatePlayerControls();
}

function resumeAudio() {
  isPaused = false; isPlaying = true;
  updateAudioButton(); updatePlayerControls();
  if (usandoMP3 && audioElement) audioElement.play();
  else playTTSParada(currentParada);
}

function stopAudio() {
  isPlaying = false; isPaused = false;
  if (audioElement) { audioElement.pause(); audioElement.src=''; audioElement=null; }
  speechSynth.cancel();
  fragmentos=[]; fragIdx=0; currentParada=0;
  updateAudioButton(); updatePlayerControls();
}

function skipForward() {
  if (!isPlaying && !isPaused) return;
  if (usandoMP3 && audioElement)
    audioElement.currentTime = Math.min(audioElement.currentTime+SKIP_SECS, audioElement.duration||0);
  else if (currentParada < totalParadas-1) { speechSynth.cancel(); if (isPlaying) playParada(currentParada+1); }
  updatePlayerControls();
}

function skipBackward() {
  if (!isPlaying && !isPaused) return;
  if (usandoMP3 && audioElement)
    audioElement.currentTime = Math.max(audioElement.currentTime-SKIP_SECS, 0);
  else if (currentParada > 0) { speechSynth.cancel(); if (isPlaying) playParada(currentParada-1); }
  updatePlayerControls();
}

function loadVoices() {
  const voices = speechSynth.getVoices();
  if (!voices.length) return;
  const codes  = ({es:['es-AR','es-MX','es-ES','es'],en:['en-US','en-GB','en'],pt:['pt-BR','pt-PT','pt']})[currentLang]||['es'];
  const maleKW = ['jorge','diego','carlos','male','david','daniel','james','google'];
  for (const code of codes) {
    const v = voices.find(v => v.lang.toLowerCase().startsWith(code.toLowerCase()) && maleKW.some(k=>v.name.toLowerCase().includes(k)));
    if (v) { selectedVoice=v; return; }
  }
  for (const code of codes) {
    const v = voices.find(v => v.lang.toLowerCase().startsWith(code.toLowerCase()));
    if (v) { selectedVoice=v; return; }
  }
  selectedVoice = voices[0];
}

loadVoices();
if (speechSynthesis.onvoiceschanged !== undefined) speechSynthesis.onvoiceschanged = loadVoices;

function dividirEnFragmentos(texto) {
  const MAX=180; const partes=[]; const ors=texto.match(/[^.!?]+[.!?]*/g)||[texto]; let actual='';
  for (const o of ors) {
    const l=o.trim(); if (!l) continue;
    if ((actual+' '+l).trim().length<=MAX) actual=(actual+' '+l).trim();
    else { if (actual) partes.push(actual); actual=l; }
  }
  if (actual) partes.push(actual);
  return partes.filter(p=>p.trim().length>3);
}

function playTTSParada(idx) {
  if (!isPlaying||idx>=totalParadas) { isPlaying=false;isPaused=false;updateAudioButton();updatePlayerControls();return; }
  currentParada=idx;
  const stop=CIRCUITS[currentCircuitIdx].paradas[idx];
  const texto=(stop[currentLang].guion||'').replace(/\n\n/g,'. ').replace(/\n/g,' ').trim();
  fragmentos=dividirEnFragmentos(texto); fragIdx=0;
  hablarFragmento(0,idx);
}

function hablarFragmento(fIdx, paradaIdx) {
  if (!isPlaying||fIdx>=fragmentos.length) { if (isPlaying) playTTSParada(paradaIdx+1); return; }
  fragIdx=fIdx; loadVoices();
  const utt=new SpeechSynthesisUtterance(fragmentos[fIdx]);
  utt.rate=0.88; utt.pitch=0.75; utt.volume=1;
  if (selectedVoice) { utt.voice=selectedVoice; utt.lang=selectedVoice.lang; }
  else utt.lang={es:'es-AR',en:'en-US',pt:'pt-BR'}[currentLang];
  utt.onend  =()=>{ if (isPlaying) hablarFragmento(fIdx+1,paradaIdx); };
  utt.onerror=()=>{ if (isPlaying) hablarFragmento(fIdx+1,paradaIdx); };
  speechSynth.speak(utt);
}

function updateAudioButton() {
  const btn=document.getElementById('btn-audio');
  const label=document.getElementById('btn-audio-text');
  if (!btn||!label) return;
  const t=UI[currentLang];
  btn.classList.remove('playing','paused');
  if (isPlaying&&!isPaused) { label.textContent=t.audioPause; btn.classList.add('playing'); }
  else if (isPaused)         { label.textContent=t.audioPlay;  btn.classList.add('paused'); }
  else                       { label.textContent=t.audioPlay; }
}

function updatePlayerControls() {
  const controls=document.getElementById('player-controls');
  if (!controls) return;
  controls.style.display=(isPlaying||isPaused)?'flex':'none';
  if (totalParadas>0) {
    const bar=document.getElementById('progress-bar-fill');
    if (bar) bar.style.width=Math.round((currentParada/totalParadas)*100)+'%';
    const label=document.getElementById('progress-label');
    if (label) label.textContent=`Parada ${currentParada+1} de ${totalParadas}`;
  }
}

// ── Init ──────────────────────────────────────────────────────
function initApp() {
  currentLang = Storage.getLang();
  obtenerUbicacion();
  setTimeout(() => {
    document.getElementById('screen-splash').style.display = 'none';
    document.getElementById('screen-welcome').classList.remove('hidden');
    setLang(currentLang);
  }, 2500);
}

document.addEventListener('DOMContentLoaded', initApp);