/**
 * Main JavaScript - Lógica principal de la invitación digital XV
 * Depende de: config.js y utils.js
 */

// ============================================
// ESTADO GLOBAL
// ============================================
const state = {
    audioPlaying: false,
    audioInitialized: false,
    currentSlide: 0,
    totalSlides: 0,
    countdownInterval: null
};

// ============================================
// INICIALIZACIÓN PRINCIPAL
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Verificar que config existe
    if (typeof config === 'undefined') {
        console.error('❌ Config no está definido. Asegúrate de cargar config.js primero.');
        return;
    }

    console.log('🎉 Inicializando invitación XV...');
    console.log('📋 Datos del evento:', config.evento.fechaFormateada);
    
    // Inicializar todas las funcionalidades
    initTheme();
    populateContent();
    initCountdown();
    initAudio();
    initCopyActions();
    initScrollButtons();
    
    console.log('✅ Invitación inicializada correctamente');
});

// ============================================
// 1. TEMA (Color palette)
// ============================================
function initTheme() {
    const theme = config.apariencia?.paleta || 'romantic-blush';
    document.body.className = `theme-${theme}`;
    console.log('🎨 Tema aplicado:', theme);
}

// ============================================
// 2. CONTENIDO DINÁMICO
// ============================================
function populateContent() {
    // Hero
    updateTextContent('.hero__title', config.festejante?.nombre);
    updateTextContent('.hero__date', config.evento?.fechaFormateada);
    
    // Mensaje
    updateTextContent('.message__text', config.mensaje?.principal);
    updateTextContent('.message__subtext', config.mensaje?.secundario);
    
    // Cuando
    updateTextContent('.when__date', config.evento?.fechaFormateada);
    updateTextContent('.when__time', config.evento?.horaFormateada);
    
    // Donde
    updateTextContent('.where__salon', config.direccion?.salon);
    updateTextContent('.where__address', config.direccion?.texto);
    
    // Mapa
    const mapsLink = document.querySelector('.where__btn');
    if (mapsLink && config.direccion?.googleMapsUrl) {
        mapsLink.href = config.direccion.googleMapsUrl;
    }
    
    // Dress code
    updateTextContent('.dresscode__text', config.dressCode?.principal);
    updateTextContent('.dresscode__desc', config.dressCode?.descripcion);
    
    // Itinerario
    populateItinerary();
    
    // Regalos
    updateTextContent('.gifts__store', config.mesaRegalos?.tienda);
    const giftsLink = document.querySelector('.gifts__btn');
    if (giftsLink && config.mesaRegalos?.url) {
        giftsLink.href = config.mesaRegalos.url;
    }
    
    // Hashtag
    updateTextContent('.hashtag__tag', config.redes?.hashtag);
    
    // Playlist
    const playlistBtn = document.querySelector('.playlist__btn');
    if (playlistBtn && config.redes?.playlistUrl) {
        playlistBtn.href = config.redes.playlistUrl;
    }
    
    // Precios
    populatePricing();
    
    // RSVP
    const rsvpText = config.confirmacion?.mostrarFechaLimite
        ? `Por favor, confirma tu asistencia antes del ${formatDateSpanish(config.confirmacion.fechaLimite)}`
        : 'Por favor, confirma tu asistencia';
    updateTextContent('.rsvp__text', rsvpText);
    
    const rsvpLink = document.querySelector('.rsvp__btn');
    if (rsvpLink && config.confirmacion?.linkFormulario) {
        rsvpLink.href = config.confirmacion.linkFormulario;
    }
    
    // Footer
    updateTextContent('.footer__text', `${config.festejante?.nombre} - ${config.evento?.fechaFormateada}`);
    
    // Audio
    const audioPlayer = document.getElementById('audio-player');
    if (audioPlayer && config.multimedia?.cancion) {
        audioPlayer.src = config.multimedia.cancion;
    }
}

function updateTextContent(selector, value) {
    const element = document.querySelector(selector);
    if (element && value) {
        element.textContent = value;
    }
}

// ============================================
// 3. ITINERARIO
// ============================================
function populateItinerary() {
    const timeline = document.querySelector('.itinerary__timeline');
    if (!timeline || !config.itinerario) return;
    
    const items = config.itinerario.map(item => `
        <div class="itinerary__item">
            <span class="itinerary__time">${item.hora}</span>
            <div class="itinerary__dot"></div>
            <div class="itinerary__details">
                <p class="itinerary__activity">${item.actividad}</p>
                ${item.ubicacion ? `<p class="itinerary__location">${item.ubicacion}</p>` : ''}
            </div>
        </div>
    `).join('');
    
    timeline.innerHTML = items;
}

