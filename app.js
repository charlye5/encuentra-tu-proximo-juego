const API_KEY = 'b7fb0c8c04464d2db1b82a2c07e068ff';

// Colocá aquí los nombres de las imágenes que descargaste en tu carpeta (ej: 'fondo1.jpg', 'fondo2.jpg')
const epicBackgrounds = [
    'fondo1.jpg',
    'fondo2.jpg',
    'fondo3.jpg',
    'fondo4.jpg'
];

// 1. Opciones principales de Plataforma
const platforms = [
    { id: 'PC', name: 'PC', icon: '<i class="fa-brands fa-windows"></i>' },
    { id: 'PlayStation', name: 'PlayStation', icon: '<i class="fa-brands fa-playstation"></i>' },
    { id: 'Xbox', name: 'Xbox', icon: '<i class="fa-brands fa-xbox"></i>' },
    { id: 'Nintendo', name: 'Nintendo', icon: '<i class="fa-solid fa-gamepad"></i>' },
    { id: 'Móvil', name: 'Móvil', icon: '<i class="fa-solid fa-mobile-screen"></i>' }
];

// 2. Sub-opciones completas con rangos de fechas
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

// 3. Opciones de Presupuesto / Tipo de Juego (Ajustado para AAA amplio)
const priceRanges = [
    { id: 'free-to-play', name: 'Gratis (Free-to-Play)', icon: '<i class="fa-solid fa-gift"></i>', tag: 'free-to-play' },
    { id: 'indie', name: 'Económicos / Indie', icon: '<i class="fa-solid fa-tag"></i>', tag: 'indie' },
    { id: 'aaa', name: 'Grandes Producciones (AAA)', icon: '<i class="fa-solid fa-gem"></i>', tag: '' } // Sin tag estricto para incluir todos los tanques pesados
];

// 4. Opciones de Género
const genres = [
    { id: 'action', name: 'Acción', icon: '<i class="fa-solid fa-fire"></i>' },
    { id: 'sports', name: 'Deportes', icon: '<i class="fa-solid fa-futbol"></i>' },
    { id: 'strategy', name: 'Estrategia', icon: '<i class="fa-solid fa-chess-knight"></i>' },
    { id: 'shooter', name: 'Shooter', icon: '<i class="fa-solid fa-crosshairs"></i>' }
];

// 5. Opciones de Modo de Juego
const gameModes = [
    { id: 'singleplayer', name: 'Un Jugador', icon: '<i class="fa-solid fa-user"></i>' },
    { id: 'multiplayer', name: 'Multijugador', icon: '<i class="fa-solid fa-users"></i>' },
    { id: 'co-op', name: 'Cooperativo', icon: '<i class="fa-solid fa-handshake"></i>' }
];

let step = 0;
const totalSteps = 5;
let userAnswers = {
    brandName: '',
    platformId: '',
    platformName: '',
    platformDates: '',
    priceId: '',
    priceName: '',
    genreId: '',
    genreName: '',
    modeId: '',
    modeName: ''
};

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

// Creamos un elemento dinámico en el body para manejar el fondo épico
let epicBgElement = document.createElement('div');
epicBgElement.className = 'epic-bg';
document.body.prepend(epicBgElement);

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

// Spinner retro con animación y diseño incorporado
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
            step = 1;
            renderStep();
        };
        optionsContainer.appendChild(btnWizard);

        const btnRandom = document.createElement('button');
        btnRandom.className = 'option-btn';
        btnRandom.style.borderColor = '#e67e22';
        btnRandom.innerHTML = '<i class="fa-solid fa-dice"></i> <span>Recomendado (Al azar)</span>';
        btnRandom.onclick = () => {
            fetchTotallyRandomGame();
        };
        optionsContainer.appendChild(btnRandom);
        return;
    }

    // Barra de Progreso Superior
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
                step++;
                renderStep();
            };
            optionsContainer.appendChild(btn);
        });

        crearBotonVolver();
    }
    else if (step === 3) {
        questionText.textContent = '¿Qué presupuesto o tipo buscás?';
        priceRanges.forEach(opt => {
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
    else if (step === 5) {
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
    const backBtn = document.createElement('button');
    backBtn.className = 'option-btn';
    backBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i> <span>Volver</span>';
    backBtn.style.backgroundColor = '#222';
    backBtn.style.marginTop = '20px';
    backBtn.style.width = '100%';
    backBtn.style.flexDirection = 'row';
    
    backBtn.onclick = () => {
        step--; 
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
    
    homeBtn.onclick = () => {
        step = 0; 
        renderStep(); 
    };
    
    optionsContainer.appendChild(homeBtn);
}

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
                const randomIndex = Math.floor(Math.random() * data.results.length);
                const game = data.results[randomIndex];
                
                userAnswers.brandName = 'PC';
                userAnswers.platformName = 'Multiplataforma';
                userAnswers.priceName = 'Aleatorio';
                userAnswers.genreName = 'Sorpresa';
                userAnswers.modeName = 'General';

                showResult(game);
            } else {
                showError();
            }
        }, 1000);

    } catch (error) {
        console.error("Error:", error);
        showError();
    }
}

