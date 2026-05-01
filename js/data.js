// ============================================================
// data.js — Vení Nomas PWA
// Editá este archivo para agregar o sacar negocios
// ============================================================

const DATA = {

  // ── FERIAS Y PASEOS — gratis ──────────────────────────────
  ferias: [
    {
      nombre: "El Roperito",
      tipo: "Ropa vintage, accesorios, diseño",
      dias: { es: "Sábados", en: "Saturdays", pt: "Sábados" },
      horario: "10 a 18hs",
      icono: "assets/logos/roperito.png",
      lat: -32.9313313,
      lng: -60.6541633,
      maps: "https://maps.google.com/?q=-32.9313313,-60.6541633"
    },
    {
      nombre: "Feria del Parque Independencia",
      tipo: "Artesanías, diseño, gastronomía",
      dias: { es: "Sábados y domingos", en: "Saturdays and Sundays", pt: "Sábados e domingos" },
      horario: "9 a 18hs",
      icono: "assets/logos/feria-parque.png",
      lat: -32.9637769,
      lng: -60.6587001,
      maps: "https://maps.google.com/?q=-32.9637769,-60.6587001"
    },
    {
      nombre: "Mercado de Pulgas del Bajo",
      tipo: "Artesanías, antigüedades, coleccionables",
      dias: { es: "Sábados, domingos y feriados", en: "Saturdays, Sundays and holidays", pt: "Sábados, domingos e feriados" },
      horario: "10 a 21hs",
      icono: "assets/logos/mercado-pulgas.png",
      lat: -32.9477,
      lng: -60.6303,
      maps: "https://maps.google.com/?q=Mercado+de+Pulgas+del+Bajo+Rosario+Belgrano+y+Buenos+Aires"
    },
    {
      nombre: "Feria del Bajo",
      tipo: "Arte urbano, música en vivo",
      dias: { es: "Sábados y domingos", en: "Saturdays and Sundays", pt: "Sábados e domingos" },
      horario: "16 a 21hs",
      icono: "🎵",
      lat: -32.9431,
      lng: -60.6288,
      maps: "https://maps.google.com/?q=-32.9431,-60.6288"
    },
    {
      nombre: "Feria del Boulevard",
      tipo: "Artesanías, diseño, manualidades",
      dias: { es: "Sábados y domingos", en: "Saturdays and Sundays", pt: "Sábados e domingos" },
      horario: "10 a 20hs",
      icono: "assets/logos/feria-boulevard.png",
      lat: -32.9572,
      lng: -60.6585,
      maps: "https://maps.google.com/?q=Feria+del+Boulevard+Rosario+Oroño+y+Rivadavia"
    },
    {
      nombre: "Mercado del Patio",
      tipo: "Gastronomía, productos regionales",
      dias: { es: "Lunes a sábados", en: "Monday to Saturday", pt: "Segunda a sábado" },
      horario: "8 a 20hs",
      icono: "assets/logos/mercado-patio.png",
      lat: -32.9372173,
      lng: -60.6657257,
      maps: "https://maps.google.com/?q=-32.9372173,-60.6657257"
    }
  ],

  // ── DÓNDE DORMIR — pago ───────────────────────────────────
  dormir: [
    {
      nombre: "Hotel Ros Tower",
      tipo: "Hotel 5 estrellas · Vista al río",
      icono: "🏨",
      destacado: true,
      lat: -32.9412,
      lng: -60.6341,
      maps: "https://maps.google.com/?q=Ros+Tower+Rosario",
      web: "https://www.rostower.com.ar"
    },
    {
      nombre: "Hotel Libertador",
      tipo: "Hotel 4 estrellas · Centro",
      icono: "🏨",
      destacado: true,
      lat: -32.9420,
      lng: -60.6350,
      maps: "https://maps.google.com/?q=Hotel+Libertador+Rosario",
      web: "https://www.hotellibertador.com.ar"
    },
    {
      nombre: "Apart Hotel Riviera",
      tipo: "Apartamentos · Cocina equipada",
      icono: "🏢",
      destacado: false,
      lat: -32.9435,
      lng: -60.6360,
      maps: "https://maps.google.com/?q=Apart+Hotel+Riviera+Rosario",
      web: "https://www.rivierarosario.com.ar"
    },
    {
      nombre: "Hostel La Bandera",
      tipo: "Hostel boutique · Terraza con vista",
      icono: "🏠",
      destacado: false,
      lat: -32.9390,
      lng: -60.6300,
      maps: "https://maps.google.com/?q=Hostel+La+Bandera+Rosario",
      web: "https://www.hostellabandera.com.ar"
    }
  ],

  // ── DÓNDE COMER — pago ────────────────────────────────────
  comer: [
    {
      nombre: "El Viejo Balcón",
      tipo: "Carnes, Asado argentino",
      icono: "🥩",
      destacado: true,
      lat: -32.934412,
      lng: -60.6453259,
      maps: "https://maps.google.com/?q=El+Viejo+Balcon+Rosario",
      web: "https://www.elviejobalcon.com.ar"
    },
    {
      nombre: "Café de la Opera",
      tipo: "Café, Medialunas, Brunch",
      icono: "☕",
      destacado: true,
      lat: -32.9523439,
      lng: -60.635262,
      maps: "https://maps.google.com/?q=Cafe+de+la+Opera+Rosario",
      web: "https://www.cafedelaopera.com.ar"
    },
    {
      nombre: "La Estancia",
      tipo: "Parrilla, Carnes, Vinos",
      icono: "🔥",
      destacado: true,
      lat: -32.9561207,
      lng: -60.6465385,
      maps: "https://maps.google.com/?q=La+Estancia+Rosario",
      web: "https://www.laestanciarosario.com.ar"
    },
    {
      nombre: "Bajada España",
      tipo: "Parrilla y Restaurante con vista al río",
      icono: "🔥",
      destacado: false,
      lat: -32.9337403,
      lng: -60.6436068,
      maps: "https://maps.google.com/?q=-32.9337403,-60.6436068",
      web: "https://www.instagram.com/bajadaespana/"
    },
    {
      nombre: "Don Ferro",
      tipo: "Pizza, Pasta, Italiana",
      icono: "🍕",
      destacado: false,
      lat: -32.9480,
      lng: -60.6380,
      maps: "https://maps.google.com/?q=Don+Ferro+Rosario",
      web: "https://www.donferro.com.ar"
    }
  ]
};