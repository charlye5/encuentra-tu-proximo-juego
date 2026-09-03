const API_KEY = 'b7fb0c8c04464d2db1b82a2c07e068ff';

const epicBackgrounds = [
    'fondo1.jpg',
    'fondo2.jpg',
    'fondo3.jpg',
    'fondo4.jpg'
];

const retroPlatforms = ['15', '27', '80', '105', '83', '79', '49'];

const platforms = [
    { id: 'PC', name: 'PC', icon: '<i class="fa-brands fa-windows"></i>' },
    { id: 'PlayStation', name: 'PlayStation', icon: '<i class="fa-brands fa-playstation"></i>' },
    { id: 'Xbox', name: 'Xbox', icon: '<i class="fa-brands fa-xbox"></i>' },
    { id: 'Nintendo', name: 'Nintendo', icon: '<i class="fa-solid fa-gamepad"></i>' },
    { id: 'Móvil', name: 'Móvil', icon: '<i class="fa-solid fa-mobile-screen"></i>' }
];

const subPlatforms = {
    'PC': [
        { id: '4', name: 'Gama Alta', icon: '<i class="fa-solid fa-desktop"></i>', dates: '2018-01-01,2026-12-31' },
        { id: '4', name: 'Gama Media', icon: '<i class="fa-solid fa-laptop"></i>', dates: '2012-01-01,2019-12-31' },
        { id: '4', name: 'Gama Baja', icon: '<i class="fa-solid fa-laptop-code"></i>', dates: '2000-01-01,2013-12-31' }
    ],
    'PlayStation': [
        { id: '187', name: 'PlayStation 5', icon: '<i class="fa-brands fa-playstation"></i>' },
        { id: '18', name: 'PlayStation 4', icon: '<i class="fa-brands fa-playstation"></i>' },
        { id: '16', name: 'PlayStation 3', icon: '<i class="fa-brands fa-playstation"></i>' },
        { id: '15', name: 'PlayStation 2', icon: '<i class="fa-brands fa-playstation"></i>' },
        { id: '27', name: 'PlayStation 1', icon: '<i class="fa-brands fa-playstation"></i>' }
    ],
    'Xbox': [
        { id: '186', name: 'Xbox Series X/S', icon: '<i class="fa-brands fa-xbox"></i>' },
        { id: '1', name: 'Xbox One', icon: '<i class="fa-brands fa-xbox"></i>' },
        { id: '14', name: 'Xbox 360', icon: '<i class="fa-brands fa-xbox"></i>' },
        { id: '80', name: 'Xbox Original', icon: '<i class="fa-brands fa-xbox"></i>' }
    ],
    'Nintendo': [
        { id: '7', name: 'Nintendo Switch', icon: '<i class="fa-solid fa-gamepad"></i>' },
        { id: '10', name: 'Wii U', icon: '<i class="fa-solid fa-gamepad"></i>' },
        { id: '11', name: 'Wii', icon: '<i class="fa-solid fa-gamepad"></i>' },
        { id: '105', name: 'GameCube', icon: '<i class="fa-solid fa-gamepad"></i>' },
        { id: '83', name: 'Nintendo 64', icon: '<i class="fa-solid fa-gamepad"></i>' },
        { id: '79', name: 'SNES', icon: '<i class="fa-solid fa-gamepad"></i>' },
        { id: '49', name: 'NES', icon: '<i class="fa-solid fa-gamepad"></i>' },
        { id: '9', name: 'Nintendo 3DS', icon: '<i class="fa-solid fa-gamepad"></i>' },
        { id: '8', name: 'Nintendo DS', icon: '<i class="fa-solid fa-gamepad"></i>' }
    ],
    'Móvil': [
        { id: '21', name: 'Android', icon: '<i class="fa-brands fa-android"></i>' },
        { id: '3', name: 'iOS', icon: '<i class="fa-brands fa-apple"></i>' }
    ]
};

const priceRanges = [
    { id: 'free-to-play', name: 'Gratis (Free-to-Play)', icon: '<i class="fa-solid fa-gift"></i>', tag: 'free-to-play' },
    { id: 'indie', name: 'Económicos / Indie', icon: '<i class="fa-solid fa-tag"></i>', tag: 'indie' },
    { id: 'aaa', name: 'Grandes Producciones (AAA)', icon: '<i class="fa-solid fa-gem"></i>', tag: '' }
];

const genres = [
    { id: 'action', name: 'Acción', icon: '<i class="fa-solid fa-fire"></i>' },
    { id: 'sports', name: 'Deportes', icon: '<i class="fa-solid fa-futbol"></i>' },
    { id: 'strategy', name: 'Estrategia', icon: '<i class="fa-solid fa-chess-knight"></i>' },
    { id: 'shooter', name: 'Shooter', icon: '<i class="fa-solid fa-crosshairs"></i>' }
];

const subGenres = {
    'action': [
        { id: 'action', name: 'Acción Aventura', icon: '<i class="fa-solid fa-compass"></i>' },
        { id: 'indie', name: 'Plataformeros / Indie', icon: '<i class="fa-solid fa-ghost"></i>' },
        { id: 'massively-multiplayer', name: 'Mundo Abierto / MMO', icon: '<i class="fa-solid fa-globe"></i>' }
    ],
    'sports': [
        { id: 'racing', name: 'Carreras / Automovilismo', icon: '<i class="fa-solid fa-car"></i>', keyword: 'racing' },
        { id: 'sports', name: 'Fútbol / Deportes', icon: '<i class="fa-solid fa-futbol"></i>', keyword: 'sports' },
        { id: 'simulation', name: 'Simulación', icon: '<i class="fa-solid fa-plane"></i>', keyword: 'simulation' }
    ],
    'strategy': [
        { id: 'strategy', name: 'Estrategia en Tiempo Real (RTS)', icon: '<i class="fa-solid fa-chess-rook"></i>' },
        { id: 'massively-multiplayer', name: 'Gestión / Simulación', icon: '<i class="fa-solid fa-city"></i>' },
        { id: 'indie', name: 'Tácticos por Turnos', icon: '<i class="fa-solid fa-chess-board"></i>' }
    ],
    'shooter': [
        { id: 'shooter', name: 'Shooter en Primera Persona (FPS)', icon: '<i class="fa-solid fa-crosshairs"></i>' },
        { id: 'action', name: 'Acción / Disparos Tácticos', icon: '<i class="fa-solid fa-gun"></i>' },
        { id: 'indie', name: 'Arcade / Retro Shooters', icon: '<i class="fa-solid fa-jet-fighter"></i>' }
    ]
};

