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

function initFavicon() {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="320" x="0" y="96" rx="160" fill="%23f1c40f"/><path fill="%232c3e50" d="M128 192h48v48h48v48h-48v48h-48v-48h-48v-48h48v-48zm224 32a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm48 64a24 24 0 1 0 0 48 24 24 0 1 0 0-48z"/></svg>`;
    document.getElementsByTagName('head')[0].appendChild(link);
}
initFavicon();

window.openLightbox = function(imageSrc) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0'; overlay.style.left = '0';
    overlay.style.width = '100vw'; overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    overlay.style.zIndex = '9999'; overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center'; overlay.style.alignItems = 'center';
    overlay.style.backdropFilter = 'blur(5px)'; overlay.style.cursor = 'zoom-out';
    overlay.style.transition = 'opacity 0.2s'; overlay.style.opacity = '0';
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.maxWidth = '90%'; img.style.maxHeight = '90%';
    img.style.borderRadius = '12px'; img.style.boxShadow = '0 20px 50px rgba(0,0,0,0.8)';
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

window.openFavoritesModal = function() {
    let favorites = JSON.parse(localStorage.getItem('rawg_favorites')) || [];
    
    const overlay = document.createElement('div');
    overlay.id = 'fav-modal-overlay';
    overlay.style.position = 'fixed'; overlay.style.top = '0'; overlay.style.left = '0';
    overlay.style.width = '100vw'; overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.85)'; overlay.style.zIndex = '9999';
    overlay.style.display = 'flex'; overlay.style.justifyContent = 'center'; overlay.style.alignItems = 'center';
    overlay.style.backdropFilter = 'blur(6px)'; overlay.style.padding = '20px';

    let contentHtml = `
        <div style="background: #181818; border: 1px solid #333; border-radius: 16px; width: 100%; max-width: 500px; max-height: 80vh; overflow-y: auto; padding: 25px; box-shadow: 0 20px 40px rgba(0,0,0,0.9); text-align: left; position: relative;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px;">
                <h3 style="color: #ff4757; margin: 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-heart"></i> Mis Juegos Favoritos</h3>
                <button onclick="document.body.removeChild(document.getElementById('fav-modal-overlay'))" style="background: transparent; border: none; color: #aaa; font-size: 1.3rem; cursor: pointer;"><i class="fa-solid fa-xmark"></i></button>
            </div>
    `;

    if(favorites.length === 0) {
        contentHtml += `<p style="color: #888; text-align: center; padding: 30px 0; font-style: italic; margin:0;">Aún no guardaste ningún juego en favoritos.</p>`;
    } else {
        contentHtml += `<div style="display: flex; flex-direction: column; gap: 12px;">`;
        favorites.forEach(f => {
            contentHtml += `
                <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.04); padding: 10px 14px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.06);">
                    <div style="display: flex; align-items: center; gap: 12px; overflow: hidden;">
                        <img src="${f.image}" style="width: 55px; height: 55px; object-fit: cover; border-radius: 8px;">
                        <span style="color: #fff; font-weight: 500; font-size: 0.95rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 240px;">${f.name}</span>
                    </div>
                    <button onclick="fetchGameDetailsForDirectView('${f.name.replace(/'/g, "\\'")}')" style="background: #3498db; color: #fff; border: none; padding: 8px 14px; border-radius: 8px; cursor: pointer; font-size: 0.8rem; font-weight: bold;"><i class="fa-solid fa-eye"></i> Ver</button>
                </div>
            `;
        });
        contentHtml += `</div>`;
    }

    contentHtml += `</div>`;
    overlay.innerHTML = contentHtml;
    
    overlay.onclick = (e) => {
        if(e.target === overlay) document.body.removeChild(overlay);
    };

    document.body.appendChild(overlay);
};

window.openRankingsMenu = function() {
    updateEpicBackground();
    questionText.textContent = 'RANKINGS & MÉTRICAS DE ÉLITE';
    optionsContainer.className = 'fade-in';

    optionsContainer.innerHTML = `
        <div style="max-width: 480px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px;">
            <p style="color: #aaa; font-size: 0.9rem; margin: 0 0 10px 0; text-align: center;">Elegí un Top 10 verificado:</p>
            
            <button class="option-btn" style="border-color: #4CAF50; justify-content: flex-start; padding: 15px 20px;" onclick="loadVerifiedRanking('duration', '⏱️ TOP 10: MAYOR DURACIÓN (CON HORAS)')">
                <i class="fa-solid fa-clock" style="color: #4CAF50; font-size: 1.2rem; margin-right: 12px;"></i> <span>⏱️ Duración (Horas reales)</span>
            </button>
            <button class="option-btn" style="border-color: #E040FB; justify-content: flex-start; padding: 15px 20px;" onclick="loadVerifiedRanking('challenge', '🧠 TOP 10: MÁXIMO DESAFÍO / COMPLEJIDAD')">
                <i class="fa-solid fa-brain" style="color: #E040FB; font-size: 1.2rem; margin-right: 12px;"></i> <span>🧠 Complejidad / Desafío</span>
            </button>
            <button class="option-btn" style="border-color: #FF9800; justify-content: flex-start; padding: 15px 20px;" onclick="loadVerifiedRanking('approval', '🏆 TOP 10: APROBACIÓN GLOBAL (METACRITIC)')">
                <i class="fa-solid fa-trophy" style="color: #FF9800; font-size: 1.2rem; margin-right: 12px;"></i> <span>🏆 Aprobación Global</span>
            </button>
            <button class="option-btn" style="border-color: #3498db; justify-content: flex-start; padding: 15px 20px;" onclick="loadVerifiedRanking('lore', '📖 TOP 10: INMERSIÓN Y LORE PROFUNDO')">
                <i class="fa-solid fa-book-open" style="color: #3498db; font-size: 1.2rem; margin-right: 12px;"></i> <span>📖 Inmersión / Lore (Historia)</span>
            </button>
            <button class="option-btn" style="border-color: #03A9F4; justify-content: flex-start; padding: 15px 20px;" onclick="loadVerifiedRanking('heavy', '⚙️ TOP 10: PESADOS (ALTA EXIGENCIA GRÁFICA)')">
                <i class="fa-solid fa-desktop" style="color: #03A9F4; font-size: 1.2rem; margin-right: 12px;"></i> <span>⚙️ Exigencia: Pesados</span>
            </button>
            <button class="option-btn" style="border-color: #00bcd4; justify-content: flex-start; padding: 15px 20px;" onclick="loadVerifiedRanking('lightweight', '🍃 TOP 10: LIVIANOS (CORREN EN CUALQUIER PC)')">
                <i class="fa-solid fa-feather" style="color: #00bcd4; font-size: 1.2rem; margin-right: 12px;"></i> <span>🍃 Exigencia: Livianos</span>
            </button>
            <button class="option-btn" style="border-color: #2ecc71; justify-content: flex-start; padding: 15px 20px;" onclick="loadVerifiedRanking('budget', '💸 TOP 10: FACTOR BOLSILLO (GRATIS & INDIES)')">
                <i class="fa-solid fa-tags" style="color: #2ecc71; font-size: 1.2rem; margin-right: 12px;"></i> <span>💸 Factor Bolsillo (Accesibilidad)</span>
            </button>

            <button class="option-btn" style="background: #222; border: 1px solid #444; padding: 12px; border-radius: 8px; color: #ccc; cursor: pointer; width: 100%; margin-top: 10px;" onclick="step=0; renderStep();">
                <i class="fa-solid fa-house"></i> <span>Volver al menú principal</span>
            </button>
        </div>
    `;
}

const verifiedRankingsData = {
    duration: [
        { name: "Baldur's Gate 3", subtitle: "115 - 180 hrs promedio", search: "Baldur's Gate 3" },
        { name: "The Witcher 3: Wild Hunt", subtitle: "100 - 170 hrs (con DLCs)", search: "The Witcher 3: Wild Hunt" },
        { name: "Persona 5 Royal", subtitle: "100 - 120 hrs de historia", search: "Persona 5 Royal" },
        { name: "Elden Ring", subtitle: "90 - 135 hrs de exploración", search: "Elden Ring" },
        { name: "Skyrim", subtitle: "100 - 200+ hrs completionist", search: "The Elder Scrolls V: Skyrim" },
        { name: "Cyberpunk 2077", subtitle: "60 - 100 hrs con expansiones", search: "Cyberpunk 2077" },
        { name: "Red Dead Redemption 2", subtitle: "80 - 130 hrs de mundo abierto", search: "Red Dead Redemption 2" },
        { name: "Fallout: New Vegas", subtitle: "60 - 120 hrs con facciones", search: "Fallout: New Vegas" },
        { name: "Dragon Age: Inquisition", subtitle: "80 - 130 hrs de campaña", search: "Dragon Age: Inquisition" },
        { name: "Divinity: Original Sin 2", subtitle: "90 - 140 hrs tácticas", search: "Divinity: Original Sin 2" }
    ],
    challenge: [
        { name: "Elden Ring", subtitle: "Dificultad Souls-like extrema", search: "Elden Ring" },
        { name: "Sekiro: Shadows Die Twice", subtitle: "Parries y reflejos estrictos", search: "Sekiro: Shadows Die Twice" },
        { name: "Dark Souls III", subtitle: "Jefes de máxima exigencia", search: "Dark Souls III" },
        { name: "Hollow Knight", subtitle: "Plataformeo y combates punitivos", search: "Hollow Knight" },
        { name: "Bloodborne", subtitle: "Combate rápido y implacable", search: "Bloodborne" },
        { name: "Cuphead", subtitle: "Boss rush de alta precisión", search: "Cuphead" },
        { name: "Returnal", subtitle: "Roguelike espacial desafiante", search: "Returnal" },
        { name: "Celeste", subtitle: "Precisión milimétrica en saltos", search: "Celeste" },
        { name: "Nioh 2", subtitle: "Sistema de combate complejo", search: "Nioh 2" },
        { name: "Lies of P", subtitle: "Soulslike oscuro y exigente", search: "Lies of P" }
    ],
    approval: [
        { name: "The Legend of Zelda: Ocarina of Time", subtitle: "Metacritic: 99", search: "The Legend of Zelda: Ocarina of Time" },
        { name: "Tony Hawk's Pro Skater 2", subtitle: "Metacritic: 98", search: "Tony Hawk's Pro Skater 2" },
        { name: "Grand Theft Auto IV", subtitle: "Metacritic: 98", search: "Grand Theft Auto IV" },
        { name: "Soulcalibur", subtitle: "Metacritic: 98", search: "Soulcalibur" },
        { name: "Super Mario Galaxy", subtitle: "Metacritic: 97", search: "Super Mario Galaxy" },
        { name: "The Witcher 3: Wild Hunt", subtitle: "Metacritic: 93-94", search: "The Witcher 3: Wild Hunt" },
        { name: "Red Dead Redemption 2", subtitle: "Metacritic: 97", search: "Red Dead Redemption 2" },
        { name: "Grand Theft Auto V", subtitle: "Metacritic: 97", search: "Grand Theft Auto V" },
        { name: "Baldur's Gate 3", subtitle: "Metacritic: 96", search: "Baldur's Gate 3" },
        { name: "Elden Ring", subtitle: "Metacritic: 96", search: "Elden Ring" }
    ],
    lore: [
        { name: "Disco Elysium", subtitle: "Guion literario magistral", search: "Disco Elysium" },
        { name: "Planescape: Torment", subtitle: "La obra cumbre del RPG narrativo", search: "Planescape: Torment" },
        { name: "Soma", subtitle: "Filosofía existencial y terror", search: "Soma" },
        { name: "NieR: Automata", subtitle: "Narrativa existencial y filosófica", search: "NieR: Automata" },
        { name: "BioShock", subtitle: "Crítica social y giro histórico", search: "BioShock" },
        { name: "Mass Effect Legendary Edition", subtitle: "Ópera espacial intergaláctica", search: "Massively Effect Legendary Edition" },
        { name: "Alan Wake 2", subtitle: "Misterio psicológico profundo", search: "Alan Wake 2" },
        { name: "Detroit: Become Human", subtitle: "Decisiones y dilemas morales", search: "Detroit: Become Human" },
        { name: "Outer Wilds", subtitle: "Exploración y misterio cósmico", search: "Outer Wilds" },
        { name: "Signalis", subtitle: "Lore críptico y sci-fi cósmico", search: "Signalis" }
    ],
    heavy: [
        { name: "Cyberpunk 2077", subtitle: "Ray Tracing / Path Tracing tope", search: "Cyberpunk 2077" },
        { name: "Alan Wake 2", subtitle: "Exigencia extrema de GPU / Mesh Shaders", search: "Alan Wake 2" },
        { name: "Black Myth: Wukong", subtitle: "Unreal Engine 5 de vanguardia", search: "Black Myth: Wukong" },
        { name: "Dragon's Dogma 2", subtitle: "Alta carga de CPU en ciudades", search: "Dragon's Dogma 2" },
        { name: "Microsoft Flight Simulator", subtitle: "Consumo masivo de RAM y red", search: "Microsoft Flight Simulator" },
        { name: "Avatar: Frontiers of Pandora", subtitle: "Gráficos ultra pesados con Snowdrop", search: "Avatar: Frontiers of Pandora" },
        { name: "Star Wars Jedi: Survivor", subtitle: "Optimización pesada en PC", search: "Star Wars Jedi: Survivor" },
        { name: "The Last of Us Part I", subtitle: "Port muy exigente de VRAM", search: "The Last of Us Part I" },
        { name: "Hogwarts Legacy", subtitle: "Gran consumo de memoria y tirones", search: "Hogwarts Legacy" },
        { name: "Forspoken", subtitle: "Carga masiva de texturas", search: "Forspoken" }
    ],
    lightweight: [
        { name: "Minecraft", subtitle: "Corre en cualquier laptop de oficina", search: "Minecraft" },
        { name: "Terraria", subtitle: "Mínimos recursos gráficos requeridos", search: "Terraria" },
        { name: "Stardew Valley", subtitle: "Liviano y optimizado al 100%", search: "Stardew Valley" },
        { name: "Hades", subtitle: "Acción fluida en equipos modestos", search: "Hades" },
        { name: "Undertale", subtitle: "Motor minimalista sin exigencia", search: "Undertale" },
        { name: "Portal 2", subtitle: "Motor Source clásico ultra fluido", search: "Portal 2" },
        { name: "Counter-Strike 1.6", subtitle: "El rey indiscutido de las tostadoras", search: "Counter-Strike" },
        { name: "The Binding of Isaac: Rebirth", subtitle: "Rendimiento perfecto en cualquier PC", search: "The Binding of Isaac: Rebirth" },
        { name: "Left 4 Dead 2", subtitle: "Clásico cooperativo de bajo requisito", search: "Left 4 Dead 2" },
        { name: "Hollow Knight", subtitle: "2D optimizado con gran fluidez", search: "Hollow Knight" }
    ],
    budget: [
        { name: "Dota 2", subtitle: "100% Gratuito en Steam", search: "Dota 2" },
        { name: "Team Fortress 2", subtitle: "Clásico Free-to-Play legendario", search: "Team Fortress 2" },
        { name: "Path of Exile", subtitle: "ARPG gratuito sin Pay-to-Win abusivo", search: "Path of Exile" },
        { name: "Warframe", subtitle: "Acción cooperativa F2P masiva", search: "Warframe" },
        { name: "League of Legends", subtitle: "El competitivo gratuito más masivo", search: "League of Legends" },
        { name: "Brawlhalla", subtitle: "Luchador de plataforma gratuito", search: "Brawlhalla" },
        { name: "Apex Legends", subtitle: "Battle Royale F2P ultra pulido", search: "Apex Legends" },
        { name: "Genshin Impact", subtitle: "Mundo abierto RPG gratuito", search: "Genshin Impact" },
        { name: "The Sims 4", subtitle: "Base juego 100% Gratuita", search: "The Sims 4" },
        { name: "Counter-Strike 2", subtitle: "Shooter táctico gratuito", search: "Counter-Strike 2" }
    ]
};

window.loadVerifiedRanking = async function(categoryKey, titleText) {
    const cacheKey = `rawg_ranking_${categoryKey}`;
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
        lastSearchResults = JSON.parse(cachedData);
        showVerifiedRankingsList(lastSearchResults, titleText);
        return; 
    }

    questionText.textContent = 'CREANDO CACHÉ DE ÉLITE...';
    mostrarSpinnerRetro(titleText);

    let listToFetch = verifiedRankingsData[categoryKey];

    try {
        const fetchPromises = listToFetch.map(item => 
            fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${encodeURIComponent(item.search)}&page_size=1`)
                .then(res => res.json())
                .then(data => {
                    if (data.results && data.results.length > 0) {
                        let game = data.results[0];
                        game.customSubtitle = item.subtitle; 
                        return game;
                    }
                    return null;
                })
        );

        let fetchedGames = await Promise.all(fetchPromises);
        fetchedGames = fetchedGames.filter(g => g !== null); 

        setTimeout(() => {
            if (fetchedGames.length > 0) {
                lastSearchResults = fetchedGames;
                localStorage.setItem(cacheKey, JSON.stringify(fetchedGames));
                showVerifiedRankingsList(fetchedGames, titleText);
            } else {
                showError();
            }
        }, 500);
    } catch(e) {
        showError();
    }
};

