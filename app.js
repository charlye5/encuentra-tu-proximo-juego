const API_KEY = 'b7fb0c8c04464d2db1b82a2c07e068ff';

// 1. Opciones principales de Plataforma
const platforms = [
    { id: 'PC', name: 'PC', icon: '<i class="fa-brands fa-windows"></i>' },
    { id: 'PlayStation', name: 'PlayStation', icon: '<i class="fa-brands fa-playstation"></i>' },
    { id: 'Xbox', name: 'Xbox', icon: '<i class="fa-brands fa-xbox"></i>' },
    { id: 'Nintendo', name: 'Nintendo', icon: '<i class="fa-solid fa-gamepad"></i>' },
    { id: 'Móvil', name: 'Móvil', icon: '<i class="fa-solid fa-mobile-screen"></i>' }
];

// 2. Sub-opciones completas con catálogo histórico
const subPlatforms = {
    'PC': [
        { id: '4', name: 'Gama Alta', icon: '<i class="fa-solid fa-desktop"></i>' },
        { id: '4', name: 'Gama Media', icon: '<i class="fa-solid fa-laptop"></i>' },
        { id: '4', name: 'Gama Baja', icon: '<i class="fa-solid fa-laptop-code"></i>' }
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

// 3. Opciones de Género
const genres = [
    { id: 'action', name: 'Acción', icon: '<i class="fa-solid fa-fire"></i>' },
    { id: 'sports', name: 'Deportes', icon: '<i class="fa-solid fa-futbol"></i>' },
    { id: 'strategy', name: 'Estrategia', icon: '<i class="fa-solid fa-chess-knight"></i>' },
    { id: 'shooter', name: 'Shooter', icon: '<i class="fa-solid fa-crosshairs"></i>' }
];

// 4. Opciones de Modo de Juego
const gameModes = [
    { id: 'singleplayer', name: 'Un Jugador', icon: '<i class="fa-solid fa-user"></i>' },
    { id: 'multiplayer', name: 'Multijugador', icon: '<i class="fa-solid fa-users"></i>' },
    { id: 'co-op', name: 'Cooperativo', icon: '<i class="fa-solid fa-handshake"></i>' }
];

let step = 1;
let userAnswers = {
    brandName: '',
    platformId: '',
    platformName: '',
    genreId: '',
    genreName: '',
    modeId: '',
    modeName: ''
};

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

function renderStep() {
    optionsContainer.innerHTML = '';

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
                step++;
                renderStep();
            };
            optionsContainer.appendChild(btn);
        });

        crearBotonVolver();
    }
    else if (step === 3) {
        questionText.textContent = '¿Qué ritmo de juego buscás?';
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
    else if (step === 4) {
        questionText.textContent = '¿Cómo preferís jugar?';
        gameModes.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `${opt.icon} <span>${opt.name}</span>`;
            btn.onclick = () => {
                userAnswers.modeId = opt.id;
                userAnswers.modeName = opt.name;
                fetchGameFromAPI(); 
            };
            optionsContainer.appendChild(btn);
        });

        crearBotonVolver();
    }
}

function crearBotonVolver() {
    const divider = document.createElement('div');
    divider.style.width = '100%';
    optionsContainer.appendChild(divider);

    const backBtn = document.createElement('button');
    backBtn.className = 'option-btn';
    backBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i> <span>Volver</span>';
    backBtn.style.marginTop = '20px';
    backBtn.style.backgroundColor = '#222';
    backBtn.style.flexDirection = 'row';
    backBtn.style.minWidth = 'auto';
    backBtn.style.padding = '10px 20px';
    
    backBtn.onclick = () => {
        step--; 
        renderStep(); 
    };
    
    optionsContainer.appendChild(backBtn);
}

async function fetchGameFromAPI() {
    questionText.textContent = 'Buscando en la base de datos...';
    optionsContainer.innerHTML = '<p style="color: #888;">Conectando con RAWG...</p>';

    const url = `https://api.rawg.io/api/games?key=${API_KEY}&platforms=${userAnswers.platformId}&genres=${userAnswers.genreId}&tags=${userAnswers.modeId}&ordering=-metacritic&page_size=10`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.results.length);
            const basicGameInfo = data.results[randomIndex];
            
            const detailUrl = `https://api.rawg.io/api/games/${basicGameInfo.id}?key=${API_KEY}`;
            const detailResponse = await fetch(detailUrl);
            const fullGameInfo = await detailResponse.json();

            showResult(fullGameInfo);
        } else {
            showError();
        }
    } catch (error) {
        console.error("Error:", error);
        showError();
    }
}