const gameModes = [
    { id: 'singleplayer', name: 'Un Jugador', icon: '<i class="fa-solid fa-user"></i>' },
    { id: 'multiplayer', name: 'Multijugador', icon: '<i class="fa-solid fa-users"></i>' },
    { id: 'co-op', name: 'Cooperativo', icon: '<i class="fa-solid fa-handshake"></i>' }
];

const scorePreferences = [
    { id: 'high', name: 'Me importa el puntaje (+80)', icon: '<i class="fa-solid fa-trophy"></i>', scores: '80,100' },
    { id: 'any', name: 'Quiero conocer de todo', icon: '<i class="fa-solid fa-gem"></i>', scores: '' }
];

let step = 0;
const totalSteps = 7; 
let userAnswers = {
    isRandom: false,
    brandName: '',
    platformId: '',
    platformName: '',
    platformDates: '',
    priceId: '',
    priceName: '',
    genreId: '',
    genreName: '',
    subGenreId: '',
    subGenreName: '',
    subGenreKeyword: '',
    modeId: '',
    modeName: '',
    scoreRange: '',
    scoreName: ''
};

let lastSearchResults = [];
let currentGameData = null;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

let epicBgElement = document.createElement('div');
epicBgElement.className = 'epic-bg';
document.body.prepend(epicBgElement);