// ============================================
// 4. PRECIOS
// ============================================
function populatePricing() {
    if (!config.precios?.incluir) {
        const infoSection = document.querySelector('.info');
        if (infoSection) infoSection.style.display = 'none';
        return;
    }
    
    const adultoCell = document.querySelector('[data-price="adulto"]');
    const ninoCell = document.querySelector('[data-price="nino"]');
    
    if (adultoCell && config.precios.adulto) {
        adultoCell.textContent = formatCurrency(config.precios.adulto);
    }
    if (ninoCell && config.precios.nino) {
        ninoCell.textContent = formatCurrency(config.precios.nino);
    }
}

// ============================================
// 5. COUNTDOWN
// ============================================
function initCountdown() {
    const eventDate = config.evento?.fecha;
    if (!eventDate) return;
    
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
    
    function updateCountdown() {
        const now = new Date().getTime();
        const eventTime = new Date(eventDate).getTime();
        const distance = eventTime - now;
        
        if (distance < 0) {
            clearInterval(state.countdownInterval);
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            const timerContainer = document.querySelector('.countdown__timer');
            if (timerContainer) {
                timerContainer.innerHTML = '<p class="countdown__message">🎉 ¡La fiesta comenzó!</p>';
            }
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        daysEl.textContent = padNumber(days);
        hoursEl.textContent = padNumber(hours);
        minutesEl.textContent = padNumber(minutes);
        secondsEl.textContent = padNumber(seconds);
    }
    
    updateCountdown();
    state.countdownInterval = setInterval(updateCountdown, 1000);
}

// ============================================
// 6. AUDIO
// ============================================
function initAudio() {
    const audio = document.getElementById('audio-player');
    if (!audio) return;
    
    audio.loop = true;
    audio.volume = 0.6;
    
    const btnMusica = document.getElementById('btnMusica') || document.querySelector('.header__music-toggle');
    const estadoMusica = document.querySelector('.music-status');
    const btnConMusica = document.getElementById('open-with-music');
    const btnSinMusica = document.getElementById('open-without-music');
    
    let isPlaying = false;
    let musicStarted = false;
    
    function playMusic() {
        audio.play()
            .then(() => {
                console.log('🎵 Música iniciada');
                musicStarted = true;
                isPlaying = true;
                updateMusicUI(true);
            })
            .catch(() => {
                showToast('🔊 Haz clic en el botón de música para activar el audio');
            });
    }
    
    function pauseMusic() {
        audio.pause();
        isPlaying = false;
        updateMusicUI(false);
    }
    
    function toggleMusic() {
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    }
    
    function updateMusicUI(playing) {
        if (btnMusica) {
            btnMusica.classList.toggle('activo', playing);
        }
        if (estadoMusica) {
            estadoMusica.textContent = playing ? '♪ Sonando' : '♪ Música';
            estadoMusica.style.color = playing ? '#d4af37' : '';
        }
        if (btnMusica) {
            btnMusica.style.display = 'flex';
        }
    }
    
    // Eventos
    if (btnMusica) {
        btnMusica.addEventListener('click', toggleMusic);
    }
    
    if (btnConMusica) {
        btnConMusica.addEventListener('click', function(e) {
            e.preventDefault();
            playMusic();
            smoothScrollTo('#countdown', 80);
        });
    }
    
    if (btnSinMusica) {
        btnSinMusica.addEventListener('click', function(e) {
            e.preventDefault();
            pauseMusic();
            smoothScrollTo('#countdown', 80);
        });
    }
    
    audio.addEventListener('play', () => { isPlaying = true; updateMusicUI(true); });
    audio.addEventListener('pause', () => { isPlaying = false; updateMusicUI(false); });
    
    // Auto-inicio por interacción
    document.addEventListener('click', function initOnClick() {
        if (!musicStarted) {
            audio.play().catch(() => {});
            musicStarted = true;
        }
        document.removeEventListener('click', initOnClick);
    }, { once: true });
    
    console.log('🎵 Sistema de audio inicializado');
}

// ============================================
// 7. COPIAR HASHTAG
// ============================================
function initCopyActions() {
    const hashtagElement = document.querySelector('.hashtag__tag');
    if (!hashtagElement) return;
    
    hashtagElement.style.cursor = 'pointer';
    hashtagElement.addEventListener('click', async function() {
        const text = this.textContent;
        const success = await copyToClipboard(text);
        if (success) {
            showToast('📋 ¡Hashtag copiado al portapapeles!');
            this.style.transform = 'scale(0.95)';
            setTimeout(() => { this.style.transform = 'scale(1)'; }, 200);
        }
    });
}

// ============================================
// 8. BOTONES DE SCROLL
// ============================================
function initScrollButtons() {
    document.querySelectorAll('[data-scroll]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.dataset.scroll;
            const offset = parseInt(this.dataset.offset) || 80;
            smoothScrollTo(target, offset);
        });
    });
}