function showVerifiedRankingsList(games, titleText) {
    updateEpicBackground();
    questionText.textContent = titleText;
    optionsContainer.className = 'fade-in';

    let listHtml = `
        <div style="max-width: 480px; margin: 0 auto; text-align: left; display: flex; flex-direction: column; gap: 10px;">
            <p style="color: #aaa; font-size: 0.85rem; margin: 0 0 5px 0; text-align: center;">Hacé clic en cualquier puesto para ver su ficha técnica:</p>
    `;

    games.forEach((g, index) => {
        let rankNum = index + 1;
        let badgeColor = '#3498db';
        if(rankNum === 1) badgeColor = '#f1c40f';
        if(rankNum === 2) badgeColor = '#bdc3c7';
        if(rankNum === 3) badgeColor = '#e67e22';

        listHtml += `
            <div onclick="selectGameDirectly(${g.id})" style="display: flex; align-items: center; gap: 12px; background: rgba(20,20,20,0.9); border: 1px solid #333; padding: 10px 14px; border-radius: 12px; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 10px rgba(0,0,0,0.5);" onmouseover="this.style.borderColor='#3498db'; this.style.background='rgba(30,30,30,0.95)'" onmouseout="this.style.borderColor='#333'; this.style.background='rgba(20,20,20,0.9)'">
                <div style="font-size: 1.1rem; font-weight: bold; color: ${badgeColor}; min-width: 25px; text-align: center;">#${rankNum}</div>
                <img src="${g.background_image || ''}" style="width: 60px; height: 45px; object-fit: cover; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1);">
                <div style="flex: 1; overflow: hidden;">
                    <strong style="color: #fff; font-size: 0.95rem; display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${g.name}</strong>
                    <span style="color: #f1c40f; font-size: 0.75rem; font-weight: 500;">${g.customSubtitle || ''}</span>
                </div>
                <div style="color: #3498db; font-size: 1rem; padding-right: 5px;">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        `;
    });

    listHtml += `
            <button class="option-btn" style="background: #222; border: 1px solid #444; padding: 12px; border-radius: 8px; color: #ccc; cursor: pointer; width: 100%; margin-top: 15px;" onclick="openRankingsMenu()">
                <i class="fa-solid fa-arrow-left"></i> Volver a Rankings
            </button>
        </div>
    `;

    optionsContainer.innerHTML = listHtml;
}