// CONFIGURACIÓN DEL FAVICON CON EL LOGO DE CONTROL AMARILLO
function initFavicon() {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    // Icono SVG exacto de un gamepad con pastilla amarilla y cruceta/botones oscuros
    link.href = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="320" x="0" y="96" rx="160" fill="%23f1c40f"/><path fill="%232c3e50" d="M128 192h48v48h48v48h-48v48h-48v-48h-48v-48h48v-48zm224 32a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm48 64a24 24 0 1 0 0 48 24 24 0 1 0 0-48z"/></svg>`;
    document.getElementsByTagName('head')[0].appendChild(link);
}

initFavicon();

window.openLightbox = function(imageSrc) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.backdropFilter = 'blur(5px)';
    overlay.style.cursor = 'zoom-out';
    overlay.style.transition = 'opacity 0.2s';
    overlay.style.opacity = '0';
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    img.style.borderRadius = '12px';
    img.style.boxShadow = '0 20px 50px rgba(0,0,0,0.8)';
    img.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    img.style.transform = 'scale(0.8)';
    
    overlay.appendChild(img);
    document.body.appendChild(overlay);
    
    requestAnimationFrame(() => {
        overlay.style.opacity = '1';
        img.style.transform = 'scale(1)';
    });
    
    overlay.onclick = () => {
        img.style.transform = 'scale(0.8)';
        overlay.style.opacity = '0';
        setTimeout(() => document.body.removeChild(overlay), 200);
    };
};

function updateEpicBackground(customImage = null) {
    epicBgElement.style.display = 'block';
    if (customImage) {
        epicBgElement.style.backgroundImage = `url('${customImage}')`;
        epicBgElement.style.filter = 'blur(12px) brightness(0.35)';
        epicBgElement.style.transform = 'scale(1.1)';
    } else {
        epicBgElement.style.filter = 'none';
        epicBgElement.style.transform = 'scale(1)';
        const randomBg = epicBackgrounds[Math.floor(Math.random() * epicBackgrounds.length)];
        epicBgElement.style.backgroundImage = `url('${randomBg}')`;
    }
}

function mostrarSpinnerRetro(mensaje = 'CARGANDO CARTUCHO...') {
    optionsContainer.innerHTML = `
        <div style="text-align: center; padding: 40px; font-family: 'Courier New', Courier, monospace;">
            <div style="font-size: 3.5rem; color: #f1c40f; margin-bottom: 15px; display: inline-block; animation: retroPulse 0.6s infinite alternate;">
                <i class="fa-solid fa-gamepad"></i>
            </div>
            <div style="font-size: 1.2rem; color: #fff; letter-spacing: 2px; text-shadow: 0 0 10px rgba(241, 196, 15, 0.9);">
                ${mensaje}
            </div>
            <div style="margin-top: 15px; font-size: 0.9rem; color: #f39c12; letter-spacing: 3px;">
                [ • • • • • ]
            </div>
        </div>
        <style>
            @keyframes retroPulse {
                0% { opacity: 0.3; transform: scale(0.9); }
                100% { opacity: 1; transform: scale(1.1); }
            }
        </style>
    `;
}

function renderStep() {
    updateEpicBackground();
    optionsContainer.innerHTML = '';
    optionsContainer.className = 'fade-in';

    if (step === 0) {
        questionText.textContent = '¿Cómo querés encontrar tu próximo juego?';
        
        const btnWizard = document.createElement('button');
        btnWizard.className = 'option-btn';
        btnWizard.innerHTML = '<i class="fa-solid fa-sliders"></i> <span>Elegir plataforma y filtros</span>';
        btnWizard.onclick = () => {
            userAnswers.isRandom = false;
            step = 1;
            renderStep();
        };
        optionsContainer.appendChild(btnWizard);

        const btnRandom = document.createElement('button');
        btnRandom.className = 'option-btn';
        btnRandom.style.borderColor = '#e67e22';
        btnRandom.innerHTML = '<i class="fa-solid fa-dice"></i> <span>Recomendado (Al azar)</span>';
        btnRandom.onclick = () => {
            userAnswers.isRandom = true;
            fetchTotallyRandomGame();
        };
        optionsContainer.appendChild(btnRandom);
        return;
    }

    let progressHtml = `
        <div class="progress-wrapper">
            <span>Paso ${step} de ${totalSteps}</span>
            <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: ${(step / totalSteps) * 100}%;"></div>
            </div>
        </div>
    `;
    optionsContainer.insertAdjacentHTML('beforeend', progressHtml);

    if (step === 1) {
        questionText.textContent = '¿Dónde tenés pensado jugar?';
        platforms.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.setAttribute('data-brand', opt.id);
            btn.innerHTML = `${opt.icon} <span>${opt.name}</span>`;
            btn.onclick = () => {
                userAnswers.brandName = opt.id;
                step++;
                renderStep();
            };
            optionsContainer.appendChild(btn);
        });
        crearBotonInicio();
    } 
    else if (step === 2) {
        questionText.textContent = `¿Qué modelo de ${userAnswers.brandName} tenés?`;
        const options = subPlatforms[userAnswers.brandName];
        
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.setAttribute('data-brand', userAnswers.brandName);
            btn.innerHTML = `${opt.icon} <span>${opt.name}</span>`;
            btn.onclick = () => {
                userAnswers.platformId = opt.id;
                userAnswers.platformName = opt.name;
                userAnswers.platformDates = opt.dates || '';
                
                if (retroPlatforms.includes(userAnswers.platformId)) {
                    userAnswers.priceId = '';
                    userAnswers.priceName = 'Clásico Retro';
                    step = 4;
                } else {
                    step = 3;
                }
                renderStep();
            };
            optionsContainer.appendChild(btn);
        });
        crearBotonVolver();
    }
    else if (step === 3) {
        questionText.textContent = '¿Qué presupuesto o tipo buscás?';
        const filteredPrices = userAnswers.brandName === 'Móvil' ? priceRanges.filter(p => p.id !== 'aaa') : priceRanges;
        
        filteredPrices.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `${opt.icon} <span>${opt.name}</span>`;
            btn.onclick = () => {
                userAnswers.priceId = opt.tag;
                userAnswers.priceName = opt.name;
                step++;
                renderStep();
            };
            optionsContainer.appendChild(btn);
        });
        crearBotonVolver();
    }
    else if (step === 4) {
        questionText.textContent = '¿Qué género principal buscás?';
        genres.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `${opt.icon} <span>${opt.name}</span>`;
            btn.onclick = () => {
                userAnswers.genreId = opt.id;
                userAnswers.genreName = opt.name;
                step++; 
                renderStep();
            };
            optionsContainer.appendChild(btn);
        });
        crearBotonVolver();
    }
    else if (step === 5) {
        questionText.textContent = `Elegí subcategoría para ${userAnswers.genreName}:`;
        const specificSubGenres = subGenres[userAnswers.genreId] || subGenres['action'];

        specificSubGenres.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `${opt.icon} <span>${opt.name}</span>`;
            btn.onclick = () => {
                userAnswers.subGenreId = opt.id;
                userAnswers.subGenreName = opt.name;
                userAnswers.subGenreKeyword = opt.keyword || opt.id;
                step++;
                renderStep();
            };
            optionsContainer.appendChild(btn);
        });
        crearBotonVolver();
    }
    else if (step === 6) {
        questionText.textContent = '¿Cómo preferís jugar?';
        gameModes.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `${opt.icon} <span>${opt.name}</span>`;
            btn.onclick = () => {
                userAnswers.modeId = opt.id;
                userAnswers.modeName = opt.name;
                
                if (retroPlatforms.includes(userAnswers.platformId) || userAnswers.priceId === 'free-to-play') {
                    userAnswers.scoreRange = '';
                    userAnswers.scoreName = 'Cualquiera';
                    fetchGameFromAPI();
                } else {
                    step++;
                    renderStep(); 
                }
            };
            optionsContainer.appendChild(btn);
        });
        crearBotonVolver();
    }
    else if (step === 7) {
        questionText.textContent = '¿Te importa la calificación de la crítica?';
        scorePreferences.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `${opt.icon} <span>${opt.name}</span>`;
            btn.onclick = () => {
                userAnswers.scoreRange = opt.scores;
                userAnswers.scoreName = opt.name;
                fetchGameFromAPI(); 
            };
            optionsContainer.appendChild(btn);
        });
        crearBotonVolver();
    }
}

function crearBotonVolver() {
    const backBtn = document.createElement('button');
    backBtn.className = 'option-btn';
    backBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i> <span>Volver</span>';
    backBtn.style.backgroundColor = '#222';
    backBtn.style.marginTop = '20px';
    backBtn.style.width = '100%';
    backBtn.style.flexDirection = 'row';
    backBtn.onclick = () => {
        if (step === 4 && retroPlatforms.includes(userAnswers.platformId)) { step = 2; } else { step--; }
        renderStep(); 
    };
    optionsContainer.appendChild(backBtn);
}

function crearBotonInicio() {
    const homeBtn = document.createElement('button');
    homeBtn.className = 'option-btn';
    homeBtn.innerHTML = '<i class="fa-solid fa-house"></i> <span>Volver al menú principal</span>';
    homeBtn.style.backgroundColor = '#222';
    homeBtn.style.marginTop = '20px';
    homeBtn.style.width = '100%';
    homeBtn.style.flexDirection = 'row';
    homeBtn.onclick = () => { step = 0; renderStep(); };
    optionsContainer.appendChild(homeBtn);
}

window.loadGameFromCache = function(gameId) {
    const game = lastSearchResults.find(g => g.id === gameId);
    if (game) {
        prepareLoreTeaser(game);
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }
};

async function fetchTotallyRandomGame() {
    questionText.textContent = 'SYSTEM BOOT...';
    mostrarSpinnerRetro('LEYENDO DATOS DE RAWG...');
    const randomPage = Math.floor(Math.random() * 50) + 1;
    const url = `https://api.rawg.io/api/games?key=${API_KEY}&page=${randomPage}&page_size=40&ordering=-metacritic`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        setTimeout(() => {
            if (data.results && data.results.length > 0) {
                lastSearchResults = data.results;
                prepareLoreTeaser(data.results[Math.floor(Math.random() * data.results.length)]);
            } else { showError(); }
        }, 1000);
    } catch (error) { showError(); }
}

