# Invitación Digital XV Años

Una plantilla moderna y elegante para invitaciones de XV años, construida con HTML, CSS y JavaScript vanilla. Totalmente responsive y compatible con dispositivos móviles.

## Características

- ✨ 14 secciones personalizables
- 🎨 4 paletas de colores (Classic Gold, Modern Minimal, Romantic Blush, Navy Night)
- 📱 Totalmente responsive (mobile, tablet, desktop)
- 🔊 Audio compatible con iOS Safari
- 🖼️ Galería con carrusel táctil
- ⏰ Cuenta regresiva configurable
- 📋 Copiar CBU al portapapeles
- ♿ Accesibilidad (prefers-reduced-motion, contraste, alt text)

## Personalización

### 1. Editar configuración principal

Abre `js/config.js` y modifica los siguientes campos:

```javascript
// Datos de la festejante
festejante: {
  nombre: "Tu Nombre",
  fotoHero: "img/hero.jpg",      // Imagen principal (800x1200px)
  fotoGaleria: [                 // Imágenes para la galería
    "img/galeria-1.jpg",
    "img/galeria-2.jpg",
    "img/galeria-3.jpg",
    "img/galeria-4.jpg"
  ]
}

// Fecha del evento
evento: {
  fecha: "2026-06-15T20:00:00",  // Formato ISO (AÑO-MES-DÍA T HORA:MINUTO:SEGUNDO)
  fechaFormateada: "Domingo 15 de Junio de 2026",
  hora: "20:00",
  horaFormateada: "20:00 hs"
}

// Mensaje de invitación
mensaje: {
  principal: "Tu mensaje principal",
  secundario: "Tu mensaje secundario"
}
```

### 2. Cambiar paleta de colores

En `index.html`, busca la etiqueta `<body>` y cambia la clase `theme-*`:

```html
<!-- Opciones disponibles: -->
<body class="theme-classic-gold">    <!-- Dorado clásico -->
<body class="theme-modern-minimal">  <!-- Verde minimalista -->
<body class="theme-romantic-blush">  <!-- Rosa romántico -->
<body class="theme-navy-night">      <!-- Azul oscuro noche -->
```

Opcionalmente, puedes usar la configuración en `config.js`:

```javascript
apariencia: {
  paleta: "modern-minimal"  // Cambia aquí
}
```

### 3. Agregar imágenes

Coloca tus imágenes en la carpeta `img/`:

```
img/
├── hero.jpg          # Imagen principal (recomendado 800x1200px)
├── galeria-1.jpg     # Foto para galería
├── galeria-2.jpg
├── galeria-3.jpg
├── galeria-4.jpg
└── share.jpg         # Imagen para compartir en WhatsApp (1200x630px)
```

Actualiza las rutas en `js/config.js`:

```javascript
festejante: {
  fotoHero: "img/tu-hero.jpg",
  fotoGaleria: ["img/foto1.jpg", "img/foto2.jpg"]
}

multimedia: {
  imagenShare: "img/tu-share.jpg"
}
```

### 4. Agregar audio

Coloca tu archivo de audio en la carpeta `audio/`:

```
audio/
└── invitacion.mp3
```

Actualiza la configuración en `js/config.js`:

```javascript
multimedia: {
  cancion: "audio/tu-cancion.mp3"
}
```

**Nota**: El audio se reproduce solo después de que el usuario hace click (requerido por iOS Safari).

### 5. Crear formulario de RSVP con Google Forms

1. Ve a [Google Forms](https://forms.google.com)
2. Crea un formulario con las preguntas que necesites:
   - Nombre completo
   - ¿Asistirás? (Sí/No)
   - Número de adultos
   - Número de niños
   - Restricciones alimentarias
   - Mensaje adicional
3. Comparte el formulario y copia el enlace
4. Actualiza `js/config.js`:

```javascript
confirmacion: {
  linkFormulario: "https://forms.google.com/tu-formulario",
  fechaLimite: "2026-06-01",         // Fecha límite para confirmar
  mostrarFechaLimite: true
}
```

### 6. Configurar mesa de regalos

**Opción A: Tienda online**

```javascript
mesaRegalos: {
  tienda: "Falabella",
  url: "https://falabella.com.ar"
}
```

**Opción B: Datos bancarios**

```javascript
mesaRegalos: {
  banco: "Banco Nación",
  CBU: "1234567890123456789012",
  alias: "misfotos.xv",
  titular: "Nombre del titular"
}
```

### 7. Agregar ubicación

```javascript
direccion: {
  texto: "Av. Ejemplo 1234, Buenos Aires",
  salon: "Salón de Eventos Ejemplo",
  googleMapsUrl: "https://maps.google.com/?q=Av.+Ejemplo+1234"
}
```

### 8. Dress Code

```javascript
dressCode: {
  principal: "Formal",
  descripcion: "Traje de gala - No jeans ni sandals"
}
```

## Despliegue

### Vercel (Recomendado)

1. Sube tu proyecto a GitHub
2. Ve a [Vercel](https://vercel.com) e inicia sesión
3. Click en "New Project"
4. Importa tu repositorio
5. Click en "Deploy"

### Netlify

1. Sube tu proyecto a GitHub
2. Ve a [Netlify](https://netlify.com) e inicia sesión
3. Click en "Add new site" > "Import an existing project"
4. Selecciona tu repositorio
5. Click en "Deploy site"

### GitHub Pages

1. Ve a la configuración de tu repositorio
2. Selecciona "Pages" en el menú lateral
3. En "Source", selecciona "Deploy from a branch"
4. Selecciona la rama `main` y la carpeta `/ (root)`
5. Click en "Save"

## Testing

### Dispositivos recomendados

- **iOS Safari**: Para verificar audio, swipe del carrusel, safe areas
- **Android Chrome**: Testing cross-platform
- **Desktop**: Para verificar breakpoints responsive

### Checklist de verificación

- [ ] Las 14 secciones se renderizan correctamente
- [ ] El cambio de tema funciona (CSS variables)
- [ ] La cuenta regresiva calcula correctamente desde la fecha configurada
- [ ] El carrusel funciona (swipe + flechas + dots)
- [ ] El audio carga después del click del usuario (iOS compatible)
- [ ] El enlace de Google Maps abre correctamente
- [ ] El formulario de Google Forms abre en nueva pestaña
- [ ] Copiar CBU/hashtag funciona
- [ ] Diseño responsive funciona en mobile/tablet/desktop
- [ ] Los colores tienen contraste adecuado (accesibilidad)
- [ ] Todas las imágenes tienen texto alternativo
- [ ] Se respeta prefers-reduced-motion

## Estructura del proyecto

```
invitacion-digital/
├── index.html          # Estructura principal
├── css/
│   ├── base.css        # Estilos base
│   ├── themes.css      # Paletas de colores
│   └── styles.css      # Estilos específicos
├── js/
│   ├── config.js       # Configuración (editar aquí)
│   ├── main.js         # Funcionalidad principal
│   └── utils.js        # Utilidades
├── img/                # Imágenes (crear carpeta)
├── audio/              # Archivos de audio (crear carpeta)
├── README.md           # Este archivo
└── .gitignore          # Ignorar archivos innecesarios
```

## Compatibilidad

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- iOS Safari 14+
- Android Chrome 90+

## Licencia

MIT - Feel free to use and modify for your event!