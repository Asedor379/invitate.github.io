/**
 * Configuración de la invitación digital XV años
 * Todos los campos editables están aquí para fácil personalización
 */

const config = {
  // ============================================
  // DATOS PRINCIPALES
  // ============================================
  festejante: {
    nombre: "Amanda Ayde",  // ← CAMBIA ESTO
    fotoHero: "img/hero.jpg",
    fotoGaleria: [
      "img/457.jpg",
      "img/457.jpg",
      "img/457.jpg",
      "img/457.jpg"
    ]
  },

  // ============================================
  // FECHA Y HORA
  // ============================================
  evento: {
    fecha: "2026-06-15T20:00:00",
    fechaFormateada: "Domingo 15 de Junio de 2026",
    hora: "20:00",
    horaFormateada: "20:00 hs",
    duracion: "6 horas"
  },

  // ============================================
  // UBICACIÓN
  // ============================================
  direccion: {
    texto: "Av. Ejemplo 1234, Buenos Aires",
    salon: "Salón de Eventos Ejemplo",
    googleMapsUrl: "https://maps.google.com/?q=Av.+Ejemplo+1234+Buenos+Aires"  // ← COMPLETA ESTO
  },

  // ============================================
  // MENSAJE DE INVITACIÓN
  // ============================================
  mensaje: {
    principal: "Quiero que seas parte de una noche inolvidable",
    secundario: "Será un honor celebrar contigo esta noche mágica"
  },

  // ============================================
  // DRESS CODE
  // ============================================
  dressCode: {
    principal: "Formal",
    descripcion: "Traje de gala - No jeans ni sandalias"
  },

  // ============================================
  // INFORMACIÓN DE PRECIOS (Opcional)
  // ============================================
  precios: {
    adulto: 15000,
    nino: 5000,
    menorEdadGratis: 5,
    incluir: true
  },

  // ============================================
  // MESA DE REGALOS
  // ============================================
  mesaRegalos: {
    tienda: "Falabella",
    url: "https://falabella.com.ar",  // ← COMPLETA ESTO
    // banco: "Banco Nación",
    // CBU: "1234567890123456789012",
    // alias: "valeria.xv",
    // titular: "Valeria García"
  },

  // ============================================
  // ITINERARIO
  // ============================================
  itinerario: [
    { hora: "20:00", actividad: "Recepción", ubicacion: "Entrada principal" },
    { hora: "21:00", actividad: "Cena", ubicacion: "Salón principal" },
    { hora: "22:30", actividad: "Pastel", ubicacion: "Salón principal" },
    { hora: "23:00", actividad: "Baile", ubicacion: "Salón principal" }
  ],

  // ============================================
  // REDES SOCIALES
  // ============================================
  redes: {
    hashtag: "#XVValeria",  // ← CAMBIA ESTO
    playlistUrl: "https://open.spotify.com/playlist/...",  // ← COMPLETA ESTO
    instagram: "https://instagram.com/valeria"
  },

  // ============================================
  // FORMULARIO DE CONFIRMACIÓN
  // ============================================
  confirmacion: {
    linkFormulario: "https://forms.google.com/...",  // ← COMPLETA ESTO
    fechaLimite: "2026-06-01",
    mostrarFechaLimite: true
  },

  // ============================================
  // MULTIMEDIA
  // ============================================
  multimedia: {
    cancion: "audio/123.mp3",  // ← RUTA RELATIVA (sin ./)
    imagenShare: "img/457.jpg"
  },

  // ============================================
  // APARIENCIA
  // ============================================
  apariencia: {
    paleta: "romantic-blush",  // classic-gold, modern-minimal, romantic-blush, navy-night
  }
};

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
}