async function fetchGameFromAPI() {
    questionText.textContent = 'PROCESANDO FILTROS...';
    mostrarSpinnerRetro('BUSCANDO JUEGAZO...');
    const randomPage = Math.floor(Math.random() * 5) + 1;
    let dateQuery = userAnswers.platformDates ? `&dates=${userAnswers.platformDates}` : '';
    let tagsQuery = userAnswers.priceId ? `&tags=${userAnswers.priceId}` : '';
    let modeQuery = userAnswers.modeId ? `&tags=${userAnswers.modeId}` : '';
    let scoreQuery = userAnswers.scoreRange ? `&metacritic=${userAnswers.scoreRange}` : '';
    let finalGenreParam = `${userAnswers.genreId},${userAnswers.subGenreId}`;
    
    const url = `https://api.rawg.io/api/games?key=${API_KEY}&platforms=${userAnswers.platformId}&genres=${finalGenreParam}${tagsQuery}${modeQuery}${scoreQuery}${dateQuery}&page=${randomPage}&page_size=40`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        setTimeout(() => {
            if (data.results && data.results.length > 0) {
                let filteredResults = data.results;
                const keyword = userAnswers.subGenreKeyword ? userAnswers.subGenreKeyword.toLowerCase() : '';
                if (keyword === 'racing') {
                    filteredResults = data.results.filter(g => {
                        const nameLower = g.name.toLowerCase();
                        const genresCombined = g.genres ? g.genres.map(ge => ge.slug.toLowerCase()).join(' ') : '';
                        return genresCombined.includes('racing') || nameLower.includes('f1') || nameLower.includes('forza') || nameLower.includes('automobilista') || nameLower.includes('dirt') || nameLower.includes('grid') || nameLower.includes('need for speed') || nameLower.includes('assetto') || nameLower.includes('rally');
                    });
                }
                if (userAnswers.priceId === 'free-to-play') {
                    filteredResults = filteredResults.filter(g => {
                        const tagsCombined = g.tags ? g.tags.map(t => t.slug.toLowerCase()).join(' ') : '';
                        return tagsCombined.includes('free-to-play');
                    });
                }
                let pool = filteredResults;
                if (pool.length === 0 && userAnswers.priceId !== 'free-to-play') { pool = data.results; }

                if (pool.length > 0) {
                    lastSearchResults = pool;
                    prepareLoreTeaser(pool[Math.floor(Math.random() * pool.length)]);
                } else { fetchFallbackGame(); }
            } else { fetchFallbackGame(); }
        }, 1000);
    } catch (error) { showError(); }
}

async function fetchFallbackGame() {
    let dateQuery = userAnswers.platformDates ? `&dates=${userAnswers.platformDates}` : '';
    let scoreQuery = userAnswers.scoreRange ? `&metacritic=${userAnswers.scoreRange}` : '';
    let tagsQuery = userAnswers.priceId ? `&tags=${userAnswers.priceId}` : ''; 
    let finalGenreParam = `${userAnswers.genreId},${userAnswers.subGenreId}`;
    let url = `https://api.rawg.io/api/games?key=${API_KEY}&platforms=${userAnswers.platformId}&genres=${finalGenreParam}${tagsQuery}${scoreQuery}${dateQuery}&page_size=40`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        if ((!data.results || data.results.length === 0) && userAnswers.priceId === 'free-to-play') {
            const emergencyUrl = `https://api.rawg.io/api/games?key=${API_KEY}&platforms=${userAnswers.platformId}&tags=free-to-play&page_size=40`;
            response = await fetch(emergencyUrl);
            data = await response.json();
        }
        setTimeout(() => {
            if (data.results && data.results.length > 0) {
                let filteredResults = data.results;
                if (userAnswers.priceId === 'free-to-play') {
                    filteredResults = data.results.filter(g => {
                        const tagsCombined = g.tags ? g.tags.map(t => t.slug.toLowerCase()).join(' ') : '';
                        return tagsCombined.includes('free-to-play');
                    });
                }
                const pool = filteredResults.length > 0 ? filteredResults : data.results;
                const finalPool = userAnswers.priceId === 'free-to-play' ? pool.filter(g => g.tags && g.tags.some(t => t.slug === 'free-to-play')) : pool;
                if (finalPool.length > 0) {
                    lastSearchResults = finalPool;
                    prepareLoreTeaser(finalPool[Math.floor(Math.random() * finalPool.length)]);
                } else { showError(); }
            } else { showError(); }
        }, 1000);
    } catch (error) { showError(); }
}

