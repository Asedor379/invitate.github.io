# Agent.md — Invitación Digital XV Años

## Visión General del Proyecto

Este documento establece las especificaciones de diseño, experiencia de usuario y desarrollo para una invitación digital de fiesta de 15 años (XV). El proyecto debe funcionar como una landing page escroleable, optimizada para dispositivos móviles pero con una presentación elegante en escritorio. El diseño debe ser lo suficientemente flexible para adaptarse a diferentes temáticas y colores, pero con una estructura visual cohesiva y profesional.

La invitación digital representa un momento significativo en la vida de la festejante, por lo que cada elemento visual debe transmitir elegancia, sofisticación y emoción. El objetivo es crear una experiencia que el invitado recuerde, que refleje la personalidad de la cumpleañera y que facilite toda la información necesaria de manera clara y atractiva.

---

## 1. Especificaciones Visuales y de UX

### 1.1 Enfoque de Diseño

El diseño debe equilibrar la elegancia con la accesibilidad. Las tendencias actuales en Argentina para invitaciones de XV incluyen paletas de colores neutros con acentos dorados, tipografías refinadas y animaciones sutiles que no distraen de la información importante. El estilo debe ser atemporal pero con elementos contemporáneos que lo mantengan actualizado.

Se recomienda un enfoque mobile-first donde cada sección esté diseñada pensando en la experiencia móvil, considerando que la mayoría de los invitados abrirán la invitación desde WhatsApp u otro aplicativo móvil. La navegación debe ser intuitiva, con scroll suave entre secciones y transiciones que guíen al usuario sin abrumarlo.

### 1.2 Principios de Diseño

**Sofisticación sutil**: Evitar elementos excesivamente llamativos o decoraciones recargadas. La elegancia reside en los detalles delicados y la simplicidad bien ejecutada. Los elementos dorados, si se usan, deben aplicarse con moderación y no dominar la composición visual.

**Jerarquía visual clara**: Cada sección debe tener un propósito definido y los elementos deben disponerse de manera que el usuario pueda escanear rápidamente la información más importante. El nombre de la cumpleañera y la fecha del evento deben ser los elementos más prominentes.

**Consistencia temática**: Mantener coherencia en colores, tipografías y estilos de iconos a lo largo de toda la invitación. Los elementos decorativos (flores, estrellas, brillos) deben seguir un patrón visual unificado si se incluyen.

**Espacio negativo**: Permitir que cada elemento respiré. El espacio negativo no es vacío, es una herramienta de diseño que aporta claridad y sofisticación. Evitar拥挤ar las secciones con información excesiva.

---

## 2. Paletas de Colores Recomendadas

Las siguientes paletas han sido seleccionadas considerando las tendencias actuales en el mercado argentino de invitaciones digitales. Cada paleta incluye el color primario, el color secundario, los acentos y los colores neutros para fondos y textos.

### 2.1 Paleta Classic Gold (Más solicitada)

Esta paleta transmite elegancia atemporal y sofisticación. Es ideal para celebraciones clásicas y formales.

| Elemento | Color | Hexadecimal |
|----------|-------|--------------|
| Primario | Dorado champagne | #D4AF37 |
| Secundario | Blanco hueso | #FAF9F6 |
| Acento | Negro profundo | #1A1A1A |
| Fondo principal | Blanco puro | #FFFFFF |
| Fondo alternativo | Crema suave | #FDF8F0 |
| Texto principal | Negro suave | #2D2D2D |
| Texto secundario | Gris medio | #6B6B6B |

### 2.2 Paleta Modern Minimal

Diseños limpios y contemporáneos que priorizan la legibilidad y la elegancia discreta. Muy popular en el segmento premium.

| Elemento | Color | Hexadecimal |
|----------|-------|--------------|
| Primario | Verde oliva profundo | #4A5D4A |
| Secundario | Blanco algodón | #F5F5F5 |
| Acento | Dorado suave | #C9A962 |
| Fondo principal | Blanco roto | #FAFAFA |
| Fondo alternativo | Gris claro | #E8E8E8 |
| Texto principal | Carbón | #333333 |
| Texto secundario | Gris piedra | #888888 |

### 2.3 Paleta Romantic Blush

Tonos suaves y femeninos pero con distinción. Perfecta para estilos románticos y soñadores.