window.searchGameByName = async function() {
    let input = document.getElementById('search-input-box');
    if(!input || !input.value.trim()) return;
    let query = input.value.trim();

    questionText.textContent = 'BUSCANDO COINCIDENCIAS...';
    mostrarSpinnerRetro(`BUSCANDO "${query.toUpperCase()}"...`);

    const url = `https://api.rawg.io/api/games?key=${API_KEY}&search=${encodeURIComponent(query)}&page_size=8`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        setTimeout(() => {
            if(data.results && data.results.length > 0) {
                lastSearchResults = data.results;
                showGameResultsList(data.results, `RESULTADOS PARA "${query.toUpperCase()}"`);
            } else {
                showError();
            }
        }, 800);
    } catch(e) {
        showError();
    }
};

function showGameResultsList(games, titleText) {
    updateEpicBackground();
    questionText.textContent = titleText;
    optionsContainer.className = 'fade-in';

    let listHtml = `
        <div style="max-width: 480px; margin: 0 auto; text-align: left; display: flex; flex-direction: column; gap: 12px;">
            <p style="color: #aaa; font-size: 0.9rem; margin: 0 0 5px 0; text-align: center;">Elegí el juego que estabas buscando:</p>
    `;

    games.forEach(g => {
        let releaseYear = g.released ? g.released.split('-')[0] : 'Desconocido';
        listHtml += `
            <div onclick="selectGameDirectly(${g.id})" style="display: flex; align-items: center; gap: 14px; background: rgba(20,20,20,0.85); border: 1px solid #333; padding: 12px; border-radius: 12px; cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 10px rgba(0,0,0,0.5);" onmouseover="this.style.borderColor='#3498db'; this.style.background='rgba(30,30,30,0.95)'" onmouseout="this.style.borderColor='#333'; this.style.background='rgba(20,20,20,0.85)'">
                <img src="${g.background_image || ''}" style="width: 70px; height: 50px; object-fit: cover; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                <div style="flex: 1; overflow: hidden;">
                    <strong style="color: #fff; font-size: 1rem; display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${g.name}</strong>
                    <span style="color: #888; font-size: 0.75rem;">Lanzamiento: ${releaseYear}</span>
                </div>
                <div style="color: #3498db; font-size: 1.1rem; padding-right: 5px;">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        `;
    });

    listHtml += `
            <button class="option-btn" style="background: #222; border: 1px solid #444; padding: 12px; border-radius: 8px; color: #ccc; cursor: pointer; width: 100%; margin-top: 15px;" onclick="step=0; renderStep();">
                <i class="fa-solid fa-house"></i> Volver al menú principal
            </button>
        </div>
    `;

    optionsContainer.innerHTML = listHtml;
}