async function fetchGameFromAPI() {
    questionText.textContent = 'PROCESANDO FILTROS...';
    mostrarSpinnerRetro('BUSCANDO JUEGAZO...');

    // Elegimos una página al azar entre la 1 y la 5 para garantizar variedad total y evitar repeticiones
    const randomPage = Math.floor(Math.random() * 5) + 1;

    let dateQuery = userAnswers.platformDates ? `&dates=${userAnswers.platformDates}` : '';
    let tagsQuery = userAnswers.priceId ? `&tags=${userAnswers.priceId}` : '';
    let modeQuery = userAnswers.modeId ? `&tags=${userAnswers.modeId}` : '';
    
    const url = `https://api.rawg.io/api/games?key=${API_KEY}&platforms=${userAnswers.platformId}&genres=${userAnswers.genreId}${tagsQuery}${modeQuery}${dateQuery}&page=${randomPage}&page_size=40`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        setTimeout(() => {
            if (data.results && data.results.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.results.length);
                const game = data.results[randomIndex];
                showResult(game);
            } else {
                fetchFallbackGame();
            }
        }, 1000);

    } catch (error) {
        console.error("Error:", error);
        showError();
    }
}

async function fetchFallbackGame() {
    let dateQuery = userAnswers.platformDates ? `&dates=${userAnswers.platformDates}` : '';
    const url = `https://api.rawg.io/api/games?key=${API_KEY}&platforms=${userAnswers.platformId}&genres=${userAnswers.genreId}${dateQuery}&page_size=40`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        setTimeout(() => {
            if (data.results && data.results.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.results.length);
                const game = data.results[randomIndex];
                showResult(game);
            } else {
                showError();
            }
        }, 1000);

    } catch (error) {
        showError();
    }
}

