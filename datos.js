const API_KEY = 'b7fb0c8c04464d2db1b82a2c07e068ff';

const epicBackgrounds = ['fondo1.jpg', 'fondo2.jpg', 'fondo3.jpg', 'fondo4.jpg'];
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