window.selectGameDirectly = function(gameId) {
    let modal = document.getElementById('fav-modal-overlay');
    if(modal) document.body.removeChild(modal);

    const game = lastSearchResults.find(g => g.id === gameId);
    if(game) {
        showMainGameResultDirect(game);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

window.fetchGameDetailsForDirectView = async function(gameName) {
    let modal = document.getElementById('fav-modal-overlay');
    if(modal) document.body.removeChild(modal);

    questionText.textContent = 'CARGANDO JUEGO...';
    mostrarSpinnerRetro(`CARGANDO "${gameName.toUpperCase()}"...`);

    const url = `https://api.rawg.io/api/games?key=${API_KEY}&search=${encodeURIComponent(gameName)}&page_size=1`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        setTimeout(() => {
            if(data.results && data.results.length > 0) {
                showMainGameResultDirect(data.results[0]);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                showError();
            }
        }, 600);
    } catch(e) {
        showError();
    }
};

function updateEpicBackground(customImage = null) {
    epicBgElement.style.display = 'block';
    if (customImage) {
        epicBgElement.style.backgroundImage = `url('${customImage}')`;
        epicBgElement.style.filter = 'blur(12px) brightness(0.35)';
        epicBgElement.style.transform = 'scale(1.1)';
    } else if (step === 0) {
        epicBgElement.style.filter = 'none';
        epicBgElement.style.transform = 'scale(1)';
        epicBgElement.style.backgroundImage = `url('fondo0.jfif')`;
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
        questionText.textContent = '¿Te ayudamos a encontrar tu próximo juego?';
        
        const styleId = 'main-btn-style';
        if(!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.innerHTML = `
                @keyframes pulseGlow {
                    0% { box-shadow: 0 0 0 0 rgba(241, 196, 15, 0.5); }
                    70% { box-shadow: 0 0 0 20px rgba(241, 196, 15, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(241, 196, 15, 0); }
                }
                .main-cta-btn {
                    width: 100%;
                    background: linear-gradient(145deg, #111 0%, #222 100%);
                    border: 2px solid #f1c40f;
                    border-radius: 20px;
                    padding: 30px 20px;
                    color: #fff;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    animation: pulseGlow 2.5s infinite;
                }
                .main-cta-btn:hover {
                    transform: scale(1.03) translateY(-5px);
                    background: linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%);
                    box-shadow: 0 15px 35px rgba(241, 196, 15, 0.4);
                }
                .main-cta-icon {
                    font-size: 3.5rem;
                    color: #f1c40f;
                    filter: drop-shadow(0 0 10px rgba(241,196,15,0.5));
                }
                .main-cta-text {
                    font-size: 1.4rem;
                    font-weight: 900;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                }
            `;
            document.head.appendChild(style);
        }

        const topRowHtml = `
            <div style="display: flex; gap: 15px; margin-bottom: 25px; align-items: stretch; max-width: 480px; margin-left: auto; margin-right: auto;">
                <div style="flex: 1; background: rgba(20,20,20,0.85); padding: 16px; border-radius: 14px; border: 1px solid #3498db; box-shadow: 0 10px 30px rgba(0,0,0,0.5); display: flex; flex-direction: column; justify-content: center;">
                    <p style="color: #3498db; font-weight: bold; margin-top: 0; margin-bottom: 10px; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;"><i class="fa-solid fa-magnifying-glass"></i> Buscador Directo</p>
                    <div style="display: flex; gap: 8px; align-items: center;">
                        <button onclick="fetchTotallyRandomGame()" title="Recomendado (Al azar)" style="background: #e67e22; color: #fff; border: none; width: 42px; height: 42px; border-radius: 8px; cursor: pointer; font-size: 0.95rem; flex-shrink: 0; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                            <i class="fa-solid fa-dice"></i>
                        </button>
                        <input type="text" id="search-input-box" placeholder="Ej: GTA V, Minecraft..." style="flex: 1; min-width: 0; background: #111; border: 1px solid #444; color: #fff; padding: 12px 8px; border-radius: 8px; font-size: 0.9rem; outline: none; height: 42px;" onkeydown="if(event.key === 'Enter') searchGameByName()">
                        <button onclick="searchGameByName()" title="Buscar" style="background: #3498db; color: #fff; border: none; width: 42px; height: 42px; border-radius: 8px; cursor: pointer; font-size: 0.95rem; flex-shrink: 0; font-weight: bold; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                        <button onclick="openFavoritesModal()" title="Ver Mis Favoritos" style="background: #ff4757; color: #fff; border: none; width: 42px; height: 42px; border-radius: 8px; cursor: pointer; font-size: 0.95rem; flex-shrink: 0; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                            <i class="fa-solid fa-heart"></i>
                        </button>
                    </div>
                </div>

                <button onclick="openRankingsMenu()" title="Rankings" style="flex-shrink: 0; width: 85px; background: rgba(20,20,20,0.85); border: 1px solid #f1c40f; border-radius: 14px; color: #f1c40f; cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); transition: all 0.2s;" onmouseover="this.style.background='rgba(241,196,15,0.1)'; this.style.transform='scale(1.05)'" onmouseout="this.style.background='rgba(20,20,20,0.85)'; this.style.transform='scale(1)'">
                    <i class="fa-solid fa-trophy" style="font-size: 1.8rem;"></i>
                    <span style="font-size: 0.7rem; font-weight: bold; text-transform: uppercase;">Rankings</span>
                </button>
            </div>
        `;
        optionsContainer.insertAdjacentHTML('beforeend', topRowHtml);

        const btnWizard = document.createElement('button');
        btnWizard.className = 'main-cta-btn';
        btnWizard.innerHTML = `
            <i class="fa-solid fa-gamepad main-cta-icon"></i>
            <span class="main-cta-text">ENCUENTRA TU PRÓXIMO JUEGO</span>
        `;
        btnWizard.onclick = () => {
            userAnswers.isRandom = false;
            step = 1;
            renderStep();
        };
        
        const btnContainer = document.createElement('div');
        btnContainer.style.maxWidth = '480px';
        btnContainer.style.margin = '0 auto';
        btnContainer.appendChild(btnWizard);
        
        optionsContainer.appendChild(btnContainer);

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
        showMainGameResultDirect(game);
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
                showMainGameResultDirect(data.results[Math.floor(Math.random() * data.results.length)]);
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
                    showMainGameResultDirect(pool[Math.floor(Math.random() * pool.length)]);
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
                    showMainGameResultDirect(finalPool[Math.floor(Math.random() * finalPool.length)]);
                } else { showError(); }
            } else { showError(); }
        }, 1000);
    } catch (error) { showError(); }
}