function showResult(game) {
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

            platformsHtml += `
                <span style="background: rgba(20,20,20,0.8); border: 1px solid ${pColor}; color: #ddd; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; display: flex; align-items: center; gap: 6px;">
                    <i class="${iconClass}" style="color: ${pColor};"></i> ${p.platform.name}
                </span>
            `;
        });
        platformsHtml += '</div>';
    }

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

    let techCityBtn = '';
    if (userAnswers.brandName === 'PC') {
        let techCityQuery = game.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        let techCityUrl = `https://technical.city/es/can-i-run-it/${techCityQuery}`;
        techCityBtn = `
            <a href="${techCityUrl}" target="_blank" style="display: block; background: rgba(22,22,22,0.85); color: #3498db; text-decoration: none; padding: 12px; border-radius: 8px; font-size: 0.9rem; font-weight: 500; margin-bottom: 15px; border: 1px solid #333; text-align: center; transition: background 0.2s;">
                <i class="fa-solid fa-microchip"></i> ¿Lo corre mi PC? (Technical City)
            </a>
        `;
    }

    optionsContainer.innerHTML = `
        <div style="background: #181818; border-radius: 16px; border: 1px solid #333; max-width: 460px; margin: 0 auto; box-shadow: 0 20px 40px rgba(0,0,0,0.8); overflow: hidden; position: relative; text-align: left;">
            
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('${game.background_image}'); background-size: cover; background-position: center; filter: blur(16px) brightness(0.25); transform: scale(1.1); z-index: 0;"></div>

            <div style="position: relative; z-index: 1;">
                
                <div style="background: ${brandColor}; padding: 8px 15px; display: flex; align-items: center; justify-content: space-between; color: #fff; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.5px;">
                    <span style="display: flex; align-items: center; gap: 6px;">${brandIcon} ${userAnswers.brandName ? userAnswers.brandName.toUpperCase() : 'PC'} - ${userAnswers.platformName || 'General'}</span>
                    <span style="opacity: 0.8; font-size: 0.75rem;"><i class="fa-solid fa-shield-check"></i> Recomendado</span>
                </div>

                <div style="padding: 25px;">
                    <img src="${game.background_image}" alt="Portada de ${game.name}" style="width: 100%; border-radius: 10px; margin-bottom: 15px; height: 210px; object-fit: cover; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 20px rgba(0,0,0,0.5);">
                    
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
                        </div>

                        <div style="width: 1px; background: rgba(255,255,255,0.1); margin: 0 10px;"></div>

                        <div style="text-align: center; flex: 1;">
                            <div style="font-size: 2rem; font-weight: bold; color: #E0E0E0; line-height: 1;">${votes}</div>
                            <div style="font-size: 0.65rem; color: #aaa; text-transform: uppercase; margin-top: 6px; letter-spacing: 1px;">Votos</div>
                        </div>

                    </div>

                    ${platformsHtml}
                    ${techCityBtn}

                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <a href="${storeUrl}" target="_blank" style="flex: 1; display: block; background: rgba(34,34,34,0.9); color: #fff; text-decoration: none; padding: 12px; border-radius: 8px; font-size: 0.9rem; font-weight: 500; border: 1px solid rgba(255,255,255,0.15); text-align: center;">
                            ${storeIcon} ${storeName}
                        </a>
                        <button id="fav-btn" onclick="toggleFavorite('${encodeURIComponent(game.name)}', '${game.background_image}')" style="background: rgba(34,34,34,0.9); color: #ff4757; border: 1px solid rgba(255,255,255,0.15); padding: 0 15px; border-radius: 8px; cursor: pointer; font-size: 1.2rem;" title="Guardar en favoritos">
                            <i class="fa-solid fa-heart"></i>
                        </button>
                    </div>

                    <button onclick="shareGame('${game.name}')" style="width: 100%; background: rgba(37, 211, 102, 0.15); color: #25D366; border: 1px solid rgba(37, 211, 102, 0.3); padding: 10px; border-radius: 8px; font-size: 0.85rem; font-weight: 500; cursor: pointer; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; gap: 8px;">
                        <i class="fa-solid fa-share-nodes"></i> Compartir recomendación
                    </button>

                    <div style="display: flex; gap: 6px; flex-wrap: wrap; justify-content: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px;">
                        <span style="background: rgba(30,30,30,0.85); padding: 5px 10px; border-radius: 15px; font-size: 0.7rem; color: #ccc;">${userAnswers.platformName || 'General'}</span>
                        <span style="background: rgba(30,30,30,0.85); padding: 5px 10px; border-radius: 15px; font-size: 0.7rem; color: #ccc;">${userAnswers.priceName || 'Todos'}</span>
                        <span style="background: rgba(30,30,30,0.85); padding: 5px 10px; border-radius: 15px; font-size: 0.7rem; color: #ccc;">${userAnswers.genreName || 'Variado'}</span>
                        <span style="background: rgba(30,30,30,0.85); padding: 5px 10px; border-radius: 15px; font-size: 0.7rem; color: #aaa;">${userAnswers.modeName || 'Cualquiera'}</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; margin-top: 30px;">
            <button style="background: #1a1a1a; color: #fff; border: 1px solid #333; padding: 12px 25px; border-radius: 10px; cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 1rem; transition: all 0.2s;" onmouseover="this.style.borderColor='#3498db'" onmouseout="this.style.borderColor='#333'" onclick="userAnswers.brandName ? fetchGameFromAPI() : fetchTotallyRandomGame()">
                <i class="fa-solid fa-rotate-right"></i> <span>Buscar otro igual</span>
            </button>
            <button style="background: #222; color: #fff; border: 1px solid #333; padding: 12px 25px; border-radius: 10px; cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 1rem; transition: all 0.2s;" onmouseover="this.style.borderColor='#555'" onmouseout="this.style.borderColor='#333'" onclick="step=0; renderStep();">
                <i class="fa-solid fa-house"></i> <span>Volver al inicio</span>
            </button>
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
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push({ name: nameDecoded, image: gameImg });
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
        favBtn.style.background = 'rgba(34,34,34,0.9)';
        favBtn.style.color = '#ff4757';
    }
}

function showError() {
    questionText.textContent = 'ERROR DE SISTEMA';
    optionsContainer.innerHTML = `
        <p style="color: #ccc; font-family: monospace;">No pudimos conectar con el cartucho de datos.</p>
        <button class="option-btn" style="margin-top: 20px; min-width: auto; flex-direction: row;" onclick="step=0; renderStep();">
            <i class="fa-solid fa-house" style="font-size: 1.2rem;"></i> <span>Volver al inicio</span>
        </button>
    `;
}

renderStep();