function showResult(game) {
    questionText.textContent = '¡Este es tu próximo juego!';
    
    let metaColor = '#4CAF50'; 
    if (game.metacritic < 75) metaColor = '#FFC107'; 
    if (game.metacritic < 50) metaColor = '#F44336'; 
    if (!game.metacritic) metaColor = '#888';

    let votes = game.reviews_count > 999 ? (game.reviews_count / 1000).toFixed(1) + 'k' : (game.reviews_count || '--');

    // 1. Plataformas compatibles con iconos
    let platformsHtml = '';
    if (game.platforms && game.platforms.length > 0) {
        platformsHtml = '<div style="display: flex; gap: 10px; justify-content: center; margin-bottom: 15px; color: #aaa; font-size: 1.1rem;" title="Disponibles en otras plataformas">';
        game.platforms.forEach(p => {
            const pName = p.platform.name.toLowerCase();
            let iconClass = 'fa-solid fa-gamepad';
            if (pName.includes('windows') || pName.includes('pc')) iconClass = 'fa-brands fa-windows';
            else if (pName.includes('playstation')) iconClass = 'fa-brands fa-playstation';
            else if (pName.includes('xbox')) iconClass = 'fa-brands fa-xbox';
            else if (pName.includes('switch') || pName.includes('nintendo')) iconClass = 'fa-solid fa-gamepad';
            else if (pName.includes('android') || pName.includes('ios')) iconClass = 'fa-solid fa-mobile-screen';
            
            platformsHtml += `<i class="${iconClass}" style="opacity: 0.8;" title="${p.platform.name}"></i>`;
        });
        platformsHtml += '</div>';
    }

    // 2. Enlaces directos a tiendas oficiales
    let storeUrl = `https://store.steampowered.com/search/?term=${encodeURIComponent(game.name)}`;
    let storeName = 'Buscar en Steam';
    let storeIcon = '<i class="fa-brands fa-steam"></i>';

    if (userAnswers.brandName === 'PlayStation') {
        storeUrl = `https://store.playstation.com/search/${encodeURIComponent(game.name)}`;
        storeName = 'PlayStation Store';
        storeIcon = '<i class="fa-brands fa-playstation"></i>';
    } else if (userAnswers.brandName === 'Xbox') {
        storeUrl = `https://www.xbox.com/en-US/search?q=${encodeURIComponent(game.name)}`;
        storeName = 'Xbox Store';
        storeIcon = '<i class="fa-brands fa-xbox"></i>';
    } else if (userAnswers.brandName === 'Nintendo') {
        storeUrl = `https://www.nintendo.com/search/#q=${encodeURIComponent(game.name)}`;
        storeName = 'Nintendo eShop';
        storeIcon = '<i class="fa-solid fa-gamepad"></i>';
    }

    optionsContainer.innerHTML = `
        <div style="background: #1a1a1a; padding: 25px; border-radius: 16px; border: 1px solid #333; max-width: 450px; margin: 0 auto; box-shadow: 0 15px 35px rgba(0,0,0,0.6);">
            <img src="${game.background_image}" alt="Portada de ${game.name}" style="width: 100%; border-radius: 10px; margin-bottom: 15px; height: 220px; object-fit: cover;">
            
            <h2 style="color: #ffffff; margin-top: 0; margin-bottom: 5px; font-size: 1.8rem; font-weight: 600;">${game.name}</h2>
            <p style="font-size: 0.9rem; color: #888; margin-bottom: 15px;">Lanzamiento: ${game.released || 'Desconocido'}</p>

            ${platformsHtml}

            <!-- Panel de Puntajes Minimalista -->
            <div style="display: flex; justify-content: space-between; background: #0f0f0f; padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid #222;">
                
                <div style="text-align: center; flex: 1;">
                    <div style="font-size: 2.2rem; font-weight: bold; color: ${metaColor}; line-height: 1;">${game.metacritic || '--'}</div>
                    <div style="font-size: 0.7rem; color: #aaa; text-transform: uppercase; margin-top: 8px; letter-spacing: 1px;">Metacritic<br><span style="font-size: 0.6rem; color: #666;">(Prensa)</span></div>
                </div>

                <div style="width: 1px; background: #333; margin: 0 10px;"></div>
                
                <div style="text-align: center; flex: 1;">
                    <div style="font-size: 2.2rem; font-weight: bold; color: #2196F3; line-height: 1;">${game.rating ? game.rating.toFixed(1) : '--'}</div>
                    <div style="font-size: 0.7rem; color: #aaa; text-transform: uppercase; margin-top: 8px; letter-spacing: 1px;">Jugadores<br><span style="font-size: 0.6rem; color: #666;">(/5.0)</span></div>
                </div>

                <div style="width: 1px; background: #333; margin: 0 10px;"></div>

                <div style="text-align: center; flex: 1;">
                    <div style="font-size: 2.2rem; font-weight: bold; color: #E0E0E0; line-height: 1;">${votes}</div>
                    <div style="font-size: 0.7rem; color: #aaa; text-transform: uppercase; margin-top: 8px; letter-spacing: 1px;">Votos<br><span style="font-size: 0.6rem; color: #666;">(Total)</span></div>
                </div>

            </div>

            <!-- Botones de Tienda y Favoritos -->
            <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                <a href="${storeUrl}" target="_blank" style="flex: 1; display: block; background: #222; color: #fff; text-decoration: none; padding: 12px; border-radius: 8px; font-size: 0.9rem; font-weight: 500; border: 1px solid #444; text-align: center;">
                    ${storeIcon} ${storeName}
                </a>
                <button id="fav-btn" onclick="toggleFavorite('${encodeURIComponent(game.name)}', '${game.background_image}')" style="background: #222; color: #ff4757; border: 1px solid #444; padding: 0 15px; border-radius: 8px; cursor: pointer; font-size: 1.2rem;" title="Guardar en favoritos">
                    <i class="fa-solid fa-heart"></i>
                </button>
            </div>

            <!-- Etiquetas de Filtros -->
            <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
                <span style="background: #2a2a2a; padding: 6px 14px; border-radius: 20px; font-size: 0.8rem; color: #ddd;">${userAnswers.platformName}</span>
                <span style="background: #2a2a2a; padding: 6px 14px; border-radius: 20px; font-size: 0.8rem; color: #ddd;">${userAnswers.genreName}</span>
                <span style="background: #2a2a2a; padding: 6px 14px; border-radius: 20px; font-size: 0.8rem; color: #aaa;">${userAnswers.modeName}</span>
            </div>
        </div>
        
        <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; margin-top: 30px;">
            <button class="option-btn" style="min-width: auto; padding: 12px 25px; flex-direction: row; margin: 0; font-size: 1rem;" onclick="fetchGameFromAPI()">
                <i class="fa-solid fa-rotate-right" style="font-size: 1.2rem;"></i> <span>Buscar otro igual</span>
            </button>
            <button class="option-btn" style="min-width: auto; padding: 12px 25px; flex-direction: row; margin: 0; background-color: #222; font-size: 1rem;" onclick="location.reload()">
                <i class="fa-solid fa-house" style="font-size: 1.2rem;"></i> <span>Volver al inicio</span>
            </button>
        </div>
    `;

    verificarEstadoFavorito(game.name);
}

// 3. Lógica para guardar en Favoritos con localStorage
function toggleFavorite(gameName, gameImg) {
    let favorites = JSON.parse(localStorage.getItem('rawg_favorites')) || [];
    const nameDecoded = decodeURIComponent(gameName);
    
    const index = favorites.findIndex(fav => fav.name === nameDecoded);
    
    if (index > -1) {
        favorites.splice(index, 1); // Lo saca si ya estaba
    } else {
        favorites.push({ name: nameDecoded, image: gameImg }); // Lo agrega
    }

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
        favBtn.style.background = '#222';
        favBtn.style.color = '#ff4757';
    }
}

function showError() {
    questionText.textContent = 'Hubo un problema';
    optionsContainer.innerHTML = `
        <p style="color: #ccc;">No pudimos encontrar un juego con esos filtros exactos.</p>
        <button class="option-btn" style="margin-top: 20px; min-width: auto; flex-direction: row;" onclick="step--; renderStep();">
            <i class="fa-solid fa-arrow-left" style="font-size: 1.2rem;"></i> <span>Cambiar opciones</span>
        </button>
    `;
}

renderStep();