window.toggleLoreBox = async function(gameId) {
    let box = document.getElementById('lore-container-box');
    let btn = document.getElementById('lore-toggle-btn');
    if (!box) return;

    if (box.style.display === 'none' || box.style.display === '') {
        box.style.display = 'block';
        btn.innerHTML = '<i class="fa-solid fa-book-open"></i> Ocultar Lore / Historia';
        
        if (box.getAttribute('data-loaded') === 'false') {
            box.innerHTML = '<p style="color: #aaa; font-style: italic; text-align: center; margin: 0;">Descifrando archivos y traduciendo lore...</p>';
            let loreText = 'Información clasificada. El destino de este universo es un misterio por descubrir...';
            try {
                const resDetail = await fetch(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`);
                const dataDetail = await resDetail.json();
                if (dataDetail.description_raw) {
                    let snippet = dataDetail.description_raw.substring(0, 400);
                    snippet = snippet.substr(0, Math.min(snippet.length, snippet.lastIndexOf(" "))) + '...';
                    
                    try {
                        const transRes = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${encodeURIComponent(snippet)}`);
                        const transData = await transRes.json();
                        let translatedText = '';
                        transData[0].forEach(item => {
                            if(item[0]) translatedText += item[0];
                        });
                        loreText = translatedText;
                    } catch(e) { 
                        loreText = snippet; 
                    }
                }
            } catch(e) { loreText = "No se pudo recuperar la descripción oficial de este universo."; }

            box.innerHTML = `
                <div style="background: rgba(15,15,15,0.95); padding: 20px; border-radius: 12px; border: 1px solid #e67e22; box-shadow: 0 5px 20px rgba(230,126,34,0.2);">
                    <h4 style="color: #e67e22; margin-top: 0; margin-bottom: 10px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px;"><i class="fa-solid fa-book-journal-whills"></i> Sinopsis / Historia</h4>
                    <p style="color: #ddd; font-size: 0.95rem; line-height: 1.6; text-align: justify; font-style: italic; margin-bottom: 0;">"${loreText}"</p>
                </div>
            `;
            box.setAttribute('data-loaded', 'true');
        }
    } else {
        box.style.display = 'none';
        btn.innerHTML = '<i class="fa-solid fa-book-open"></i> Ver Lore / Historia';
    }
};