| Elemento | Color | Hexadecimal |
|----------|-------|--------------|
| Primario | Rosa empolvado | #E8C4C4 |
| Secundario | Lavanda suave | #D4C4E8 |
| Acento | Rosa激烈的 | #B88B8B |
| Fondo principal | Blanco nudoso | #FFF9F5 |
| Fondo alternativo | Rosa muy claro | #FDF2F2 |
| Texto principal | Marrón oscuro | #4A3A3A |
| Texto secundario | Rosa viejo | #9A7A7A |

### 2.4 Paleta Navy Night

Elegancia nocturna con profundidad y dramatismo. Ideal para fiestas con temática nocturna o elegante.

| Elemento | Color | Hexadecimal |
|----------|-------|--------------|
| Primario | Azul marino | #1E3A5F |
| Secundario | Plata sutil | #C0C0C0 |
| Acento | Dorado metálico | #D4AF37 |
| Fondo principal | Negro azulado | #0F1825 |
| Fondo alternativo | Azul muy oscuro | #162232 |
| Texto principal | Blanco puro | #FFFFFF |
| Texto secundario | Gris plateado | #B0B0B0 |

### 2.5 Sistema de Colores Variables

La implementación debe permitir que el usuario final seleccione una paleta predefined o especifique sus propios colores. Se recomienda implementar CSS custom properties para facilitar esta personalización:

```css
:root {
  --color-primary: #D4AF37;
  --color-secondary: #FAF9F6;
  --color-accent: #1A1A1A;
  --color-bg-primary: #FFFFFF;
  --color-bg-alt: #FDF8F0;
  --color-text-primary: #2D2D2D;
  --color-text-secondary: #6B6B6B;
}
```

---

## 3. Tipografías Recomendadas

La tipografía es un elemento crítico que define el tono de toda la invitación. Las siguientes fuentes han sido seleccionadas considerando su disponibilidad en Google Fonts, su legibilidad en dispositivos móviles y su capacidad de transmitir elegancia.

### 3.1 Fuentes para Títulos Principales

**Great Vibes** — Caligrafía elegante y sofisticada, perfecta para el nombre de la cumpleañera. Tiene un trazo fluido y romántico sin ser excesivamente decorativo. Funciona mejor en tamaños grandes.

**Playfair Display** — Serif con personalidad fuerte y elegante. Excelente para el texto "Mis 15" o títulos de sección. Tiene un contraste entre trazos gruesos y finos que aporta sofisticación.

**Cinzel** — Sans-serif con toques clásicos y aristocráticos. Ideal para textos como "Te invito a mi fiesta de 15" o fechas. Su estructura geométrica la hace muy legible en móvil.

### 3.2 Fuentes para Cuerpo de Texto

**Lato** — Sans-serif limpia y moderna con buena legibilidad en todos los tamaños. Neutral pero profesional, no distraerá del contenido principal.

**Montserrat** — Similar a Lato pero con mayor personalidad. Excelente para textos informativos como horarios y direcciones. Varias weights disponibles permiten crear jerarquía.

**Open Sans** — Máxima legibilidad, perfecta para información importante como direcciones, fechas y detalles del formulario de confirmación.

