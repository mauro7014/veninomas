§// ============================================================
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
      icono: "🛍️",
      lat: -32.9467,
      lng: -60.6394,
      maps: "https://maps.google.com/?q=-32.9467,-60.6394"
    },
    {
      nombre: "Feria del Parque Independencia",
      tipo: "Artesanías, diseño, gastronomía",
      dias: { es: "Sábados y domingos", en: "Saturdays and Sundays", pt: "Sábados e domingos" },
      horario: "9 a 18hs",
      icono: "🎨",
      lat: -32.9572,
      lng: -60.6585,
      maps: "https://maps.google.com/?q=-32.9572,-60.6585"
    },
    {
      nombre: "Mercado de Pulgas",
      tipo: "Antigüedades, coleccionables",
      dias: { es: "Domingos", en: "Sundays", pt: "Domingos" },
      horario: "9 a 14hs",
      icono: "🏺",
      lat: -32.9378,
      lng: -60.6558,
      maps: "https://maps.google.com/?q=-32.9378,-60.6558"
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
      nombre: "Paseo de las Flores",
      tipo: "Plantas, flores, viveros",
      dias: { es: "Lunes a sábados", en: "Monday to Saturday", pt: "Segunda a sábado" },
      horario: "8 a 13hs",
      icono: "🌸",
      lat: -32.9520,
      lng: -60.6480,
      maps: "https://maps.google.com/?q=-32.9520,-60.6480"
    },
    {
      nombre: "Mercado Norte",
      tipo: "Gastronomía, productos regionales",
      dias: { es: "Lunes a sábados", en: "Monday to Saturday", pt: "Segunda a sábado" },
      horario: "8 a 20hs",
      icono: "🥬",
      lat: -32.9350,
      lng: -60.6620,
      maps: "https://maps.google.com/?q=-32.9350,-60.6620"
    }
  ],

  // ── DÓNDE DORMIR — pago ───────────────────────────────────
  dormir: [
    {
      nombre: "Hotel Ros Tower",
      tipo: "Hotel 4 estrellas · Vista al río",
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
      lat: -32.9395,
      lng: -60.6330,
      maps: "https://maps.google.com/?q=El+Viejo+Balcon+Rosario",
      web: "https://www.elviejobalcon.com.ar"
    },
    {
      nombre: "Café de la Opera",
      tipo: "Café, Medialunas, Brunch",
      icono: "☕",
      destacado: true,
      lat: -32.9502,
      lng: -60.6375,
      maps: "https://maps.google.com/?q=Cafe+de+la+Opera+Rosario",
      web: "https://www.cafedelaopera.com.ar"
    },
    {
      nombre: "La Estancia",
      tipo: "Parrilla, Carnes, Vinos",
      icono: "🔥",
      destacado: true,
      lat: -32.9450,
      lng: -60.6400,
      maps: "https://maps.google.com/?q=La+Estancia+Rosario",
      web: "https://www.laestanciarosario.com.ar"
    },
    {
      nombre: "Sushi Paraná",
      tipo: "Sushi, Japonesa, Fusión",
      icono: "🍣",
      destacado: false,
      lat: -32.9460,
      lng: -60.6320,
      maps: "https://maps.google.com/?q=Sushi+Parana+Rosario",
      web: "https://www.sushiparana.com.ar"
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