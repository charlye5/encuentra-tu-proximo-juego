const API_KEY = 'b7fb0c8c04464d2db1b82a2c07e068ff';

const questions = [
    {
        id: 'plataforma',
        text: '¿Dónde tenés pensado jugar?',
        options: ['PC', 'Consola', 'Móvil']
    },
    {
        id: 'hardware',
        text: '¿Qué potencia tiene tu equipo?',
        options: ['Gama Baja / Integrada', 'Gama Media', 'Gama Alta']
    },
    {
        id: 'estilo',
        text: '¿Qué ritmo de juego buscás?',
        options: ['Acción', 'Deportes', 'Estrategia', 'Shooter']
    }
];

const apiMap = {
    plataforma: {
        'PC': '4', 
        'Consola': '187,18,1',
        'Móvil': '21,3' 
    },
    estilo: {
        'Acción': 'action',
        'Deportes': 'sports',
        'Estrategia': 'strategy',
        'Shooter': 'shooter'
    }
};

let currentQuestionIndex = 0;
let userAnswers = {};

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

function renderQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.text;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => handleAnswer(currentQuestion.id, option);
        optionsContainer.appendChild(button);
    });
}

function handleAnswer(questionId, answer) {
    userAnswers[questionId] = answer;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        fetchGameFromAPI();
    }
}

async function fetchGameFromAPI() {
    questionText.textContent = 'Buscando en la base de datos...';
    optionsContainer.innerHTML = '<p style="color: #888;">Conectando con RAWG...</p>';

    const platformIds = apiMap.plataforma[userAnswers.plataforma];
    const genreId = apiMap.estilo[userAnswers.estilo];
    
    const url = `https://api.rawg.io/api/games?key=${API_KEY}&platforms=${platformIds}&genres=${genreId}&ordering=-metacritic&page_size=10`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.results.length);
            const game = data.results[randomIndex];
            showResult(game);
        } else {
            showError();
        }
    } catch (error) {
        console.error("Error al buscar el juego:", error);
        showError();
    }
}

function showResult(game) {
    questionText.textContent = '¡Este es tu próximo juego!';
    
    optionsContainer.innerHTML = `
        <div style="background: #1e1e1e; padding: 20px; border-radius: 8px; border: 1px solid #333; max-width: 400px; margin: 0 auto;">
            <img src="${game.background_image}" alt="Portada de ${game.name}" style="width: 100%; border-radius: 4px; margin-bottom: 15px; max-height: 200px; object-fit: cover;">
            <h2 style="color: #4CAF50; margin-top: 0; margin-bottom: 5px;">${game.name}</h2>
            <p style="font-size: 0.9rem; color: #aaa; margin-bottom: 15px;">Lanzamiento: ${game.released || 'Desconocido'} | Nota: ${game.metacritic || 'N/A'}</p>
            <div>
                <span style="background: #333; padding: 5px 10px; border-radius: 4px; font-size: 0.9rem; margin-right: 5px;">${userAnswers.plataforma}</span>
                <span style="background: #333; padding: 5px 10px; border-radius: 4px; font-size: 0.9rem;">${userAnswers.estilo}</span>
            </div>
        </div>
        <button class="option-btn" style="margin-top: 20px;" onclick="location.reload()">Buscar otro</button>
    `;
}

function showError() {
    questionText.textContent = 'Hubo un problema';
    optionsContainer.innerHTML = `
        <p style="color: #ccc;">No pudimos encontrar un juego con esos filtros o falló la conexión.</p>
        <button class="option-btn" style="margin-top: 20px;" onclick="location.reload()">Volver a intentar</button>
    `;
}

renderQuestion();