### 3.3 Implementación Recomendada

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
```

La jerarquía tipográfica recomendada es:

- Nombre de la cumpleañera: Great Vibes, 3rem a 4rem en móvil, 5rem a 6rem en desktop
- Títulos de sección: Playfair Display o Cinzel, 1.5rem a 2rem
- Texto de cuerpo: Lato, 1rem a 1.125rem
- Información secundaria: Lato light, 0.875rem

---

## 4. Estructura de Secciones

La invitación debe organizarse en secciones claras que el usuario puede recorrer mediante scroll vertical. Cada sección debe tener un propósito específico y contener solo la información necesaria.

### 4.1 Portada / Hero Section

Esta es la primera impresión y debe capturar la esencia de la celebración. La portada debe incluir la fotografía principal de la cumpleañera (recomendable un primer plano elegante o una foto con vestido de fiesta), el texto "Mis 15" o "Te invito a mi fiesta de 15", y el nombre de la cumpleañera en tipografía destacada.

El diseño debe permitir abrir la tarjeta con o sin música. Se recomienda un botón discreto que diga "Abrir invitación" o "Con música" junto a una opción "Sin música" o un ícono de altavoz con la opción de mute. La decisión de reproducir música debe ser siempre del usuario y nunca automática, debido a las políticas de navegadores móviles.

La imagen principal debe ocupar al menos el 60% de la altura visible en móvil. Se recomienda usar object-fit: cover para asegurar que la imagen se ajuste correctamente sin deformarse. Un overlay sutil (negro con opacidad 20-30%) puede mejorar la legibilidad del texto sobre la imagen.

### 4.2 Cuenta Regresiva

La cuenta regresiva genera expectativa y debe ser visualmente atractiva. Se recomienda mostrar Days (días), Hours (horas), Minutes (minutos) y Seconds (segundos) en bloques separados. Cada bloque debe tener un diseño consistente con la paleta de colores seleccionada.

El diseño debe incluir una tipografía clara y legible,preferiblemente monospace o una fuente con ancho fijo para los números. Los números deben ser prominentes (al menos 2rem en móvil) y las etiquetas (días, horas, etc.) más pequeñas pero legibles.

Considerar una animación sutil donde los números cambien suavemente. Si la fecha ya pasó, mostrar un mensaje como "¡Ya arrivedó el gran día!" en lugar de números negativos o cero.

### 4.3 Mensaje de Invitación

Un texto cálido y personal que invite a la celebración. El texto recomendado "Quiero que seas parte de una noche inolvidable" puede ser personalizado o替换 con otro mensaje elegido por la festejante.

El diseño debe incluir suficiente espacio en los laterales (padding) para que el texto sea legible en móvil sin que las líneas sean demasiado largas (máximo 60-70 caracteres por línea). El tamaño de fuente debe ser generoso (1.125rem a 1.25rem) para facilitar la lectura en pantalla pequeña.

### 4.4 Sección Cuando (Fecha y Hora)

Información clara y prominente de la fecha y hora del evento. El diseño debe incluir la fecha completa (día de la semana, día del mes, mes y año), la hora de inicio (y hora de finalización si es relevante), y el formato de vestimenta (formal, semi-formal, casual elegante) si se incluye.

Los datos deben presentarse de manera que puedan escanearse rápidamente. Usar iconos sutiles (calendar, clock) puede ayudar a identificar cada tipo de información visualmente. El tamaño de fuente para la fecha debe ser mayor que para los detalles adicionales.

### 4.5 Sección Donde (Ubicación)

La dirección del evento con un botón o enlace directo a Google Maps. El diseño debe incluir la dirección textual (calle, número, barrio, ciudad), el nombre del salón o venue si corresponde, y un botón prominent que diga "Ver ubicación" o "Cómo llegar" que abra Google Maps en una nueva pestaña o dentro de la app de maps del dispositivo.

El botón debe tener un estilo consistente con la paleta de colores y ser lo suficientemente grande para tocarse fácilmente con un dedo (mínimo 44px de altura). Incluir un ícono de ubicación (pin de maps) junto a la dirección mejora el reconocimiento visual.

### 4.6 Galería de Fotos

Un carrusel o grid de fotos de la cumpleañera. Esta sección debe permitir mostrar entre 4 y 8 fotos, dependiendo de la preferencia del usuario. El diseño debe ser responsivo, mostrando una foto a la vez en móvil (carrusel horizontal) y múltiples en desktop.

Se recomienda incluir indicadores de posición (dots o números) cuando hay más de una foto, navegación con swipe en móvil (deslizar con el dedo) y botones de flecha en desktop. Las fotos deben tener un aspecto consistente (mismas dimensiones o crop) para mantener la uniformidad visual.

Transiciones suaves entre fotos (fade o slide) son preferibles a cambios abruptos. Las fotos pueden incluir un marco sutil o simplemente estar recortadas en círculos o rectángulos con esquinas redondeadas.

### 4.7 Dress Code (Código de Vestimenta)

Sección dedicada a indicar el tipo de vestimenta esperada para el evento. El diseño debe incluir una indicación clara y elegante como "Elegante", "Formal", "Semi-formal", "Traje de cocktail" u otra indicación específica.

Se recomienda usar un ícono de vestimenta (traje/corbatín) junto al texto. El diseño debe transmitir que es una guía de estilo, no una regla estricta. Puede incluir una breve descripción adicional si es necesario (ej: "Traje formal -不得穿 jeans ni sandals").

### 4.8 Mesa de Regalos

Sección para informar sobre la mesa de regalos o cuenta donde los invitados pueden hacer transferencias. El diseño debe incluir el nombre de la tienda o lista de regalos (ej: "Mesa de Regalos - Falabella / Garbarino / Rioplata"), un botón que abra el link de la tienda, o en su defecto los datos bancarios (CBU, alias, banco) de manera discreta.

Si se incluyen datos bancarios, presentarlos en un formato que sea fácil de copiar (con botón de copiar). Se recomienda incluir un mensaje sutil como "Tu presencia es el mejor regalo, pero si deseas colaborar..." para que no parezca obligatorio.

### 4.9 Itinerario (Cronograma del Evento)

Sección que muestra el orden del día de la celebración. El diseño debe incluir una lista cronológica con horarios y actividades (ej: "21:00 - Recepción | 21:30 - Cena | 23:00 - Pastel | 23:30 - Baile").

Se recomienda usar una línea de tiempo visual o iconos para cada actividad. Si hay múltiples venues (ceremonia y recepción), indicar claramente cada momento con su ubicación. El diseño debe ser escaneable rápidamente.

### 4.10 Hashtag de Instagram

Sección para indicar el hashtag oficial de la fiesta donde los invitados pueden subir sus fotos. El diseño debe incluir el hashtag (ej: "#XVNombre") con un diseño atractivo que invite a usarlo.

Se puede incluir un ícono de Instagram y un texto breve como "Comparte tus fotos con nosotros". El hashtag debe ser único para evitar que fotos de otros eventos aparezcan en la búsqueda.

### 4.11 Playlist

Sección para que los invitados sugieran canciones que quieran escuchar en la fiesta. El diseño debe incluir un botón que abra un formulario (puede ser Google Forms o un link a Spotify) donde el invitado pueda agregar canciones.

Alternativamente, puede mostrar un enlace a una playlist pública de Spotify donde los invitados pueden agregar canciones directamente. El diseño debe ser divertido yзвать a la participación.

### 4.12 Galería de Fotos

Un carrusel o grid de fotos de la cumpleañera. Esta sección debe permitir mostrar entre 4 y 8 fotos, dependiendo de la preferencia del usuario. El diseño debe ser responsivo, mostrando una foto a la vez en móvil (carrusel horizontal) y múltiples en desktop.

Se recomienda incluir indicadores de posición (dots o números) cuando hay más de una foto, navegación con swipe en móvil (deslizar con el dedo) y botones de flecha en desktop. Las fotos deben tener un aspecto consistente (mismas dimensiones o crop) para mantener la uniformidad visual.

Transiciones suaves entre fotos (fade o slide) son preferibles a cambios abruptos. Las fotos pueden incluir un marco sutil o simplemente estar recortadas en círculos o rectángulos con esquinas redondeadas.

### 4.13 Información Adicional (Horario y Precios)

Esta sección puede ser opcional dependiendo del tipo de evento. Si se incluye, debe mostrar la información de precios (cubićería, adulto, niño) y cualquier detalle adicional sobre el evento.

El diseño debe organizar la información en una lista clara o tabla simple. Usar iconos para cada tipo de información (ticket o precio para costos) mejora la legibilidad. Si hay múltiples items de precio (adultos, niños, menores de cierta edad gratis), presentarlos de manera que puedan compararse fácilmente.

### 4.14 Confirmar Asistencia

Un botón o sección que dirija al formulario de confirmación. Existen dos opciones principales:

- **Google Forms**: La opción más accesible y común. Un formulario de Google donde los invitados completan sus datos. Ventaja: sin costo, fácil de crear, conocido por los usuarios. Limitación: diseño no se integra con la invitación.

- **Sistema de RSVP propio**: Un formulario personalizado integrado en la invitación con el mismo diseño y paleta de colores. Ventaja: experiencia coherente, recolección de datos estructurada. Limitación: requiere desarrollo adicional o uso de plataformas especializadas.

El diseño debe incluir un botón prominente con texto claro como "Confirmar asistencia" o "RSVP", y un texto auxiliar indicando la fecha límite para confirmar si corresponde. El enlace debe abrir el formulario en una nueva pestaña para no perder la invitación.

### 4.15 Footer (Opcional)

Un pie de página discreto con el nombre de la festejante, la fecha del evento, y posiblemente un crédito al desarrollador o plataforma utilizada. Este elemento es opcional pero aporta un cierre profesional a la experiencia.

---

## 5. Animaciones y Efectos Visuales

Las animaciones deben mejorar la experiencia sin sobrecargarla. Cada animación tiene un propósito: guiar la atención, crear expectativa, o aportar elegancia. Las animaciones excesivas o distractivas restan profesionalismo.

### 5.1 Animaciones Recomendadas

**Fade-in suave al scroll**: Cada sección aparece gradualmente a medida que el usuario hace scroll. La animación debe ser sutil (duración de 0.5 a 0.8 segundos) con una curva de easing suave (ease-out). Esta técnica crea una experiencia de lectura fluida sin interrumpir el flujo.

**Parallax en la imagen hero**: Un efecto sutil donde la imagen de fondo se mueve más lento que el contenido sobre ella. Este efecto añade profundidad visual pero debe implementarse con moderación para no causar mareos o problemas de rendimiento en móvil.

**Contador animated**: Los números de la cuenta regresiva pueden tener una animación de "flip" o un sutil movimiento de escala cuando cambian. Esta animación debe ser muy rápida (200-300ms) para no distraer.

**Transiciones de carrusel**: Las fotos de la galería deben transicionar con un efecto de slide o fade. El swipe debe sentirse responsive y reflejar inmediatamente el movimiento del dedo.

**Hover states en botones**: Los botones deben tener un estado de hover/submit que incluya un cambio de color sutil, una sombra suave, o un ligero movimiento. Estos estados deben existir pero ser sutiles.

**Lluvia de estrellas o brillos (opcional)**: Para un toque mágico, una animación de partículas sutil (estrellas cayendo o brillos aparecen y desaparecen) puede добавляirse al fondo. Esta animación debe ser muy discreta, con partículas pequeñas y movimiento lento.

### 5.2 Animaciones a Evitar

Evitar animaciones que parpadeen, brillen excesivamente, o ocupen toda la pantalla. Las animaciones que se reproducen automáticamente (excepto la cuenta regresiva) pueden ser molestas. Transiciones demasiado largas (más de 1 segundo) hacen que la página se sienta lenta.

### 5.3 Implementación Técnica

Se recomienda usar CSS transitions y animations para la mayoría de los efectos, reservando JavaScript para interacciones más complejas como el carrusel o la cuenta regresiva. Usar prefers-reduced-motion para respetar las preferencias de accesibilidad del usuario.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 6. Música y Multimedia

La música es un elemento distintivo de las invitaciones digitales de XV, pero debe manejarse con consideración hacia la experiencia del usuario.

### 6.1 Reproducción de Audio

La música nunca debe reproducirse automáticamente. El usuario debe elegir activamente reproducirla. Los navegadores móviles bloquean la reproducción automática de audio, y even si funcionara, sería una experiencia negativa para el usuario.

Se recomienda ofrecer dos opciones en la portada: "Abrir con música" y "Abrir sin música". Si el usuario elige música, un botón de control (play/pause, mute/unmute) debe estar siempre visible durante el resto de la navegación.

### 6.2 Formato y Optimización

El archivo de audio debe ser un MP3 optimizado (menor a 2MB si es posible) para asegurar tiempos de carga rápidos. Una duración de 30-60 segundos es suficiente; el audio puede looping automáticamente. El archivo debe estar alojado en un CDN o servicio confiable para evitar problemas de carga.

### 6.3 Calidad de Audio

Seleccionar una canción que refleje el tono de la celebración. Para XV tradicionales, vals o música clásica suave. Para fiestas modernas, música pop elegante o música tendencia. Evitar géneros que puedan no ser del gusto de todos los invitados.

---

## 7. Requisitos Técnicos

### 7.1 Tecnologías Recomendadas

**HTML5 semántico**: Estructura con etiquetas semánticas (header, main, section, footer, article) para mejorar la accesibilidad y el SEO.

**CSS3 moderno**: Usar CSS custom properties para colores y tipografías, Flexbox y Grid para layouts, media queries para responsividad. No se recomienda el uso de frameworks como Bootstrap para un proyecto de este tamaño.

**JavaScript vanilla**: Sin frameworks (React, Vue, Angular). JavaScript puro para la cuenta regresiva, el carrusel, y los controles de música. Esto mantiene el proyecto ligero y fácil de mantener.

### 7.2 Rendimiento

El tiempo de carga es crítico para invitaciones digitales. Las imágenes deben estar optimizadas (WebP con fallback a JPEG), tener dimensiones apropiadas para móvil (máximo 800px de ancho para la imagen hero), y usar lazy loading para imágenes below the fold.

El peso total de la página (sin contar imágenes externas) debe ser menor a 100KB. El tiempo de carga debe ser menor a 3 segundos en conexiones 3G.

### 7.3 Compatibilidad

La invitación debe funcionar correctamente en los navegadores más utilizados: Chrome (Android y iOS), Safari (iOS), Firefox, y Edge. Se debe probar especialmente en iPhone (Safari móvil) donde ciertos comportamientos pueden diferir.

El diseño debe ser responsivo con breakpoints para móvil (hasta 480px), tablet (481px a 1024px), y desktop (más de 1024px).

### 7.4 SEO y Metadata

Incluir meta tags apropiados para cuando la invitación se comparta en WhatsApp, redes sociales, o se indexe en buscadores:

```html
<meta name="description" content="Te invito a mis 15 años - [Nombre de la festejante]">
<meta property="og:title" content="Mis 15 Años - [Nombre]">
<meta property="og:description" content="¡Te invito a celebrar mi gran noche!">
<meta property="og:image" content="URL-de-imagen-compartir">
<meta property="og:url" content="URL-de-la-invitacion">
<meta name="twitter:card" content="summary_large_image">
```

### 7.5 Optimización para iOS (Safari)

Safari en iOS tiene comportamientos específicos que deben considerarse:

- **Bloqueo de audio**: La reproducción automática está bloqueada. Solo se puede reproducir audio después de una interacción del usuario (click/tap). La implementación debe contemplar este comportamiento.

- **Gestos de navegación**: Safari usa swipe para ir atrás/adelante en el historial. Para evitar conflictos con el carrusel de fotos, usar `touch-action: pan-y` en el contenedor del carrusel.

- **Viewport fixed**: En Safari móvil, elementos con `position: fixed` pueden comportarse de manera unexpected durante el scroll. Evitar elementos fixed que interfieran con la navegación o usar `position: sticky` cuando sea posible.

- **Safe Area**: Considerar las safe areas de iPhone con notch (`env(safe-area-inset-*)`) para asegurar que el contenido no quede detrás de la barra de estado.

- **Testing obligatorio**: Probar en un iPhone real con Safari antes de entregar. El simulador de Xcode no reproduce todos los comportamientos correctamente.

### 7.6 WhatsApp Share Preview

Cuando la invitación se comparte por WhatsApp, la preview debe ser atractiva y completa:

- **Imagen de sharing**: Crear una imagen dedicada de 1200x630px con el nombre de la cumpleañera, la fecha, y un elemento visual decorativo que represente la paleta de colores.

- **Meta tags completos**: Además de los tags básicos de Open Graph, incluir `og:image:width="1200"` y `og:image:height="630"` para ayudar a WhatsApp a mostrar la preview correctamente.

- **Preview en diferentes estados**: Verificar cómo se ve la preview cuando la invitación está desplegada (producción) y no en local. Usar la herramienta de debugging de WhatsApp si es necesario.

- **Fallback**: Si la imagen no carga, el texto de `og:description` debe ser suficiente para comunicar la invitación.

---

## 8. Accesibilidad

La invitación debe ser accesible para todos los usuarios, incluyendo aquellos que usan lectores de pantalla o tienen restricciones visuales.

### 8.1 Requisitos de Accesibilidad

**Contraste de colores**: La relación de contraste entre texto y fondo debe ser al menos 4.5:1 para texto normal y 3:1 para texto grande. Verificar especialmente los colores sobre fondos de imagen.

**Texto alternativo**: Todas las imágenes deben tener atributos alt descriptivos. La imagen principal debe decir algo como "Foto de [nombre] con vestido de fiesta".

**Jerarquía de encabezados**: Usar niveles de encabezado (h1, h2, h3) de manera lógica y secuencial. No saltar niveles.

**Tamaños de toque**: Todos los botones y elementos interactivos deben tener al menos 44x44 píxeles de área tocable.

**Navegación por teclado**: Asegurar que todos los elementos sean accesibles y operables mediante teclado.

**ARIA labels**: Añadir atributos ARIA donde sea necesario para mejorar la experiencia con lectores de pantalla.

### 8.2 Modo de Alto Contraste

El diseño debe funcionar razonablemente bien cuando el usuario tiene habilitado el modo de alto contraste del sistema operativo. Evitar依赖 de color solo para transmitir información.

---

## 9. Datos Variables (Template)

Dado que la invitación debe ser genérica para diferentes eventos, todos los datos editables deben estar claramente identificados en el código con comentarios que indiquen qué cambiar. Se recomienda una sección de configuración al inicio del HTML o en un archivo JavaScript separado.

### 9.1 Variables Editables

```javascript
const config = {
  // Datos principales
  nombreFestejante: "Nombre de la cumpleañera",
  fechaEvento: "2026-06-15T20:00:00", // Formato ISO
  horaEvento: "20:00",
  direccion: "Av. Ejemplo 123, Ciudad",
  googleMapsUrl: "https://maps.google.com/...",

  // Secciones de contenido
  mensajeInvitacion: "Quiero que seas parte de una noche inolvidable",
  dressCode: "Formal", // Elegante, Semi-formal, Traje de cocktail, etc.
  precioAdulto: 15000, // en pesos, sin símbolo
  precioNino: 5000,
  precioMenorEdad: 0, // edad hasta la cual no se paga

  // Mesa de regalos
  mesaRegalosTienda: "Falabella", // nombre de la tienda
  mesaRegalosUrl: "https://falabella.com/...", // link a la lista
  // Datos bancarios (opcional, si no hay tienda)
  datosBancarios: {
    banco: "Banco Nación",
    CBU: "1234567890123456789012",
    alias: "misfotos.xv",
    titular: "Nombre del titular"
  },

  // Itinerario (array de objetos)
  itinerario: [
    { hora: "21:00", actividad: "Recepción", ubicacion: "Salón principal" },
    { hora: "21:30", actividad: "Cena", ubicacion: "Salón principal" },
    { hora: "23:00", actividad: "Pastel", ubicacion: "Salón principal" },
    { hora: "23:30", actividad: "Baile", ubicacion: "Salón principal" }
  ],

  // Redes sociales
  hashtagInstagram: "#XVNombre",
  playlistUrl: "https://forms.google.com/...", // o link a Spotify

  // Confirmación
  linkFormulario: "https://forms.google.com/...",
  fechaLimiteConfirmacion: "2026-06-01", // opcional

  // Multimedia
  imagenHero: "ruta/a/imagen.jpg",
  imagenShare: "ruta/a/share.jpg", // imagen para WhatsApp (1200x630)
  galeria: ["ruta/foto1.jpg", "ruta/foto2.jpg", "ruta/foto3.jpg", ...],
  cancion: "ruta/musica.mp3",

  // Apariencia
  paletaColores: "classic-gold" // classic-gold, modern-minimal, romantic-blush, navy-night
};
```

---

## 10. Consideraciones Adicionales

### 10.1 Optimización para WhatsApp

Cuando la invitación se comparte por WhatsApp, debe verse bien en la preview del enlace. Configurar correctamente los meta tags de Open Graph (og:) y considerar crear una imagen específica para sharing (1200x630px) que incluya el nombre y la fecha.

### 10.2 Prueba en Dispositivos Reales

Antes de entregar, probar la invitación en al menos un iPhone y un Android real. Verificar especialmente: la reproducción de música, el comportamiento del scroll, la visualización de imágenes, y el funcionamiento del botón de Google Maps.

### 10.3 Entrega y Despliegue

La invitación puede desplegarse gratis en Vercel, Netlify, o GitHub Pages. Proporcionar instrucciones claras de cómo el usuario final puede actualizar los datos sin necesidad de conocimientos técnicos.

---

## Resumen de Entregables

Este agent.md establece las bases para el desarrollo de una invitación digital de XV años profesional y visualmente atractiva. Los próximos pasos incluyen la creación de mockups de diseño (opcional), la codificación de la plantilla con todos los componentes especificadas, y la configuración del sistema de variables para permitir personalización fácil de los datos.