async function prepareLoreTeaser(game) {
    currentGameData = game; 
    updateEpicBackground(); 
    questionText.textContent = 'DESCIFRANDO ARCHIVOS...';
    mostrarSpinnerRetro('RECUPERANDO EL LORE...');

    let loreText = 'Información clasificada. El destino de este universo es un misterio por descubrir...';

    try {
        const resDetail = await fetch(`https://api.rawg.io/api/games/${game.id}?key=${API_KEY}`);
        const dataDetail = await resDetail.json();
        
        if (dataDetail.description_raw) {
            let snippet = dataDetail.description_raw.substring(0, 380);
            snippet = snippet.substr(0, Math.min(snippet.length, snippet.lastIndexOf(" "))) + '...';
            
            try {
                const transRes = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(snippet)}&langpair=en|es`);
                const transData = await transRes.json();
                if (transData.responseData && transData.responseData.translatedText && !transData.responseData.translatedText.includes('MYMEMORY WARNING')) {
                    loreText = transData.responseData.translatedText;
                } else {
                    loreText = snippet;
                }
            } catch(e) { loreText = snippet; }
        }
    } catch(e) { console.error("Error al obtener lore"); }

    let screensHtml = '';
    if (game.short_screenshots && game.short_screenshots.length > 1) {
        let screens = game.short_screenshots.slice(1, 5);
        screensHtml = `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-top: 15px;">
                ${screens.map(s => `<img src="${s.image}" style="width: 100%; height: 90px; object-fit: cover; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 4px 10px rgba(0,0,0,0.5); cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" onclick="openLightbox('${s.image}')">`).join('')}
            </div>
        `;
    }

    questionText.textContent = '¡HEMOS ENCONTRADO ALGO!';
    optionsContainer.className = 'fade-in';
    optionsContainer.innerHTML = `
        <div style="max-width: 480px; margin: 0 auto; text-align: center;">
            <div style="background: rgba(15,15,15,0.95); padding: 25px 20px; border-radius: 16px; border: 1px solid #e67e22; box-shadow: 0 10px 40px rgba(230, 126, 34, 0.25);">
                <h2 style="color: #e67e22; margin-top: 0; margin-bottom: 15px; font-size: 1.3rem; letter-spacing: 2px; text-transform: uppercase;">
                    <i class="fa-solid fa-book-journal-whills"></i> El Lore
                </h2>
                <p style="color: #ddd; font-size: 1rem; line-height: 1.6; text-align: justify; font-style: italic; margin-bottom: 0;">
                    "${loreText}"
                </p>
            </div>
            
            ${screensHtml ? `
            <div style="margin-top: 25px; text-align: left;">
                <p style="color: #bbb; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;"><i class="fa-solid fa-image"></i> Archivos Visuales</p>
                ${screensHtml}
            </div>
            ` : ''}
            
            <div style="display: flex; justify-content: center; gap: 12px; margin-top: 30px; margin-bottom: 20px; flex-wrap: wrap;">
                <button onclick="showMainGameResult()" style="background: #3498db; color: #fff; border: none; font-size: 1rem; padding: 14px 25px; border-radius: 12px; cursor: pointer; font-weight: bold; box-shadow: 0 5px 20px rgba(52, 152, 219, 0.5); transition: transform 0.2s, background 0.2s;" onmouseover="this.style.transform='scale(1.05)'; this.style.background='#2980b9';" onmouseout="this.style.transform='scale(1)'; this.style.background='#3498db';">
                    <i class="fa-solid fa-eye"></i> VER EL JUEGO COMPLETO
                </button>
                <button style="background: #1a1a1a; color: #fff; border: 1px solid #333; padding: 14px 25px; border-radius: 12px; cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 1rem; font-weight: bold; transition: all 0.2s;" onmouseover="this.style.borderColor='#3498db'; this.style.transform='scale(1.05)';" onmouseout="this.style.borderColor='#333'; this.style.transform='scale(1)';" onclick="userAnswers.brandName ? fetchGameFromAPI() : fetchTotallyRandomGame()">
                    <i class="fa-solid fa-rotate-right"></i> BUSCAR OTRO
                </button>
            </div>
        </div>
    `;
}

function showMainGameResult() {
    const game = currentGameData;
    updateEpicBackground(game.background_image); 
    
    questionText.textContent = '¡ESTE ES TU PRÓXIMO JUEGO!';
    optionsContainer.className = 'fade-in';
    
    let metaColor = '#4CAF50'; 
    if (game.metacritic < 75) metaColor = '#FFC107'; 
    if (game.metacritic < 50) metaColor = '#F44336'; 
    if (!game.metacritic) metaColor = '#888';

    let votes = game.reviews_count > 999 ? (game.reviews_count / 1000).toFixed(1) + 'k' : (game.reviews_count || '--');

    let brandColor = '#3498db';
    let brandIcon = '<i class="fa-solid fa-gamepad"></i>';
    if (userAnswers.brandName === 'PlayStation') { brandColor = '#006FCE'; brandIcon = '<i class="fa-brands fa-playstation"></i>'; }
    else if (userAnswers.brandName === 'Xbox') { brandColor = '#107C10'; brandIcon = '<i class="fa-brands fa-xbox"></i>'; }
    else if (userAnswers.brandName === 'Nintendo') { brandColor = '#E60012'; brandIcon = '<i class="fa-solid fa-gamepad"></i>'; }
    else if (userAnswers.brandName === 'PC') { brandColor = '#0078D7'; brandIcon = '<i class="fa-brands fa-windows"></i>'; }
    else if (userAnswers.brandName === 'Móvil') { brandColor = '#4CAF50'; brandIcon = '<i class="fa-brands fa-android"></i>'; }

    let platformsHtml = '';
    if (game.platforms && game.platforms.length > 0) {
        platformsHtml = '<div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 20px;">';
        game.platforms.forEach(p => {
            const pName = p.platform.name.toLowerCase();
            let iconClass = 'fa-solid fa-gamepad';
            let pColor = '#333';
            if (pName.includes('windows') || pName.includes('pc')) { iconClass = 'fa-brands fa-windows'; pColor = '#0078D7'; }
            else if (pName.includes('playstation')) { iconClass = 'fa-brands fa-playstation'; pColor = '#006FCE'; }
            else if (pName.includes('xbox')) { iconClass = 'fa-brands fa-xbox'; pColor = '#107C10'; }
            else if (pName.includes('switch') || pName.includes('nintendo')) { iconClass = 'fa-solid fa-gamepad'; pColor = '#E60012'; }
            else if (pName.includes('android') || pName.includes('ios')) { iconClass = 'fa-solid fa-mobile-screen'; pColor = '#4CAF50'; }
            platformsHtml += `<span style="background: rgba(20,20,20,0.8); border: 1px solid ${pColor}; color: #ddd; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; display: flex; align-items: center; gap: 6px;"><i class="${iconClass}" style="color: ${pColor};"></i> ${p.platform.name}</span>`;
        });
        platformsHtml += '</div>';
    }

    let storeUrl = `https://store.steampowered.com/search/?term=${encodeURIComponent(game.name)}`;
    let storeName = 'Buscar en Steam';
    let storeIcon = '<i class="fa-brands fa-steam"></i>';
    if (userAnswers.brandName === 'PlayStation') { storeUrl = `https://store.playstation.com/search/${encodeURIComponent(game.name)}`; storeName = 'PlayStation Store'; storeIcon = '<i class="fa-brands fa-playstation"></i>'; } 
    else if (userAnswers.brandName === 'Xbox') { storeUrl = `https://www.xbox.com/en-US/search?q=${encodeURIComponent(game.name)}`; storeName = 'Xbox Store'; storeIcon = '<i class="fa-brands fa-xbox"></i>'; } 
    else if (userAnswers.brandName === 'Nintendo') { storeUrl = `https://www.nintendo.com/search/#q=${encodeURIComponent(game.name)}`; storeName = 'Nintendo eShop'; storeIcon = '<i class="fa-solid fa-gamepad"></i>'; }

    let techCityBtn = '';
    if (userAnswers.brandName === 'PC') {
        let techCityQuery = game.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        let techCityUrl = `https://technical.city/es/can-i-run-it/${techCityQuery}`;
        techCityBtn = `<a href="${techCityUrl}" target="_blank" style="display: block; background: rgba(22,22,22,0.85); color: #3498db; text-decoration: none; padding: 12px; border-radius: 8px; font-size: 0.9rem; font-weight: 500; margin-bottom: 15px; border: 1px solid #333; text-align: center; transition: background 0.2s;"><i class="fa-solid fa-microchip"></i> ¿Lo corre mi PC? (Technical City)</a>`;
    }

    let introText = '';
    let row1Icon = '', row1Label = '', row2Icon = '', row2Label = '', row3Icon = '', row3Label = '', row4Icon = '', row4Label = '';
    let p2 = 90, p3 = 95, p4 = 100;
    
    let playtimeValue = game.playtime ? game.playtime : 0;
    let playtimeText = playtimeValue > 0 ? `~${playtimeValue} hrs` : 'Variable';
    let p1Width = playtimeValue > 0 ? Math.min(100, (playtimeValue / 40) * 100) : 50; 

    let metaScore = game.metacritic ? game.metacritic : 80;
    let userScore = game.rating ? (game.rating * 20) : 80;
    let combinedScore = Math.round((metaScore + userScore) / 2);

    if (userAnswers.isRandom) {
        let mainGenre = game.genres && game.genres[0] ? game.genres[0].name : 'Gran Título';
        introText = `Selección sorpresa del sistema. Encontramos este aclamado juego de <strong>${mainGenre}</strong> que está arrasando en la base de datos. ¡Ideal para descubrir algo nuevo!`;
        row1Icon = '⏱️'; row1Label = `Duración Estimada`; row2Icon = '🧠'; row2Label = `Complejidad / Desafío`; row3Icon = '⚙️'; row3Label = `Optimización al Hardware`; row4Icon = '🏆'; row4Label = `Aprobación Global`;
        p2 = game.metacritic ? Math.min(99, Math.max(75, game.metacritic)) : 80; p3 = 90; p4 = combinedScore;
    } else {
        introText = `Buscás una experiencia de <strong>${userAnswers.subGenreName || userAnswers.genreName}</strong> ideal para <strong>${userAnswers.platformName}</strong>. Por su perfil técnico y mecánicas, <strong>${game.name}</strong> encaja perfectamente con tus exigencias.`;
        row1Icon = '⏱️'; row1Label = `Duración Estimada`; row2Icon = '🧠'; row2Label = `Complejidad / Desafío`; row3Icon = '⚙️'; row3Label = `Optimización al Hardware`; row4Icon = '🏆'; row4Label = `Aprobación Global`;
        let isComplex = game.genres && game.genres.some(g => g.slug === 'strategy' || g.slug === 'role-playing-games' || g.slug === 'simulation');
        p2 = isComplex ? (Math.floor(Math.random() * 10) + 90) : (Math.floor(Math.random() * 15) + 75); 
        p3 = (userAnswers.platformName.includes('Gama Alta') || userAnswers.brandName === 'PlayStation' || userAnswers.brandName === 'Xbox') ? 95 : 88;
        p4 = combinedScore;
    }

    let ytQuery = encodeURIComponent(`${game.name} gameplay trailer español`);
    let ytPlayerHtml = `
        <div style="margin-top: 20px; margin-bottom: 20px;">
            <p style="color: #f1c40f; font-weight: 600; margin-top: 0; margin-bottom: 10px; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;"><i class="fa-solid fa-film"></i> Trailer / Gameplay</p>
            <a href="https://www.youtube.com/results?search_query=${ytQuery}" target="_blank" style="display: block; position: relative; border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); text-decoration: none; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.5);">
                <img src="${game.background_image}" style="width: 100%; height: 160px; object-fit: cover; filter: brightness(0.4); transition: filter 0.3s;" onmouseover="this.style.filter='brightness(0.6)'" onmouseout="this.style.filter='brightness(0.4)'">
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #ff0000; font-size: 2.8rem; text-shadow: 0 0 15px rgba(0,0,0,0.8);">
                    <i class="fa-brands fa-youtube"></i>
                </div>
                <div style="position: absolute; bottom: 10px; left: 0; width: 100%; text-align: center; color: #fff; font-size: 0.8rem; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.8); text-transform: uppercase; letter-spacing: 1px;">
                    Ver en YouTube
                </div>
            </a>
        </div>
    `;

    let otherGames = lastSearchResults.filter(g => g.id !== game.id);
    let alt1 = otherGames[0] || { id: 'fallback', name: 'Forza Horizon 5' };
    let alt2 = otherGames[1] || { id: 'fallback', name: 'Cyberpunk 2077' };
    let alt3 = otherGames[2] || { id: 'fallback', name: 'The Witcher 3: Wild Hunt' };

    function getAltHtml(altObj, icon, subtitle) {
        if (altObj.id === 'fallback') {
            return `<div style="display: flex; align-items: center; gap: 8px; color: #ddd; padding: 8px; border-radius: 8px;"><span>${icon}</span> <div><strong>${altObj.name}</strong><br><span style="color: #888; font-size: 0.75rem;">${subtitle}</span></div></div>`;
        } else {
            return `<div onclick="loadGameFromCache(${altObj.id})" style="display: flex; align-items: center; gap: 8px; color: #ddd; cursor: pointer; padding: 8px; border-radius: 8px; transition: background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.08)'" onmouseout="this.style.background='transparent'"><span>${icon}</span> <div><strong>${altObj.name}</strong><br><span style="color: #888; font-size: 0.75rem;">${subtitle}</span></div></div>`;
        }
    }

    let alt1Html = getAltHtml(alt1, '🥇', 'Destacado · Alta afinidad');
    let alt2Html = getAltHtml(alt2, '🥈', 'Recomendado');
    let alt3Html = getAltHtml(alt3, '🥉', 'Éxito en la plataforma');

    let screensHtml = '';
    if (game.short_screenshots && game.short_screenshots.length > 1) {
        let screens = game.short_screenshots.slice(1, 5); 
        screensHtml = `
            <div style="background: rgba(15,15,15,0.9); padding: 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 20px;">
                <p style="color: #f1c40f; font-weight: 600; margin-top: 0; margin-bottom: 15px; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;"><i class="fa-solid fa-image"></i> Galería de Capturas</p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px;">
                    ${screens.map(s => `<img src="${s.image}" style="width: 100%; height: 90px; object-fit: cover; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 4px 10px rgba(0,0,0,0.5); cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" onclick="openLightbox('${s.image}')">`).join('')}
                </div>
            </div>
        `;
    }

    optionsContainer.innerHTML = `
        <div style="background: #181818; border-radius: 16px; border: 1px solid #333; max-width: 480px; width: 100%; margin: 0 auto; box-shadow: 0 20px 40px rgba(0,0,0,0.8); overflow: hidden; position: relative; text-align: left;">
            
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('${game.background_image}'); background-size: cover; background-position: center; filter: blur(16px) brightness(0.25); transform: scale(1.1); z-index: 0;"></div>

            <div style="position: relative; z-index: 1;">
                
                <div style="background: ${brandColor}; padding: 8px 15px; display: flex; align-items: center; justify-content: space-between; color: #fff; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.5px;">
                    <span style="display: flex; align-items: center; gap: 6px;">${brandIcon} ${userAnswers.isRandom ? 'HALLAZGO SORPRESA' : (userAnswers.brandName ? userAnswers.brandName.toUpperCase() : 'PC')}</span>
                    <span style="opacity: 0.8; font-size: 0.75rem;"><i class="fa-solid fa-shield-check"></i> Recomendado</span>
                </div>

                <div style="padding: 25px;">
                    <img src="${game.background_image}" alt="Portada de ${game.name}" style="width: 100%; border-radius: 10px; margin-bottom: 15px; height: 210px; object-fit: cover; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 20px rgba(0,0,0,0.5); cursor: pointer;" onclick="openLightbox('${game.background_image}')">
                    
                    <h2 style="color: #ffffff; margin-top: 0; margin-bottom: 5px; font-size: 1.7rem; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.8);">${game.name}</h2>
                    <p style="font-size: 0.85rem; color: #aaa; margin-bottom: 15px;">Lanzamiento: ${game.released || 'Desconocido'}</p>

                    <div style="display: flex; justify-content: space-between; background: rgba(15,15,15,0.85); padding: 18px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(5px);">
                        <div style="text-align: center; flex: 1;">
                            <div style="font-size: 2rem; font-weight: bold; color: ${metaColor}; line-height: 1;">${game.metacritic || '--'}</div>
                            <div style="font-size: 0.65rem; color: #aaa; text-transform: uppercase; margin-top: 6px; letter-spacing: 1px;">Metacritic</div>
                        </div>
                        <div style="width: 1px; background: rgba(255,255,255,0.1); margin: 0 10px;"></div>
                        <div style="text-align: center; flex: 1;">
                            <div style="font-size: 2rem; font-weight: bold; color: #2196F3; line-height: 1;">${game.rating ? game.rating.toFixed(1) : '--'}</div>
                            <div style="font-size: 0.65rem; color: #aaa; text-transform: uppercase; margin-top: 6px; letter-spacing: 1px;">Jugadores</div>
                            <div style="font-size: 0.55rem; color: #777; margin-top: 2px;">(RAWG)</div>
                        </div>
                        <div style="width: 1px; background: rgba(255,255,255,0.1); margin: 0 10px;"></div>
                        <div style="text-align: center; flex: 1;">
                            <div style="font-size: 2rem; font-weight: bold; color: #E0E0E0; line-height: 1;">${votes}</div>
                            <div style="font-size: 0.65rem; color: #aaa; text-transform: uppercase; margin-top: 6px; letter-spacing: 1px;">Votos</div>
                            <div style="font-size: 0.55rem; color: #777; margin-top: 2px;">(RAWG)</div>
                        </div>
                    </div>

                    ${platformsHtml}

                    <!-- PERFIL TÉCNICO -->
                    <div style="background: rgba(15,15,15,0.9); padding: 18px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.08);">
                        <p style="color: #fff; font-weight: 600; margin-top: 0; margin-bottom: 6px; font-size: 0.95rem;">Creemos que te va a encantar.</p>
                        <p style="color: #bbb; font-size: 0.85rem; margin-bottom: 16px; line-height: 1.4;">${introText}</p>
                        
                        <div style="display: flex; align-items: center; gap: 6px; color: #f1c40f; font-weight: 600; font-size: 0.85rem; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
                            <span>📊</span> PERFIL TÉCNICO
                        </div>

                        <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: #888; text-transform: uppercase; margin-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 4px;">
                            <span>Parámetro</span>
                            <span>Valoración</span>
                        </div>

                        <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.82rem; color: #ddd; margin-bottom: 10px;">
                            <span>${row1Icon} ${row1Label}</span>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="background: #222; width: 80px; height: 6px; border-radius: 3px; overflow: hidden;">
                                    <div style="background: #4CAF50; width: ${p1Width}%; height: 100%;"></div>
                                </div>
                                <span style="font-weight: bold; font-size: 0.8rem; min-width: 55px; text-align: right; color: #4CAF50;">${playtimeText}</span>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.82rem; color: #ddd; margin-bottom: 10px;">
                            <span>${row2Icon} ${row2Label}</span>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="background: #222; width: 80px; height: 6px; border-radius: 3px; overflow: hidden;">
                                    <div style="background: #E040FB; width: ${p2}%; height: 100%;"></div>
                                </div>
                                <span style="font-weight: bold; font-size: 0.8rem; min-width: 55px; text-align: right; color: #E040FB;">${p2}%</span>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.82rem; color: #ddd; margin-bottom: 10px;">
                            <span>${row3Icon} ${row3Label}</span>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="background: #222; width: 80px; height: 6px; border-radius: 3px; overflow: hidden;">
                                    <div style="background: #03A9F4; width: ${p3}%; height: 100%;"></div>
                                </div>
                                <span style="font-weight: bold; font-size: 0.8rem; min-width: 55px; text-align: right; color: #03A9F4;">${p3}%</span>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.82rem; color: #ddd;">
                            <span>${row4Icon} ${row4Label}</span>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="background: #222; width: 80px; height: 6px; border-radius: 3px; overflow: hidden;">
                                    <div style="background: #FF9800; width: ${p4}%; height: 100%;"></div>
                                </div>
                                <span style="font-weight: bold; font-size: 0.8rem; min-width: 55px; text-align: right; color: #FF9800;">${p4}%</span>
                            </div>
                        </div>
                    </div>

                    ${ytPlayerHtml}

                    ${screensHtml}

                    ${techCityBtn}

                    <!-- BOTONES DE ACCIÓN -->
                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <a href="${storeUrl}" target="_blank" style="flex: 1; display: block; background: rgba(34,34,34,0.9); color: #fff; text-decoration: none; padding: 12px; border-radius: 8px; font-size: 0.9rem; font-weight: 500; border: 1px solid rgba(255,255,255,0.15); text-align: center;">
                            ${storeIcon} ${storeName}
                        </a>
                        <button id="fav-btn" onclick="toggleFavorite('${encodeURIComponent(game.name)}', '${game.background_image}')" style="background: rgba(34,34,34,0.9); color: #ff4757; border: 1px solid rgba(255,255,255,0.15); padding: 0 15px; border-radius: 8px; cursor: pointer; font-size: 1.2rem;" title="Guardar en favoritos">
                            <i class="fa-solid fa-heart"></i>
                        </button>
                    </div>
                    <button onclick="shareGame('${game.name}')" style="width: 100%; background: rgba(37, 211, 102, 0.15); color: #25D366; border: 1px solid rgba(37, 211, 102, 0.3); padding: 10px; border-radius: 8px; font-size: 0.85rem; font-weight: 500; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 20px;">
                        <i class="fa-solid fa-share-nodes"></i> Compartir recomendación
                    </button>

                    <!-- "TAMBIÉN PODRÍAN GUSTARTE" -->
                    <div style="background: rgba(15,15,15,0.9); padding: 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 25px;">
                        <p style="color: #f1c40f; font-weight: 600; margin-top: 0; margin-bottom: 10px; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;">🔥 También podrían gustarte</p>
                        <div style="display: flex; flex-direction: column; font-size: 0.82rem;">
                            ${alt1Html}
                            ${alt2Html}
                            ${alt3Html}
                        </div>
                    </div>

                    <!-- BOTONERA INFERIOR -->
                    <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
                        <button style="background: #1a1a1a; color: #fff; border: 1px solid #333; padding: 12px 25px; border-radius: 10px; cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 1rem; transition: all 0.2s;" onmouseover="this.style.borderColor='#3498db'" onmouseout="this.style.borderColor='#333'" onclick="userAnswers.brandName ? fetchGameFromAPI() : fetchTotallyRandomGame()">
                            <i class="fa-solid fa-rotate-right"></i> <span>Buscar otro juego</span>
                        </button>
                        <button style="background: #222; color: #fff; border: 1px solid #333; padding: 12px 25px; border-radius: 10px; cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 1rem; transition: all 0.2s;" onmouseover="this.style.borderColor='#555'" onmouseout="this.style.borderColor='#333'" onclick="step=0; renderStep();">
                            <i class="fa-solid fa-house"></i> <span>Volver al inicio</span>
                        </button>
                    </div>

                </div>

            </div>
        </div>
    `;

    verificarEstadoFavorito(game.name);
}

function shareGame(gameName) {
    const text = `¡Mirá el juego que me recomendó el buscador: ${gameName}! 🎮🔥`;
    if (navigator.share) {
        navigator.share({ title: 'Recomendación de Juego', text: text }).catch(() => {});
    } else {
        navigator.clipboard.writeText(text);
        alert('¡Texto copiado al portapapeles para compartir con tus amigos!');
    }
}

function toggleFavorite(gameName, gameImg) {
    let favorites = JSON.parse(localStorage.getItem('rawg_favorites')) || [];
    const nameDecoded = decodeURIComponent(gameName);
    const index = favorites.findIndex(fav => fav.name === nameDecoded);
    if (index > -1) { favorites.splice(index, 1); } else { favorites.push({ name: nameDecoded, image: gameImg }); }
    localStorage.setItem('rawg_favorites', JSON.stringify(favorites));
    verificarEstadoFavorito(nameDecoded);
}

function verificarEstadoFavorito(gameName) {
    let favorites = JSON.parse(localStorage.getItem('rawg_favorites')) || [];
    const favBtn = document.getElementById('fav-btn');
    if (!favBtn) return;
    const exists = favorites.some(fav => fav.name === gameName);
    if (exists) { favBtn.style.background = '#ff4757'; favBtn.style.color = '#fff'; } else { favBtn.style.background = 'rgba(34,34,34,0.9)'; favBtn.style.color = '#ff4757'; }
}

function showError() {
    questionText.textContent = 'ERROR DE SISTEMA';
    optionsContainer.innerHTML = `
        <div style="background: rgba(20,20,20,0.85); padding: 30px; border-radius: 16px; border: 1px solid #ff4757; text-align: center; max-width: 400px; margin: 0 auto; font-family: monospace;">
            <div style="font-size: 3.5rem; color: #ff4757; margin-bottom: 15px;"><i class="fa-solid fa-triangle-exclamation"></i></div>
            <p style="color: #fff; font-size: 1rem; margin-bottom: 20px;">No pudimos conectar con el cartucho de datos o no hubo resultados para esta combinación exacta.</p>
            <button class="option-btn" style="background: #3498db; border: none; padding: 12px; border-radius: 8px; color: #fff; cursor: pointer; font-weight: bold; margin-bottom: 10px; width: 100%;" onclick="userAnswers.brandName ? fetchGameFromAPI() : fetchTotallyRandomGame()"><i class="fa-solid fa-rotate-right"></i> Reintentar búsqueda</button>
            <button class="option-btn" style="background: #222; border: 1px solid #444; padding: 12px; border-radius: 8px; color: #ccc; cursor: pointer; width: 100%;" onclick="step=0; renderStep();"><i class="fa-solid fa-house"></i> Volver al inicio</button>
        </div>
    `;
}

renderStep();