function showMainGameResultDirect(game) {
    currentGameData = game;
    showMainGameResult();
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
    let p2 = 90, p4 = 100;
    
    let playtimeValue = game.playtime ? game.playtime : 0;
    let playtimeText = playtimeValue > 0 ? `~${playtimeValue} hrs` : 'Variable';
    let p1Width = playtimeValue > 0 ? Math.min(100, (playtimeValue / 40) * 100) : 50; 

    let metaScore = game.metacritic ? game.metacritic : 80;
    let userScore = game.rating ? (game.rating * 20) : 80;
    let combinedScore = Math.round((metaScore + userScore) / 2);

    if (userAnswers.isRandom) {
        let mainGenre = game.genres && game.genres[0] ? game.genres[0].name : 'Gran Título';
        introText = `Selección sorpresa del sistema. Encontramos este aclamado juego de <strong>${mainGenre}</strong> que está arrasando en la base de datos. ¡Ideal para descubrir algo nuevo!`;
        row1Icon = '⏱️'; row1Label = `Duración Estimada`; row2Icon = '🧠'; row2Label = `Complejidad / Desafío`; row3Icon = '⚙️'; row3Label = `Exigencia Tech`; row4Icon = '🏆'; row4Label = `Aprobación Global`;
        p2 = game.metacritic ? Math.min(99, Math.max(75, game.metacritic)) : 80; p4 = combinedScore;
    } else {
        introText = `Buscás una experiencia de <strong>${userAnswers.subGenreName || userAnswers.genreName}</strong> ideal para <strong>${userAnswers.platformName}</strong>. Por su perfil técnico y mecánicas, <strong>${game.name}</strong> encaja perfectamente con tus exigencias.`;
        row1Icon = '⏱️'; row1Label = `Duración Estimada`; row2Icon = '🧠'; row2Label = `Complejidad / Desafío`; row3Icon = '⚙️'; row3Label = `Exigencia Tech`; row4Icon = '🏆'; row4Label = `Aprobación Global`;
        let isComplex = game.genres && game.genres.some(g => g.slug === 'strategy' || g.slug === 'role-playing-games' || g.slug === 'simulation');
        p2 = isComplex ? (Math.floor(Math.random() * 10) + 90) : (Math.floor(Math.random() * 15) + 75); 
        p4 = combinedScore;
    }

    // LÓGICA DE EXIGENCIA AL HARDWARE
    let releaseYearForOpt = game.released ? parseInt(game.released.split('-')[0]) : 2018;
    let optText = 'Media Alta';
    let p3Width = 75;

    if (userAnswers.brandName === 'PC' && userAnswers.platformName) {
        if (userAnswers.platformName.includes('Alta')) { optText = 'Alta'; p3Width = 100; }
        else if (userAnswers.platformName.includes('Media')) { optText = 'Media Alta'; p3Width = 75; }
        else if (userAnswers.platformName.includes('Baja')) { optText = 'Gama Baja'; p3Width = 25; }
    } else if (retroPlatforms.includes(userAnswers.platformId)) {
        optText = 'Gama Baja'; p3Width = 25;
    } else {
        if (releaseYearForOpt >= 2021) { optText = 'Alta'; p3Width = 100; }
        else if (releaseYearForOpt >= 2016) { optText = 'Media Alta'; p3Width = 75; }
        else if (releaseYearForOpt >= 2010) { optText = 'Media Baja'; p3Width = 50; }
        else { optText = 'Gama Baja'; p3Width = 25; }
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

                    <div style="margin-bottom: 20px;">
                        <button id="lore-toggle-btn" onclick="toggleLoreBox(${game.id})" style="width: 100%; background: rgba(230, 126, 34, 0.15); color: #e67e22; border: 1px solid rgba(230, 126, 34, 0.4); padding: 12px; border-radius: 10px; font-size: 0.9rem; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s;" onmouseover="this.style.background='rgba(230, 126, 34, 0.25)'" onmouseout="this.style.background='rgba(230, 126, 34, 0.15)'">
                            <i class="fa-solid fa-book-open"></i> Ver Lore / Historia
                        </button>
                        <div id="lore-container-box" data-loaded="false" style="display: none; margin-top: 12px;"></div>
                    </div>

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
                                <div style="background: #222; width: 70px; height: 6px; border-radius: 3px; overflow: hidden;">
                                    <div style="background: #4CAF50; width: ${p1Width}%; height: 100%;"></div>
                                </div>
                                <span style="font-weight: bold; font-size: 0.8rem; min-width: 65px; text-align: right; color: #4CAF50;">${playtimeText}</span>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.82rem; color: #ddd; margin-bottom: 10px;">
                            <span>${row2Icon} ${row2Label}</span>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="background: #222; width: 70px; height: 6px; border-radius: 3px; overflow: hidden;">
                                    <div style="background: #E040FB; width: ${p2}%; height: 100%;"></div>
                                </div>
                                <span style="font-weight: bold; font-size: 0.8rem; min-width: 65px; text-align: right; color: #E040FB;">${p2}%</span>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.82rem; color: #ddd; margin-bottom: 10px;">
                            <span>${row3Icon} ${row3Label}</span>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="background: #222; width: 70px; height: 6px; border-radius: 3px; overflow: hidden;">
                                    <div style="background: #03A9F4; width: ${p3Width}%; height: 100%;"></div>
                                </div>
                                <span style="font-weight: bold; font-size: 0.75rem; min-width: 65px; text-align: right; color: #03A9F4;">${optText}</span>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.82rem; color: #ddd;">
                            <span>${row4Icon} ${row4Label}</span>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="background: #222; width: 70px; height: 6px; border-radius: 3px; overflow: hidden;">
                                    <div style="background: #FF9800; width: ${p4}%; height: 100%;"></div>
                                </div>
                                <span style="font-weight: bold; font-size: 0.8rem; min-width: 65px; text-align: right; color: #FF9800;">${p4}%</span>
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
                        <button style="background: #1a1a1a; color: #fff; border: 1px solid #333; padding: 12px 25px; border-radius: 10px; cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 1rem; transition: all 0.2s;" onmouseover="this.style.borderColor='#3498db'" onmouseout="this.style.borderColor='#333'" onclick="step=0; renderStep();">
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
    if (exists) {
        favBtn.style.background = '#ff4757';
        favBtn.style.color = '#fff';
    } else {
        favBtn.style.background = 'rgba(34,34,34,0.9)';
        favBtn.style.color = '#ff4757';
    }
}

function showError() {
    questionText.textContent = 'ERROR DE SISTEMA';
    optionsContainer.innerHTML = `
        <div style="background: rgba(20,20,20,0.85); padding: 30px; border-radius: 16px; border: 1px solid #ff4757; text-align: center; max-width: 400px; margin: 0 auto; font-family: monospace;">
            <div style="font-size: 3.5rem; color: #ff4757; margin-bottom: 15px;"><i class="fa-solid fa-triangle-exclamation"></i></div>
            <p style="color: #fff; font-size: 1rem; margin-bottom: 20px;">No pudimos conectar con el cartucho de datos o no hubo resultados para esta combinación exacta.</p>
            <button class="option-btn" style="background: #3498db; border: none; padding: 12px; border-radius: 8px; color: #fff; cursor: pointer; font-weight: bold; margin-bottom: 10px; width: 100%;" onclick="step=0; renderStep();"><i class="fa-solid fa-rotate-right"></i> Volver a intentar</button>
            <button class="option-btn" style="background: #222; border: 1px solid #444; padding: 12px; border-radius: 8px; color: #ccc; cursor: pointer; width: 100%;" onclick="step=0; renderStep();"><i class="fa-solid fa-house"></i> Volver al inicio</button>
        </div>
    `;
}

renderStep();